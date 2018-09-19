module.exports = (app, mw) => {


  app.API('source')
    .params('source')
    .uses('authd')
    // .get ({ listPost:            ''                    })
  //   .post({ createPost:          'body place'          })
    // .get({ deleteSource:        'source'                })
    // .delete({ deletePost:        'post'                })


}
