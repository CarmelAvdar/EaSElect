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
    using System.Collections.Generic;
    
    public partial class ValueToType
    {
        public long ValueToTypeId { get; set; }
        public long VoterCode { get; set; }
        public long TypeDetailsId { get; set; }
        public bool DeleteRow { get; set; }
    
        public virtual TypeDetail TypeDetail { get; set; }
        public virtual Voter Voter { get; set; }
    }
}
