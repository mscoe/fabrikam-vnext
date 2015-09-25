﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.DependencyResolver.Interfaces
{
    public interface IContainer
    {
        T Resolve<T>();
    }
}