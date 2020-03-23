module.exports = ({ Id, Enum, Log, Act, RefTag, RefLaw, Notate },
  { asSchema, required, sparse, unique, index, lowercase }) => {


let schema = asSchema({

  is:              { type:  String , required, enum: Enum.SOURCE.IS },
  render:          { type:  String , required, enum: Enum.SOURCE.RENDER },
  name:            { type:  String , required, unique },
  title:           { type:  String , required },
  author:          { type:  String , required },
  published:       { type:  Number , required },
  uri:             { type:  String , required, unique },
  weight:          { type:  Number , required, default: 5 }, // between 0 - 100
  data:            { type:  Object , required }, 
    // aliases - Previous names of the file
    // mimeType 
    // size

  threadId:        { type:  String , required,  },
  tags:            { type: [RefTag], required: false },
  laws:            { type: [RefLaw], required: false },

  notation:        { required: false, type: [Notate] },
  // sets:             [RefSet],  // ?? duplication allow easy traversing


  md:              {
    // raw:        { type: String },
    // body:       { type: String },
    // edit:       { type: String },    
    // clean:      { type: String },
    // {filename}: { type: String },
    // "1":        { type: String }, "2": { type: String }, "3": { type: String },
  },

  ignore:          { type: String, sparse }, // reason to ignore
  
  // approved:     { type: Act },
  // deleted:      { type: Act },
  // ownerId:      { type: Id, sparse, ref: 'User' },
  // desc:  { type: String },

  log:             { type: Log },
})


schema.index({published:1}, { name: 'pub_1' })
schema.index({ignore:1}, {  name: 'idx_src_ignore_spr', sparse: true })
schema.index({name:1}, { name: 'idx_src_name_unq', unique: true })
schema.index({uri:1}, { name: 'idx_src_uri_unq', unique: true })

return schema

}
