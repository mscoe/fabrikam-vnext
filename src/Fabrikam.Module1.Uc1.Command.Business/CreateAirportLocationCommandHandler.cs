using Fabrikam.Command.Entities.Business.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Module1.Uc1.Command.Business
{
    public class CreateAirportLocationCommandHandler : ICommandHandler<CreateAirportLocation>
    {
        private IRepository<DiaryItem> _repository;

        public CreateItemCommandHandler(IRepository<DiaryItem> repository)
        {
            _repository = repository;
        }

        public void Execute(CreateItemCommand command)
        {
            if (command == null)
            {
                throw new ArgumentNullException("command");
            }
            if (_repository == null)
            {
                throw new InvalidOperationException("Repository is not initialized.");
            }
            var aggregate = new DiaryItem(command.Id, command.Title, command.Description, command.From, command.To);
            aggregate.Version = -1;
            _repository.Save(aggregate, aggregate.Version);
        }
    }
}
}
