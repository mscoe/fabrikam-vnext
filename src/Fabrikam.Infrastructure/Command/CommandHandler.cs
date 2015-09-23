using Fabrikam.Infrastructure.Command.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.Command
{
    public class CommandHandler<T> : ICommandHandler where T :ICommand
    {
        private readonly ICommandHandler<T> _handler;
        public CommandHandler(ICommandHandler<T> handler)
        {
            _handler = handler;
        }
        public void Execute(object message)
        {
            if (message is T)
                _handler.Execute((T)message);
        }
    }
}
