module.exports = ({ Id, Enum, Location, Log, Act },
  { asSchema, required, lowercase, sparse, index, unique }) => {


let item = asSchema({
  soureId:         { type: Id, required, ref: 'Source', index },
  timestamp:       { type: Number, required },
  // type:            { type: String, enum: Enum.SET.ITEM_TYPE },
  md: {
    // list:         { type: String, required },
    // item:         { type: String, required }
  }
})


let claim = asSchema({
  clause:          { type: Id, ref: 'clause', index },
  // amount:          { type: Number, required },
  selections:      { type: [{
    clause:          { type: Id, ref: 'clause', index },
    involves:        { type: String }, //type: Id, required, ref: 'Entity', index },
    selector:        { type: String, required },
    descriptor:      { type: String, required },
  }], required },
})


return asSchema({

  ref:              { type: String, required, unique },
  title:            { type: String, required },
  summary:          { type: String, required },
  timeStart:        { type: Number, required },
  timeEnd:          { type: Number, required },
  chain:            { type: [item], required },
  claims:           { type: [claim], required },
  // log:            { type: Log },
  // userId:         { type: Id, ref: 'User', required },
  // placeId:        { type: Id, ref: 'Place', required },
  // deleted:        { type: Act },
})

}
