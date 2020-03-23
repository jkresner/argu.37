const md = require('./md/_md')

module.exports = {
  // innocent: { "parts.body":{"live": md['1.0_ptt-prep']}, },
  // apprehension: { "parts.body":{"live": md['1.x_avo']}, },  
  lot36: { 'parts.body.live': md['lot36'] }, 
  lot36ensuite: { 'parts': {
    'chapter': { idx: '1.2.1' },
    'body': { live: md['lot36_ensuite'] } 
  }},
  // resolve: { 
    // idx:'1.5', "parts.body":{"live": md['resolve'] } },
  keen: { 
    idx:'1.5.1',
    key: 'keen', 
    uri:"/strata/gov-fair-trade",
    tags:"gov",
    title:"Help me NSW",
    type:"CHAPTER",
    tmpl:"chapter.hbs",
    parts:{
      body: {"live": md['keen']},
      chapter: { idx:"1.5.1" },
      html:{"title":"Fair?",
              "canonical":"https://www.37paulst.com/undefined",
              "description":"",
              "ogTitle":"Strata Agent Anarchy",
              "ogUrl":"https://www.37paulst.com/undefined",
              "ogDescription":"",
              "ogType":"article:section"}
    }   
  },
  // oneill: {
  //   "idx":"1.4",
  //   "key": "oneill",
  //   "uri":"/strata/oneill-strata-management",
  //   "tags":"sa",
  //   "title":"Strata Agent Anarchy",
  //   "type":"CHAPTER",
  //   "tmpl":"chapter.hbs",
  //   "parts":{
  //     "html":{"title":"Strata Agent Anarchy",
  //             "canonical":"https://www.37paulst.com/undefined",
  //             "description":"",
  //             "ogTitle":"Strata Agent Anarchy",
  //             "ogUrl":"https://www.37paulst.com/undefined",
  //             "ogDescription":"",
  //             "ogType":"article:section"},
  //     "body":{"live": md['oneill']},
  //     "chapter":{"idx":"1.4"}
  //   }
  // }
}
