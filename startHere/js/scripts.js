const getString = window.location.search;
console.log(getString);

const myinfo = new URLSearchParams(getString);
console.log(myinfo);