module.exports = (app, mw, ops) => ops['bot'].off ? 0 :

  honey
    .Router('bot', ops.bots)

    .head('*',
      (req, res) => res.status(403).send(''))

    .all(/(\.php|wp-|.txt)/i,
      (req, res) => res.status(200).send(''))

    .all(/^\/(_|admin|cms|system|login\/)/i,
      (req, res) => res.status(200).send(''))

    .get(['*favicon*',
          '*apple-icon*',
          '*android-icon*',
          '*ms-icon*'], (req, res) =>
            res.sendFile('favicon.ico', config.http.static.favicon))

