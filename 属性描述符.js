class Goods {
    constructor(good){
        Object.defineProperty(this,'good',{
            get(){
                return good;
            },
            set(val){

            },
            // enumerable: true
        })
    }
}

const a = new Goods({
    name:'kas'
})

console.log(a);


const obj = {
    a:1
}
// // console.log(obj);

// // console.log(Object.getOwnPropertyDescriptors(obj));

// // Object.defineProperty(obj,'a',{
// //     enumerable: false
// // })
// // console.log(obj);


// // console.log(Object.getOwnPropertyDescriptors(obj));

Object.defineProperty(obj,'a',{
    get(){
        console.log('dasd');
        
    },
    set(val){
        console.log(3233);
        
    }
})
// Object.freeze(obj)
// obj.a = 2
// obj.b = 3
console.log(obj);
