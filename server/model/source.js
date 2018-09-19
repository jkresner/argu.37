module.exports = ({ Id, Enum, Log, Act },
  { asSchema, required, sparse, unique, index }) => {


let SourceSchema = asSchema({

  is:              { type: String, required, enum: Enum.SOURCE.IS },
  render:          { type: String, required, enum: Enum.SOURCE.RENDER },
  name:            { type: String, required, unique },
  title:           { type: String, required },
  author:          { type: String, required },
  published:       { type: Number, required },
  uri:             { type: String, required, unique },

  md:              {
    // body:       { type: String },
    // clean:      { type: String },
    // {filename}: { type: String },
  },

  data:            { type: {}, required },
  // description:  { type: String },
  log:             { type: Log },

  ignore:          { type: Number, index, sparse } //Act },
  // approved:     { type: Act },
  // deleted:      { type: Act },
  // ownerId:      { type: Id, sparse, ref: 'User' },

})

SourceSchema.index({published:1}, { name: 'pub_1' })


return SourceSchema

}



// let email = {
  // id:                   { type: String, required },
  // threadId:             { type: String, required },
  // historyId:            { type: String, required },
  // snippet:              { type: String, required },
  // internalDate:         { type: String, required },
  // payload:              { type: {}, required },
// }

// let img = {
  // address_components:   { type: [], required },
  // formatted_address:    { type: String, required },
  // geometry: {
  //   location: {
  //     lat:              { type: Number, required },
  //     lng:              { type: Number, required }
  //   },
  //   viewport:           { type: {} },
  // },
  // id:                   { type: String, required },
  // name:                 { type: String, required },
  // place_id:             { type: String, required, unique },
  // types:                { type: [String], required },
  // utc_offset:           { type: Number, required },
  // vicinity:             { type: String }
// }

// let doc = {
// }
