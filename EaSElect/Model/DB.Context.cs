//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ElectionsDBEntities : DbContext
    {
        public ElectionsDBEntities()
            : base("name=ElectionsDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<Election> Elections { get; set; }
        public virtual DbSet<ElectionOption> ElectionOptions { get; set; }
        public virtual DbSet<ElectionResult> ElectionResults { get; set; }
        public virtual DbSet<Email> Emails { get; set; }
        public virtual DbSet<Type> Types { get; set; }
        public virtual DbSet<TypeDetail> TypeDetails { get; set; }
        public virtual DbSet<ValueToType> ValueToTypes { get; set; }
        public virtual DbSet<Voter> Voters { get; set; }
    }
}
