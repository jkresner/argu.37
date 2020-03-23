(function(){
/*
*/
window.$log = function () { if (true) console.log.apply(this, arguments) }
window.ag = {
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
  data:{},
  /*mup: function() {
    focusd([md],{},{})
  }*/
}
/*
*/
window.$ = ag.$

document.addEventListener("DOMContentLoaded", function(event) {
  $.mtz = window.moment

  ag.timer.log('DOMLoaded')
  if (window.ag_onload) { 
    ag_onload(); 
    ag.timer.log('ag_onloaded') 
  }
  else { ag.timer.log('ag_loaded') }
})


ag.cmd = {
  imd2g: function(scopeId) {
    var scoped = scopeId ? $('#'+scopeId) : null
    var imd = $('imd', scoped)

    if (scoped)
      scoped.addEventListener('scroll', ag.cmd.img2g)
      
    if ((imd||[]).length==0) {
      if (scoped)
        scoped.removeEventListener('scroll', ag.cmd.img2g)
      return
    }

    for (var i=0;i<imd.length;i++) {
      if (imd[i].getBoundingClientRect().top < 4000)
        imd[i].outerHTML = imd[i].outerHTML.replace('</imd>','').replace('<imd ','<img ')
    }

    return $('imd', scoped) // update ag.dom cache
  },
  // Copy to clipboard 
  // + set or append value in nav textarea
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

var url = window.location.href
var search = window.location.search
var f_chkd = []

ag.srcs = {
   // function fLb(v, id) {
     // var f = v.innerHTML.replace('<i>J</i>','JK_')
     //                    .replace('<i>O</i>','OC_')
     //                    .replace('<i>A</i>','SA_')
     //                    .replace('<i>C</i>','SC_')
     // var on = !/on/.test(v.getAttribute('class'))
     // v.setAttribute('class', on?'on':'')
     // ups[f] = ups[f] || { ins: [], rm: [] }
     // var saved = ag.data.filters[f].indexOf(id) > -1
     // if (saved) {
     //   var idxRm = ups[f].rm.indexOf(id)
     //   if (on && idxRm > -1) ups[f].rm.splice(idxRm, 1)
     //   else if (idxRm == -1) ups[f].rm.push(id)
     // }
     // else {
     //   var idxIns = ups[f].ins.indexOf(id)
     //   if (on && idxIns == -1) { ups[f].ins.push(id) }
     //   else if (idxIns > -1) ups[f].ins.splice(idxIns, 1)
     // }
     // var cmd = ''
     // Object.keys(ups).forEach(function(u) {
     //   var ins = ups[u].ins
     //   var rm = ups[u].rm
     //   if ((ins.length + rm.length) > 0)
     //     cmd += "up('"+u+"',"
     //       + (ins.length > 0 ? "'"+ins.join(",")+"'," : "null,")
     //       + (rm.length > 0 ? "'"+rm.join(",")+"')" : "null)") + '\n'
     // })
     // ag.cmd.cp(cmd)
   // },
  // function insLbs(li) {
    // var html = ""
    // ag.data.filters.forEach(function(name) {
    //   if (ag.data.lb_static.indexOf(name) != -1) return
    //   var css = ag.data.filtered[name].indexOf(li.id) == -1 ? '' : css = ' class="on"';
    //   var id = "'"+li.id+"'"
    //   html += '<var onclick="lb(this, '+id+')"'+css+'>'+
    //    name.replace('JK_','<i>J</i>')
    //        .replace('OC_','<i>O</i>')
    //        .replace('SA_','<i>A</i>')
    //        .replace('SC_','<i>C</i>')+'</var>';
    // })
    // li.getElementsByTagName('footer')[0].innerHTML = html
  // }
  toggleStack: function() {
    var isThreads = $('#stack_thread').checked
    if (search == "") {
      if (isThreads)
        window.location = url+"?stack=thread"
    } else {
      if (isThreads && !/stack=thread/i.test(search))
        window.location = url+"&stack=thread"
      else if (!isThreads && /stack=thread/i.test(search))
        window.location = url.replace(/(&|)stack=thread/i,"")
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
    var lb = 'filters['+ul.children.length+']('+fltr+',stack:'+stack+')'
    
    ag.timer.log(lb, start)
    ul.removeAttribute('style')

    $log('ag.cbx', cbx, 'fltr', fltr, 'stack', stack)
    $log('ag.lb', lb, 'ul', ul)
    $log('ag.chkd', f_chkd)

    var filtered = [], show = [], swap = [], hide = [], thrds = {}
    if (cbx) {
      var idx = f_chkd.indexOf(fltr)
      if (idx == -1 && cbx.checked) f_chkd.push(fltr)
      else if (!cbx.checked && idx > -1) f_chkd.splice(idx, 1)
      
      $log('srcs.filter.['+f_chkd.join(',')+'] matched', filtered.length)
      f_chkd.forEach(function(f) { 
        filtered = filtered.concat(ag.data.filtered[f]||[]) })
      
      if (f_chkd.length == 0 && !cbx.checked) cbx = null
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
      $log('cbx', cbx, filtered.length, filtered)
      for (var i = 0; i < srcs.length; i++) {
        var m = srcs[i]
        var mid = m.id.replace('li_','')
        if (cbx && (filtered.length == 0 || filtered.indexOf(mid) == -1)) hide.push(m)
        else {
          var t = m.getAttribute('data-thread')
          //var is = m.getAttribute('data-is')
          //$log('mm.is', is, t)
          show.push(m)
          if (!thrds[t]) thrds[t] = 1
          if (currentt != t) swap.push(m.id)
          currentt = t
          // $log('m.li is=', is, 'data-thread=', thread, '==', threadCurrent, threadCurrent != thread)
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
      console.log('$.mtz', first)
      var time_from = $.mtz($('time',first)[0].innerHTML, "HH:mm DD MMM YYYY")
      var time_to = $.mtz($('time',last)[0].innerHTML, "HH:mm DD MMM YYYY")
      var time_dif = time_from.diff(time_to)
      var time_days = parseInt($.mtz.duration(time_dif).asDays()) * (time_dif>0?1:-1)
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
