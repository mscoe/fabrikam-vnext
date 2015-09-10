using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fabrikam.Infrastructure.Attributes
{
    public class PrimaryKeyAttribute : Attribute
    {
        public string ColumnName { get; set; }

        public PrimaryKeyAttribute()
        {
            this.ColumnName = string.Empty;
        }

        public PrimaryKeyAttribute(string columnName)
        {
            this.ColumnName = columnName;
        }

        public string GetColumnName()
        {
            return ColumnName;
        }
    }
}
