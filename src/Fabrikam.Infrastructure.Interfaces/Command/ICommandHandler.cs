namespace Fabrikam.Infrastructure.Command.Interface
{
    public interface ICommandHandler<T> where T : ICommand
    {
        void Execute(T command);
    }

    public interface ICommandHandler
    {
        void Execute(object message);
    }
}
