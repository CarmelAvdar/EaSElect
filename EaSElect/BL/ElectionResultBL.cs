﻿using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ElectionResultBL
    {
        ElectionResultDal ElectionResultDal = new ElectionResultDal();
        public List<long> GetElectionOptionIdByVoterCode(long voterCode)
        {
           return ElectionResultDal.GetElectionOptionIdByVoterCode(voterCode);
        }

    }
}
