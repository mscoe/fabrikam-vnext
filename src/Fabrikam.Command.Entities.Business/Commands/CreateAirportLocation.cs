using System;

namespace Fabrikam.Command.Entities.Business.Commands
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class CreateAirportLocation : Command
    {

        public int AirportLocationId { get; set; }

        public string AirportName { get; set; }

        public string AirportCode { get; set; }

        public CreateAirportLocation(Guid aggregateId, int airportLocationId, string airportName, string airportCode, int version) : base(aggregateId, version)
        {
            AirportLocationId = airportLocationId;
            AirportName = airportName;
            AirportCode = airportCode;
        }
    }
}
