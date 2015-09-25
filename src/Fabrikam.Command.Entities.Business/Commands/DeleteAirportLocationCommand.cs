using System;
using Fabrikam.Infrastructure.Command;

namespace Fabrikam.Command.Entities.Business.Commands
{
    public class DeleteAirportLocationCommand : Fabrikam.Infrastructure.Command.Command
    {
        public DeleteAirportLocationCommand(string id, int version) : base(id, version)
        {
        }
    }
}
