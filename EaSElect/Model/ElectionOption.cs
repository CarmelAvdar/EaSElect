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
    
    public partial class ElectionOption
    {
        public long ElectionOptionId { get; set; }
        public string ElectionOptionName { get; set; }
        public long ElectionId { get; set; }
        public bool DeleteRow { get; set; }
    
        public virtual Election Election { get; set; }
    }
}