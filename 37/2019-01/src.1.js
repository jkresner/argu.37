SRC0 = require('../2018-09/src.0')


module.exports = {

  // deletable = definitely are not interest
  // What makes mail deletable vs hidden?
  // ? Criteria
  // 1. Noise vs signal (e.g. double send within minutes better combined)
  deletable: [
   // half don't exist... consider fresh start
   '1607bc75833197d0',
   '160bb886fc99fb88','160bb7318f439249','160badaeb1c6cbed','160695a05d77e158','160694d7d7552296','160693f0d92ec81c','1606948b90db30b5','160694a9e851cc75',
   '16264a9cf96fbebd','16264abab133e098','16072b55106db443',
   '15e6afb20cee16e4','15f40f816c8c0fd2','15fff3b61c2465c4','1607bd2549f45202',
   '162666a00c877cf8','162650a185c7ea4a','16264b90f770b909','160e8f8c3672ef6d','160d29558328550d','160bb86632301cd8','160bb6e89fa4ea1a','160b3f55bfdc8e55',
   '16390357baa3bf5d','1638f53704544706','1638f38b7b9a72bf','163878f36c7f971a','163877a68fd93155','1633a5914d823f2f','16338920d4fafddd','1631781627756bbd','162b20f664964ff1','162ad345e07c2f72','162ad2be6b9a514c','1628a0b142ea1fb6','162666c79f53ce43',
   '1547e8760e596705','15967a9754f8ca83','1606d3c295fdcb20',
   '162666c900cff4b7','162666ccec44cdd9','162666e129704566','162666e6179fe416',
   '1572c63e798500b6','15d473c52457c07f','15e28146f81a2f31','15e28186ce605416','15e281edbe903538','15e57b48179a2f76','15e6ae5d5fedcf07','15e6b006db16bc97','15e935c1142952ae','15e78734a8815f85','15e96ae10f2027b0','15e96b70eadec158','15e96b7f3a75a287','15e96c12f6b48ffb',
   '16072735aade1ae9','1609b407566e7dfd',
   '163a49ccccbc417c','16324635c7e566e7','16323fa596714566','162666bdf541132e',
   '1629844d0ecf70e7','162986295a9b00ca',
   '1622a7ad6432e384','1622b8a873542020','1622b8c79632faa0','1622d02a337e0bbb','16231aef4f096dc2','16239f5955618d9a','1623bac6261ea25a','1626a225722c3c18','1626b43c7da98483','1626eea95332c6de','1626ca01b249e6c2','1626ca01b249e6c2','1626b5341a2c50c3',
   '162b2b288cd999ea',
   '1604dd7e68fda8b5',
   '1603a16b6a4a6d7b',
   '15fbc8a6738b6a66',
   '15f8953b8f1da411','15f9e1535760acbf','15fa472bb63b97d6',
   '15f99cd02ae68b1a',
   '15c103bc7617462c','15e6ebab9c234615',
   '15b38324f0bf10c6','15bcbad91544604d','15ccd25786c43393','15ccd35ade0b7639','15ccd37f2da2110d',
   '15b0d3b0afe6b373',
   '15ab4e8032ed3331',
   '15a456b6bbb014bc',
   '1532557100b232b8',
   '1598fda7c6eb7b56','15fa42c4f6a649dc','16024eb0813240bf','160296357f7c1b91','1602963e8d420b6c','1602965d29442681','160296666e4db865','1602966f0b0fa5bf','16029676b1912eb7','1603e6237d2061fc','1602db0b1997606c','160e7534a8853c89',
   '1622555201612e88','15498761933a28c4','1547e887599bf512','15479d495374e0cd','15479d40038efa2b','157ee9f7efed7deb','15c058e06578008d',
   '162aa302aa0a07f0','162aa1a12b360242','162985d4f3e6dab4','15fa4254e91dd94d',
   '16315681dd188102','1630807ce360fa37','1630807ce360fa37',
   '163175e831fc3e64','16343e8048585766','1633cc42e124503d','1632305be07e6402','1626f1475af9e639','1626f0a511a0eb7a','1626b591a511ee0a','1626a3d74bcc46e0','1626a3b6c395298b','16264dac0d69c0ca','1623d4174f86545d','1623c90a3f12becf','16236694988bbdf7','162365d9d4090cf8','16234d323b9c68f6',
   '16386a3afa47e23c','16386a9a31430c18','16386b3b253f34cf','16386b85b1c1e43f','16386b3b253f34cf','163872350aaa731c',
   '15ca955f19f79d59','1627025bb2db5db3','1626fdde1b44b4be','1633a1e57289ea5a','15b5a6f5e65393ff','15b6080367298c6c','15b615368cd9d763','15b7ab2a21663a4f','15b7e26dae0c9806','15b7e60fe5fc091a','15b7e623c0bad4ff','15b83b19bbcc48b2'
  ],


// ignore    = want to be able to show with flag/query param
    ignore: SRC0.ignore,

  threads: {
'14d412980a8ec4cf':{ t:"1505-11[2:0]Hello Neighbor"},
'14dac23c786b1de9':{ t:"1506-01[1:0]Keppelgate U 36 vs U 31"},
'14f7e044b5c1a7ff':{ t:"1508-30[3:0]KEPPELGATE - SYDNEY, AUSTRALIA Hello Neighbor"},
'15113783ef4cac57':{ t:"1511-17[5:1]KEPPELGATE - SYDNEY, AUSTRALIA Hello Neighbor"},
'1511e044ba078f2b':{ t:"1511-19[6:0]Re: Strata Plan 13385 - isolation valve - 34/37 PAUL STREET BONDI JUNCTION"},
'15179dc170c8df31':{ t:"1512-07[8:1]Colour of balcony tiles"},
'1518012229a456c1':{ t:"1512-08[3:0]Fwd: Unit 33 renovations"},
'152154b172e29d4e':{ t:"1601-06[6:5]Kepplegate Unit 36 Pluming, Window Panel & Garage Remote"},
'15215b81b087ce2a':{ t:"1601-06[7:6]U 36 - plumbing"},
'1522efce921f978b':{ t:"1601-11[2:0]Work order 036969 for Strata Plan 13385 - Keppelgate, 37 Paul Street, BONDI JUNCTION  NSW  2022"},
'15f94bef1338775b':{ t:"1601-12[2:665]u36 contact info update"},
'15237e8f332d738c':{ t:"1601-13[14:215]Quote request 002386 for Strata Plan 13385 - Keppelgate, 37 Paul Street, BONDI JUNCTION  NSW  2022"},
'152472d39d4a3995':{ t:"1601-16[2:3]Online resource for works in the building"},
'152af11bff44b44c':{ t:"1602-05[1:0]Paul Street Strata notices - repairs"},
'152f84e90aba4cd0':{ t:"1602-19[6:6]Concrete cracks"},
'1531aeec093a20e6':{ t:"1602-26[1:0]ref. Strata NCAT - 37 Paul Street"},
'153253d45eb57317':{ t:"1602-28[3:1]Building insurance"},
'1534ea4e41b0af40':{ t:"1603-07[5:0]jack hammering"},
'15413004c589ca0d':{ t:"1604-14[1:0]FW: SP13385 - owner statement"},
'154741e4571d36d0':{ t:"1605-03[1:0]Paul St - Fire services Inspection - IMPORTANT - ACCESS REQUIRED"},
'154743754f127cc4':{ t:"1605-03[4:1]RE: SP13385 - owner statement 37 Paul Street"},
'15479a7be65e8b30':{ t:"1605-04[2:6]Rental of garage?"},
'1558fb032a26a340':{ t:"1606-27[5:0]IMPORTANT Reminder- Paul st Unit Fire Inspection tomorrow morning"},
'15594f0eecdac091':{ t:"1606-28[1:0]Receipt - NSW Police Force Complaint Form"},
'156259585654470f':{ t:"1607-26[1:0]Water proofing membrane"},
'156441d322489fcc':{ t:"1608-01[2:0]Construction Noise"},
'1564421932426354':{ t:"1608-01[6:457]Kepplegate: Insecure Rooftop Access"},
'15648b91ba1e2432':{ t:"1608-02[5:3]Can I come up?   Now"},
'15673e5ec2afa06b':{ t:"1608-10[4:5]New Keys"},
'15673ecd8ba7ee10':{ t:"1608-10[5:5]Front door keys"},
'1568ceb82f1ee19b':{ t:"1608-15[15:28]Re: Megasealed Quote - 36/37 Paul St, Bondi Junction"},
'156972ccf9e5afcd':{ t:"1608-19[1:0]Re: FW: 2016-08-16-Shower at Unit 36, 37 Paul St, Bondi Junction"},
'156f7f4a49ca13fe':{ t:"1609-05[10:0]Kepplegate Extreme noise disruption"},
'1572186232c863d6':{ t:"1609-13[1:0]$A3122.90 Strata levy receipt"},
'1572c46e85128ce9':{ t:"1609-15[3:0]Building works today"},
'1572c4a4cf1e8260':{ t:"1609-15[2:0]Construction"},
'157b1f2c14c74c05':{ t:"1610-11[3:0]SP13385 - Unit 36 Leaking Bathroom"},
'157c08960d839812':{ t:"1610-14[1:0]O'Neill Strata - Moving Day!"},
'157e53d788a405e9':{ t:"1610-21[1:0]FW: Strata query from Laurie Kresner"},
'157ef013c4b4b668':{ t:"1610-23[1:0]$A5237.22 Strata levy receipt"},
'1581465271cfc67e':{ t:"1610-30[1:0]Hi!"},
'159193f5290270c0':{ t:"1612-20[3:496]Results sent"},
'1599141efafae535':{ t:"1701-12[3:0]Unit 36 - plants on small balcony"},
'159c8eecfaaf9f6f':{ t:"1701-23[4:6]Balcony Tiling Update"},
'159d4823a2ff5b3a':{ t:"1701-25[1:0]Fw: Unit 36 Paul street - Future reference"},
'159ece0e0f810bad':{ t:"1701-30[1:0]Fwd: Kresner - further request"},
'15a10494f0ed1ea3':{ t:"1702-06[10:0]Asbesdos"},
'15a17aada1df005f':{ t:"1702-07[14:6]Re: Asbesdos issue - unit 36"},
'15a2d359139192f0':{ t:"1702-11[13:1]Re: Asbestos issue - unit 36 Front"},
'15a347d129c38419':{ t:"1702-13[1:0]RE: Kresner - Unit 36"},
'15a3fc7637fab02f':{ t:"1702-15[2:272]Stepping down"},
'15a448a15890c7b9':{ t:"1702-16[12:1]SP 13385"},
'15a450fef99eb0c4':{ t:"1702-16[7:0]Suing the committee"},
'15a4bcb460b38c3e':{ t:"1702-17[2:0]Fw: Kresner - Unit 36 and U 35."},
'15a588a707464ae2':{ t:"1702-20[3:0]Concrete Cancer"},
'15a5f5ada7f33fed':{ t:"1702-21[2:0]Engineers reports"},
'15a5f5bced1c5e39':{ t:"1702-21[1:0]Fw: SP13385 - Part 1"},
'15a5f5c63986fb8a':{ t:"1702-21[1:0]Fw: SP13385 - Part 2"},
'15a5f5ce79d3b386':{ t:"1702-21[1:0]Fw: SP13385 - Part 3"},
'15a5f5c6840f8a89':{ t:"1702-21[1:0]Fw: SP13385 - Part 4"},
'15a5fb4a82f0791e':{ t:"1702-21[6:2]Kepplegate #36 Gutting"},
'15a68b1914096df2':{ t:"1702-23[1:0]Re: pre inspection agreement"},
'15a68be1aa1b4129':{ t:"1702-23[1:0]Jim's Building Inspections | Receipt No: 97-01492"},
'15a6d95184ae85e1':{ t:"1702-24[1:0]General ideas for renovation proposal"},
'15a6d9f04d9342a6':{ t:"1702-24[1:0]Asbesdos Results and Documents Repository"},
'15a6e28ece590b3a':{ t:"1702-24[1:0]Throw you fits"},
'15a77331ffdc110b':{ t:"1702-26[1:0]Your $A3393.76 Strata levy receipt"},
'15a7d6cf37f16163':{ t:"1702-27[2:0]Paul street"},
'15a866f60ea443f7':{ t:"1703-01[5:1]FW: U36 - Access Denied to balconies"},
'15a86b38d5ef3b9b':{ t:"1703-01[3:0]Moisture Kepplegate #36"},
'15a87f86661aabad':{ t:"1703-01[4:0]Concrete Cancer in Master Bedroom"},
'15a88702245f64a1':{ t:"1703-01[1:0]Unit 36"},
'15a88e14bb90128f':{ t:"1703-01[1:0]In all seriousness though"},
'15a89169916226f5':{ t:"1703-01[5:1]RE: U36 and 35 - Magnesite works"},
'15aa10f672e80ce6':{ t:"1703-06[6:0]Builders access to #36"},
'15ab10c245cc896a':{ t:"1703-09[6:0]Wooden Fixtures"},
'15ab4e1cc24af8c1':{ t:"1703-10[6:3]Re: Harassment"},
'15ac4a3ff6c4ee06':{ t:"1703-13[11:247]RE: Use of lift for magnesite removal"},
'15ac4c864684c97d':{ t:"1703-13[4:2]Water main washers"},
'15acb078a1065d86':{ t:"1703-14[4:0]Sliding doors"},
'15ad484d52a7b13f':{ t:"1703-16[1:0]Wet pipes in garage"},
'15add5858733772c':{ t:"1703-18[5:5]You have drilled through my ceiling"},
'15af39dafc54ca3c':{ t:"1703-22[1:0]REPORT"},
'15af8ab553a20763':{ t:"1703-23[3:3]Re: Kepplegate Checklist"},
'15b07f2fc5e606eb':{ t:"1703-26[2:0]Keppelgate #36 Timeline"},
'15b081dbd3f6ca3f':{ t:"1703-26[1:0]Jonathon Kresner, thank you for your order."},
'15b096bbc4fcdb42':{ t:"1703-26[6:283]Garage Moisture"},
'15b0d30d66c99c36':{ t:"1703-27[3:0]#36 Kepplegate Wall Removal Engineering Report"},
'15b12c53fb1217d8':{ t:"1703-28[3:2]Kepplegate Sliding Doors Quote"},
'15b1c2277f773806':{ t:"1703-30[1:0][Discourse] Confirm your new account"},
'15b224d70a60577b':{ t:"1703-31[6:7]TG-289259"},
'15b22a6326ef4635':{ t:"1703-31[1:0]Your Vistaprint Order Is Confirmed"},
'15b2c309af7e7b7d':{ t:"1704-02[1:0]#36 Additional rust north east kitchen crn"},
'15b36463b1034d45':{ t:"1704-04[2:0]Unit 36 at 37 Paul Street Bondi Junction"},
'15b36d957748cf52':{ t:"1704-04[1:0]Your StrataOptions quotes"},
'15b36f0b8dc4a999':{ t:"1704-04[5:0]Agenda items and date for Keppelgate EGM"},
'15b36f97a38a42e5':{ t:"1704-04[1:0]Keppelgate Portal"},
'15b37239825a605d':{ t:"1704-04[1:0]Ryburn Industries Invoice & Residency Onboarding Documentation"},
'15b372f921a469ae':{ t:"1704-04[7:78]Authority to exclusively email ALL strata communications and Levy Notices"},
'15b3b85bdce6c44f':{ t:"1704-05[6:78]Your document has been sent to admin@oneillstrata.com"},
'15b3bc57106a1dc5':{ t:"1704-05[1:0]ePathway Receipt"},
'15b40b2e1d3e108d':{ t:"1704-06[5:3]unit 26 at 37 Paul Street Bondi Junction"},
'15b421cb806a3b9c':{ t:"1704-06[2:0]RE: unit 36 at 37 Paul Street Bondi Junction"},
'15b45c0ff0bcfdbd':{ t:"1704-07[7:0]Re: Lot services"},
'15b45ce61092ccce':{ t:"1704-07[1:0]Renovators Access"},
'15b46f780902367b':{ t:"1704-07[2:0]Fw: Keppelgate EGM - notice for those wanting approval to renovate"},
'15b46fd0e7ce75be':{ t:"1704-07[4:0]Flies and gnats"},
'15b4ff9042ec4755':{ t:"1704-09[1:0]Broken basement light fitting"},
'15b5116187f6cf41':{ t:"1704-09[2:0]Unit 36 doors and renovation"},
'15b553952e373e3c':{ t:"1704-10[1:0]Permission to explore rooftop air conditioning"},
'15b57a4bc7cfe0c6':{ t:"1704-10[1:0]Your new Sydney Water eBill for 41878400005"},
'15b5a33a7479406b':{ t:"1704-11[1:0]STRATA MATTER"},
'15b5debcd3f29069':{ t:"1704-12[1:0]Sliding Doors lead time and configuration"},
'15b5f84491d23dbf':{ t:"1704-12[2:0]Your doors"},
'15b6520c3223b099':{ t:"1704-13[15:5]"},
'15b8e3dd5ca0486e':{ t:"1704-21[9:4]Unit 35 and 36 Aluminium doors and window"},
'15b8f3315d6584cb':{ t:"1704-21[1:0]#36 Renovation objections"},
'15ba85798f0ac870':{ t:"1704-26[3:1]Fw: Sliding doors at 37 Paul street Bondi Junction"},
'15ba87e8aa6d12a6':{ t:"1704-26[2:1]Status of #36"},
'15ba89270d12b1b1':{ t:"1704-26[1:0]Bi-laws"},
'15ba8addd815e6e6':{ t:"1704-26[2:0]Fw: Sliding doors at 37 Paul street Bondi Junction"},
'15bad68a30d9fb48':{ t:"1704-27[6:321]Appt with Skin Clinic"},
'15bc1e1d2f5e5c92':{ t:"1705-01[12:7]37 Paul Street Bondi Junction - Windows to units 35 and 36"},
'15bcb51384ec3224':{ t:"1705-03[1:0]Extraordinary Meeting SP 13385"},
'15bcb96aa91611b0':{ t:"1705-03[2:0]#36 renovation items"},
'15bcca213763224d':{ t:"1705-03[1:0]Rusted bars"},
'15bce08b1766cc87':{ t:"1705-03[2:0]Sliding doors spec and remedial floor repairs"},
'15bd08d6922de332':{ t:"1705-04[19:5]Main tap washers"},
'15bd60522b71579b':{ t:"1705-05[5:117]#36 Airconditioning"},
'15be54f022e6d964':{ t:"1705-08[4:0]RE: U35 and 36 windows"},
'15bf1510344dafad':{ t:"1705-10[2:0]Fw: 37 Paul St - sliding doors for unit 36"},
'15bf156493aea2c3':{ t:"1705-10[3:1]37 Paul Street Bondi Junction - Windows to units 35 and 36"},
'15bfb094dc5b5486':{ t:"1705-12[18:247]Leaking Laundry Main #36"},
'15bff3ffe4cc1c3b':{ t:"1705-13[38:27]Units 35 and 36 Sliding doors"},
'15c006b6cd4da6f3':{ t:"1705-13[3:0]Main taps"},
'15c09d7d96424871':{ t:"1705-15[4:0]Unit 35 and 36 @ 37 Paul Street Bondi Junction"},
'15c0a04926f7467d':{ t:"1705-15[3:0]Unit 36 @ 37 Paul Street Bondi Junction"},
'15c0a30a03b305f5':{ t:"1705-15[3:0]#36 Plumbing Repairs and Review"},
'15c15b0b2e55ada2':{ t:"1705-17[7:0]FW: Unit repairs #36 - Paul Street"},
'15c1f45ab9f8a5e6':{ t:"1705-19[9:3]"},
'15c384d0bf6ec1ef':{ t:"1705-24[2:0]FW: Abbey Quote"},
'15c9da8890267e05':{ t:"1706-13[3:2]#36 Timeframe"},
'15c9dca48dbdb06a':{ t:"1706-13[3:2]Update on remedial works / sliding doors"},
'15c9f90440a1a1bc':{ t:"1706-13[5:8]Levy Notice - Strata Plan 13385 - Lot 36"},
'15cbeb60faf8b566':{ t:"1706-19[1:0]FW: Keppelgate - letter to the owners"},
'15ca955f19f79d59':{ t:"1706-22[2:22]Re: 36 Keppelgate"},
'15ce84edbb0baa9f':{ t:"1706-27[3:0]#36 Additional Rust & Spalling"},
'15cf66dbb1c26b51':{ t:"1706-30[4:30]Fwd: Unit 36 - Outstanding works"},
'15d0d0d1ee9d35f5':{ t:"1707-04[1:0]Paul Street Invoice"},
'15d1f8d90e82af60':{ t:"1707-08[1:0]Your new Sydney Water eBill for 41878400005"},
'15d2b2c1a30cad99':{ t:"1707-10[1:0]Levy Notice - Strata Plan 13385 - Lot 36"},
'15d7bba89814a1ca':{ t:"1707-26[1:0]Your $A5160.7 Strata levy receipt"},
'15d8145ebea98eb1':{ t:"1707-27[1:0]Waverley Council - Rate notice 2017/2018 (180821)"},
'15d864bc489537b0':{ t:"1707-28[2:0]Incorrect window install"},
'15d88aed18df0f5f':{ t:"1707-28[1:0]36/39 Paul Street Invoice"},
'15d9f91f8cd4d6f8':{ t:"1708-02[1:0]ePathway Receipt"},
'15db606dd6e56104':{ t:"1708-06[9:35]Your doors"},
'15e260ff2c5e3ee9':{ t:"1708-28[1:0]Continuing Paul St Uninhabitable Builders"},
'15e2811c46b51f29':{ t:"1708-28[1:0]Invoice"},
'15e3053d6a596a6b':{ t:"1708-30[4:0]\"Unfinacial\""},
'15e308b0f2e384f8':{ t:"1708-30[4:0]Non-levy Strata invoice items"},
'15e3103ead4ae924':{ t:"1708-30[3:0]FW: SP 13385 - \"Unfinacial\""},
'15e317a5a54251ab':{ t:"1708-30[3:2]#36 Paul St Access Update"},
'15e6e886fef01edc':{ t:"1709-11[13:0]Unit 36 at 37 Paul Street Bondi Junction"},
'15e738993cc38389':{ t:"1709-12[2:0]FW: Completion schedule - 37 Paul Street Bondi Junction - RESPONSE REQUIRED"},
'15e74b688826fb42':{ t:"1709-12[6:6]FW: Unit 36 - 37 Paul Street Bondi Junction"},
'15e84bdb16b57d61':{ t:"1709-15[1:0]#36 Renovation Hold Up - Internal Floor Topping"},
'15e92e234308ae48':{ t:"1709-18[1:0]FW: Unit 36 - internal screeding"},
'15e9d26580654561':{ t:"1709-20[1:0]Strata Updates - By-law Review Reminder"},
'15ea86397fd40bcd':{ t:"1709-22[4:3]FW: Unit 36 screeding of inside flooring"},
'15f031932dfd4dd6':{ t:"1710-10[1:0]Your new Sydney Water eBill for 41878400005"},
'15f03fce285f37a1':{ t:"1710-10[5:1]Fw: U36 - alarm ?  OR  intercom ?"},
'15f05214fe1ade62':{ t:"1710-10[1:0]Unit 36 Break In"},
'15f08ed08dd24f17':{ t:"1710-11[19:62]Levy Notice - Strata Plan 13385 - Lot 36"},
'15f0d445f43110a9':{ t:"1710-12[1:0]Security Cameras at Keppelgate?"},
'15f18ea77ac07f66':{ t:"1710-14[6:1]Fwd: Unit 36, 37 Paul Street Bondi Junction"},
'15f21aec11158bab':{ t:"1710-16[1:0]#36 Stolen items, dumped garbage, unauthorised access & insecure sliding doors"},
'15f23b489d2b74b8':{ t:"1710-16[2:0]Fw: Unit 36 - alarm noise Sunday October 8th"},
'15f32b70c34c81cf':{ t:"1710-19[5:0]Fee Proposal - Engineering report"},
'15f3704d6cc27a2e':{ t:"1710-20[1:0]Rubbish Removal Paid Invoice 68159"},
'15f37cd612646cba':{ t:"1710-20[1:0]Theft Report Successfully Submitted | Reference Number R0000017382"},
'15f37dd13eec94d0':{ t:"1710-20[1:0]Report Reference R0000017382 has not been progressed"},
'15f3fabdb7687be0':{ t:"1710-22[1:0]37paulst.com was successfully registered with Route 53"},
'15f3ff639d2e996b':{ t:"1710-22[1:0]Congrats, your video is now on YouTube!"},
'15f519ee6f5f181c':{ t:"1710-25[6:14]Chartered Structural engineer & Building Consultant"},
'15f56c3f5099f203':{ t:"1710-26[1:0]Site Assessment, Bondi Junction, NSW, 2022"},
'15f5b22b5e8e0786':{ t:"1710-27[1:0]O'Neill Strata Online: Account Created"},
'15f5bc6f89e47ab0':{ t:"1710-27[12:4]Finished with #36 Internal Repairs?"},
'15f6aedb50181028':{ t:"1710-30[1:0]Security concern. MDP Remedial Repairs 37 Paul St"},
'15f700e2577350fd':{ t:"1710-31[7:1]Lot36 Garage spalling"},
'15f70292f40aae7b':{ t:"1710-31[1:0]Portal Registration & Records"},
'15f70c2677d0ccde':{ t:"1710-31[12:51]FW: SP 13385 - Portal Registration & Records"},
'15f70f89b444fa91':{ t:"1710-31[3:0]Publication / last updated / citation meta data"},
'15f74569bb1bfc5b':{ t:"1711-01[3:0]Neat looking - Collaborative building management tool"},
'15f7560e714898a5':{ t:"1711-01[1:0]Notification: SP13385 owner Lot 36 - Inspection of Records @ Wed Nov 1, 2017 1:30pm - 2:30pm (Jonathon Kresner)"},
'15f75cf5ee75f691':{ t:"1711-01[3:0]Meeting tomorrow at 8 - Re: Finished with #36 Internal Repairs?"},
'15f7630adb965e4e':{ t:"1711-01[1:0]SP 13385 STRATA INSPECTION RECEIPT"},
'15f79594750d3c96':{ t:"1711-02[1:0]Notification: 37paulst u36 Belmont engineer review @ Thu Nov 2, 2017 8am - 9am (Jonathon Kresner)"},
'15f7a4cd3a06824c':{ t:"1711-02[6:4]Electronic or cash"},
'15f7b044cb8f3d19':{ t:"1711-02[1:0]37 Paul Street Bondi  - SITE INSPECTION & ADVICE :1058 31 October 2017"},
'15f8e336ff92b3ee':{ t:"1711-06[1:0]Re:"},
'15f9527c137b6f27':{ t:"1711-07[2:0]Agent Negligence - #1 Waterproofing Advice"},
'15f991b24b7c33dc':{ t:"1711-08[1:0]New file available at oneillstrata.com"},
'15f9a7a9590c36a3':{ t:"1711-08[2:0]Fwd: U 36 - magnesite/spalling"},
'15f9d720b938d3c6':{ t:"1711-09[1:0]Strata Bill/Regulations & Protocol"},
'15f9e02a29b9d9d6':{ t:"1711-09[12:1]37 Paul St - Bondi Junction - Unit 36 spalling investigation"},
'15fb7b971237cd9c':{ t:"1711-14[4:0]U36 37Paul Scope"},
'15fbc7c94fb70097':{ t:"1711-15[1:0]Building remedial scope decisions"},
'15fbce7568974300':{ t:"1711-15[3:13]u36 37paul Common Stack Waterproofing"},
'15fbd44a3ec03b8b':{ t:"1711-15[2:33]Painting"},
'15fbd61dab88a135':{ t:"1711-15[23:2]Jack hammering in u36"},
'15fbe61ca7aa2737':{ t:"1711-15[1:0]Sitting down"},
'15fc6cce60a1b3e6':{ t:"1711-17[5:36]About Concrete Cancer PowerPoint"},
'15fc92fb32aecc6e':{ t:"1711-17[2:3]This year's AGM"},
'15fe6a13fdf2de8d':{ t:"1711-23[12:123]u36 Photos"},
'15fe7fd5bc1c482b':{ t:"1711-23[1:0]Thank you for setting up billing for G Suite for 37paulst.com"},
'15fe7fd97210dd16':{ t:"1711-23[1:0]Your 37paulst address, secretary@37paulst.com, has been created"},
'15fecebc01110dad':{ t:"1711-24[9:18]Additional Uploaded SP13385 Documents to O'Niell Portal"},
'15fecf6199e00b3d':{ t:"1711-24[11:3]SP13386 Agenda Item Deadline"},
'15ffa66ec0ca0942':{ t:"1711-27[4:3]Balustrades at 37 Paul St"},
'15ffac21c34884e8':{ t:"1711-27[1:0]Trespassing"},
'15fff3ab96cf00b2':{ t:"1711-28[1:0]Invoice INV-0125 from Your Plumbing & Gas Fitting for Jonathon Kresner"},
'16005aefb90cc41e':{ t:"1711-29[12:1]AGM - agenda will be sent out tomorrow afternoon"},
'16005b59299ca8b3':{ t:"1711-29[1:0]Strata Agents & Inspection of records"},
'160080cf47a8ef02':{ t:"1711-30[3:0]Re: Concrete Cancer case research"},
'1600ad8048234b49':{ t:"1711-30[2:0]Fw: Keppelgate AGM - motions for agenda and chairperson's report"},
'1600b75424ab5591':{ t:"1711-30[2:0]2017.12.14 AGM Notice"},
'1600ddfb83a1a83f':{ t:"1712-01[6:3]U36 works"},
'1600e57c9b3d08cb':{ t:"1712-01[27:116]u36 Photos"},
'16013a5b7b0043d9':{ t:"1712-02[2:4]Request: SP13385 Strata Committee meeting"},
'1601871d2761466a':{ t:"1712-03[8:11]37 Paul St - Costs identified 2017-04-05"},
'1601f9c03e1fb482':{ t:"1712-04[2:0]eTicket Itinerary and Receipt for Confirmation GFCTTD"},
'160206afd02b068a':{ t:"1712-04[4:1]Sec 106 - Concrete Cancer - Lot36 v SP13385"},
'16025a19da36df1a':{ t:"1712-05[3:0]LegalVision: Your Strata Enquiry"},
'160270425f8dee74':{ t:"1712-06[8:8]37 Paul St - Tribunal"},
'1602d7c3178ded89':{ t:"1712-07[1:0]SSMA2015 106 - recent verdicts on incurred damages"},
'1602dc0ba28bf712':{ t:"1712-07[15:13]Upcoming SP13385 AGM participation"},
'1602f0ade79d615a':{ t:"1712-07[2:0]re. Strata issues again"},
'16032bfd4ea07b28':{ t:"1712-08[1:0]Invitation to join Owners of SP13385"},
'160382611c59d382':{ t:"1712-09[1:0]Help answering comments on your personal blog"},
'16042d3f9c58d7d3':{ t:"1712-11[1:0]New file available at oneillstrata.com"},
'1604dd7e68fda8b5':{ t:"1712-13[1:0]eTicket Itinerary and Receipt for Confirmation GFCTTD"},
'160526bfa1c6a7b5':{ t:"1712-14[2:0]#36 Brown Xmas"},
'1605330c035c7c64':{ t:"1712-14[2:0]AGM Agenda Items"},
'1605e05cdd13a4fa':{ t:"1712-16[4:0]Fyi"},
'160673c4e84fa9b2':{ t:"1712-18[8:0]Unit 36 at 37 Paul Street Bondi Junction"},
'16067b570a0d21a4':{ t:"1712-18[2:0]Acro Plumbing inv #00004506"},
'160681b51961c951':{ t:"1712-18[3:16]SP13385 Capital Works Planning: Plumbing fun facts"},
'1606b4f26f8bc88a':{ t:"1712-19[1:0]Fwd: Unit 6 - furniture outside front door"},
'1606b57678f7056b':{ t:"1712-19[2:15]Fwd: Unit 6 - items on the balustrades"},
'1607079020eb0d23':{ t:"1712-20[4:0]Unit 36 at 37 Paul Street Bondi Junction"},
'16071ad272b3217a':{ t:"1712-20[5:3]One more round in #36"},
'1607203e9754f6a6':{ t:"1712-20[9:0]Personal losses"},
'160731779752ceff':{ t:"1712-20[18:84]Ants"},
'1607b2b3203f9606':{ t:"1712-22[2:0]Dumping solution"},
'1607bcb29f576062':{ t:"1712-22[1:0]Authority"},
'1607bd137829c391':{ t:"1712-22[1:0]Your document has been sent to sian@kerinbensonlawyers.com.au"},
'16090515ff394b2e':{ t:"1712-26[6:2]Balcony SPA"},
'160916ea6c6876e6':{ t:"1712-26[3:0]Transparency and correspondence"},
'1609f611ba954259':{ t:"1712-29[5:0]Last call before NCAT"},
'160bae73e367d03a':{ t:"1801-03[5:0]Balcony"},
'160d280c11290db2':{ t:"1801-08[12:2]Unit 36 Garage."},
'160d2aba4a4033b8':{ t:"1801-08[1:0]Failure to fix rooftop waterproofing"},
'160d7df7a5461018':{ t:"1801-09[1:0]Service Address & Photocopying/Postage Fees"},
'160d7c7d3b640abd':{ t:"1801-09[4:3]Re: NCAT Application Feedback"},
'160d93467aedfdc9':{ t:"1801-09[1:0]Your new Sydney Water eBill for 41878400005"},
'160d947d001d4de0':{ t:"1801-09[3:0]Fair Strata man's bet"},
'160dd79de9df9a76':{ t:"1801-10[9:0]FW: SP 13385  - Unit 36 Garage."},
'160dd853075e5c5d':{ t:"1801-10[1:0]O'Neill"},
'160de3d5a69cf45f':{ t:"1801-10[2:0]Frontrow Plumbing PL - 36/37 Paul St, Bondi Junction: Leak in Garage"},
'160deb8e5913d9c2':{ t:"1801-10[5:0]RE: Unit 36 at 37 Paul Street Bondi Junction"},
'160def6e1fbe3c15':{ t:"1801-10[1:0]Levy Notice - Strata Plan 13385 - Lot 36"},
'160e2a84097c89db':{ t:"1801-11[5:90]POBI - SSMA2015 s106 - Concrete Cancer - Lot 36 v SP13385"},
'160e2a84f3ddceb1':{ t:"1801-11[8:85]Chambers - SSMA2015 s106 - Concrete Cancer - Lot 36 v SP13385"},
'160e2a85395af555':{ t:"1801-11[5:1]NBCL - SSMA2015 s106 - Concrete Cancer - Lot 36 v SP13385"},
'160e2a859461a704':{ t:"1801-11[1:0]Bannermans - SSMA2015 s106 - Concrete Cancer - Lot 36 v SP13385"},
'160e2dbbbb78b7be':{ t:"1801-11[16:75]SP 13385 - Unit 36 Renovations"},
'160e7580338ddfcb':{ t:"1801-12[3:0]Kresner | Fee proposal | Advice regarding NCAT application against strata scheme 13385"},
'160e8ef10a38a906':{ t:"1801-12[2:0]Kresner -v- The Owners - Strata Plan No. 13385"},
'160e91f973972400':{ t:"1801-15[4:10]Re: Kresner - Continuing"},
'160f761e1718c67d':{ t:"1801-15[4:0]FW: SP 13385 - Unit 36"},
'160f9f4771195362':{ t:"1801-16[2:0]Do you want to bill another hour?"},
'160fc88e21bbe8f7':{ t:"1801-16[1:0]New file available at oneillstrata.com"},
'160fd819842da11e':{ t:"1801-16[10:23]36/37 Paul Street, Bondi Junction"},
'161204d921d11673':{ t:"1801-23[2:0]FW: Flat Chat update  No. 95:  3 posts including  Roundup: Flat Chat live is back - better than ever"},
'1614eb51cfe3469e':{ t:"1802-01[2:0]Garage 36"},
'1619ce4d4b45e90b':{ t:"1802-16[1:0]Strata Updates  - Window safety devices in strata: install by 13 March"},
'161d929d34dab17e':{ t:"1802-28[6:15]Your matter"},
'162185f37c7e9398':{ t:"1803-12[1:0]Levy Notice - Strata Plan 13385 - Lot 36"},
'16228193731b9b60':{ t:"1803-15[5:13]Lyme History"},
'1622d93b177dc6bb':{ t:"1803-16[3:0]FW: SP 13385 - Ants"},
'162305447eb24690':{ t:"1803-17[1:0]Raphael Stricker, M.D."},
'1625fa7475fb9a74':{ t:"1803-26[3:0]37 Paul St Rooftop membrane"},
'1626fdd335564b31':{ t:"1803-29[1:0]FW: 2/18-20 Wellington Street, Bondi - DON WOOD URGENT"},
'16288996abd381e9':{ t:"1804-03[1:0]Kresner Skin Appointment & Pathology"},
'1628e8df1a44ae32':{ t:"1804-04[8:7]It's not quite finished"},
'162984eb0775c8bd':{ t:"1804-06[1:0]Another rooftop membrane fail"},
'162ad2afb92d52e2':{ t:"1804-10[3:20][Our Ref: 20180336] The Owners - Strata Plan No 13385 - Outstanding Contributions Lot 36 (Unit 36) - Kresner"},
'162b39231c9078eb':{ t:"1804-11[1:0]Levy Notice - Strata Plan 13385 - Lot 36"},
'162b7154ee568cd8':{ t:"1804-12[3:13]Kresner vs SP13385"},
'162e52fda9eade43':{ t:"1804-21[1:0]THIS IS AN AUTOMATED RESPONSE. PLEASE READ THE IMPORTANT INFORMATION BELOW"},
'162f641ec949a9e2':{ t:"1804-24[1:0]NSW Civil & Administrative Tribunal - SC 18/18166 - Jonathon Kresner vs The Owners - Starta Plan No. 13385"},
'163176b5d216b25c':{ t:"1805-01[1:0]Borrelia Positive"},
'1631fc018f517f74':{ t:"1805-02[1:0]FW: Unit 36, 37 Paul Street - response to your email 16 March"},
'1631fc40c87f567f':{ t:"1805-02[1:0]FW: Unit 36, 37 Paul Street, Bondi Junction"},
'1633e7e74b2f468c':{ t:"1805-08[1:0]FW: letter sent to Waverley Police Station"},
'1635d2e8d4727539':{ t:"1805-14[5:13]Application for Mediation - SP13385 - File No - SM18/0692NW"},
'1638430a8bdc716f':{ t:"1805-22[1:0]Phone Appointment"},
  '15f8e86a285a3c6d': { t:'YYDD:[6:dd]U36 PaulSt Ceiling Pipes'},
  '16013e3194709c14': { t:'YYDD:[3:dd]Automatic reply: Levy Notice - Strata Plan 13385 - Lot 36'},
  '1631fb7b6b94eb57': { t:'YYDD:[2:dd]LJK letter sent to strata 26.03.18'},
  '1631fbd8d0de49e9': { t:'YYDD:[1:dd]and the previous one LJK sent 19.03.18'},
  '1523328ed65c67c3': { t:'YYDD:[1:dd]9316 6991  Nikki Acro\'s phone number'},
  '15a68b44dbbe8a1b': { t:'YYDD:[2:dd]Fwd: Jim\'s Building Inspections | Invoice No: 97-01492'},
  '160761d9928b8071': { t:'YYDD:[16:dd]Kerin Benson Cost Agreement'},
  '15fb7a5954b6b6d2': { t:'YYDD:[1:dd]eTicket Itinerary and Receipt for Confirmation GFCTTD'},
  '161018e70026216d': { t:'YYDD:[1:dd]Advice on Building Works at Lot 36, Strata Plan 13385 || Fee Proposal'},
  '165f96878ba074b4': { t:'YYDD:[4:dd]Re: Physician Letter'},
  '16648256aa84ea62': { t:'YYDD:[3:dd]Kresner - Notices'},
  '166430031d1cea8a': { t:'YYDD:[1:dd][Space Q Capsule Hotel ABN 11618337269] Tax Invoice for Jonathon Samuel Kresner'},
  '1664276f90a0a80a': { t:'YYDD:[1:dd]-No subject-'},
  '166427132931b216': { t:'YYDD:[1:dd]REMINDER:  OCN Seminar Saturday 6 October, 9am - 11.30am'},
  '1663c6eb5350fab7': { t:'YYDD:[1:dd]Re:  Kresner & SP13385'},
  '1663d6049ae95130': { t:'YYDD:[1:dd]Registration Confirmation - Successfully Managing Building Defects & Major Projects'},
  '1664306087cc6f0d': { t:'YYDD:[1:dd]Invoice space q capsule hotel'},
  '1664457a17a60545': { t:'YYDD:[14:dd]Re: Emergency weekend favor'},
  '1663c8b97f9c1a6f': { t:'YYDD:[2:dd][Our Ref: 20180336] The Owners – Strata Plan No 13385 – Lot 36 – Kresner – Local Court Proceedings: 2018/00295744'},
  '16648ae758ca594c': { t:'YYDD:[6:dd]Re: Hearing Conference'},
  '1663dab0b19325ec': { t:'YYDD:[1:dd][Space Q Capsule Hotel ABN 11618337269] Tax Invoice for Jonathon Samuel Kresner'},
  '1664b8b43b9d7818': { t:'YYDD:[2:dd]FLAT CHAT New private message'},
  '166664c089a99b25': { t:'YYDD:[1:dd]Levy Notice - Strata Plan 13385 - Lot 36'},
  '1664bbeb42f48e65': { t:'YYDD:[1:dd]Thanks for contacting us.'},
  '166509f350e39ade': { t:'YYDD:[5:dd]Re: Trust Invoice'},
  '1665031b41cb3368': { t:'YYDD:[1:dd]Thanks for contacting us.'},
  '166520e2e76c12cd': { t:'YYDD:[1:dd]Acknowledgment of your correspondence to the Hon Matt Kean MP Minister for Innovation and Better Regulation'},
  '1606b3b3566891d0': { t:'YYDD:[1:dd]Fwd: NSW Civil & Administrative Tribunal - SC 17/22783 - Owners Corporation SP 13385 vs Jema Joseph'},
  '1609bc3e9c29e8f2': { t:'YYDD:[6:dd]Assistance exercising officer functions and capital works planning'},
  '16660d2a2fec476c': { t:'YYDD:[1:dd]The Capsule Hotel-Confirmation.'},
  '1660d60b6d86108f': { t:'YYDD:[1:dd]Your Bill from San Francisco-Golden Gateway'},
  '165452743a79020f': { t:'YYDD:[3:dd]EGM Agenda Items'},
  '16568ac4ac852d6a': { t:'YYDD:[3:dd]Fwd: Lawyers participating in Owners Corporation & Strata Committee'},
  '16558e11273b3acd': { t:'YYDD:[2:dd]EGM 22nd feedback / participation'},
  '1656ab52bf799e55': { t:'YYDD:[3:dd]Assistance with disputed ledger defence'},
  '16648bae7b5f8031': { t:'YYDD:[1:dd]Thank you for contacting Matt Kean MP'},
  '1656a87cb6b82a59': { t:'YYDD:[1:dd]Solicitor Referral to Private Firms'},
  '165787cd9ffe6e71': { t:'YYDD:[18:dd]Re: Phone number'},
  '1656a24a3dc9f06e': { t:'YYDD:[3:dd]SP13385 Insurance duty of disclosure'},
  '16568cf00490ce8d': { t:'YYDD:[9:dd]Re: SP13385 Silence'},
  '1655c974bc17e748': { t:'YYDD:[1:dd]Your AAMI Home Insurance Renewal HPA078548589'},
  '1641fbde3f3917f1': { t:'YYDD:[3:dd]Re: Kresner review'},
  '164a4a2b68b92a96': { t:'YYDD:[1:dd]Payment receipt'},
  '164f9d8abc736da6': { t:'YYDD:[2:dd]Re: Kresner v SP 13385'},
  '164abaf2d0142b8f': { t:'YYDD:[2:dd]Re: Kresner & SP13385'},
  '164f92b77a199e78': { t:'YYDD:[2:dd]Fwd: (Our Ref: 20180336) The Owners - Strata Plan No 13385 - Lot 36 - Kresner'},
  '163cd09d08040dd0': { t:'YYDD:[8:dd]Re: Application for Mediation - SP13385 - File No - SM18/0692NW'},
  '1641ad64f702f85b': { t:'YYDD:[2:dd]Re: FW: final letter re application for mediation is attached SM18/0692NW  SP13385'},
  '163f275c27ffee7a': { t:'YYDD:[2:dd]Old story'},
  '162ff97460dd2e2e': { t:'YYDD:[10:dd]Re: Dispute with Owners - Strata Plan 13385 [DENTONS-Documents.FID4465807]'},
  '16323c7945eec38f': { t:'YYDD:[5:dd]Re: Kresner v SP13385 v O\'neill Strata Management Pty Ltd'},
  '164b48a7cfb450b4': { t:'YYDD:[3:dd]Re: FW: ⁨RE KRESNER [DLM=Sensitive-Legal][1]⁩'},
  '16471cd77954028c': { t:'YYDD:[1:dd]Your new Sydney Water eBill for 41878400005'},
  '1641b07285bfc077': { t:'YYDD:[14:dd]Re: Your AVO Application and Review of the Brief'},
  '164cfda5462d232b': { t:'YYDD:[2:dd]Re: SP 13385 Keppelgate'},
  '16578b1ca2dcc134': { t:'YYDD:[1:dd](Our Ref: 20180336) The Owners - Strata Plan No 13385 - Lot 36 - Kresner'},
  '16415fccced0c308': { t:'YYDD:[1:dd]Legal matter'},
  '1657ed8dcc2286ec': { t:'YYDD:[5:dd]Re: Kresner Update - 32241. Or. 52241'},
  '163fcab7bc788f84': { t:'YYDD:[4:dd]RE: FW: SP-10449: 9/22 New Street, Bondi'},
  '16578776c9f6968e': { t:'YYDD:[1:dd]Welcome to OCN'},
  '16486d9d57e9392e': { t:'YYDD:[1:dd]RE: Dispute with Strata Plan 13385 - May Invoice [DENTONS-Documents.FID4465807]'},
  '163cd6d8e2bb0869': { t:'YYDD:[2:dd]Re: contact name and no.  Alternate Strata Managers'},
  '165d352e36265beb': { t:'YYDD:[1:dd]Expedia travel confirmation - Sep 13 - (Itinerary # 7379894217254)'},
  '1633dc31dbb1c297': { t:'YYDD:[8:dd]RE: Legal matter'},
  '163fcabe8b037966': { t:'YYDD:[1:dd]FW: NEW ST - Water leak? - STRATA ISSUE'},
  '164d62cc9c1e1020': { t:'YYDD:[1:dd]Jonathan, here\'s your July issue'},
  '1656945b286106d2': { t:'YYDD:[2:dd](Our Ref: 20180336) The Owners - Strata Plan No 13385 - Lot 36 - Kresner'},
  '1643b219895e1e1d': { t:'YYDD:[2:dd]Re: Engineers Inspection'},
  '164163b617c484a3': { t:'YYDD:[1:dd]Legal matter'},
  '164e815f7b73317c': { t:'YYDD:[1:dd]Waverley Council - Rate notice 2018/2019 (180821)'},
  '1652f97bb3019588': { t:'YYDD:[1:dd]Aug 22, 2018 SP13385 EGM (Extraordinary General Meeting)'},
  '1667b32ee97a7ce8': { t:'YYDD:[2:dd]FLAT CHAT New private message'},
  '1633e8c1e7959edb': { t:'YYDD:[1:dd]Invoice Receipt_Jonathon Kresner'},
  '165adb5cb5084540': { t:'YYDD:[1:dd]SP13385 - Minutes of meeting'},
  '15a353bca5c43bb8': { t:'YYDD:[1:dd]Application Lodgement Confirmation'},
  '1631f00c2bb4a4ed': { t:'YYDD:[1:dd]Legal matter'},
  '1649253a064ab9d0': { t:'YYDD:[1:dd]Trust Receipt_Jonathan Kresner'},
  '1648682f45428ebc': { t:'YYDD:[1:dd]Trust Receipt and Invoice_Jonathan Kresner'},
  '165a710139a69913': { t:'YYDD:[1:dd]Re:   NCAT Application'},
  '162e52efbd73de92': { t:'YYDD:[1:dd]Kresner SP13385 application'},
  '167105ba52f3ab6c': { t:'YYDD:[2:dd]FLAT CHAT New private message'},
  '1675dcaa57382b53': { t:'YYDD:[2:dd]Re: SP13385 2019 Strata Manager & Committee'},
  '167342cbef476e88': { t:'YYDD:[2:dd][OCN Forum]: Decent Agenda/Meeting Protocols'},
  '1670ea3371fbef6c': { t:'YYDD:[4:dd][OCN Forum]: Re: [OCN Forum]: Meaning of the word - Serviceable  '},
  '166ebfaf86b46f0c': { t:'YYDD:[1:dd]Lawyer Contact - Philip Beazley'},
  '1681989ea4439288': { t:'YYDD:[2:dd]Re: Health and Safety'},
  '167779e66953ced7': { t:'YYDD:[1:dd]Online Booking For Jonathon Kresner (LH18120413515289) Checking In: 05 Dec 2018'},
  '16817f94c6ef0efb': { t:'YYDD:[3:dd]re court papers [DLM=For-Official-Use-Only]'},
  '167429632ad096a2': { t:'YYDD:[1:dd]Fw: SP 20211 & Rosenthal'},
  '1670673f2781c372': { t:'YYDD:[1:dd]SP13385 - 37 Paul Street, Bondi Junction - 2nd Attempt Window Lock Installation - 03.12.18'},
  '166c3458e2160df8': { t:'YYDD:[1:dd]MIN18/3428 Letter for Mr Jonathon Kresner'},
  '1674ddcf921a4ac8': { t:'YYDD:[3:dd]Re: (SP13385 BJnc-PAUL37=JK) NCAT Kresner –V– SP 13385 OC & SC'},
  '167ca3405942dafa': { t:'YYDD:[2:dd]The Owners SP 13385 ats Kresner - NCAT File No. SC 18/52163'},
  '167820fec376ee43': { t:'YYDD:[1:dd]Strata Solicitor Referral List'},
  '16734f51ac6d4f10': { t:'YYDD:[1:dd]Nick Penny Intensive Care STRATA SOLUTIONS – "connecting".'},
  '16795455fae1ba7c': { t:'YYDD:[2:dd]Your requested document: Notice of Listing Generic'},
  '16705e2a5471c8bf': { t:'YYDD:[1:dd]Expedia travel confirmation - Nov 12 - (Itinerary # 7391656114177)'},
  '167580bfa93d2c6c': { t:'YYDD:[1:dd]Notice of Motion to Set Aside Default Judgment'},
  '1675dba9b4e770fb': { t:'YYDD:[1:dd](SP13385 BJnc-PAUL-L36 JK) SP 13385 37 Paul St Bondi Jcn= – initial proposal attached FYConsideration'},
  '1674278fc7078353': { t:'YYDD:[1:dd]FLAT CHAT New private message'},
  '167c8beacc0a5f10': { t:'YYDD:[1:dd][GANDI] Invoice number 2018122000004 available'},
  '167ab13d361b19cc': { t:'YYDD:[2:dd]Re: SC 18/52163'},
  '1674027ff0e30519': { t:'YYDD:[1:dd]RE: invoice 12-25 october 2018'},
  '16710c756359fcb8': { t:'YYDD:[1:dd]SP 13385 - AGM Agenda Pack'},
  '167b8e42174e96d5': { t:'YYDD:[1:dd]NSW Civil & Administrative Tribunal - SC 18/52163 - Jonathon Kresner vs The Owners - Strata Plan No 13385 & Mary Atkinson & Richard O\'Gorman-Hughes & David Puterman & Pauline Green & Elena Gildina & Marisa Giuffre & Amanda Farmer'},
  '167713b22278c5ed': { t:'YYDD:[1:dd]Your Monday morning trip with Uber'},
  '1674d8e5754fb8dc': { t:'YYDD:[1:dd]eTicket Itinerary and Receipt for Confirmation FZ7F6S'},
  '1677d9644078a006': { t:'YYDD:[1:dd]Your Wednesday evening trip with Uber'},
  '16784bb63e7bc4b6': { t:'YYDD:[1:dd]Invoice from Stay with Founders (1029)'},
  '1675c37f7eb62550': { t:'YYDD:[1:dd]eTicket Itinerary and Receipt for Confirmation FZ7F6S'},
  '16780fe4282dae71': { t:'YYDD:[1:dd]Expedia travel confirmation - Dec 6 - (Itinerary # 7396625792481)'},
}

}
