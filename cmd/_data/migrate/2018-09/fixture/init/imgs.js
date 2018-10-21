let imgs = {
"__________180405_u36estblcny-leak": { _id: ID('598963d08240d60004106101'),
  published: '2018-04-05',
  title: 'Rooftop membrane leak onto balcony lot 36',
  threadId: 'roof-membrane',
  data: { filename: '162984fcc34697a5__IMG_8326.jpg',
          mimeType : "img/jpg", size : 0 },
  tags: ['oc','sa'],
  laws: ['SM15:106'],
  // notation: []
},

"__________180224_burrowed": { _id: ID('598963d08240d60004106121'),
  published: '2018-02-24',
  title: 'Lava burrowing through masonry',
  data: { filename: '162224157c497008__F4A61EDB-F66C-44FE-8C96-04EC9ED8976F.jpeg',
    mimeType : "img/jpg", size : 0,
    threadId: "ants" },
  tags: ['sa'],
  laws: ['SM15:106'],
}

,"__________170512_sgap": {  _id: ID('598963d08240d60004106211'),
  published: '2017-05-12',
  title: 'u36 failed stop-gap spindle',
  data: { filename: '15bfb0c85467ab1e__IMG_5409.jpg',
    mimeType : "img/jpg", size : 0,
    threadId: "sgap" },
  tags: ['oc','sc','sa'],
  laws: ['SM15:106'],
}, "__________170512_sgap-lndry-leak": {  _id: ID('598963d08240d60004106214'),
  published: '2017-05-12',
  title: 'u36 main laundry stop-gap leak',
  data: { filename: '15bfb424f2a77dda__image_123923953.JPG',
    mimeType : "img/jpg", size : 0,
    threadId: "sgap" },
  tags: ['oc','sa'],
  laws: ['SM15:106'],
}, "__________170523_sgap-lndry": { _id: ID('598963d08240d60004106215'),
  published: '2017-05-23',
  title: 'u36 water main leak through concrete slab',
  data: { filename: '15bff707e8c001eb__image_6483441.jpg',
    mimeType : "img/jpg", size : 0,
    threadId: "sgap" },
  tags: ['oc','sa'],
  laws: ['SM15:106'],
}, "__________170525_sgap-lndry-mgnst": { _id: ID('598963d08240d60004106217'),
  published: '2017-05-25',
  title: 'u36 stop-gap leak damaging + soaking magnesite & slab',
  data: { filename: '160388da09df13e1__2017-05-11-IMG_5403.JPG',
    mimeType : "img/jpg", size : 0,
    threadId: "sgap" },
  tags: ['sa'],
  laws: ['SM15:106'],
},

"__________180101_g36-wet-pipe": { _id: ID('598963d08240d60004101214'),
  published: '2018-01-01',
  title: 'Wet pipe in lot 36 garage',
  data: { filename: '162984fcc34697a5__IMG_8326.jpg',
    mimeType : "img/jpg", size : 0,
    threadId: "g36-mld" },
  tags: ['oc','sa'],
  laws: ['SM15:106'],
}, "__________180101_mld-jakt": {  _id: ID('598963d08240d60004101217'),
  published: '2018-01-01',
  title: 'Mould damage to all clothing',
  data: { filename: '160de651cc16e4c4__2017-03-28-IMG_4743_crop.JPG',
    mimeType : "img/jpg", size : 0,
    threadId: "g36-mld" },
  tags: ['oc','sa'],
  laws: ['SM15:106'],
}, "__________180101_mld-bskt": {  _id: ID('598963d08240d60004101219'),
  published: '2018-01-01',
  title: 'Mould damage to all organic material belonging',
  data: { filename: '15b096dda60181c6__IMG_4697.JPG',
    mimeType : "img/jpg", size : 0,
    threadId: "g36-mld" },
  tags: ['oc','sa'],
  laws: ['SM15:106'],
},

"__________180101_crnt-bathrm": { _id: ID('598963d08240d60004111112'),
  published: '2018-01-01',
  title: 'Bathroom consists of toilet with no walls',
  data: { filename: '15fbcf85a43060b7__IMG_7095.JPG',
    mimeType : "img/jpg", size : 0,
    threadId: "u36_crnt" },
  tags: ['oc','sa'],
  laws: ['SM15:106']
},

"__________170706_u36cc-nodoors": { _id: ID('598963d08240d60004000115'),
  published: '2017-07-06',
  title: 'Concrete Cancer repairs works',
  data: { filename: '15f331a53647f14b__IMG_6168.JPG',
    mimeType : "img/jpg", size : 0,
    threadId: "u36cc" },
  tags: ['oc','sa'],
  laws: ['SM15:106']
}, "__________171003_rmed-storg": { _id: ID('598963d08240d60004000118'),
  published: '2017-10-03',
  title: 'u36 living room as Strata construction storage',
  data: { filename: '15f6aedb50181028__IMG_6474.JPG',
    mimeType : "img/jpg", size : 0,
    threadId: "u36cc" },
  tags: ['oc','sa'],
  laws: ['SM15:106']
},

"__________181015_dumpd": { _id: ID('598963d08240d60004024115'),
  published: '2018-10-15',
  title: 'Street Garbage dumped inside u36 bedroom',
  data: { filename: '15f21c876fd107b5__IMG_6835.jpg',
    mimeType : 'img/jpg', size : 0,
    threadId: 'dumpd' },
  tags: ['oc','sa'],
  laws: ['SM15:106'],
}, "__________181013_dumpd-note": { _id: ID('598963d08240d60004024117'),
  published: '2018-10-13',
  title: 'Strata Committee note with dumped garbage',
  data: { filename: '15f21c876fd107b5__IMG_6811.jpg',
    mimeType: 'img/jpg', size : 0,
    threadId: 'dumpd' },
  tags: ['oc','sa'],
  laws: ['SM15:106'],
}

}

Object.keys(imgs).forEach(key => {
  img = imgs[key]
  assign(img, {
    _id: new ID(),
    name: key.replace('__________',''),
    render: 'img',
    is: 'personal',
    author: 'Jonathon Kresner',
    uri: `/_records/c-soon-${img._id}`,
    threadId: img.threadId || img.data.threadId,
    published: parseInt(moment(img.published).format('x')),
    // tags: img.tags.map((short)=>assign({short})), //_id =>
    // laws: img.laws.map((ttl)=>assign({ttl})),
  })
})




module.exports = imgs