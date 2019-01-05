const ebook = {
  parts: {  "1": { title: 'Intro to Paul St' },
            "2": { title: 'Insights & opinions' } }, toc: [
   { idx:'1.1', key:'intro', url:'/intro', title:"Strata living @ 37 Paul St" },
   { idx:'1.2', key:'toc',url:'/toc', title:"Table of contents" },
   { idx:'1.3', key:'jk', url:'/36/jk', title:"Personal context" },
   { idx:'2.1', key:'lot36', url:'/36/maintenance', title:"Apartment 36 Saga" },
   { idx:'2.2', key:'cc', url:'/nsw-strata/concrete-cancer', title:"Concrete cancer - who cares?" }
] }


ebook.toc.forEach(c => {
  c.byId = ID("5af6da2ea7d95b1016b45fed") //  jk: { "name" : "J. Kresner" }
  c.type = "CHAPTER"
  c.rx = new RegExp(`\\]\\(${c.key}\\)`,'g'),
  c.w = c.url
  c.p = c.url.replace('/','#c-').replace(/\//g,'-')
})

ebook.toc[0].md = `Welcome. I'm *JK*, an Aussie born Silicon Valley tech entrepreneur, CEO, software maker and owner at 37 Paul St. Managing a diligent Strata Scheme is incredibly hard. Doing a good job and keeping people happy is even harder. I believe achieving **Strata living Harmony** requires all owners to embrace mutual respect, ongoing collaborative effort and complete transparency.
Sadly we don't all get along, resulting in a multi-year **Concrete Cancer** denial dispute. Frustrations put aside, I optimistically purchased 37paulst.com on my own dime, neatly deployed my **Owners Corp infrastructure** goody bag, all accessible from one website using any browser and offered to hand over all my efforts (free!). The Committee refused to even take a look.`,
ebook.toc[2].md = `Strata participation is fundamentally getting to know and manage co-owned property with others. A little background shines a lot of context on the depth of  circumstances influencing chosen courses of action, growing frustration and ultimately deciding to publishing an e-book on my Strata living experience.
Folks I've just met, rarely conceive how much consideration sits behind things I say and do. I've been chosen as scapegoat as of late, misrepresented without fair audience to hear my side of the story and listen to my perspective and concern.
## Walking the Entrepreneur's Tightrope
[![AirPair YCombinator](/img/jk-afr-airpair-yc-crop.jpg)](#) In 2014 I was featured in the Australian Financial Review. My 3rd company got accepted into *YCombinator*, The World's most prestigious *Tech Startup Accelerator* that had produced household names like Dropbox and AirBnB. At the program finale, in a room of 500 investors, I pitched "AirPair" *barefoot*... and 48 hours later, just like that we had **$2M**(AUD) venture funding in the bank.
Finding a way onto the Silicon Valley roller coaster requires entrepreneurs to constantly consider unconventional new approaches to everyday life, which conservative thinking (by definition) seem a bit crazy, until eventually becoming widely accepted innovation. Decades in that mentality has lead me through experiences learning cross-discipline skills in all aspects of running a company from software engineering to marketing, customer experience, product design, fund raising, business strategy, financial modeling, book keeping/auditing and financial reporting.
Having the metal to convince people to embrace new ideas essentially boils down to having a hyper-motivated, higher than normal passionate, opinionated, confident and often bullish outlook. When people ask me "What's it like living in San Francisco?"  I say, the biggest difference is the time of day people entertain new and strange ideas. It's an encouraging environment for personalities like me. There's a fine line between exercising those qualities and being misinterpreted as overly persistent, too heated, unthoughtful and trying to be difficult.
Looking back, I misjudged just how fine of a tightrope I got on, transitioning from San Fran back to Sydney and particularly Strata living at 37 Paul St with its diverse constitution age groups, cultural differences and competing financial interests.
Poorly defined channels and communication expectations made me often feel I had fallen to a cold, dark and isolated place.`
ebook.toc[3].md = `God dammit \n \n ### Empty  \n  \n For some time now`
ebook.toc[4].md = `CC ... It really sucks, seriously...`

module.exports = {ebook}
