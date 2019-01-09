module.exports = ({ Id, Enum, Log, RefTag },
  { asSchema, required, sparse, index, unqiue }) => {


let schema = asSchema({
  is:     { type: String, required, enum: Enum.LAW.STRUCT, default: 'SECTION' }, // 'DIVISION' etc.
  of:     { type: String, required, enum: Enum.LAW.AUTHORITY }, // 'SM15'
  in:     { type: String, required }, // P3.D2 || Sch14
  at:     { type: String, required }, // 103(3)
  title:  { type: String, required }, // Keeping and inspection of records
  ttl:    { type: String, required, unqiue }, // SM15:103(3)
  name:   { type: String, required, unqiue }, // Strata records
  body:   { type: String, required },
  see:    { type: [String], required:false }, // [Name] of other  laws
  tags:   [RefTag],
  log:    { type: Log }
})

schema.index({ttl:1}, { name: 'Idx_law_ttl', unique: true })
schema.index({name:1}, { name: 'Idx_law_name', unique: true })
schema.index({of:1,in:1}, { name: 'Idx_from' })

  return schema

}
