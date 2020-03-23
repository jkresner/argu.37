const authority = require('../../37/authority')

module.exports = {

  /* 
    Internal CMS type (hardly used @190302)
  */
  CONTENT: {
    TYPE:             ['AD','BIO','BREIF','CHAPTER','ISLAND',
                       'LAYOUT','LEGAL','MENU','POST','TOC'] 
  },

  /*
  */
  LAW: {
    AUTHORITY:        Object.keys(authority),
    STRUCT:           ['DIVISION','PART','SCHEDULE','SECTION','SUBSECTION','ANNEX','NOTE'] 
  },

  /*
  */
  SOURCE: {
    /*
      Legal definition of source, i.e. evidence / records to be kept
    */
    IS: [ 
      'account',       // _96     Cash Statement, Ledger, P&L, BS, Transaction
      'bill',          // ___     Invoice, Work order, receipt
      'bylaw',         // 178     (2e)
      'comm',          // ___     Mail/electronic correspondence to OC
      'cert',          // 184     certificate
      'contract',      // ___     Provider agreements
      'exercised',     // 180(i)  function
      'financial',     // ???     
      'insurance',     // 178(2d) policy / nature of
      'minutes',       // ___     GM, SCM
      'notice',        // ___     OC, Owner, From court
      'order',         // ___     Court
      'other',         // ___     ?????
      'vote',          // ___     Proxy, vote record
      'personal',      // ___     Photo, video, audio
      'plan',          // 178(2a) SP, CWP, Specification, Timetable, Reno
      'proposal',      // 178(2f) Renewal/sale, CP investment
      'quote',         // ___     Quote, Tender
      'reference',     // ___     Article, News, Publication
      'report',        // ___     Fire / health
      'roll',          // 178(1)  Name(s)  178(1b) Srv addr,
                       // 180(1)  Owner/Tenant contact  180(1b) Service address
      'title'          // 178(1e) Strata interest / reg search  
                       // 178(1f) Tenancy notice
    ],
    /*
      Internal CMS function to render source data
    */
    RENDER: [
      'doc',
      'gmail',         // imported from JK
      'email',         // manually created from "non-JK" inbox
      'img',           // simple point to url
      'imgB64',        // render in src attr
      'imgur',         // render id of imgur
      'youtube'
      //'imgR',        // point to a route that serves img (with logic)
      //'snippet',
      //'gravatar',
    ]
  }
  
}

/* REROUTE: {
    TYPE: [
      '301',           // 301 forward (string/pattern) from => to
      '302',           // 302 forward (string/pattern) from => to
      '399',           // 200 Rewrite forward regex.replace from(), to(string)
      '410',           // forward (string/pattern) from => to
      '501',           // 501 Not implemented
    ]
  } */

