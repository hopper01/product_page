var h1 = document.querySelector("h1");
h1.setAttribute("style", "color: red; font-size: 40px");
// fetch(document.location.href)
// .then(resp => {
//     console.log(resp);
//   const csp = resp.headers.get('Content-Security-Policy');
//   console.log(csp);
//   // does this exist? Is is any good?
// });
// document.addEventListener("securitypolicyviolation", (e) => {
//     console.log(e);
//   console.log(e.blockedURI);
//   console.log(e.violatedDirective);
//   console.log(e.originalPolicy);
// });

//    var req = new XMLHttpRequest();
//    req.open('GET', document.location, false);
//    req.send(null);
//    var headers = req.getAllResponseHeaders().toLowerCase();
// //    var header = req.getResponseHeader('last-modified');
// //    alert(headers);
// console.log(headers);

// function reqListener () {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", document.location);
// oReq.send();