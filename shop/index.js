class goodsItem {
    constructor(good) {
        this.data = good;
        this.count = 0;
    }

    increase() {
        this.count++;
    }

    decrease() {
        this.count--;
        if(this.count < 0) {
            this.count = 0;
        }
    }
    getItemMoney() {
        return this.data.price * this.count;
    }

    isadd(){
        return this.count > 0;
    }
}

class UIData {
    constructor(goods) {
        this.goodsData = goods.map(item => new goodsItem(item));
    }

    increase(index) {
        this.goodsData[index].increase();
    }
    decrease(index) {
        this.goodsData[index].decrease()
    }

    getAllMoney() {
        return this.goodsData.reduce((pre, item) => {
            pre += item.getItemMoney();
            return pre;
        }, 0)
    }

    getCountNum(){
        return this.goodsData.reduce((pre,item) => {
            return pre + item.count;
        },0)
    }
}

class UI {
    constructor(goods) {
        this.UIData = new UIData(goods);
        this.delivery = 30;
        this.doms = {
            goodsContainer: document.querySelector('main'),
            toAcount: document.querySelector('.toA'),
            allMoney: document.querySelector('footer .money'),
            countNum: document.querySelector('.num'),
            car: document.querySelector('.car')
        }
        this.createHtml();
        this.doms.btnCount = document.querySelectorAll('.btnCount')
        this.updateDelivery();
        this.listenEvent();
        const carRect = this.doms.car.getBoundingClientRect();
        this.targetXY = {
            x: carRect.left + carRect.width / 2,
            y: carRect.top + carRect.height / 5
        }
    }

    listenEvent(){
        this.doms.car.addEventListener('animationend',function(){
            this.classList.remove('animate')
        })
    }


    createHtml() {
        let html = '';
        this.UIData.goodsData.forEach((item,index) => {
            html += `<div style="height: 100px;display: flex;">
                    <img style="height: 100%;  object-fit: cover;" src="${item.data.pic}" alt="">
                <div>
                    <div>${item.data.title}</div>
                    <div class="info">
                    ${item.data.desc}
                    </div>
                    <div style="display: flex;justify-content: space-between;">
                        <div>${item.data.price}</div>
                        <div class="btnCount">
                            <div index=${index} class="front">-</div>
                            <span>0</span>
                            <div index=${index} class="addOne">+</div>
                        </div>
                    </div>
                </div>
            </div>`;
        })
        this.doms.goodsContainer.innerHTML = html;
    }

    increase(index){
        this.UIData.increase(index);
        this.updateCount(index);
        this.addCar(index);
    }

    decrease(index){
        this.UIData.decrease(index);
        this.updateCount(index);
    }

    updateCount(index){ 
        if(this.UIData.goodsData[index].isadd())
            this.doms.btnCount[index].classList.add('active');
        else {
            this.doms.btnCount[index].classList.remove('active');
        }
        this.doms.btnCount[index].querySelector('span').textContent = this.UIData.goodsData[index].count
        let allMoney = this.UIData.getAllMoney();
        this.updateDelivery(allMoney);
        this.doms.countNum.textContent = this.UIData.getCountNum();
    }

    updateDelivery(allMoney = 0.00){
        this.doms.allMoney.textContent = allMoney.toFixed(2);
        if(allMoney >= this.delivery){
            this.doms.toAcount.classList.add('activeA');
        } else {
            this.doms.toAcount.classList.remove('activeA');
            this.doms.toAcount.children[1].textContent = `还差￥${(this.delivery - allMoney).toFixed(2)}元起送`
        }
    }

    carAnimate(){
        this.doms.car.classList.add('animate');
    }

    addCar(index){
        const startEle = this.doms.btnCount[index].children[2].getBoundingClientRect();

        const start = {
            x: startEle.left,
            y: startEle.top,
        }
        const div = document.createElement('div');
        div.classList.add('add-to-car');
        const i = document.createElement('i');
        i.textContent = '+';
        i.classList.add('icon');
        div.style.transform = `translateX(${start.x}px)`;
        i.style.transform = `translateY(${start.y}px)`;
  
        div.appendChild(i);
        document.body.appendChild(div);
        div.clientWidth;

        div.style.transform = `translateX(${this.targetXY.x}px)`;
        i.style.transform = `translateY(${this.targetXY.y}px)`;

        div.addEventListener('transitionend',() => {
            div.remove();
            this.carAnimate();
        },{
            once: true
        })
    }
}


const ins = new UI(goods);

// 事件委托
ins.doms.goodsContainer.addEventListener('click',(e)=> {
    if(e.target.classList.contains('addOne')){
        ins.increase(e.target.getAttribute('index'));
    } else if(e.target.classList.contains('front')) {
        ins.decrease(e.target.getAttribute('index'));
    }
}); 