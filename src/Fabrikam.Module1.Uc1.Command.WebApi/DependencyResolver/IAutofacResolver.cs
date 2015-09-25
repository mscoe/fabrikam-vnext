using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Runtime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Module1.Uc1.Command.WebApi.DependencyResolver
{
    public interface IAutofacResolver
    {
        void RegisterLibraryModules(ILibraryManager libraryManager);
        void Populate(IServiceCollection services);
        IServiceProvider GetServiceProvider();
    }
}
