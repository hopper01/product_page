var h1 = document.querySelector("h1");
h1.setAttribute("style", "color: red; font-size: 40px");
h1.addEventListener("click", (e) => {
console.log(e);
});


// fetch(document.location.href)
// .then(resp => {
//     console.log(resp);
//   const csp = resp.headers.get('Content-Security-Policy');
//   console.log(csp);  
//   // does this exist? Is is any good?
// });

// var report;
// document.addEventListener("securitypolicyviolation", (e) => {
//     console.log(e);
//     var report = 'CSP Violation Report: \n';
//     report = report + '\t' + `blockedURI: ${e.blockedURI}\t` + `violatedDirective: ${e.violatedDirective}\t\n` + `\toriginalPolicy: ${e.originalPolicy}`;
//     console.log(report);
// }, {once: true});
// console.log(report);





//    var req = new XMLHttpRequest();
//    req.open('GET', document.location, false);
// //    req.setRequestHeader("Access-Control-Allow-Origin", "*");
//     // req.open('GET', "https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent");
  
//    req.send(null);
//    var headers = req.getAllResponseHeaders().toLowerCase();
//    console.log(req.getAllResponseHeaders().includes('accept-ranges: bytes'));
//    var header = req.getResponseHeader('content-security-policy');
// //    alert(headers);
// console.log(header);
// console.log(headers);

function nothing() {
    console.log("nothing");
}
// function reqListener () {
//    var header = req.getResponseHeader('last-modified');
//    console.log(object);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", document.location, false);
// oReq.send();