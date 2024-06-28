import classes from './style.module.css'
import classes2 from './style1.module.css'

import './style.css'
console.log(classes.name,classes2.name);

const hello = document.querySelector('h1');

hello.className = classes.name;


console.log('./src', import.meta.url);
// console.log(import.meta.resolve('/sss'));
console.log(import.meta.dirname);
console.log(import.meta.filename);

console.log(import.meta.env);


console.log("hello");