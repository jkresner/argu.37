const search = { tokens: `text`, name: `text`, short: `text`, desc: `text` },
      weights = { tokens: 2000, name: 1000, short: 400, desc: 10 }



module.exports = ({ Id, Htmlhead },
  { asSchema, required, trim, lowercase, unique, sparse }) => {


let schema = asSchema({

  // E.g.   "Owners Corporation"
  name:        { type: String, required, trim },

  // E.g.   "OC"
  short:       { type: String, required, trim },

  // E.g.   "owners-corporation"
  slug:        { type: String, required, trim, lowercase, unique, sparse },

  // E.g.   "Blah blah blah"
  desc:        { type: String },

  // E.g.   "law,source,content" - contexts can use tag
  scope:       { type: String, required },

  // E.g    "own,body,corporate" comma separated strings to assist search
  tokens:      { type: String },

})



schema.index(search, { name: 'Idx_search', weights })



  return schema
}
