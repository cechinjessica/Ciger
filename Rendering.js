// x=document.getElementById('p');
// v = document.createElement('p');
// v.innerText='GG BOSS';
// // console.log(v.innerText);
// x.appendChild(v);
// dark_MOde
function dark() {
    var d = document.body;
    d.classList.toggle("dark-mode"); //class selector i style sheet
}

// change text

function change() {
    let x = document.getElementById('p');
    if (x.innerHTML === "Created By Romijul Laskar") {
        x.innerHTML = "Changed Successfully";
    }
    else {
        x.innerHTML = "Created By Romijul Laskar";
    }
}
//sign up button modal feature
// var modal = document.getElementById('new');
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

//password validate
function check() {
    var str1 = document.getElementById('pass1').value;
    var str2 = document.getElementById('pass2').value;
    if (str1 === str2) {
        alert('pasword match.');
    }
    // else if(str1==null || str2==null) {
    //     alert('Empty password box.');
    // }
    else {
        alert("password didn't match");
    }
}
