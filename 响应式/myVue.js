let __func = null;

function reactive(obj){
    const funcs = new Map();
    const proxy = new Proxy(obj,{
        get(target,attr,receiver){
            if(!funcs.has(attr)) {
                funcs.set(attr,new Set([__func]));
            }
            else {
                if(__func)
                    funcs.get(attr).add(__func);
            }
            return target[attr];
        },
        set(target,attr,newValue,receiver) {
            target[attr] = newValue;
            funcs.get(attr).forEach(cb => cb());
        }
    })
    return proxy;
}

// function Observe(obj){
//     for(let key in obj){
//         let internalVal = obj[key];
//         const funcs = new Set();
//         new Proxy()
//         Object.defineProperty(obj,key,{
//             get(){
//                 if(__func)
//                     funcs.add(__func);
//                 return internalVal;
//             },
//             set(val){
//                 internalVal = val;
//                 funcs.forEach(cb => cb());
//             }
//         })
//     }
// }

function autoRun(fun){
    __func = fun;
    fun();
    __func = null;
}

