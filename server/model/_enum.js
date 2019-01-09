const authority = require('../../37/authority')

module.exports = {

  CONTENT: {
    TYPE: ['AD','BIO','BREIF','CHAPTER','ISLAND',
           'LAYOUT','LEGAL','MENU','POST','TOC'] },

  LAW: {
    AUTHORITY: Object.keys(authority),
    STRUCT: ['DIVISION','PART','SCHEDULE','SECTION','SUBSECTION','ANNEX', 'NOTE'] },

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
      'snippet',
      'doc',
      'gmail',
      'gravatar',
      'img',           // simple point to url
      'imgB64',        // render in src attr
      'imgR',          // point to a route that serves img (with logic)
      'imgW',          // watermarked
      'imgur',         // render id of imgur
      'youtube'
    ]
  },

/*  TEMPLATE: {
    TYPE: ['rXig','rXCust',
      'mail','html','xml','json','txt','view','link']
    // OUT: ['mail','html','xml','json','txt','view','link']
  },

  REROUTE: {
    TYPE: [
      '301',           // 301 forward (string/pattern) from => to
      '302',           // 302 forward (string/pattern) from => to
      '399',           // 200 Rewrite forward regex.replace from(), to(string)
      '410',           // forward (string/pattern) from => to
      '501',           // 501 Not implemented
    ]
  },
*/
}
