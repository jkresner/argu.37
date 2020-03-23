global.LAW_IMPORT = PRE_COUNT: 0, POST_COUNT: 423 # 93

module.exports = () =>

  DESCRIBE "1 tags", require('../../import/task/tags')
  DESCRIBE "2 laws", require('../../import/task/laws')
  DESCRIBE "3 sources", -> require('./task/sources')
  DESCRIBE "4 content", -> require('./task/content')
