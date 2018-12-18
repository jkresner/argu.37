DESCRIBE "RENDER", ->

  IT "gmail", ->
    typed = honey.projector.sources.Project.typed_gmail
    m1 = typed(FIXTURE.clone('sources.renofoorplan'))
    expect(m1.gmail.attached.length).to.equal(1)
    # OI('m1', m1.gmail)
    expect(m1.gmail.attached[0].filename).to.equal('IMG_4587.PNG')
    m = typed(FIXTURE.clone('sources.asbes'))
    expect(m.gmail.attached.length).to.equal(1)
    expect(m.gmail.attached[0].filename).to.equal('R13314 - Testing of Suspected ACM.pdf')
    m = typed(FIXTURE.clone('sources.contUpd'))
    expect(m.gmail.attached.length).to.equal(0)
    expect(m.md).to.exist
    expect(m.md.raw).to.exist
    # expect(m.gmail.md.raw).to.exist
    # expect(m.gmail.md.body).to.exist
    m = typed(FIXTURE.clone('sources.pdfSpace'))
    expect(m.gmail.attached.length).to.equal(1)
    expect(m.gmail.attached[0].filename).to.equal("PRO0053 1058.pdf")
    expect(m.md).to.exist
    expect(m.md.raw).to.exist
    DONE()


  IT "snippet", ->
    typed = honey.projector.sources.Project.typed_snippet
    src = FIXTURE.clone('sources.mthCash')
    # OI "src", src
    r = typed(src)
    # OI "r", r
    expect(r.gmail).to.be.undefined
    expect(r.md).attrs('body snippet')
    expect(r.md.body).inc("<figure id=\"fig_170430_oc-cash-apr\" class=\"pdf snippet\">")
    # expect(r.md.body).inc(src.md.snippet)
    DONE()


  # IT "doc", ->
    # typed = honey.projector.sources.Project.typed_doc
    # s1 = typed(FIXTURE.clone('sources.xxxxx'))
    # DONE()


  # IT "img", ->
    # typed = honey.projector.sources.Project.typed_img
    # s1 = typed(FIXTURE.clone('sources.xxxxx'))
    # DONE()
