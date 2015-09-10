using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Command.Entities.Service
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class AirportLocation
    {
        public int AirportLocationIdentifier { get; set; }

        public string AirportName { get; set; }

        public string AirportCode { get; set; }
    }
}
