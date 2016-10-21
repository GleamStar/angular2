using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace AngularCore.Model
{
    public class FrameworksContext : DbContext
    {
        public DbSet<Item> Frameworks { get; set; }
        public FrameworksContext(DbContextOptions<FrameworksContext> options)
            : base(options)
        { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Item>().Property(typeof(int), "Id").UseSqlServerIdentityColumn();


        }
    }
}
