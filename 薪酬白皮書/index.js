let slide = document.querySelector('#slide')
let abc = document.querySelector('#industryList1')
let open = 0
//slide anamite
slide.addEventListener('click', function (event) {
  let property = $(event.target).attr('list')
  console.log(property)
  if (open === 0) {
    // console.log(event.target.className)
    slideOpen(property, event.target)
  } else if ((open === 1) && (event.target.classList.contains('x'))) {
    d3.select('body').selectAll('.chart').remove()
    slideClose(event.target.parentElement)
  }
})
//slide open
function slideOpen(property, e) {
  let canvas = '#' + $(e).attr('id') + 'canvas'
  $('.unit-container .a').velocity(
    {
      opacity: 0,
    },
    {
      duration: 200,
      easing: 'easeInSine',
      complete: function () {
        $('.unit-container .a').velocity(
          { display: 'none' }, { duration: 200 }
        )
      }
    }
  )
  $(e).velocity(
    {
      width: '900px',
      margin: '30px 0px',
    },
    {
      duration: 300,
      easing: 'easeInSine',
      complete: function () {
        $('.tabs,.x').velocity({ display: 'block' }).velocity(
          {
            top: '-30px',
          }
        )
        $(canvas).velocity({ display: 'grid' })
      }
    }
  )
  $(".slide").css("position", "absolute").velocity(
    {
      width: "10000px",
      left: -$(event.target).position().left,
    },
    {
      duration: 300,
      easing: "easeInSine",
      complete: function () {
        if ((canvas == '#u1canvas') || (canvas == '#u2canvas')) {
          chart(1, e, property, 0, 0, 0)
        }
      }
    }
  )
  $('.slide-unit').css('borderRadius', '0px 0px 10px 10px')
  open = 1
}
//slide close
function slideClose(e) {
  //清空選單
  $('.industryList').empty()
  //清空內容
  $('.unit-container .c,.unit-container .b').velocity({ display: 'none' },
    {
      duration: 0
    })
  $(e).velocity(
    {
      width: '200px',
      margin: '30px 20px',
    },
    {
      duration: 300,
      easing: "easeInSine",
      complete: function () {
        $('.x,.tabs').velocity(
          {
            top: '0px',
          }
        ).velocity({ display: "none" })
        $('.unit-container .a').velocity(
          {
            display: 'grid',
          },
          {
            duration: 100,
            easing: 'easeInSine',
            complete: function () {
              $('.unit-container .a').velocity({ opacity: 1, })
            }
          }
        )
      }
    }
  )
  $(".slide").css("position", "relative").velocity(
    {
      width: 'auto',
      left: '0px',
    },
    {
      duration: 300,
      easing: "easeInSine",
    }
  )
  $('.slide-unit').css('borderRadius', '10px 0px 10px 10px')
  open = 0
}

