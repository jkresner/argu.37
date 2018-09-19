let docs = {


'cc_rooftop_2018_u36_eastbalcony': {
  published: "2018-04-10",
  author: "Jonathon Kresner",
  title: "Rooftop membrane leak onto balcony lot 36",
  uri: 'https://records.37paulst.com/c-soon',
  // md: ``
}


}


Object.keys(docs).forEach(name => assign(
    docs[name],
    {
      _id:null,
      type:'img',
      name,
      published: parseInt(moment(docs[name].published).format('X'))
    })
)



module.exports = docs
