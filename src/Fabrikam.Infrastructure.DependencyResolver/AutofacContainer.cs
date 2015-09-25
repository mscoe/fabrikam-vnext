using Autofac;
using Fabrikam.Infrastructure.DependencyResolver.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fabrikam.Infrastructure.Command.Interface;

namespace Fabrikam.Infrastructure.DependencyResolver.Autofac
{
    public class AutofacCommandHandlerFactory: ICommandHandlerFactory
    {
        private ILifetimeScope _container;
        public AutofacCommandHandlerFactory(ILifetimeScope container)
        {
            if (container == null)
                throw new ArgumentNullException("Autofac Container not present.");
            _container = container;
        }

        public ICommandHandler<T> GetHandler<T>() where T : ICommand
        {
            return _container.Resolve<ICommandHandler<T>>();
        }
    }
}
