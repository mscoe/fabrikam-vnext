using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.Interfaces.Command
{
    public interface ICommandBus
    {
        void Send<T>(T command) where T : ICommand;
    }
}
