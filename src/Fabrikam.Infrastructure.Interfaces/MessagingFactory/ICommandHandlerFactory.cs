using Fabrikam.Infrastructure.Interfaces.Command;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.Interfaces.Messaging
{
    public interface ICommandHandlerFactory
    {
        ICommandHandler<T> GetHandler<T>() where T : ICommand;
    }
}
