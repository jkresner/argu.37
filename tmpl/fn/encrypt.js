module.exports = {


  navId: id => id.substr(12,4),


  encryptMaps() {
    var maps = Object.values(arguments) // [].slice.call(arguments)
    var str = maps.shift().toString()
    if (!str.replace) return
    if (!maps.length) return str

    // console.log('encryptMaps.str'.white, str.dim)

    maps.forEach(function(map) {
      // console.log('encryptMaps.replacing'.white, map)
      Object.keys(map).forEach(function(mapped) {
        str = str.replace(map[mapped], mapped)
      })
    })

    // console.log('rx_g'.magenta, rx_g)
    // console.log('rx_ig'.magenta, rx_ig)

    // str = str
      // .replace(rx_ps, function(matchd) {
        // console.log('rx_ps', matchd)
        // return map_p[matchd] })
      // .replace(rx_ig, function(matchd) {

      //   console.log('matchd.rx_ig', matchd)
      //   return map_ig[matchd.toLowerCase()]
      // })
      // .replace(rx_g, function(matchd) { return map_g[matchd] })

    // console.log('str'.yellow, str)

    // for (let pseudonym in replacers)
    // str = str.replace(replacers[pseudonym], pseudonym)

    return str
  }


  // spellfix: function(txt, corrections) {
  //   var fixed = txt.toString();
  //   corrections.forEach(function(fix) {
  //     var pattern = new RegExp(fix.match)
  //     fixed = fixed.replace(pattern, fix.replace)
  //   })
  //   return fixed;
  // },


}


