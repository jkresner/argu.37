const alias = {
  'Magnesite':      /\bmagnecide\b/ig,
  'Asbestos':       /\bAspesdos\b/ig,
  'O\'Neill':       /\bO'Neil\b/ig,
// }
// const abbreviate = {
  'Paul St':       /\bPaul Street\b/ig,
// }
// const month = {
  'Jan':           /\bJanuary\b/ig,
  'Feb':           /\bFebruary\b/ig,
  'Mar':           /\bMarch\b/ig,
  'Apr':           /\bApril\b/ig,
  'May':           /\bMay\b/ig,
  'Jun':           /\bJune\b/ig,
  'Jul':           /\bJuly\b/ig,
  'Aug':           /\bAugust\b/ig,
  'Sep':           /\bSeptember\b/ig,
  'Oct':           /\bOctober\b/ig,
  'Nov':           /\bNovember\b/ig,
  'Dec':           /\bDecember\b/ig,
// const day = {
  'Mon':           /\bMonday,?\b/g,
  'Tue':           /\bTuesday,?\b/g,
  'Wed':           /\bWednesday,?\b/g,
  'Thu':           /\bThursday,?\b/g,
  'Fri':           /\bFriday,?\b/g,
  'Sat':           /\bSaturday,?\b/g,
  'Sun':           /\bSunday,?\b/g,
// }

// const alias  = {
  SC:/\b(strata |)comm?ittee/ig,  //<i></i>
  OC:/\b(owners corp(oration|)|body corp(orate|))\b/ig,  //<i></i>
  LK: /\bLaurie( Kresner|)\b/ig,  //<i></i>
  LK_sec: /\bCarmel( Cohen|)\b/ig,  //<i></i>
  LK_sec2: /\bNarda Silvio\b/ig,  //<i></i>
  // JK: /\b(Jonath(o|a)n( Kresner|)|J Kresner)\b/ig,  //<i></i>
  Eng2: /\bDusko( Mirilovic|)\b/ig,  //<i></i>
  Bldr1: /\bPeter( Damiano|)\b/ig,  //<i></i>
  Bldr3: /\bRobert( Mcgrath|)\b/ig,  //<i></i>
  Bldr5: /\bVic Zaitounian\b/ig,  //<i></i>
  SC1: /\bMary( Atkinson|)\b/ig,  //<i></i>
  SC2: /\bRick( O'Gorman-Hughes|)\b/ig,  //<i></i>
  SC3: /\b(egildina|Elena( Gu?ildina|)( Home|))\b/ig,  //<i></i>
  SC4: /\bDavid Puterman\b/ig,  //<i></i>
  SC5: /\bPauline( Green|)\b/ig,  //<i></i>
  SC6: /\bMarisa( Giuffre|)\b/ig,  //<i></i>
  Pat: /\bPennie( Platt|)\b/ig,  //<i></i>
  sMA_e: /\bElizabeth( Bateman|)\b/ig,  //<i></i>
  Eng1: /\bBill( Moisidis|)\b/g,  //<i></i>
}

const psudo = {
  friendB: /("?'?Brian Davis'?"? |)<?<brianscottdavis@gmail.com>?/ig,
  friendR: /(Jo-Anne Cahill|FLAT CHAT) <(jo_cahill2003@yahoo|mail@flat-chat).com.au>/ig,
  techFire: /(Danielle |)<?danielle@algotechfire.com.au>?/ig,
  AGRO: /(Keppelgate Plumber ACRO |"?info@acroplumbing.com"? |)<?info@acroplumbing.com>?/ig,
  megaseal: /nsw@megasealed.com.au/ig,
  FPlum: /(Kylie Lannan|Denise Benson) <?(admin|accounts)@frontrowplumbing.com.au>?/ig,
  jsFPlum:  /Jono Sedivy <?jono@frontrowplumbing.com.au>?/ig,
  partridge: /(Peter Standen|Paulo Silveira) <?(Peter.Standen|paulo.silveira)@partridge.com.au>?/ig,
  Wideline: /Thomas Misirlakis <thomasm@wideline.com.au>/ig,
  AbyAlumin: /"?'?David Greco'?"? <?david@abbeyaluminium.com.au>?/ig,
  
  Eman: /"?'?Michael Sleeman'?"? <?michael.sleeman@gmail.com>?/ig,
  uPlumn: /Nathan McLaren <(kamilaroiplumbing@gmail|messaging-service@post.xero).com>/ig,
  ajm: /Andrew J Millington <?ajm@(kendallco|augustco).com.au>?/ig,
  Diskoros: /Karl Diskoros <karl@diskoros.com.au>/ig,
  propInspect: /(((Emilio Calandra - |)The|Ashleigh Wilson - The|Admin) Property Inspectors |)<?(admin|ashleigh|emilio)@(tpi|thepropertyinspectors).com.au>?/ig,
  JimInspt: /Bryce Harrington <bondi@jimsbuildinginspections.com.au>/ig,
  BioHlth: /(Biological Health Services |"?Dr.? Cameron Jones"? |Richard Anthony |)<?((cameron@drcameronjones|richardanthony71@gmail).com|info@biologicalhealthservices.com.au)>?/ig,
  iEng2: /Sheldon Garcia <sgarcia@hwle.com.au>/ig,
  Mycolab: /("?'?(Sam Athanasios \(Mycotec\)|Mariam Begum)'?"? |)<?(sama@mycotec|Mariam@mycolab).com.au>?/ig,
  chRubbish: /Cheapest Load of Rubbish <info@cheapestloadofrubbish.com.au>/ig,
  nashM: /(Deborah Rogerson |Chris Nash |)<?(drogerson|cnash)@nashmanagement.com.au>?/ig,
  nPenny: /Nick Penny <nickp@intensive-care.com.au>/ig,
  NLAss: /"?'?Nicole Leggat'?"? <?nicole@nlassociates.com.au>?/ig,
  LTAss: /"?'?Lynn Teo'?"? <?lynn@nlassociates.com.au>?/ig,

  EngA: /("?'?Kathy Skon'?"? |)<?<info@bellmont.net>?/ig,
  Eng1: /("?'?(Bill  ?Moisidis|bmoisidis@bellmont.net)'?"? |)<?bmoisidis@bellmont.net>?/ig,
  Eng2: /("?'?Dusko Mirilovic'?"? |)<?dmirilovic@bellmont.net>?/ig,
  BldrA: /(ARA |"?info@arabuilding.com.au"? |)<?info@arabuilding.com.au>?/i,
  Bldr1: /("?'?Peter Damiano'?"? |)<?(peter.damiano@arabuilding.com.au|peter@mdpgroup.com.au)>?/ig,
  Bldr2: /"?'?Paul Barnard'?"? <?Paul.Barnard@arabuilding.com.au?>/ig,
  Bldr3: /("?'?Robert Mcgrath'?"? |)<?(r|b)mcgrath45@gmail.com>?/ig,
  Bldr4: /"?'?Tony Muccino'?"? <?tony(.Muccino|)@(arabuilding|mdpgroup).com.au>?/ig,
  
  lawAid: /Jake Edwards <jedwards@mlc.org.au>/ig,
  lawSoc: /<?(ereferral|ethics|adr)@(lawsociety.com|lawsocnsw.asn).au>?/ig,
  f12Law: /(Nicholas Condylis |)<?ncondylis@12thfloor.com.au>?/ig,
  chaLaw: /(Michelle Saunders |)<?(michelle|enquiries)@lawyerschambers.com.au>?/ig,
  banLaw: /(David Bannerman |Matthew Jenkins |Brittany Compton |)<?(enquiries|DBannerman|MJenkins|BCompton)@bannermans.com.au>?/ig,
  KBlaw: /(Sian Limberg |Christopher |)<?(enquiries|Christopher|sian)@kerinbensonlawyers.com.au>?/ig,
  abKBlaw: /(Allison Benson |"Thoughts from a strata lawyer ..." |)<?(Allison@kerinbensonlawyers.com.au|comment-reply@wordpress.com)>?/ig,
  klLaw: /Joshua Koonin <?josh@klasskoonin.com>?/ig,
  SCLaw: /(Sydney Criminal Lawyers |Dalia Al Haj Qasem |Rocio Sanabria |SCL (Parramatta|Admin Team) |)<?(admin3|legal|parramatta|adminteam|info)@sydneycriminallawyers.com.au>?/ig,
  SCLaw_f: /(Fouad Awada |)<?fa@sydneycriminallawyers.com.au>?/ig,
  SCLaw_fx: /fa@sydneycriminallawyers.au/ig,
  nscLaw: /(North Shore Criminal Law |William Vahl |)<?williamvahl@nscl.com.au>?/ig,
  nscLaw_b: /simon.buchen@forbeschambers.com.au/ig,
  watLaw: /Shereen DaGloria ?<shereen@watsonandwatson.com.au?>/ig,
  stuLaw: /Andrew Stewart <?astewart@stewartlaw.com.au?>/ig,
  nbcLaw: /("?'?Clare Peacock(\/NBCL|)'?"? |)<?clare@nbcl.com.au>?/ig,
  mueLaw: /(Adrian Mueller |)<?AdrianMueller@muellers.com.au>?/ig,
  lepLaw: /(Ben Rodrigues |Petra Lohmann |Peter Fagan |)<?(PF|Ben|Plohmann)@lepagelawyers.com.au>?/ig,
  robLaw: /<?lenrobinson@ozemail.com.au>?/ig,
  pobLaw: /(Michael Pobi |Pobi Lawyers Strata |)<?michael.pobi@pobilawyers.com>?/ig,
  thLaw: /(Trevor Hall |)<?trevor@hallpartners.com.au>?/ig,
  dentLaw: /"?(Allison Kilduff |Ourania Konstantinidis |Aimee McIntyre |)<?(allison.kilduff|aimee.mcintyre|ourania.konstantinidis)@dentons.com>?/ig,
  visLaw: /Paul Loccisano <?paul.loccisano@legalvision.com.au>?/ig,
  ssLaw: /(Samantha Saw |)<?ssaw@speirsryan.com.au>?/ig,

  OSM_j: /"?John O('|’)Neill"? <admin@oneillstrata.com>/ig,
  OSM_b: /("?(Ben O\'Neill|ben@oneillstrata.com)"? |)<?ben@oneillstrata.com>?/ig,
  OSM_r: /("?'?(Brooke Wemyss|Maddie Redhill|reception|Larah Hart|Susan Payne')'?"? |)<?(reception|larah|susan|brooke)@oneillstrata.com>?/ig,
  OSM: /("?'?(admin@oneillstrata.com|(John |)O'?Neill Strata( Mgmt| Management Pty Ltd|)|Elizabeth Bateman)'?"? |)<?admin@oneillstrata.com>?/ig,
  OSM_e: /Elizabeth( Bateman|)/ig,  //<i></i>
  OSM_bot: /("?Do-Not-Reply@oneillstrata.com"? |DEFT Payment Systems? |)<?((Do-Not-Reply|noreply|postmaster)@oneillstrata.com|no-reply@deft.com.au)>?/ig,
  
  straC: /("?'?Strata Central Admin'?"? |)<?(donotreply@stratamax|(admin|enquiries)@stratacentral).com.au>?/ig,
  straCr: /Reena Van Aalst <reena.vanaalst@stratacentral.com.au>/ig,
  straCs: /Sarah Smith <sarah.smith@stratacentral.com.au>/ig,

  BK: /Bernie Kresner bernie@getyoo.com.au/ig,
  JK: /("?'?(Kresner,? Jonathan|(36 |)J(onathon|) Kresner|jkresner@gmail.com)'?"? |)<?(jkresner@gmail|jk@(37paulst|airpair)).com>?/ig,
  LK_sec: /("?'?Carmel Cohen( \(kresgrp@bigpond.net.au\)|)'?"? |Narda Silvio |)<?(kresgrp@bigpond.net.au|((ccohen|nsilvio)@advantagedcare.com.au))>?/ig,
  LK: /("?'?Laur(ie|ence) Kresner( \(krezprop@bigpond.net.au\)|)'?"? |"krezprop@bigpond.net.au" |)<?(krezprop@bigpond.net.au|lkresner@advantagedcare.com.au)>?/ig,
  MK: /("?'?Michael Kresner'?"? |)<?mkresner@advantagedcare.com.au>?/ig,
  
  U2: /("?'?michaelleo1972@gmail.com'?"? |)<?michaelleo1972@gmail.com>?/ig,
  U6: /(Veevee |)<?(info@veeveehair.com|jemajoseph@hotmail.com)>?/ig,
  SC1: /("?'?M(aryatkin|ary Atkinson| Atkinson|aryatkinson@optusnet.com.au)'?"? |)<?(maryatkinson@optusnet.com.au|maryatkinson234@gmail.com|maryatkin)>?/ig,
  SC2: /("?'?(rick_ogh@hotmail.com|R(ick  ?(Richard |)| )O'Gorman(-| )Hughes)'?"?) ?(<?rick_ogh@hotmail.com>?|)/ig,
  SC3: /(("?'?(Keppelgate |)(Elena ? |E |)(Gu?|eg)ildina( Work| Home|)'?"? |)<?(e.gildina@gmail.com|elena.gildina@au.pwc.com)>?|(egildina|Elena( Gu?ildina|)( Home|)))/ig,
  SC4: /("?'?(david_puterman@yahoo.com.au|D(avid|)  ?Puterman)'?"? |)<?david_puterman@yahoo.com.au>?/ig,
  SC5: /(("?'?(P(auline | )Green|paulinegreen362@hotmail.com)'?"? |)<?paulinegreen362@hotmail.com>?|Pauline( Green|))/ig,
  SC6: /(M(arisa | )Giuffre |)<?magiuffre53@gmail.com>?/ig,
  SC7: /(Amanda Farmer |)<?amanda@lawyerschambers.com.au>?/ig,
  SC8: /Dave Scoppa <dmscoppa@hotmail.com>/ig,
  
  U32: /("?'?(Vlad Lasky|vlasky@gmail.com)'?"? |)<?vlasky@gmail.com>?/ig,
  U33: /("?'?(Pennie Platt|pennie_platt@yahoo.com.au)'?"? |)<?pennie_platt@yahoo.com.au>?/ig,
  
  Apple: /"?Apple Support"? <AppleSupport@email.apple.com>/ig,
  PayPal: /"service@paypal.com" <service@paypal.com>/ig,
  Expedia: /"?(IHG Rewards Club|Expedia.com)"? <?((Expedia@expediamail|IHGRewardsClub@sm.ihg).com>)>?/ig, 
  ExpediaAU: /("?'?(Space Q Capsule Hotel|The Pod Sydney|Reservations)'?"? |)<?(noreply@apac.littlehotelier.com|info@thecapsulehotel.com.au|booking@spaceq.com.au)>?/ig,
  Uber: /Uber Receipts <uber.australia@uber.com>/ig,
  United: /"?United Airlines, Inc\. ?"? <?unitedairlines@united.com>?/ig,
  wavGov: /(Pathway User|EPWProd|Waverley Council|Pathway Production) <(postmaster|pathway.user|gis|waver)@waverley.nsw.gov.au>/ig,
  SydWater: /(Sydney Water |)<?(noresponse|no-reply)@(ebill.|)sydneywater.com.au>?/ig,
  HelloSign: /HelloSign <noreply@mail.hellosign.com>/ig,
  OffWrks: /Officeworks <email@officeworks.com.au>/ig,

  nswFinace: /(Matt Kean MP|Policy|Ministerial Services IBR) <((Policy|MinisterialServicesIBR)@finance.nsw.gov.au|web@mattkean.com.au)>/ig,
  nswJustice: /nswcsc-mailin <nswcsc@justice.nsw.gov.au>/ig,
  nswCAT: /(NCATCCDSydney |)<?ccdsydney@ncat.nsw.gov.au>?/ig,
  nswLCourt: /<(sydneycivilregistry|eservices)@agd.nsw.gov.au>?/ig,
  nswLPI: /(Plan Inquiry |)<?(PlanInquiry@nswlrs.com.au|(Internet.Feedback|GeneralEnquiry)@lpi.nsw.gov.au)/ig,
  nswFT: /(Rebecca Gleeson |Natalie Witjes |NSW Fair Trading |)<?(rebecca.gleeson|natalie.witjes|strataupdate)@finance.nsw.gov.au>?/ig,
  nswPF: /("NSW Police Force Community Portal \(via Service NSW\)" |)<?(customerassistance@police|no-reply@service).nsw.gov.au>?/ig,
  conjr: /Paul Gacic <?gaci1pau@police.nsw.gov.au>?/ig,

  StrataOp: /StrataOptions <admin@strataoptions.com.au>/ig,
  aws: /Amazon Route 53 <route53-dev-admin@amazon.com>/ig,
  kepCo: /Discourse <noreply@keppelgate.co>/ig,
  goDad: /(GoDaddy |)<?(support\-en@support.gandi.net|donotreply@godaddy.com)>?/ig,

  oc37p: /Owners of SP13385 <owners(\+noreply|)@37paulst.com>/ig,
  t37p: /("?'?treasurer@37paulst.com'?"? |)<?treasurer@37paulst.com>?/i,
  c37p: /("?'?chair@37paulst.com'?"? |)<?chair@37paulst.com>?/i,
  s37p: /("?'?secretary@37paulst.com'?"? |SP13385 Secretary |)<?(secretary@37paulst|jkresner@gmail).com>?/i,
  nr37p: /37paulst Team <mail\-noreply@google.com>/ig,          
  
  ocnM: /"?(Mrs\. |)(Maria Radcliffe"? |)<?(membership| ?maria.radcliffe)@ocn.org.au>?/ig,
  ocnK: /("?(Ms\.|) Karen Stiles"? |)<?(eo|karen.stiles)@ocn.org.au>?/ig,
  ocn: /(Owners Corporation Network |Events Team |)<?(admin|eo|events|forum)@ocn.org.au>?/ig, 
  vPrint: /Vistaprint <vistaprint@tm.vistaprint.com.au>/ig,
  Google: /(gsuite\-noreply@google.com|YouTube <noreply@youtube.com>|googleone-support@google.com)/ig,
  GCal: /Google Calendar <calendar\-notification@google.com>/ig,
  eSign: /HelloSign <noreply@mail.hellosign.com>/ig,
  
  AAMI: /AAMI <No-Reply1@aami.com.au>?/ig,
  HCF: /(HCF My Health Agenda |)<?HCF@newsletters.hcf.com.au>?/ig,
  
  auBio: /("?(Australian Biologics)"? |)<?info@australianbiologics.com.au>?/ig,
  latch: /("?Latch & Son? Chiropractic"? |)<?lsandh1237@gmail.com>?/ig,
  StVinIF: /("?Linda Kightley"? |)<?Linda.Kightley@svha.org.au>?/ig,
  usMed: /("?(frontdesk usmamed.com|backoffice usmamed|Office Manager|middel@telus.net|Marianne MIddelveen|rstricker@usmamed.com|Raphael Stricker, M.D.)"? |)<?(middel@telus.net|(backoffice|frontdesk|staff|officemanager|rstricker)@usmamed.com)>?/ig,
}

