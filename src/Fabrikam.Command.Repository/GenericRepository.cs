using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Fabrikam.Command.Repository.Interfaces;
using Fabrikam.Command.Repository.DapperHelpers;

namespace Fabrikam.Command.Repository
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class GenericRepository<T> : DbContext, IGenericRepository<T>
    {
        private readonly string _tableName;
        private readonly IDbConnection dbConnection;
        private object _parameters;

        protected GenericRepository(string connectionString, string tableName) : base(connectionString)
        {
            base.ConnectionString = connectionString;
            _tableName = tableName;
            dbConnection = DbConnectionAsync;
        }

        internal dynamic Mapping(T obj)
        {
            return obj;
        }
        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            var frmsql = GetSqlQuery.Select(_tableName);
            var list = await dbConnection.QueryAsync<T>(frmsql, transaction: DbTransaction);
            return list;

        }

        public virtual async Task<T> UpdateAsync(T obj)
        {
            _parameters = (object)Mapping(obj);
            var frmsql = GetSqlQuery.Update(_parameters, _tableName);
            var result = await dbConnection.QueryAsync<T>(frmsql, _parameters, transaction: DbTransaction);
            return result.First();
        }

        public virtual async Task<bool> DeleteByIdAsync(int id)
        {
            var frmsql = GetSqlQuery.DeleteById(_tableName);
            var list = await dbConnection.QueryAsync<T>(frmsql, new { Id = id }, transaction: DbTransaction);
            return Equals(list.FirstOrDefault(), 0);
        }

        public virtual async Task<int> AddAsync(T obj)
        {
            _parameters = (object)Mapping(obj);
            var frmsql = GetSqlQuery.Insert(_parameters, _tableName);
            var result = await dbConnection.QueryAsync<int>(frmsql, _parameters, transaction: DbTransaction);
            return result.FirstOrDefault();
        }

        public Task<T> FindByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<T> FindAsync(T obj)
        {
            _parameters = (object)Mapping(obj);
            var frmsql = GetSqlQuery.Find(_parameters, _tableName);
            var result = await dbConnection.QueryAsync<T>(frmsql, _parameters, transaction: DbTransaction);
            return result.FirstOrDefault();
        }



    }
}
