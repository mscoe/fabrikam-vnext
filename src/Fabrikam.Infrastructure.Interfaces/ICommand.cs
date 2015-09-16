using System;

namespace Fabrikam.Infrastructure.Command.Interface
{
    public interface ICommand
    {
        Guid Id { get; }
    }
}