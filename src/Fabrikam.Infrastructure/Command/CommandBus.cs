using Fabrikam.Infrastructure.Command.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.Command
{
    public class CommandBus:ICommandBus
    {
        private readonly IEnumerable<ICommandHandler> _handlers;

        public CommandBus(params ICommandHandler[] handlers)
        {
            _handlers = handlers;
        }

        public void Send<T>(T message)
        {
            foreach (var c in this._handlers)
                c.Execute(message);
        }
    }
}
