const xhr = new XMLHttpRequest();

xhr.open('get','http://localhost:3000/api/index',false);

xhr.send();
//
console.log(xhr.responseText);