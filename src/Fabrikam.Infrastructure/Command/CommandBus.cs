﻿using Fabrikam.Infrastructure.Command.Interface;
using Fabrikam.Infrastructure.DependencyResolver.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.Command
{
    public class CommandBus:ICommandBus
    {
        ICommandHandlerFactory _container;
        public CommandBus(ICommandHandlerFactory container)
        {
            _container = container;
        }

        public void Send<T>(T command) where T: ICommand
        {
            var handler = _container.GetHandler<T>();
            handler.Execute(command);
        }
    }
}
