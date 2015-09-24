using System;

namespace Fabrikam.Infrastructure.Command.Interface
{
    public interface ICommand
    {
        string Id { get; }
    }
}