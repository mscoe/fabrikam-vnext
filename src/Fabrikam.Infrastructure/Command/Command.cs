using Fabrikam.Infrastructure.Interfaces.Command;
using System;

namespace Fabrikam.Infrastructure.Command
{
    [Serializable]
    public class Command : ICommand
    {
        public string Id { get; private set; }
        public int Version { get; private set; }
        public Command(string id, int version)
        {
            Id = id;
            Version = version;
        }
    }
}
