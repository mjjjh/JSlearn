((doc,WebSocket)=>{
    const oList = doc.querySelector("#list");
    const oMessage = doc.querySelector("#message");
    const oSend = doc.querySelector("#send");

    // 实例化websocket
    const ws = new WebSocket("ws:localhost:8000");

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

    function handleoSend(e) {
        console.log("Send message",e);
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
        console.log("websocket message",e);        
    }

    Init();

})(document,WebSocket)