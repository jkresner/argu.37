module.exports = {

// datetime: {
  ago:     function(t) { return moment(t).fromNow() },
  day:     function(t) { return moment(t).format('MMM DD') },
  dayIso:  function(t) { return moment(t).format('YYYY-MM-DD') },
  daytime: function(t) { return moment(t).format('HH:mm MMM DD YYYY')
                                         .replace('00:00 ','') },
  tzIso:   function(time, tz) {
    var today = moment.tz(tz.id).startOf('day').unix()
    var t = moment.unix(time).tz(tz.id)
    return t.format('MMM') + ' ' + t.format('DD') + ' on ' + t.format('ddd')
  }
// }

}
