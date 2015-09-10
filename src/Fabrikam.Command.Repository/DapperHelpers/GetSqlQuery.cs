using Fabrikam.Infrastructure.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Fabrikam.Command.Repository.DapperHelpers
{
    public class GetSqlQuery
    {

        public static string Insert(object parameters, string tableName)
        {
            var colums = new List<string>();
            foreach (var colum in parameters.GetType().GetProperties())
            {
                var add = true;

                var keys = GetPrimaryKey(parameters);

                if (keys.Contains(colum.Name))
                {
                    add = false;
                }
                foreach (var attr in colum.CustomAttributes)
                {
                    if (attr.AttributeType == typeof(IgnoredAttribute))
                    {
                        add = false;
                    }
                }
                if (add) colums.Add(colum.Name);
            }



            var sql = "INSERT INTO [" + tableName + "] ({0}) VALUES(@{1});SELECT CAST(SCOPE_IDENTITY() AS INT);";
            var frmsql = String.Format(sql, String.Join(",", colums), String.Join(",@", colums));
            return frmsql;
        }

        public static string Update(object parameters, string tableName)
        {
            var colums = new List<string>();
            var keys = GetPrimaryKey(parameters);
            foreach (var colum in parameters.GetType().GetProperties())
            {
                var add = true;

                if (keys.Contains(colum.Name))
                {
                    add = false;
                }
                foreach (var attr in colum.CustomAttributes)
                {
                    if (attr.AttributeType == typeof(IgnoredAttribute))
                    {
                        add = false;
                    }
                }
                if (add) colums.Add(colum.Name);
            }
            var sb = new StringBuilder();
            sb.Append("UPDATE [" + tableName + "]  SET ");
            for (var i = 0; i < colums.Count(); i++)
            {
                sb.AppendFormat("[{0}]=@{1}", colums[i], colums[i]);
                //while not last element
                if (i < colums.Count() - 1)
                {
                    sb.Append(", ");
                }
            }

            sb.Append(" WHERE [" + keys.First() + "]= @" + keys.First());
            if (keys.Length > 1)
            {
                sb.Append(" AND " + string.Join(" AND ", keys.Skip(1).Select(x => string.Format("{0}=@{1}", x, x).ToArray())));
            }

            sb.Append("SELECT * FROM [" + tableName + "]");
            sb.Append(" WHERE [" + keys.First() + "]= @" + keys.First());
            if (keys.Length > 1)
            {
                sb.Append(" AND " + string.Join(" AND ", keys.Skip(1).Select(x => string.Format("{0}=@{1}", x, x).ToArray())));
            }

            return sb.ToString();
        }

        public static string Select(string tableName)
        {
            var sql = "SELECT * FROM [" + tableName + "]";
            return sql;
        }

        public static string DeleteById(string tableName)
        {
            var sql = "DELETE FROM [" + tableName + "] WHERE " + tableName + "Id=@Id";
            return sql;
        }

        public static string Find(object parameters, string tableName)
        {

            throw new Exception();
        }


        public static string[] GetPrimaryKey(object parameter)
        {
            Type type = parameter.GetType();
            var attribs = (PrimaryKeyAttribute[])type.GetCustomAttributes(typeof(PrimaryKeyAttribute), false);
            var retVal = attribs.Select(x => x.ColumnName);
            return retVal.ToArray();
        }

    }
}
