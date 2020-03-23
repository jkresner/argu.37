module.exports = ({ Id, Enum, Htmlhead, Log, RefTag, RefLaw, RefSet, RefContent },
  { asSchema, required, trim, lowercase, index, unique, sparse }) => asSchema({

  uri:              { required, type: String, unique, lowercase, trim },
  key:              { required, type: String, unique, lowercase, trim },
  title:            { required, type: String, trim },

  type:             { required, type: String, enum: Enum.CONTENT.TYPE },
  // tmplId:           { required, type: Id, ref: 'Template' },
  tmpl:             { required, type: String }, //, ref: 'Template' },
  byId:             { type: Id, ref: 'User', index }, //required

  parts:            { required, type: {
    html:           { required:false, type: Htmlhead },
    media:          { required:false, type: {} },
      // cover:     { url: { type: String }, type: Enum.CONTENT. },
      // thumb:     { type: String },
    body:           { required:false, type: {
      draft:        { type: String, required: false },
      live:         { type: String, required: false },
      edit:         { type: String, required: false } }} }},

  tags:             [RefTag],
  laws:             [RefLaw],
  contents:         [RefContent],

  // set:              RefSet,
                    // Sets are incorporated via child content
                    // If more than one set needed, use two RefContent

  // stats:            { required:false, type: {
    // words:          { type: Number, default: 0 } }},
    // views:         { type: Number },
  history:          { required:true, type: {
    create:         { type: Date, required, 'default': Date },
    submit:         { type: Date },
    publish:        { type: Date }, // first time
    updated:        { type: Date } }},

  // log:              Log,

})


//--TODO: Make author bio a content type
// const Author = {
//   _id:              { type: Id, ref: 'User', index, sparse },
//   // name:             { type: String },
//   // avatar:           { type: String },
//   // bio:              { type: String },
//   // email:            { type: String },
//   // link:             { type: String },
// }
