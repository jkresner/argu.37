module.exports = ({ Id, Enum, Log, Act, RefTag, RefLaw, Notate },
  { asSchema, required, sparse, unique, index, lowercase }) => {


let SourceSchema = asSchema({

  is:              { type: String, required, enum: Enum.SOURCE.IS },
  render:          { type: String, required, enum: Enum.SOURCE.RENDER },
  name:            { type: String, required, unique },
  title:           { type: String, required },
  author:          { type: String, required },
  published:       { type: Number, required },
  uri:             { type: String, required, unique },

  md:              {
    // raw:        { type: String },
    // body:       { type: String },
    // edit:       { type: String },    
    // clean:      { type: String },
    // {filename}: { type: String },
    // "1":        { type: String }, "2": { type: String }, "3": { type: String },
  },

  tags:            { required: false, type: [RefTag] },
  laws:            { required: false, type: [RefLaw] },
  // sets:             [RefSet],  // ?? duplication allow easy traversing
  notation:        { required: false, type: [Notate] },

  threadId:        { required, type: String },
  data:            { required, type: {
    // aliases:      { type: [String] }, // Previous names of the file
    // mimeType :
    // size :
    // threadId:
  } },

  // description:  { type: String },
  log:             { type: Log },

  ignore:          { type: Number, index, sparse }
  // deleted:      { type: Act },
  // approved:     { type: Act },
  // ownerId:      { type: Id, sparse, ref: 'User' },

})

SourceSchema.index({published:1}, { name: 'pub_1' })


return SourceSchema

}

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
