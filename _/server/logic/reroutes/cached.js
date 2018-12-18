module.exports = (DAL, Data, DRY) => ({


  exec(cb) {
    return {
      "301": [
        { from: '/intro', to: '/' }
      ]
    }
  }


})

