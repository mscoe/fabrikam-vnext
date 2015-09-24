using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.Command.Interface
{
    public interface ICommandBus
    {
        void Send<T>(T message);
    }
}
