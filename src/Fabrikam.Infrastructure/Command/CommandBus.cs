using Fabrikam.Infrastructure.Command.Interface;
using Fabrikam.Infrastructure.DependencyResolver.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.Command
{
    public class CommandBus:ICommandBus
    {
        IContainer _container;
        public CommandBus(IContainer container)
        {
            _container = container;
        }

        public void Send<T>(T command) where T: ICommand
        {
            var handler = _container.Resolve<ICommandHandler<T>>();
            handler.Execute(command);
        }
    }
}
