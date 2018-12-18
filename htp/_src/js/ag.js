(function(){ window.ag = {
  timer: {
    start: new Date().getTime(),
    log: function(lb, begin) {
      begin = begin ? begin.getTime() : ag.timer.start
      console.log((new Date().getTime() - begin)+' ms\t', lb)
    }
  },
  $: function(selector, scope) {
    var elm = null
    var scoped = scope || document
    if (selector[0]=='#') {
      if (ag.dom[selector]) elm = ag.dom[selector]
      else {
        elm = scoped.getElementById(selector.replace('#',''))
        if (elm) {
          ag.dom[selector] = elm
          elm.data = function(key) { return elm.getAttribute('data-'+key) }
        }
      }
    }
    else {
      var key = (scope?scope.id+' ':'')+selector
      if (ag.dom[key]) elm = ag.dom[key]
      else {
        elm = scoped.getElementsByTagName(selector)
        if (elm) ag.dom[key] = elm
      }
    }
    return elm
  },
  dom:{},
  data:{}
}

var $log = console.log
var $ = ag.$
var url = window.location.href
var search = window.location.search


document.addEventListener("DOMContentLoaded", function(event) {
  ag.timer.log('DOMLoaded')
  if (ag_onload) { ag_onload(); ag.timer.log('ag_onloaded') }
  else { ag.timer.log('ag_loaded') }
})


ag.cmd = {
  imd2g: function(scopeId) {
    var scoped = scopeId ? $('#'+scopeId) : null
    var imd = $('imd', scoped)

    if (scoped)
      scoped.addEventListener('scroll', ag.cmd.img2g)
      // console.log("scroll.addEventListener")

    if ((imd||[]).length==0) {
      if (scoped)
        scoped.removeEventListener('scroll', ag.cmd.img2g)
      // console.log("scroll.removeEventListener")
      return
    }

    for (var i=0;i<imd.length;i++) {
      if (imd[i].getBoundingClientRect().top < 4000)
        imd[i].outerHTML = imd[i].outerHTML.replace('</imd>','').replace('<imd ','<img ')
    }

    return $('imd', scoped) // update ag.dom cache
  },
  cp: function(val, join) {
    var cdp = $('#cpd')
    var prev = cpd.value
    cpd.value = val
    cpd.select()
    document.execCommand("copy")
    console.log('cp:'+ (/\n/g.test(val) ? '\n'+cpd.value : cpd.value))
    if (join) cpd.value = prev+join+val
    var nlrows = (cpd.value.match(/\n/g)||[]).length
    cpd.setAttribute('rows', nlrows > 3 ? nlrows+1 : 4)
  }
}


var f_chkd = []

ag.srcs = {
  toggleStack: function() {
    var isThreads = $('#stack_thread').checked
    if (search == "") {
      if (isThreads)
        window.location = url+"?stack=thread"
    } else {
      if (isThreads && !/stack=thread/i.test(search))
        window.location = url+"&stack=thread"
      else if (!isThreads && /stack=thread/i.test(search))
        window.location = url.replace(/stack=thread/i,"")
    }
  },
  toggleOrder: function() {
    if (search=="") window.location = url+"?newest=1"
    else if (!/newest=1/i.test(search)) window.location = url+"&newest=1"
    else window.location = url.replace("newest=1","")
  },
  filter: function(ul, cbx) {
    var start = new Date()
    var stack = ul.data('stack')
    var fltr = cbx ? cbx.id.replace('f_','') : 'none'
    var lb = 'srcs.filter['+ul.children.length+']('+fltr+',stack:'+stack+')'
    ag.timer.log(lb, start)
    ul.removeAttribute('style')

    $log('srcs.filter.cbx', cbx, 'fltr', fltr, 'stack', stack)
    $log('srcs.filter.lb', lb, 'ul', ul)
    $log('srcs.filter.f_chkd', f_chkd)

    var filtered = [], show = [], swap = [], hide = [], thrds = {}
    if (cbx) {
      var idx = f_chkd.indexOf(fltr)
      if (idx == -1 && cbx.checked) f_chkd.push(fltr)
      else if (!cbx.checked && idx > -1) f_chkd.splice(idx, 1)
      console.log('srcs.filter.['+f_chkd.join(',')+']matched', filtered.length)
      f_chkd.forEach(function(f) { filtered = filtered.concat(ag.data.filtered[f]) })
    }

    var currentt = null
    var srcs = ul.children

    if (stack == 'thread' && filtered.length > 0) {
      var hasht = {}
      for (var i = 0; i < srcs.length; i++) {
        var m = srcs[i]
        var t = m.getAttribute('data-thread')
        if (filtered.indexOf(m.id) > -1) hasht[t] = true
      }
      for (var j = 0; j < srcs.length; j++) {
        var m = srcs[j]
        var t = m.getAttribute('data-thread')
        if (!hasht[t]) hide.push(m)
        else {
          show.push(m)
          if (!thrds[t]) thrds[t] = 1
          if (currentt != t) swap.push(m.id)
          currentt = t
        }
      }
    }
    else {
      for (var i = 0; i < srcs.length; i++) {
        var m = srcs[i]
        //console.log('cbx', cbx)
        if (cbx && (filtered.length == 0 || filtered.indexOf(m.id) == -1)) hide.push(m)
        else {
          var t = m.getAttribute('data-thread')
          // var is = m.data('is')
          // console.log('m.is', is)
          show.push(m)
          if (!thrds[t]) thrds[t] = 1
          if (currentt != t) swap.push(m.id)
          currentt = t
          // console.log('m.li id=', id, 'data-thread=', thread, '==', threadCurrent, threadCurrent != thread)
        }
      }
    }
    hide.forEach(function(li) { li.classList = 'n' })
    show.forEach(function(li) {
      var is = li.getAttribute('data-is')
      li.classList = swap.indexOf(li.id) > -1 ? is+' swap' : is;
      if (ag.srcs.insertLBs) ag.srcs.insertLBs(li)
    })
    var first = show[0], last = show[show.length-1];
    // if (/(thread|message)/.test(stack))
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
    ul.setAttribute("style","display:block")

    ag.cmd.imd2g(ul)
    ag.timer.log(lb+'['+show.length+']:done', start)
  }
}
})()
