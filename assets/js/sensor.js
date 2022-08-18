var nhietdo = document.querySelector('#nhietdo');
var dbRef = firebase.database().ref().child('Nhiet do');
var doam = document.querySelector('#doam');
var dbRef2 = firebase.database().ref().child('Do am');
dbRef.on('value', snap => nhietdo.innerText = snap.val());
dbRef2.on('value', snap => doam.innerText = snap.val());