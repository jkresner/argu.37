window.argu = {
  timer: {
    start: new Date().getTime(),
    log: function(lb, begin) {
      begin = begin ? begin.getTime() : argu.timer.start
      console.log((new Date().getTime() - begin)+' ms\t', lb)
    }
  },
  $: function(selector, scope) {
    var elm = null
    var scoped = scope || document
    if (selector[0]=='#') {
      if (argu.dom[selector]) elm = argu.dom[selector]
      else {
        elm = scoped.getElementById(selector.replace('#',''))
        if (elm) argu.dom[selector] = elm
      }
    }
    else {
      var key = (scope?scope.id+' ':'')+selector
      if (argu.dom[key]) elm = argu.dom[key]
      else {
        elm = scoped.getElementsByTagName(selector)
        if (elm) argu.dom[key] = elm
      }
    }
    return elm
  },
  dom:{},data:{},cmd:{}
}

var $ = argu.$


document.addEventListener("DOMContentLoaded", function(event) {
  argu.timer.log('DOMLoaded')
  if (argu_onload) { argu_onload() }
})


argu.showImd = function() {
  var scrollable = $('#set')
  if (!argu.dom.imd) {
    argu.dom.imd = $('imd') || []
    if (scrollable)
      scrollable.addEventListener('scroll', argu.showImd)
    console.log("scroll.addEventListener")
  }
  if (argu.dom.imd.length==0) {
    if (scrollable)
      scrollable.removeEventListener("scroll", argu.showImd)
    console.log("scroll.removeEventListener")
    return
  }
  var above = 4000

  for (var i=0;i<argu.dom.imd.length;i++) {
    var imd = argu.dom.imd[i]
    var top = imd.getBoundingClientRect().top
    // console.log('argu.dom.imd[i]', argu.dom.imd[i].offsetTop)
    if (top < above) imd.outerHTML = imd.outerHTML
                        .replace('</imd>','')
                        .replace('<imd ','<img ')
  }
  argu.dom.imd = $('imd')
}


argu.cmd.cp = function(val, join) {
  var cdp = argu.dom['#cpd'] || $('#cpd')
  var prev = cpd.value
  cpd.value = val
  cpd.select()
  document.execCommand("copy")
  console.log('cp:'+ (/\n/g.test(val) ? '\n'+cpd.value : cpd.value))
  if (join) cpd.value = prev+join+val
  var nlrows = (cpd.value.match(/\n/g)||[]).length
  cpd.setAttribute('rows', nlrows > 3 ? nlrows+1 : 4)
}

var url = window.location.href
var search = window.location.search
var filters_on = []

argu.modeToggle = function() {
  var mode_thread = $('#mode_thread')
  if (search == "") {
    if (mode_thread.checked)
      window.location = url+"?mode=thread"
  } else {
    if (mode_thread.checked && !/mode=thread/i.test(search))
      window.location = url+"&mode=thread"
    else if (!mode_thread.checked && /mode=thread/i.test(search))
      window.location = url.replace(/mode=thread/i,"")
  }
}

argu.reverseSet = function() {
  if (search=="")
    window.location = url+"?newest=1"
  else if (!/newest=1/i.test(search))
    window.location = url+"&newest=1"
  else
    window.location = url.replace("newest=1","")
}


argu.filterSet = function(cb) {
  var start = new Date()
  var filter = cb ? cb.id.replace('f_','') : 'none'
  var srcs = $('#srcs')
  var mode = srcs.getAttribute('data-mode')
  var lb = 'filterSet['+srcs.children.length+']'+mode+':'+filter
  argu.timer.log(lb, start)
  srcs.removeAttribute('style')


  var setList = [], show = [], swap = [], hide = [], thrds = {}
  if (cb) {
    var idx = filters_on.indexOf(filter)
    if (idx == -1 && cb.checked) filters_on.push(filter)
    else if (!cb.checked && idx > -1) filters_on.splice(idx, 1)
    console.log('['+filters_on.join(',')+']matched', setList.length)
    filters_on.forEach(function(f) { setList = setList.concat(argu.data.filters[f]) })
  }

  var threadCurrent = null
  var msgs = srcs.children

  if (mode == 'thread' && setList.length > 0) {
    var showThread = {}
    for (var i = 0; i < msgs.length; i++) {
      var m = msgs[i]
      if (setList.indexOf(m.id) > -1) showThread[m.getAttribute('data-thread')] = true
    }
    for (var i = 0; i < msgs.length; i++) {
      var m = msgs[i]
      if (!showThread[m.getAttribute('data-thread')]) hide.push(m)
      else {
        var thread = m.getAttribute('data-thread')
        show.push(m)
        if (!thrds[thread]) thrds[thread] = 1
        if (threadCurrent != thread) { swap.push(m.id);threadCurrent = thread }
      }
    }
  }
  else {
    for (var i = 0; i < msgs.length; i++) {
      var m = msgs[i]
      //console.log('cb', cb)
      if (cb && (setList.length == 0 || setList.indexOf(m.id) == -1)) hide.push(m)
      else {
        var thread = m.getAttribute('data-thread')
        show.push(m)
        if (!thrds[thread]) thrds[thread] = 1
        if (threadCurrent != thread) { swap.push(m.id);threadCurrent = thread }
        // console.log('m.li id=', id, 'data-thread=', thread, '==', threadCurrent, threadCurrent != thread)
      }
    }
  }
  hide.forEach(function(li) { li.classList = 'n' })
  show.forEach(function(li) {
    li.classList = swap.indexOf(li.id) > -1 ? 'swap' : '';
    if (argu.insertLBs) argu.insertLBs(li)
  })
  var first = show[0], last = show[show.length-1];
  if (/(thread|message)/.test(mode))
    $('#v_threads').innerHTML = Object.keys(thrds).length
  $('#v_shown').innerHTML = show.length

  if (first) {
    var time_from = moment($('time',first)[0].innerHTML, "HH:mm DD MMM YYYY")
    var time_to = moment($('time',last)[0].innerHTML, "HH:mm DD MMM YYYY")
    var time_dif = time_from.diff(time_to)
    var time_days = parseInt(moment.duration(time_dif).asDays()) * (time_dif>0?1:-1)
    $('#v_from').innerHTML = time_from.format('YYYY DD-MM')
    $('#v_to').innerHTML = time_to.format('YYYY DD-MM')
    $('#v_days').innerHTML = time_days
  }
  srcs.setAttribute("style","display:block")

  argu.showImd()
  argu.timer.log(lb+'['+show.length+']:done', start)
}
