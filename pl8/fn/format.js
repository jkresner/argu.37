let datetime = {
  ago:     function(t) { return moment(t).fromNow() },
  day:     function(t) { return moment(t).format('MMM DD') },
  dayIso:  function(t) { return moment(t).format('YYYY-MM-DD') },
  daytime: function(t) { return moment(t).format('HH:mm MMM DD YYYY')
                                         .replace('00:00 ','') },
  tzIso:   function(time, tz) {
    let today = moment.tz(tz.id).startOf('day').unix()
    let t = moment.unix(time).tz(tz.id)
    return `<time>${t.format('MMM')} <i class="fa fa-calendar-o" aria-hidden="true"><b>${t.format('DD')}</b></i></time> <em>${climbing} on <b>${t.format('ddd')}</b></em> `
  }
}

let log = {

}


module.exports = Object.assign(datetime, log)
