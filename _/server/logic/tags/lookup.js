// Not quite "tagGet"
//   a. Looking up cache
//   b. Allow not found r
//   c. Allow ID "OR" slug input
module.exports = ({Tag}, Data, {NotFound}) => ({


  validation(user, lookup) {
    if (!lookup) return `lookup undefined`
    if (lookup.constructor != String
     && lookup.constructor != Tag.NewId().constructor)
      `lookup slug <String> or _id <ObjectId>`
  },


  exec(lookup, cb) {

    let check = lookup.constructor
    let {tags} = cache

    if (check != String)
      return cb(null, tags[lookup])


    for (let _id in tags)
      if (tags[_id].slug == lookup)
        return cb(null, tags[_id])


    return cb()
  }


})

