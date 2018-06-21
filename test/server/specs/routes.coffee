OK = null
okStatus = (status, contentType) -> (check) ->
  PAGE TEST.title, { status,contentType }, (resp) ->
    if check?
      expect(resp).inc(check)
    DONE()


module.exports = ->


  DESCRIBE "200", ->

    DESCRIBE "Static", ->
      IT "/favicon.ico", -> okStatus(200, /image/)()
      IT "/robots.txt", -> okStatus(200, /text\/plain/)("Disallow: /media/")
      IT "/sitemap.xml", -> okStatus(200, /application\/xml/)()

    DESCRIBE "Print", ->
      IT "/print/all", -> okStatus(200, /text/)()

    DESCRIBE "Web", ->
      IT "/", -> okStatus(200, /text/)()


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
      IT "/img/author.jpg", -> okStatus(200, /jpeg/)()
      IT "/img/474-ptt-google.png", -> okStatus(200, /png/)()
      IT "/img/jk-afr-airpair-yc-crop.jpg", -> okStatus(200, /image/)()

    DESCRIBE "Attachments", ->
      IT "/atchd/15bfb424f2a77dda__image_123923953.JPG__inln.jpg", -> okStatus(200, /jpeg/)()


  DESCRIBE "200 Empty", ->

    before -> OK = okStatus 200, /text\/html/

    IT "/Admin", -> OK()
    IT "/administrator/", -> OK()
    IT "/adm/ltld", -> OK()
    IT "/_admin/", -> OK()
    IT "/CMS", -> OK()
    IT "/cms/admin", -> OK()
    IT "/index.php", -> OK()
    IT "/Login/To%20view%20a%20profile", -> OK()
    IT "/wp-json/wp/v2/users/", -> OK()
    IT "/wp-includes/wlwmanifest.xml", -> OK()
    IT "/rutss96954.txt", -> OK()


  DESCRIBE "301", ->

    before -> OK = okStatus 301, /text/

    IT "/intro", -> OK()


  DESCRIBE "403", ->

    IT "[HEAD] /", ->
      PAGE "/", { status:403, method: 'head' }, (resp) ->
        expect(resp).to.be.undefined
        DONE()
