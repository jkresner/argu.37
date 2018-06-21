sharp = require('sharp')
textify = require('pdf-text-extract')

module.exports = ->


  IT.only ".pdf text dump ", ->
    # file = "1569b247739de09a__2016-08-17-Jonathon Kresner- re unit 36-37 Paul St-Shower.pdf"
    # pwdIN = join(__dirname,"/../../../../", "fs/atchd", file)
    # file = 'Shower1.pdf'
    file = '7535.pdf'
    pwdIN = join(__dirname,"/../../", "data", file)
    $log('pwdIN'.cyan, pwdIN)
    textify pwdIN, {cwd:"./",splitPages:false}, (e, pages) =>
      DONE(e) if (e)
      $log('page', pages)
      DONE()


  IT "Resize attached img", ->
    pwdIN = __dirname+"/../../data/IMG_7164.JPG"
    buf = require('fs').readFileSync(pwdIN)
    sharp(buf)
      .resize(320, 240)
      # .jpg({quality:80})
      .toFile pwdIN+'__inln.jpg', (err, info) =>
        $log('err', err)
        $log('info', info)

