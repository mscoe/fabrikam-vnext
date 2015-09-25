using Autofac;
using Microsoft.Framework.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.Framework.Runtime;

namespace Fabrikam.Module1.Uc1.Command.WebApi.DependencyResolver
{
    public class AutofacResolver : IAutofacResolver
    {
        private readonly ContainerBuilder builder;

        public AutofacResolver()
        {
            builder = new ContainerBuilder();
        }

        public void RegisterLibraryModules(ILibraryManager libraryManager)
        {
            IEnumerable<ILibraryInformation> libraryInformations = libraryManager.GetLibraries();

            IEnumerable<AssemblyName> assemblyNames = libraryInformations.SelectMany(e => e.LoadableAssemblies).Distinct();
            // assemblyNames = assemblyNames.Where(e => e.Name.StartsWith("")); // Filter Assemblies

            List<Assembly> assemblies = new List<Assembly>();

            foreach (AssemblyName assemblyName in assemblyNames)
            {
                Assembly assembly = Assembly.Load(assemblyName);
                assemblies.Add(assembly);
            }

            this.builder.RegisterAssemblyModules(assemblies.ToArray());
        }

        public void Populate(IServiceCollection services)
        {
            builder.Populate(services);
        }

        public IServiceProvider GetServiceProvider()
        {
            IContainer container = this.builder.Build();
            return container.Resolve<IServiceProvider>();
        }
    }
}
