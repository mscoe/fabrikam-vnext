using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Runtime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Module1.Uc1.Command.WebApi.DependencyResolver
{
    public static class AutofacResolverExtensions
    {
        public static IServiceCollection AddAutofac(this IServiceCollection services)
        {
            AutofacResolver autofacResolver = new AutofacResolver();
            autofacResolver.Populate(services);

            ServiceDescriptor serviceDescriptor = new ServiceDescriptor(typeof(IAutofacResolver), autofacResolver);
            services.Add(serviceDescriptor);

            return services;
        }

        public static IApplicationBuilder UseAutofac(this IApplicationBuilder applicationBuilder)
        {
            IAutofacResolver autofacResolver = applicationBuilder.GetService<IAutofacResolver>();
            ILibraryManager libraryManager = applicationBuilder.GetService<ILibraryManager>();

            autofacResolver.RegisterLibraryModules(libraryManager);
            applicationBuilder.ApplicationServices = autofacResolver.GetServiceProvider();

            return applicationBuilder;
        }

        internal static T GetService<T>(this IApplicationBuilder applicationBuilder) where T : class
        {
            return applicationBuilder.ApplicationServices.GetService(typeof(T)) as T;
        }
    }
}
