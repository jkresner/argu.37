module.exports = (Id, Enum, {required,trim,lowercase,index,sparse}) => assign(


  { RefTag: {
    _id:                 { required, type: Id, ref: 'Tag' },
    short:               { required, type: String }
  }}, // sort:                    { type: Number },


  { RefLaw: {
    _id:                 { required, type: Id, ref: 'Law' },
    ttl:                 { required, type: String }
  }},


  { RefSet: {
    _id:                 { required, type: Id, ref: 'Set' },
    ttl:                 { required, type: String }
  }},


  { RefContent: {
    _id:                 { required, type: Id, ref: 'Content' },
    ttl:                 { required, type: String }
  }},


  { Notate: {
    _id:                 { required, type: Id },
    byId:                { required, type: Id, ref: 'User' },
    id:                  { required, type: String },
    note:                { required, type: String },
    marks:               { required, type: [] },
    laws:                { required: false, type: [{
      _id:               { required, type: Id, ref: 'Law' },
      cite:              { required, type: String },
      marks:             { required, type: [] } }] },
    color:               { required, type: Number, default: 1 }
                         // 0 : collapse => irrelevant/not important)
                         // 1 : yellow => meaty ("interesting")
                         // 2 : green => action likely / light bulb
                         // 3 : purple => open query / not sure
                         // 4 : pink => disagree/ debatable / bs
  }}


)
