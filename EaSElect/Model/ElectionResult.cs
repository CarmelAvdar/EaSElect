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
    
    public partial class ElectionResult
    {
        public long ElectionResultId { get; set; }
        public long VoterId { get; set; }
        public long ElectionOptionId { get; set; }
        public bool DeleteRow { get; set; }
    
        public virtual Voter Voter { get; set; }
    }
}