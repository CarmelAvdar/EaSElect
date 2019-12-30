﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
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
    
        public virtual DbSet<Election> Elections { get; set; }
        public virtual DbSet<ElectionOption> ElectionOptions { get; set; }
        public virtual DbSet<ElectionResult> ElectionResults { get; set; }
        public virtual DbSet<Type> Types { get; set; }
        public virtual DbSet<TypeDetail> TypeDetails { get; set; }
        public virtual DbSet<ValueToType> ValueToTypes { get; set; }
        public virtual DbSet<Voter> Voters { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
    
        public virtual ObjectResult<Nullable<int>> IsExistType(string typeName)
        {
            var typeNameParameter = typeName != null ?
                new ObjectParameter("typeName", typeName) :
                new ObjectParameter("typeName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("IsExistType", typeNameParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> IsExistTypeDetails(string typeDetailName)
        {
            var typeDetailNameParameter = typeDetailName != null ?
                new ObjectParameter("typeDetailName", typeDetailName) :
                new ObjectParameter("typeDetailName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("IsExistTypeDetails", typeDetailNameParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> IsExistVoter(Nullable<long> voterId, Nullable<long> electionId)
        {
            var voterIdParameter = voterId.HasValue ?
                new ObjectParameter("voterId", voterId) :
                new ObjectParameter("voterId", typeof(long));
    
            var electionIdParameter = electionId.HasValue ?
                new ObjectParameter("electionId", electionId) :
                new ObjectParameter("electionId", typeof(long));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("IsExistVoter", voterIdParameter, electionIdParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> Login(string userName, string password)
        {
            var userNameParameter = userName != null ?
                new ObjectParameter("userName", userName) :
                new ObjectParameter("userName", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("Login", userNameParameter, passwordParameter);
        }
    }
}
