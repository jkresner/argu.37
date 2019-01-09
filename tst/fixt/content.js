const ebook = {
  parts: {
    "1": { title: 'Intro to Paul St' },
    "2": { title: 'Insights & opinions' }
  }, 
  toc: [
   { idx:'1.1', key:'intro', url:'/intro', title:"Strata living @ 37 Paul St" },
   { idx:'1.2', key:'toc',url:'/toc', title:"Table of contents" },
   { idx:'2.1', key:'lot36', url:'/36/maintenance', title:"Apartment 36 Saga" },  ] 
}


ebook.toc.forEach(c => {
  c.byId = ID("5af6da2ea7d95b1016b45fed") //  jk: { "name" : "J. Kresner" }
  c.type = "CHAPTER"
  c.rx = new RegExp(`\\]\\(${c.key}\\)`,'g'),
  c.w = c.url
  c.p = c.url.replace('/','#c-').replace(/\//g,'-')
})

ebook.toc[0].md = `#### Strata participation 

Tis fundamentally getting to know and manage co-owned property with others.`

ebook.toc[1].md = `### Welcome. I'm *JK*,
This is the introductory home page introduction!

**Concrete Cancer** denial sucks. I'll say!!`,

ebook.toc[2].md = `CC ... Rust, spalling and unhappyness...

God dammit \n \n ### Empty  \n  \n For some time now`


module.exports = {ebook}
