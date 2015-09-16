namespace Fabrikam.Module1.Uc1.Command.Business.Interfaces
{
    public interface ICommandHandler<T> where T : Fabrikam.Command.Entities.Business.Commands.Command
    {
        void Execute(T command);
    }
}
