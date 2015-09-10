using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Command.Repository.Interfaces
{
    public interface IGenericRepository<T>
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> UpdateAsync(T obj);
        Task<bool> DeleteByIdAsync(int id);
        Task<int> AddAsync(T obj);
        Task<T> FindByIdAsync(int id);
        Task<T> FindAsync(T obj);
        //Task<T> FindBy(Expression<Func<T, bool>> predicate);
    }
}