// var ig = { //\b{}\b/ig,
//   "Asbestos":  `aspesdos`,
//   "Magnesite": `magnecide`,
//   "O'Neill":  `O'Neil`,
// // }
// // let abbr_month = { //\b{}\b/ig,
//   Jan:'January',
//   Feb:'February',
//   Mar:'March',
//   Apr:'April',
//   May:'May',
//   Jun:'June',
//   Jul:'July',
//   Aug:'August',
//   Sep:'September',
//   Oct:'October',
//   Nov:'November',
//   Dec:'December',
// // // }
// // // let alias = { //\b{}\b/ig
//   OC:'(owners corp(oration|)|body corp(orate|))',
//   LK: 'Laurie( Kresner|)',
//   LK_sec: 'Carmel( Cohen|)',
//   LK_sec2: 'Narda Silvio',
//   JK: '(Jonath(o|a)n( Kresner|)|J Kresner)',
//   Eng2: 'Dusko( Mirilovic|)',
//   Bldr1: 'Peter( Damiano|)',
//   Bldr3: 'Robert( Mcgrath|)',
//   Bldr5: 'Vic Zaitounian',
//   SC1: 'Mary( Atkinson|)',
//   SC2: 'Rick( O\'Gorman-Hughes|)',
//   SC3: '(egildina|Elena( Gu?ildina|)( Home|))',
//   SC4: 'David Puterman',
//   SC5: 'Pauline( Green|)',
//   SC6: 'Marisa( Giuffre|)',
//   Pat: 'Pennie( Platt|)',
//   Robin: 'Elizabeth( Bateman|)',
//   SC:'(strata |)comm?ittee',
//   'Paul St': 'Paul Street',
// }
// var g = {
// // let abbr_day = { //\b{},?\b\g
//   Mon:'Monday',
//   Tue:'Tuesday',
//   Wed:'Wednesday',
//   Thu:'Thursday',
//   Fri:'Friday',
//   Sat:'Saturday',
//   Sun:'Sunday',
//   Eng1:'Bill( Moisidis|)',
// }
// var p = {
//   techFire: '(Danielle |)<?danielle@algotechfire.com.au>?',
//   AGRO: '(Keppelgate Plumber ACRO |"?info@acroplumbing.com"? |)<?info@acroplumbing.com>?',
//   megaseal: 'nsw@megasealed.com.au',
//   FPlum: '(Kylie Lannan|Denise Benson) <?(admin|accounts)@frontrowplumbing.com.au>?',
//   jsFPlum: '/Jono Sedivy <?jono@frontrowplumbing.com.au>?',
//   uPlumn: 'Nathan McLaren <(kamilaroiplumbing@gmail|messaging-service@post.xero).com>',
//   BLMR: '("?\'?Kathy Skon\'?"? |)<?<info@bellmont.net>?',
//   Eng1: '("?\'?(Bill  ?Moisidis|bmoisidis@bellmont.net)\'?"? |)<?bmoisidis@bellmont.net>?',
//   Eng2: '("?\'?Dusko Mirilovic\'?"? |)<?dmirilovic@bellmont.net>?',
//   ARA: '(ARA |"?info@arabuilding.com.au"? |)<?info@arabuilding.com.au>?',
//   Bldr1: '("?\'?Peter Damiano\'?"? |)<?(peter.damiano@arabuilding.com.au|peter@mdpgroup.com.au)>?',
//   Bldr2: '"?\'?Paul Barnard\'?"? <?Paul.Barnard@arabuilding.com.au?>',
//   Bldr3: '("?\'?Robert Mcgrath\'?"? |)<?(r|b)mcgrath45@gmail.com>?',
//   Bldr4: '"?\'?Tony Muccino\'?"? <?tony(.Muccino|)@(arabuilding|mdpgroup).com.au>?',
//   Diskoros: 'Karl Diskoros <karl@diskoros.com.au>',
//   JimInspt: 'Bryce Harrington <bondi@jimsbuildinginspections.com.au>',
//   propInspect: '((Emilio Calandra - |)The|Ashleigh Wilson - The|Admin) Property Inspectors <?(admin|ashleigh|emilio)@tpi.com.au>?',
//   partridge: '(Peter Standen|Paulo Silveira) <?(Peter.Standen|paulo.silveira)@partridge.com.au>?',
//   Wideline: 'Thomas Misirlakis <thomasm@wideline.com.au>',
//   AbyAlumin: '"?\'?David Greco\'?"? <?david@abbeyaluminium.com.au>?',
//   clrRubbish: 'Cheapest Load of Rubbish <info@cheapestloadofrubbish.com.au>',
//   Eman: '"?\'?Michael Sleeman\'?"? <?michael.sleeman@gmail.com>?',
//   ajm: 'Andrew J Millington <?ajm@(kendallco|augustco).com.au>?',
//   lawSoc: '<?(ereferral|ethics|adr)@(lawsociety.com|lawsocnsw.asn).au>?',
//   f12Law: '(Nicholas Condylis |)<?ncondylis@12thfloor.com.au>?',
//   chaLaw: '(Michelle Saunders |)<?(michelle|enquiries)@lawyerschambers.com.au>?',
//   banLaw: '(David Bannerman |Matthew Jenkins |Brittany Compton |)<?(enquiries|DBannerman|MJenkins|BCompton)@bannermans.com.au>?',
//   KBlaw: '(Sian Limberg |Christopher |)<?(enquiries|Christopher|sian)@kerinbensonlawyers.com.au>?',
//   abKBlaw: '(Allison Benson |)<?Allison@kerinbensonlawyers.com.au>?',
//   klLaw: 'Joshua Koonin <?josh@klasskoonin.com>?',
//   scLaw: 'SCL Parramatta <?parramatta@sydneycriminallawyers.com.au>?',
//   scLaw_f: 'Fouad Awada <?fa@sydneycriminallawyers.com.au>?',
//   nscLaw: '(North Shore Criminal Law |William Vahl |)<?williamvahl@nscl.com.au>?',
//   watLaw: 'Shereen DaGloria ?<shereen@watsonandwatson.com.au?>',
//   stuLaw: 'Andrew Stewart <?astewart@stewartlaw.com.au?>',
//   nbcLaw: '("?\'?Clare Peacock(\/NBCL|)\'?"? |)<?clare@nbcl.com.au>?',
//   mueLaw: '(Adrian Mueller |)<?AdrianMueller@muellers.com.au>?',
//   lepLaw: '(Ben Rodrigues|Petra Lohmann|Peter Fagan) <?(PF|Ben|Plohmann)@lepagelawyers.com.au>?',
//   robLaw: '<?lenrobinson@ozemail.com.au>?',
//   pobLaw: '(Michael Pobi |Pobi Lawyers Strata |)<?michael.pobi@pobilawyers.com>?',
//   dentLaw: '"?(Allison Kilduff |Ourania Konstantinidis |Aimee McIntyre |)<?(allison.kilduff|aimee.mcintyre|ourania.konstantinidis)@dentons.com>?',
//   visLaw: 'Paul Loccisano <?paul.loccisano@legalvision.com.au>?',
//   sMA_j: '"?John O(\'|’)Neill"? <admin@oneillstrata.com>',
//   sMA_b: '("?(Ben O\'Neill|ben@oneillstrata.com)"? |)<?ben@oneillstrata.com>?',
//   sMA_r: '("?\'?(Maddie Redhill|reception|Larah Hart|Susan Payne\')\'?"? |)<?(reception|larah|susan)@oneillstrata.com>?',
//   sMA: '("?\'?(admin@oneillstrata.com|(John |)O\'?Neill Strata( Mgmt| Management Pty Ltd|)|Elizabeth Bateman)\'?"? |)<?admin@oneillstrata.com>?',
//   sMA_bot: '("?Do-Not-Reply@oneillstrata.com"? |DEFT Payment Systems |)<?((Do-Not-Reply|noreply|postmaster)@oneillstrata.com|no-reply@deft.com.au)>?',
//   BK: 'Bernie Kresner bernie@getyoo.com.au',
//   JK: '("?\'?(Jonathon Kresner|jkresner@gmail.com)\'?"? |)<?(jkresner@gmail.com)>?',
//   LK_sec: '("?Carmel Cohen( \(kresgrp@bigpond.net.au\)|)"? |Narda Silvio )<?(kresgrp@bigpond.net.au|((ccohen|nsilvio)@advantagedcare.com.au))>?',
//   LK: '("?\'?Laur(ie|ence) Kresner( \(krezprop@bigpond.net.au\)|)\'?"? |)<?(krezprop@bigpond.net.au|kresgrp@bigpond.net.au|lkresner@advantagedcare.com.au)>?',
//   MK: '("?\'?Michael Kresner\'?"? |)<?mkresner@advantagedcare.com.au>?',
//   nashM: '(Deborah Rogerson |Chris Nash |)<?(drogerson|cnash)@nashmanagement.com.au>?',
//   U30: '(Amanda Farmer |)<?amanda@lawyerschambers.com.au>?',
//   U2: '("?\'?michaelleo1972@gmail.com\'?"? |)<?michaelleo1972@gmail.com>?',
//   U6: '(Veevee |)<?(info@veeveehair.com|jemajoseph@hotmail.com)>?',
//   SC1: '("?\'?M(aryatkin|ary Atkinson| Atkinson|aryatkinson@optusnet.com.au)\'?"? |)<?(maryatkinson@optusnet.com.au|maryatkinson234@gmail.com|maryatkin)>?',
//   SC2: '("?\'?(rick_ogh@hotmail.com|R(ick  ?(Richard |)| )O\'Gorman(-| )Hughes)\'?"?) ?(<?rick_ogh@hotmail.com>?|)',
//   SC3: '("?\'?(Keppelgate |)(Elena ? |E |)(Gu?|eg)ildina( Work| Home|)\'?"? |)<?(e.gildina@gmail.com|elena.gildina@au.pwc.com)>?',
//   SC4: '("?\'?(david_puterman@yahoo.com.au|D(avid|)  ?Puterman)\'?"? |)<?david_puterman@yahoo.com.au>?',
//   SC5: '("?\'?(P(auline | )Green|paulinegreen362@hotmail.com)\'?"? |)<?paulinegreen362@hotmail.com>?',
//   SC6: '(M(arisa | )Giuffre |)<?magiuffre53@gmail.com>?',
//   U32: '("?\'?(Vlad Lasky|vlasky@gmail.com)\'?"? |)<?vlasky@gmail.com>?',
//   Pat: '("?\'?(Pennie Platt|pennie_platt@yahoo.com.au)\'?"? |)<?pennie_platt@yahoo.com.au>?',
//   Expedia: '"Expedia.com" <Expedia@expediamail.com>',
//   United: '"?United Airlines, Inc\."? <?unitedairlines@united.com>?',
//   wavGov: '(Pathway User|EPWProd|Waverley Council|Pathway Production) <(postmaster|pathway.user|gis|waver)@waverley.nsw.gov.au>',
//   SydWater: '(Sydney Water |)<?(noresponse|no-reply)@(ebill.|)sydneywater.com.au>?',
//   NCAT: '(NCATCCDSydney |)<?ccdsydney@ncat.nsw.gov.au>?',
//   NSWfairtrading: '(Rebecca Gleeson |Natalie Witjes |NSW Fair Trading |)<?(rebecca.gleeson|natalie.witjes|strataupdate)@finance.nsw.gov.au>?',
//   NSWpolice: '("NSW Police Force Community Portal \(via Service NSW\)" |)<?(customerassistance@police|no-reply@service).nsw.gov.au>?',
//   NSWlpi: '(Plan Inquiry |)<?(PlanInquiry@nswlrs.com.au|(Internet.Feedback|GeneralEnquiry)@lpi.nsw.gov.au)',
//   StrataOp: 'StrataOptions <admin@strataoptions.com.au>',
//   kepCo: 'Discourse <noreply@keppelgate.co>',
//   oc37p: 'Owners of SP13385 <owners(\+noreply|)@37paulst.com>',
//   t37p: '("?\'?treasurer@37paulst.com\'?"? |)<?treasurer@37paulst.com>?',
//   c37p: '("?\'?chair@37paulst.com\'?"? |)<?chair@37paulst.com>?',
//   s37p: '("?\'?secretary@37paulst.com\'?"? |)<?secretary@37paulst.com>?',
//   nr37p: '37paulst Team <mail-noreply@google.com>',
//   ocnM: '"?(Mrs. |)(Maria Radcliffe"? |)<?(membership| ?maria.radcliffe)@ocn.org.au>?',
//   ocnK: '(Karen Stiles |)<?karen.stiles@ocn.org.au>?',
//   goDad: 'GoDaddy <donotreply@godaddy.com>',
//   aws: 'Amazon Route 53 <route53-dev-admin@amazon.com>',
//   vPrint: 'Vistaprint <vistaprint@tm.vistaprint.com.au>',
//   Google: '(gsuite-noreply@google.com|YouTube <noreply@youtube.com>)',
//   GCal: 'Google Calendar <calendar-notification@google.com>',
//   eSign: 'HelloSign <noreply@mail.hellosign.com>',
//   auBio: '("?(Australian Biologics)"? |)<?info@australianbiologics.com.au>?',
//   AAMI: 'AAMI <No-Reply1@aami.com.au>?',
//   HCF: '(HCF My Health Agenda |)<?HCF@newsletters.hcf.com.au>?',
//   StVincents_Microbio: '("?Linda Kightley"? |)<?Linda.Kightley@svha.org.au>?',
//   usMed: '("?(Office Manager|middel@telus.net|Marianne MIddelveen|rstricker@usmamed.com|Raphael Stricker, M.D.)"? |)<?(middel@telus.net|(staff|officemanager|rstricker)@usmamed.com)>?',
// }

// var map_ig = {}, map_g = {}, map_p = {};
// Object.keys(ig).forEach(function(key){ map_ig[ig[key].toLowerCase()] = key })
// Object.keys(g).forEach(function(key){ map_g[g[key]] = key })
// // Object.keys(p).forEach(function(key){ map_p[p[key]] = key })

// var rx_ig = new RegExp('\\b('+Object.keys(map_ig).join("|")+')\\b', "ig"),
//     rx_g  = new RegExp('\\b('+Object.keys(map_g).join("|")+')\\b' , "g") //,
//     // rx_p  = new RegExp('\b('+Object.keys(map_p).join("|")+')\b' , "ig")
