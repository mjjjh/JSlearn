const ws = require("ws");

((ws)=>{
    const server = new ws.Server({host:"localhost",port:8080});

    const Init = ()=>{
        bindEvent();
    }

    function bindEvent() {
        server.on("open",handleOpen);
        server.on("close",hanleClose);
        server.on("error",handleError);
        server.on("connection",handleConnection);
    }

    function handleOpen(){
        console.log("socket open");
    }

    function hanleClose() {
        console.log("socket close");
    }

    function handleError(e) {
        console.log("socket error",e);
    }

    function handleConnection(ws) {
        ws.on("message",handleMessage);
        console.log("socket connect");
    }

    function handleMessage(e) {
        console.log("socket message",e.toString());
        //处理信息，如果是聊天室可进行广播
        server.clients.forEach(c =>{
            c.send(e.toString());
        });
    }

    Init();

})(ws)