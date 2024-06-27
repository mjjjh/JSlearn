import {phone} from "./phone.js";
import './style.css';
import img from 'assets/beauty.png'
import md from './about.md'

console.log(md);

const changePhone = [].slice.call(phone);

const ul = document.createElement('ul');
ul.setAttribute('class','phoneBox');


changePhone.forEach((val)=>{
    const li = document.createElement('li');
    li.innerText = val;
    ul.appendChild(li);
})


document.body.appendChild(ul);

const pic = document.createElement('img');
pic.src = img;
pic.loading = 'lazy'


document.body.prepend(pic);

const mdS = document.createElement('div');
mdS.innerHTML = md;
document.body.appendChild(mdS);


console.log(changePhone);

console.log("hello world");