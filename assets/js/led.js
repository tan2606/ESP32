let btn1 = document.querySelector('#btn1');
let btn3 = document.querySelector('#btn3');
let btn2 = document.querySelector('#btn2');
let btn4 = document.querySelector('#btn4');
// Xử lí sự kiện bật tắt led 1

var isbtn1 =false;
btn1.addEventListener('click', ()=>{
        var firebaseRef = firebase.database().ref().child("led1");
        if(isbtn1===true) {
                firebaseRef.set(1);
                btn1.classList.add('active')
                isbtn1 =false;
                btn1.innerText ='On'
        }
        else {
                firebaseRef.set(0);
                btn1.classList.remove('active')
                btn1.innerText ='Off'
                isbtn1 =true;

        }

})

// Xử lí sự kiện bật tắt led 2
var isbtn3 =false;
btn3.addEventListener('click', ()=>{
        var firebaseRef = firebase.database().ref().child("led2");
        if(isbtn3===true) {
                firebaseRef.set(1);
                btn3.classList.add('active')
                isbtn3 =false;
                btn3.innerText ='On'
        }
        else {
                firebaseRef.set(0);
                btn3.classList.remove('active')
                btn3.innerText ='Off'
                isbtn3 =true;

        }

})
// Xử lí bật tắt led 3
var isbtn2 = false;
btn2.addEventListener('click', ()=>{
        var firebaseRef = firebase.database().ref().child("led3");
        if(isbtn2===true) {
                firebaseRef.set(1);
                btn2.classList.add('active')
                isbtn2 =false;
                btn2.innerText ='On'
        } else {
                firebaseRef.set(0);
                btn2.classList.remove('active')
                btn2.innerText ='Off'
                isbtn2 =true;
        }
});
//
var isbtn4 = false
btn4.addEventListener('click',()=> {
        var firebaseRef = firebase.database().ref().child("led4");
        if(isbtn4===true) {
                firebaseRef.set(1);
                btn4.classList.add('active')
                isbtn4 =false;
                btn4.innerText ='On'
        } else {
                firebaseRef.set(0);
                btn4.classList.remove('active')
                btn4.innerText ='Off'
                isbtn4 =true;
        }
})