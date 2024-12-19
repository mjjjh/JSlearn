function denounce(time, fn) {
    let timer = null;

    return function () {
        if (tiemr) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(fn, time);
    }
}


const weak = new WeakMap();
function deepClone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    if (weak.has(obj)) {
        return weak.get(obj);
    }
    const temp = Array.isArray(obj) ? [] : {};
    weak.set(obj, temp);
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            temp[key] = obj[key];
        } else {
            temp[key] = deepClone(obj[key]);
        }
    }
    return temp;
}

// const a = {
//     n: 2,
//     bk: {
//         c: 3,
//         d: [4,5,6]
//     }
// }
// a.d = a;
// console.log(deepClone(a));



function getArr(strNum) {
    function getRandomString() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let res = '';
        const charactersLength = characters.length;
        const len = Math.floor(Math.random() * charactersLength + 1);
        for (let i = 0; i < len; i++) {
            res += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return res;
    }
    const res = [];
    while (strNum) {
        const str = getRandomString();
        if (res.includes(str)) {
            continue;
        }
        res.push(str);
        strNum--;
    }
    return res;
}
console.log(getArr(10));


const allImgs = document.getElementsByTagName('img');
function lazyLoad(imgs) {
    const clientH = document.documentElement.clientHeight;
    const clientT = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < imgs.length; i++) {
        if (clientH + clientT > imgs[i].offsetTop && !imgs[i].src) {
            imgs[i].src = imgs[i].dataset.src;
        }
    }
};
lazyLoad(allImgs);
window.onscroll = () => lazyLoad(allImgs);