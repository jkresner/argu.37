module.exports = (DAL) => ({

  sys: {

    logAct: (on, action) => 
      honey.logic.DRY.logAct(on, action, 
        { _id: DAL.User.toId(honey.cfg('log.sysId')), name:'sys' })

  }

})



