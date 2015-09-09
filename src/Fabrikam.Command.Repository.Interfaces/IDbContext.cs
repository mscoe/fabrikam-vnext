using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Command.Repository.Interfaces
{
    public interface IDbContext
    {
        void BeginTransaction();
        void CommitChanges();
    }
}