module.exports = { psudo, alias }


//   sMA_j: '"?John O(\'|’)Neill"? <admin@oneillstrata.com>',
//   sMA_b: '("?(Ben O\'Neill|ben@oneillstrata.com)"? |)<?ben@oneillstrata.com>?',
//   sMA_r: '("?\'?(Maddie Redhill|reception|Larah Hart|Susan Payne\')\'?"? |)<?(reception|larah|susan)@oneillstrata.com>?',
//   sMA: '("?\'?(admin@oneillstrata.com|(John |)O\'?Neill Strata( Mgmt| Management Pty Ltd|)|Elizabeth Bateman)\'?"? |)<?admin@oneillstrata.com>?',
//   sMA_bot: '("?Do-Not-Reply@oneillstrata.com"? |DEFT Payment Systems |)<?((Do-Not-Reply|noreply|postmaster)@oneillstrata.com|no-reply@deft.com.au)>?',
//   BK: 'Bernie Kresner bernie@getyoo.com.au',
//   JK: '("?\'?(Jonathon Kresner|jkresner@gmail.com)\'?"? |)<?(jkresner@gmail.com)>?',
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
//   wavGov: '(Pathway User|EPWProd|Waverley Council|Pathway Production) <(postmaster|pathway.user|gis|waver)@waverley.nsw.gov.au>',
//   SydWater: '(Sydney Water |)<?(noresponse|no-reply)@(ebill.|)sydneywater.com.au>?',
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
// }
