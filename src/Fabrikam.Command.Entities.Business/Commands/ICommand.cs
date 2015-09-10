using System;

namespace Fabrikam.Command.Entities.Business.Commands
{
    public interface ICommand
    {
        Guid Id { get; }
    }
}