function chart(drawChart, e, property, showUserInput, PRswitch, userlineinput) {
  console.log(property)
  let datatest = list.sort(compare(property)).slice(0, 5).concat(adjust)
  function compare(property) {
    return function (obj1, obj2) {
      var value1 = obj1[property]
      var value2 = obj2[property]
      return value2 - value1
    }
  }
  //PR adjust
  let propertyP75 = property + 'P75'
  let propertyP25 = property + 'P25'
  //變數
  let min = d3.min(datatest, (d) => { return d[property] })
  let max = d3.max(datatest, (d) => { return d[property] })
  if (property == 'Past5YearAnnualSalary' || property == 'YearEndBonuses') {
    max = d3.max(datatest, (d) => { return d[propertyP75] })
  }
  let scaleHeight = d3.scaleLinear().domain([min, max])
    .range([0, 300])
  let rescaleHeight = d3.scaleLinear().domain([max, min])
    .range([0, 300])
  let axis = d3.axisLeft(rescaleHeight).ticks(8)
  if (property == 'Past5YearAnnualSalaryIncrease' || property == 'PayScale') {
    axis.tickFormat(function (d) { return d + '%'; })
  } else if (property == 'YearEndBonuses') {
    axis.tickFormat(function (d) { return d + '個月'; })
  } else if (property == 'Past5YearAnnualSalary') {
    axis.tickFormat(function (d) {
      return d + '元';
    })
  }


  if (drawChart == 1) {
    d3.select('body').selectAll('.chart').remove()
    //canvas
    let tamade = '#' + $(e).attr('id')
    let tamade1 = '#' + $(e).attr('id') + 'List'
    let svg = d3.select('body').select(tamade).select('.b').append("svg").attr('class', 'chart').attr("width", "570").attr("height", "450")
    let group = svg.selectAll("g").data(list.sort(compare(property)).slice(0, 5)).enter()
    //axis
    let yAxis = svg.append('g').call(axis).attr('class', 'axis').style("transform", "translate(70px,80px)").selectAll('line').attr('x2', '700').attr('stroke', '#F7F7F7').attr('stroke', '#F7F7F7')
    //Bar
    group.append("g").style('stroke-width', '0px').append('rect').attr("class", "bar").attr("x", (d, i) => i * 80 + 70).attr("width", "40").attr("height", (d) => scaleHeight(d[property])).style('stroke-width', '0px').attr('fill', '#FADEAE').attr("y", (d) => 380).transition().duration(1000).attr("y", (d) => 380 - scaleHeight(d[property]))
    //Pointer
    group.append('image').attr("class", "pointer").attr('xlink:href', 'img/元件-28.svg').attr("width", "44.3").attr("height", "15").attr("y", (d) => 410).attr("x", (d, i) => i * 80 + 70).style('stroke-width', '0px').transition().duration(1000).attr("y", (d) => 380 - scaleHeight(d[property]) - 7)
    //animation hover
    svg.append('rect').attr('x', 70).attr('y', 380).attr("width", 500).attr("height", 200).attr('fill', '#fff')
    //text
    group.append('text').text(d => d.Industry.slice(0, 4)).attr("x", (d, i) => i * 80 + 63).attr("y", 400).attr("class", "bar-text")
    group.append('text').text(d => d.Industry.slice(4, 8)).attr("x", (d, i) => i * 80 + 63).attr("y", 420).attr("class", "bar-text")
    group.append('text').text(d => d.Industry.slice(8, 12)).attr("x", (d, i) => i * 80 + 63).attr("y", 440).attr("class", "bar-text")
    //resetList
    list.sort(recompare('Origin'))

    //表單選項
    $(tamade1).empty()
    for (i = 0; i < list.length; i++) {
      // console.log(document.querySelector(tamade1))
      document.querySelector(tamade1).innerHTML += `
  <option value="${i}" property="${property}" class="userchoose">${list[i].Industry}</option>
  `
      //     abc.innerHTML += `
      // <option value="${i}" property="${property}" class="userchoose">${list[i].Industry}</option>
      // `
    }
  }

  if (PRswitch == 1) {
    if (property == 'Past5YearAnnualSalary' || property == 'YearEndBonuses') {
      PRchart()
    }
  }

  function PRchart() {
    //PR Bar
    let PR = d3.select('body').select('.chart').append("svg").attr("width", "600").attr("height", "450").attr('class', 'userPR')
    let groupLine = PR.selectAll("g").data(list.sort(compare(property)).slice(0, 5)).enter()
    //P75
    groupLine.append("g").style('stroke-width', '0px').append('rect').attr("class", "bar").attr("x", (d, i) => i * 80 + 70).attr("width", "40").style('stroke-width', '0px').attr('fill', '#F4A929')
      .attr("height", (d) => scaleHeight(d[propertyP75]) - scaleHeight(d[property]))
      .attr("y", (d) => 380 - scaleHeight(d[propertyP75]))
    //P25
    groupLine.append("g").style('stroke-width', '0px').append('rect').attr("class", "bar").attr("x", (d, i) => i * 80 + 70).attr("width", "40").style('stroke-width', '0px').attr('fill', '#F4A929')
      .attr("height", (d) => scaleHeight(d[property]) - scaleHeight(d[propertyP25]))
      .attr("y", (d) => 380 - scaleHeight(d[property]))
    // PR Pointer
    groupLine.append('image').attr("class", "pointer").attr('xlink:href', 'img/元件-27.svg').attr("width", "44.3").attr("height", "15").attr("x", (d, i) => i * 80 + 70).style('stroke-width', '0px').attr("y", (d) => 380 - scaleHeight(d[propertyP75]) - 7)
    groupLine.append('image').attr("class", "pointer").attr('xlink:href', 'img/元件-27.svg').attr("width", "44.3").attr("height", "15").attr("x", (d, i) => i * 80 + 70).style('stroke-width', '0px').attr("y", (d) => 380 - scaleHeight(d[propertyP25]) - 7)
    groupLine.append('image').attr("class", "pointer").attr('xlink:href', 'img/元件-28.svg').attr("width", "44.3").attr("height", "15").attr("x", (d, i) => i * 80 + 70).style('stroke-width', '0px').attr("y", (d) => 380 - scaleHeight(d[property]) - 7)
    //resetList
    list.sort(recompare('Origin'))
  }

  if (showUserInput == 1) {
    //showUserInput
    $('.userSvg').remove()
    let userSvg = d3.select('body').select('.chart').append("svg").attr("width", "600").attr("height", "500").attr('class', 'userSvg')
    let userGroup = userSvg.selectAll("g").data(UserList).enter()
    //showUserInput - Bar
    userGroup.append("g").style('stroke-width', '0px').append('rect').attr("class", "bar").attr("x", (d, i) => i * 80 + 470).attr("width", "40").attr("height", (d) => scaleHeight(d[property])).style('stroke-width', '0px').attr('fill', '#603813').attr("y", (d) => 380).transition().duration(1000).attr("y", (d) => 380 - scaleHeight(d[property]))
    //showUserInput - Pointer
    userGroup.append('image').attr("class", "pointer").attr('xlink:href', 'img/元件-28.svg').attr("width", "44.3").attr("height", "15").attr("y", (d) => 380).attr("x", (d, i) => i * 80 + 470).style('stroke-width', '0px').transition().duration(1000).attr("y", (d) => 380 - scaleHeight(d[property]) - 7)
    //showUserInput - animation hover
    userSvg.append('rect').attr('x', 440).attr('y', 380).attr("width", 500).attr("height", 200).attr('fill', '#fff').style('stroke-width', '0px')
    //showUserInput - text
    userGroup.append('text').text(d => d.Industry.slice(0, 4)).attr("x", (d, i) => i * 80 + 463).attr("y", 400).attr("class", "bar-text")
    userGroup.append('text').text(d => d.Industry.slice(4, 8)).attr("x", (d, i) => i * 80 + 463).attr("y", 420).attr("class", "bar-text")
    userGroup.append('text').text(d => d.Industry.slice(8, 12)).attr("x", (d, i) => i * 80 + 463).attr("y", 440).attr("class", "bar-text")
    //reset
    UserList = []
    list.sort(recompare('Origin'))
  }
  if (userlineinput == 1) {
    $('.userLine').remove()
    //yourSalaryLine
    let userLine = d3.select('body').select('.chart').append("svg").attr("width", "570").attr("height", "450").attr('class', 'userLine')
    let userLineGroup = userLine.selectAll("g").data(UserLinedata).enter()
    userLineGroup.append('line').attr('x1', 65).attr('x2', 520).attr('y1', 380).attr('y2', 380).style('stroke', 'red').style('stroke-width', 2).style('stroke-dasharray', '10,4').style('z-index', '10').transition().duration(1000).attr('y1', (d) => 380 - scaleHeight(UserLinedata)).attr('y2', (d) => 380 - scaleHeight(UserLinedata))
    //resetList
    list.sort(recompare('Origin'))
  }

}

