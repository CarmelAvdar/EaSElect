using BL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    public class ElectionResultController : ApiController
    {
       ElectionResultBL ElectionResultBL = new ElectionResultBL();
        EmailBL EmailBL = new EmailBL();
        GeneralBL GeneralBL = new GeneralBL();
        [HttpGet]
        [Route("api/electionResult/addElectionResult/{voterCode}/{electionOptionId}")]
        public void AddElectionResult(long voterCode,long electionOptionId)
        {
            ElectionResultBL.AddElectionResult(voterCode,electionOptionId);
        }
        [HttpGet]
        [Route("api/electionResult/getResult/{electionId}")]
        public List<ResultOfOption> GetResult(long electionId)
        {
            return GeneralBL.GetResult(electionId);
        }
        [HttpPost]
        [Route("api/electionResult/getResultByType")]
        public List<ResultOfOptionByTypeDetails> GetResultByType(ResultByType resultByType)
        {
           return GeneralBL.GetResultByType(resultByType.TypeId, resultByType.ResultOfOption);
        }
        public void Options()
        { }
    }
}
