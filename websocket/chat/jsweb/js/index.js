((doc,WebSocket,localStorage,loaction)=>{
    const oList = doc.querySelector("#list");
    const oMessage = doc.querySelector("#message");
    const oSend = doc.querySelector("#send");

    // 实例化websocket
    const ws = new WebSocket("ws:10.131.133.82:8000");

    const Init = ()=>{
        bindEvent();
    }
    function bindEvent() {
        oSend.addEventListener("click",handleoSend,false);
        ws.addEventListener("open",handleOpenws,false);
        ws.addEventListener("close",handleClosews,false);
        ws.addEventListener("error",handleErrorws,false);
        ws.addEventListener("message",handleMessagews,false);
    }
    let username = localStorage.getItem("username");
    if(!username)  username = "stranger";
    
    function handleoSend(e) {
        console.log("Send message",e);
        const messsage = oMessage.value;
        if(messsage.trim().length == 0) return;
        const date = new Date().getTime();
        const data = {
            username,
            date,
            messsage
        };
        ws.send(JSON.stringify(data));
        oMessage.value = '';
    }

    function handleOpenws(e) {
        console.log("websocket open",e);
    }

    function handleClosews(e) {
        console.log("websocket close",e);
    }

    function handleErrorws(e) {
        console.log("websocket error",e);
    }

    function handleMessagews(e) {
        console.log("websocket message");
        const msginfo = JSON.parse(e.data);
        oList.appendChild(createMsg(msginfo));
    }

    function createMsg(data){
        const {username,date,messsage} = data;
        console.log(username,date,messsage);
        const oItem = document.createElement('li');
        oItem.innerHTML = ` 
            <p>
                <i> ${new Date(date)}</i>
            </p>
            <h6>${username}: ${messsage}</h6>
        `
        return oItem;
    }

    Init();

})(document,WebSocket,localStorage,location)