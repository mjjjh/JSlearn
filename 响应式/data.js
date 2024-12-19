const _data = {
    _name: "李华",
    age: 7
}

function renderFisrt(){ 
    document.querySelector('.first').textContent = data._name.charAt(0);
}



function renderLast(){
    document.querySelector('.last').textContent = data._name.slice(1);
}

function renderAge(){
    document.querySelector('.age').textContent = data.age;
}

const data = reactive(_data);
console.log(data);

// Observe(data);
autoRun(renderFisrt);
autoRun(renderLast);
autoRun(renderAge);

