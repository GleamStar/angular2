using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCore.Model
{
    public class FrameworkContextSeedData
    {
        private FrameworksContext _context;

        public FrameworkContextSeedData(FrameworksContext context)
        {
            _context = context;
        }

        public async Task EnsureSeenDataAsync()
        {
            if (!_context.Frameworks.Any())
            {
                var frameworks = new List<Item>()
                {
            new Item(){ Framework = "Angular", Year = 2009, Used = true },
            new Item(){ Framework = "Angular2", Year = 2016, Used = true },
            new Item(){ Framework = "Aurelia", Year = 2016, Used = true },
            new Item(){ Framework = "React", Year = 2015, Used = false }
                };
                _context.Frameworks.AddRange(frameworks);
                await _context.SaveChangesAsync();
            }
        }
    }
}
