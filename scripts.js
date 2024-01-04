let pwInput1 = document.querySelector(".pw1");
let pwInput2 = document.querySelector(".pw2");
let nameInput = document.getElementById('fname');
let errorMsg = document.querySelector('span');

if (pwInput1.value != pwInput2.value || pwInput1.value == "" || pwInput2.value=="") {
  pwInput1.classList.add('error');
  pwInput2.classList.add('error'); 
}

function test() {
  if (pwInput1.value == pwInput2.value && pwInput1.value != "" && pwInput2.value != "") {
    pwInput1.classList.remove('error');
    pwInput2.classList.remove('error');
    errorMsg.classList.add('invis');
  } else if (!(pwInput1.value == pwInput2.value && pwInput1.value != "" && pwInput2.value != "")) {
    pwInput1.classList.add('error');
    pwInput2.classList.add('error');
    errorMsg.classList.remove('invis');
  };
};

pwInput1.addEventListener('change', test);
pwInput2.addEventListener('change', test);
