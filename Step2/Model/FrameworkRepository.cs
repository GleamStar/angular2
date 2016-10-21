using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCore.Model
{
    public class FrameworkRepository : IFrameworkRepository
    {
        private FrameworksContext _context;
        public FrameworkRepository(FrameworksContext context)
        {
            _context = context;
        }
        public async Task AddItem(Item item)
        {
            if (item != null)
            {
                _context.Frameworks.Add(item);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Item>> GetAll()
        {
            return  _context.Frameworks.ToList();
        }
    }
}
