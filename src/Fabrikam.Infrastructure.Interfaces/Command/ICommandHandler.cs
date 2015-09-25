namespace Fabrikam.Infrastructure.Interfaces.Command
{
    public interface ICommandHandler<T> where T : ICommand
    {
        void Execute(T command);
    }
}
