using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCore.Model
{
    public interface IFrameworkRepository 
    {
          Task<IEnumerable<Item>> GetAll();
          Task AddItem(Item item);
    }
}
