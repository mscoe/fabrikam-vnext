using System;

namespace Fabrikam.Command.Entities.Business.Commands
{
    public class DeleteAirportLocation : Command
    {
        public DeleteAirportLocation(Guid id, int version) : base(id, version)
        {
        }
    }
}
