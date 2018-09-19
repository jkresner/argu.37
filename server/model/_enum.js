module.exports = {

  SOURCE: {

    IS: [ //-- In: SM15 P10 Records || PA02 P8 Records
      'agency',        // ???     SA agreement  178(1d) POA, legal rep
      'bill',          // ???     Invoice, Work order, receipt
      'bylaw',         // 178     (2e)
      'comm',          // ???     Mail/electronic correspondence to OC
      'cert',          // 184     certificate
      'contract',      // ???     Provider agreements
      'exercised',     // 180(i)  function
      'financial',     // ???     Statements, Ledgers, PL, BL
      'insurance',     // 178(2d) policy / nature of
      'minutes',       // ???     GM / SC
      'notice',        // ???     To OC
      'order',         // ???     Court
      'other',         // ???     ?????
      'vote',          // ???     Proxy, voting records
      'personal',      //         photo / media recoding
      'plan',          // 178(2a) SPlan, 10yCWP / diagram / specification / timetable
      'proposal',      // 178(2f) renewal/sale  Common Prop investment
      'quote',         // ???     Quote and Tenders
      'reference',     // ???     Support article / news / publication / link
      'report',        // ???     Fire / health
      'roll',          // 178(1a) Name(s)  178(1b) Srv addr,
                       // 180(1a) Owner/Tenant contact  180(1b) Service address
      'title'          // 178(1e) Strata int /reg search  178(1f) Tenancy notice
    ],
    RENDER: [
      'doc',
      'gmail',
      'img',
      'youtube'
    ]
  },

  LAW: {
    AUTHORITY: [  //-- Make these a collection at some point
      'PA02','PA14',
      'SM96','SM15','SM16','SD15',
      'CA00','CDV07','CL04',
      'SBL',
      'CONTRACT'
    ],
    STRUCT:    [
      'DIVISION', 'PART', 'SCHEDULE', 'SECTION', 'SUBSEC',
      'ANNEX'
    ]
  },

/*ROUTE: {
    TYPE: [
      '301',                 // 301 forward (string/pattern) from => to
      '302',                 // 302 forward (string/pattern) from => to
      '410',                 // forward (string/pattern) from => to
      '501',                 // 501 Not implemented
      'track',               // 302 forward from => to
      'rewrite'              // 301 forward string.replace from(regex), to(string)
    ]}*/

}
