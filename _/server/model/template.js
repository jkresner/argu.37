module.exports = ({ Enum },
  { asSchema, required, trim, lowercase, unique }) =>


asSchema({

  key:          { type: String, required, trim, lowercase, unique },
  type:         { type: String, required, enum: [Enum.TEMPLATE.TYPE] },
  parts:        { type: Object, required },
  desc:         { type: String },

})
