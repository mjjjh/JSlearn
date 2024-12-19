/* 
    {
        a: 1,
        b: [2,3,4],
        c: {
            d: 5
        }
    }
*/
const mid = {};
function expand(obj,formerKey){
    if(typeof obj !== "object"){
        return obj;
    } 
    for(let key in obj){
        mid[`${formerKey}${Array.isArray(obj) ? ('[' + key + ']') : (formerKey ? '.' + key : key )}`] = expand(obj[key],`${formerKey}${Array.isArray(obj) ? ('[' + key + ']') : (formerKey ? '.' + key : key )}`)
        if(!mid[`${formerKey}${Array.isArray(obj) ? ('[' + key + ']') : (formerKey ? '.' + key : key )}`]){
            delete mid[`${formerKey}${Array.isArray(obj) ? ('[' + key + ']') : (formerKey ? '.' + key : key )}`]
        }
    }
}

const obj = {
    a: 1,
    b: [2,{
        one : 121,
        two : 231
    },4],
    c: {
        d: {
            e : 5,
            arr: [5,6,7]
        }
    }
}
expand(obj,"")
console.log(mid);


