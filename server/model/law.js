const TAG = ['sa','sc','order','offence','duty','def']


module.exports = ({ Id, Enum, Log },
  { asSchema, required, sparse, index, unqiue }) => asSchema({

  is:     { type: String, required, enum: Enum.LAW.STRUCT, default: 'SECTION' }, // 'DIVISION' etc.
  of:     { type: String, required, enum: Enum.LAW.AUTHORITY }, // 'SM15'
  in:     { type: String, required }, // P3.D2 || Sch14
  at:     { type: String, required }, // 103(3)
  ttl:    { type: String, required, unqiue }, // SM15:103(3)
  title:  { type: String, required }, // Keeping and inspection of records
  name:   { type: String, required, unqiue }, // Strata records
  body:   { type: String, required },
  see:    { type: [String] }, // [Name] of other  laws
  tags:   { type: [String], enum: TAG },
  log:    { type: Log }

})