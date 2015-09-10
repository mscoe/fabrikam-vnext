using System;

namespace Fabrikam.Command.Entities.Business.Commands
{
    public class ChangeAirportLocation : Command
    {
        public int AirportLocationId { get; set; }

        public string AirportName { get; set; }

        public string AirportCode { get; set; }

        public ChangeAirportLocation(Guid aggregateId, int airportLocationId, string airportName, string airportCode, int version) : base(aggregateId, version)
        {
            AirportLocationId = airportLocationId;
            AirportName = airportName;
            AirportCode = airportCode;
        }
    }
}
