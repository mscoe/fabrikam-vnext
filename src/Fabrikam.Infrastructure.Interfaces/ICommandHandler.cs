namespace Fabrikam.Infrastructure.Command.Interface
{
    public interface ICommandHandler<T> where T : ICommand
    {
        void Execute(T command);
    }
}
