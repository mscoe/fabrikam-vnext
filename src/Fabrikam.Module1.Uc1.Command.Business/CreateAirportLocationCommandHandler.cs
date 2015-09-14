using Fabrikam.Command.Entities.Business.Commands;
using Fabrikam.Command.Entities.Data;
using Fabrikam.Module1.Uc1.Command.Business.Interfaces;
using Fabrikam.Module1.Uc1.Command.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Module1.Uc1.Command.Business
{
    public class CreateAirportLocationCommandHandler : ICommandHandler<CreateAirportLocation>
    {
        private IAirportLocationRepository _repository;

        public CreateAirportLocationCommandHandler(IAirportLocationRepository repository)
        {
            _repository = repository;
        }

        public async void Execute(CreateAirportLocation command)
        {
            if (command == null)
            {
                throw new ArgumentNullException("command");
            }
            if (_repository == null)
            {
                throw new InvalidOperationException("Repository is not initialized.");
            }
            var aggregate = new AirportLocation() { AirportCode= command.AirportCode, AirportLocationId = command.AirportLocationId, AirportName = command.AirportName};
            await _repository.AddAsync(aggregate);
        }
    }
}
}
