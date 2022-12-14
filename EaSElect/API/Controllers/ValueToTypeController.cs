using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using Models;

namespace API.Controllers
{
    public class ValueToTypeController : ApiController
    {
        ValueToTypeBL ValueToTypeBL = new ValueToTypeBL();
        [HttpGet]
        [Route("api/valueToType/getVoterCodeByVoterIdInCurrentElection/{voterCode}")]
        //מחזיר את פרטי סיווג הקיימים של הבוחר הנוכחי
        public List<TypeDetail> GetValueToTypeOfVoter(long voterCode)
        {
            return ValueToTypeBL.GetValueToTypeOfVoter(voterCode);
        }
        [HttpGet]
        [Route("api/valueToType/deleteValueToType/{voterCode}/{typeDetailsId}/{checked1}")]

        public void DeleteValueToType(long voterCode,long typeDetailsId,bool checked1)
        {
            ValueToTypeBL.DeleteValueToType(voterCode, typeDetailsId,checked1);
        }
    }
}
