using System;

namespace Fabrikam.Infrastructure.Interfaces.Command
{
    public interface ICommand
    {
        string Id { get; }
    }
}