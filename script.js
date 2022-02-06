function addmore() {
document.getElementById('error').innerHTML='';

    let name = document.getElementById('name').value;
    let heading = document.getElementById('heading').value;

    if(name=='') {
        document.getElementById('error').innerHTML="*please enter value*";
    }
    else{
let box = document.getElementById('box');

let li = document.createElement('li');
li.className="desc";



let h3 = document.createElement('h3');
li.textContent= name;
h3.textContent= heading;

li.className="list"

let a = document.createElement('a');
a.textContent='🗑';
a.href='';
// a.addEventListener('click',function(){
//     document.getElementById('heading').textContent='';
// })
a.className="remove";
li.appendChild(a);


let btn = document.createElement("button");
btn.innerHTML = "update";
btn.id="btn";



li.appendChild(btn)
li.appendChild(h3);
box.appendChild(li);

    }
    document.getElementById('name').value="";
    document.getElementById('heading').value="";
}
    document.getElementsById("btn").addEventListener('click',function(){
        document.getElementById('heading').innerText = prompt("");
    });

