module.exports = ({Source}, {Query,Opts,Project}, DRY) => ({


  exec(opts, cb) {
    if (!cb) { cb = opts; opts = {} }

    let newest = (opts.newest||opts.n)?true:false
    let sort = { published: newest ? -1 : 1 }
    let ops = assign({key:'published'}, Opts.list, {sort})
    let limit = opts.limit || opts.l
    if (limit) ops.limit = parseInt(limit) || 100

    let q = assign({}, Query.published)
    if (opts.is) assign(q, {is:opts.is})

    // assign(q, { _id: { '$gt': Source.
    
    //var f = 
    //'5cc69ace2d5166116636efa2' // 2019-04-29 
    //'5c2a12d00000000000000000' // 2019-01-01 
    //'5b108c800000000000000000' // 2018-06-01 
    //'5a9742800000000000000000' // 2018-03-01     

    //var from = Source.toId(f)
    //$log('ok'.green, from, DRY.id.date(from))
    //assign(q, {_id: { '$gt': from }})

    Source.getManyByQuery(q, ops, (e,r) => e ? cb(e) : cb(e, {sources:r, ops}))
  },


  project: Project.list


})


/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let last=[], 
        length=[],
        idx=0, 
        max=0;
    for (let el of arr) {
        last[idx] = el
        length[idx] = 1
        for (let j=0;j<last.length;j++) {
            if (el - last[j] == difference) {
              last[j] = el
                length[j]++
                if (length[j] > max) max = length[j]
            }  
        }
        idx++;        
    }
    return max;
};

