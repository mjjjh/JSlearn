Function.prototype.Mycall = function( context ) {
    const key = Symbol();
    context[key] = this;
    const res = context[key](...Array.from(arguments).slice(1));
    delete context[key];
    return res;
}

Function.prototype.Myapply = function( context ) {
    const key = Symbol();
    context[key] = this;
    const res = context[key](...arguments[1]);
    delete context[key];
    return res;

}

// Fn.__proto__ === Function.prototype === Function.__proto__ === Object.__proto__
Object.prototype.__proto__ == null

Function.prototype.Mybind = function( context ) {
    const arg = Array.from(arguments).slice(1);
    return (...newArg) => {
        const key = Symbol();
        context[key] = this;
        const res = context[key](...arg,...newArg);
        delete context[key];
        return res;
    }
}

const obj = {
    name: 'obj',
    show: function(a,b,c) {
        console.log(this.name);
        console.log(a,b,c);
    }
}

function test(a,b,c) {
    console.log(this.name);
    console.log(a,b,c);
}


// test.Mycall(obj,1,2,3)
// test.Myapply(obj,[1,2,3])

const a = test.Mybind(obj,6,8);
a(1,2,3)
a(4,5,6)
// obj.show()