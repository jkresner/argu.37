let docs = {


'1704_sp13385-cash-apr_oneill.report.pdf': {
  published: '2017-05-03',
  author: "Ben O'Neill",
  title: "Cash Management for the month to 30/04/17 - The Owners SP13385",
  uri: 'https://records.37paulst.com/c-soon',
  md: { snippit: `_ _ _
>- Keppelgate, 37 Paul Street, BONDI JUNCTION NSW 2022
The Owners SP13385
_ _ _
###### Levy income

##### Administrative Fund
| Lot    | Owner     | Levies due | Levies paid   | Interest paid | Total paid    | Discount | Unpaid at 30/04/18 |
|--------|:----------|-----------:|--------------:|--------------:|--------------:|---------:|-------------------:|
| 1      | *****     | 0.00       | 0.00          | 0.00          | 00.00         | 0.00     | 0.00               |
| 36     | *****     | 0.00       | 0.00          | 0.00          | 00.00         | 0.00     | 0.00               |
| 37     | *****     | 0.00       | 0.00          | 0.00          | 00.00         | 0.00     | 0.00               |
|        |           | **0.00**   | **12,667.01** | **12.63**     | **12,679.64** | **0.00** |                    |

##### Capital Wrks Fund
| Lot    | Owner     | Levies due | Levies paid   | Interest paid | Total paid    | Discount | Unpaid at 30/04/18 |
|--------|:----------|-----------:|--------------:|--------------:|--------------:|---------:|-------------------:|
| 1      | *****     | 0.00       | 0.00          | 0.00          | 00.00         | 0.00     | 0.00               |
| 36     | *****     | 0.00       | 0.00          | 0.00          | 00.00         | 0.00     | 0.00               |
| 37     | *****     | 0.00       | 0.00          | 0.00          | 00.00         | 0.00     | 0.00               |
|        |           | **0.00**   | **12,667.01** | **12.63**     | **12,679.64** | **0.00** |                    |`
} }


}


Object.keys(docs).forEach(name => assign(
    docs[name],
    {
      _id:null,
      type:'docs',
      name,
      published: parseInt(moment(docs[name].published).format('X'))
    })
)


module.exports = docs
