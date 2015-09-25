using System;

namespace Fabrikam.Command.Entities.Business.Commands
{
    public class ChangeAirportLocationCommand : Fabrikam.Infrastructure.Command.Command
    {
        public int AirportLocationId { get; set; }

        public string AirportName { get; set; }

        public string AirportCode { get; set; }

        public ChangeAirportLocationCommand(string aggregateId, int airportLocationId, string airportName, string airportCode, int version) : base(aggregateId, version)
        {
            AirportLocationId = airportLocationId;
            AirportName = airportName;
            AirportCode = airportCode;
        }
    }
}
