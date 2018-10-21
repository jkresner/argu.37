OK = null
okStatus = (status, contentType) -> (check) ->
  PAGE TEST.title, { status,contentType }, (resp) ->
    if check?
      expect(resp).inc(check)
    DONE()


module.exports = ->


  DESCRIBE "200 Empty", ->
    before -> OK = okStatus 200, /text\/html/
    IT "/Admin", -> OK()
    IT "/administrator/", -> OK()
    # IT "/adm/ltld", -> OK()
    IT "/_admin/", -> OK()
    IT "/CMS", -> OK()
    IT "/cms/admin", -> OK()
    IT "/index.php", -> OK()
    IT "/Login/To%20view%20a%20profile", -> OK()
    IT "/wp-json/wp/v2/users/", -> OK()
    IT "/wp-includes/wlwmanifest.xml", -> OK()
    IT "/rutss96954.txt", -> OK()


  DESCRIBE "favicons", ->
    IT "/favicon.ico", -> okStatus(200, /image/)()
    IT "/apple-icon-76x76.png", -> okStatus(200, /x-icon/)()
    IT "/apple-icon-precomposed.png", -> okStatus(200, /x-icon/)()
    IT "/android-icon-96x96.png", -> okStatus(200, /x-icon/)()
    IT "/ms-icon-144x144.png", -> okStatus(200, /x-icon/)()
    IT "/manifest.json", -> okStatus(200, /json/)()
    IT "/browserconfig.xml", -> okStatus(200, /xml/)()


  DESCRIBE "static", ->
    DESCRIBE "img", ->
      IT.skip "/img/author.jpg", -> okStatus(200, /jpeg/)()
      IT.skip "/img/474-ptt-google.png", -> okStatus(200, /png/)()
      IT.skip "/img/jk-afr-airpair-yc-crop.jpg", -> okStatus(200, /image/)()
    DESCRIBE "Attachments", ->
      IT.skip "/atchd/15bfb424f2a77dda__image_123923953.JPG__inln.jpg", -> okStatus(200, /jpeg/)()


  DESCRIBE "200", ->
    DESCRIBE "Static", ->
      IT "/robots.txt", -> okStatus(200, /text\/plain/)("Disallow: /admin/")
      IT "/sitemap.xml", -> okStatus(200, /xml/)()
    DESCRIBE "Print", ->
      SKIP "/print/all", -> okStatus(404, /text/)()
    DESCRIBE "Web", ->
      IT "/", -> okStatus(200, /text/)()
      IT "/strata-living/toc", -> okStatus(200, /text/)()


  DESCRIBE "301", ->
    before -> OK = okStatus 301, /text/
    IT.skip "/intro", -> OK()
    IT.skip "/toc", -> okStatus(200, /text/)()


  DESCRIBE "403", ->
    IT "[HEAD] /", ->
      PAGE "/", { status:403, method: 'head' }, (resp) ->
        expect(resp).to.be.undefined
        DONE()
