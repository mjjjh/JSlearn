// class MyPromise {
//     #state

//     constructor(executor){
         
//     }
// }

// const oi = new Promise((resolve,reject) => {
//     reject(1);
// }).then(()=>{},()=>{}).then(res => {
//     console.log("then2",res);
// }).catch(err => {
//     console.log(err);
// })
Promise.resolve().then(() => {
    console.log(0);
    // 返回的是promise会是 promise.then(() => p1完成)放入微队列，会有两层
    return new Promise((res,rej) => {
        console.log(1);
        res(2)
    })
}).then(() => {
    console.log(2);
})

Promise.resolve().then(()=>{
    console.log(3);
}).then(()=>{
    console.log(4);
}).then(()=>{
    console.log(5);
}).then(()=>{
    console.log(6);
})
