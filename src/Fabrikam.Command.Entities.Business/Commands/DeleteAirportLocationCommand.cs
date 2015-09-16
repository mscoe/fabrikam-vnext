using System;

namespace Fabrikam.Command.Entities.Business.Commands
{
    public class DeleteAirportLocationCommand : Command
    {
        public DeleteAirportLocationCommand(Guid id, int version) : base(id, version)
        {
        }
    }
}
