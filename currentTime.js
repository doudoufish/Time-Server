
var http = require('http')
var url = require('url')

// - Expect the request to contain a query 
//   string with a key 'currenttme' and an ISO-format time as 
//   the value. 
// - The JSON response should contain only 'hour', 'minute' 
//   and 'second' properties. For example:
// 
//     {
//       "hour": 14,
//       "minute": 23,
//       "second": 15
//     }
// 

function currenttme (time) {
  return {
    year:time.getFullYear(),
    month:time.getMonth(),
    date:time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes(),
  }
}

var server = http.createServer(function (req, res) {
  // req.url = /api/currenttme

  

  // get Current time
  var time = new Date()
  var result
  

2

  // match req.url with the string /api/parsetime
  if (/^\/api\/currenttme/.test(req.url))
 
    result = currenttme(time)
 
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
console.log('Node server running on http://localhost:' + process.argv[2]);