//reset
function recompare(reset) {
  return function (obj1, obj2) {
    var value1 = obj1[reset]
    var value2 = obj2[reset]
    return value1 - value2
  }
}
let UserList = []
function UserInputIndustry(i) {
  // console.log($('.userchoose').attr('property'))
  // console.log(list[i].Industry)
  UserList.push(list[i])
  // console.log(UserList)
  chart(0, 0, $('.userchoose').attr('property'), 1)
}
let UserLinedata = []
function UserInputSalary() {
  UserLinedata = $('#salaryinput').val()
  console.log($('#salaryinput').val())
  chart(0, 0, 'Past5YearAnnualSalary', 0, 0, 1)
}



//u3 video
function u3video(vid, switchabc) {
  if (switchabc == 'a') {
    $('#aaa').css('display', 'flex')
    $('#bbb').css('display', 'none')
    $('#ccc').css('display', 'none')
  } else if (switchabc == 'b') {
    $('#bbb').css('display', 'flex')
    $('#aaa').css('display', 'none')
    $('#ccc').css('display', 'none')
  } else if (switchabc == 'c') {
    $('#ccc').css('display', 'flex')
    $('#aaa').css('display', 'none')
    $('#bbb').css('display', 'none')
  }
  $('#u3video').empty()
  document.querySelector('#u3video').innerHTML +=
    `
  <div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${vid}"  allowfullscreen></iframe></div>
  `
}
//u3 video
function u4video(vid) {
  $('#u4video').empty()
  document.querySelector('#u4video').innerHTML +=
    `
  <div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${vid}"  allowfullscreen></iframe></div>
  `
}

//輸入薪水框
function u2tab1() {
  $('.salary-line').css('display', 'block')
  $('.prtoggle').css('display', 'block')
  chart(1, '#u2', 'Past5YearAnnualSalary', 0)
}
function u2tab2() {
  $('.salary-line').css('display', 'none')
  $('.prtoggle').css('display', 'none')
  chart(1, '#u2', 'Past5YearAnnualSalaryIncrease', 0)
}

//show PR
function PR1func() {
  if ($("#PR1").prop("checked")) {
    chart(0, '#u1', 'YearEndBonuses', 0, 1)
  } else {
    $('.userPR').remove()
  }
}
function PR2func() {
  if ($("#PR2").prop("checked")) {
    chart(0, '#u2', 'Past5YearAnnualSalary', 0, 1)
  } else {
    $('.userPR').remove()
  }
}

//u1PR顯示
function u1tab1() {
  $('.prtoggle').css('display', 'block')
  chart(1, '#u1', 'YearEndBonuses', 0)
}
function u1tab2() {
  $('.prtoggle').css('display', 'none')
  chart(1, '#u1', 'PayScale', 0)
}
//loading
// let percent = 0
// let timer = setInterval(function () {
//   $(".bar").css("width", percent + "%")
//   percent += 1
//   if (percent >= 100) {
//     $(".pageLoading").addClass("complete")
//     setTimeout(eatCount, 3000)
//     clearInterval(timer)
//   }
// }, 30)


//畫面
//坐標軸單位
//薪水線
//點擊每個tag的UI
//PR值
//手機版本
//載入loading畫面
//邊邊透明漸層