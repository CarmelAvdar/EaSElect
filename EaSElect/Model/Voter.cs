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
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    
    public partial class Voter
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Voter()
        {
            this.ElectionResults = new HashSet<ElectionResult>();
            this.ValueToTypes = new HashSet<ValueToType>();
        }
    
        public long VoterCode { get; set; }
        public string VoterId { get; set; }
        public long ElectionId { get; set; }
        public bool DeleteRow { get; set; }
    [JsonIgnore]

        public virtual Election Election { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    [JsonIgnore]
        public virtual ICollection<ElectionResult> ElectionResults { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    [JsonIgnore]
        public virtual ICollection<ValueToType> ValueToTypes { get; set; }
    }
}
