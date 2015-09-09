using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Command.Repository.Interfaces
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
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
