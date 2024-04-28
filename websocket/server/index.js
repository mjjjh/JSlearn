const ws = require("ws");

((ws)=>{
    const server = new ws.Server({port:8000});

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

    function handleError() {
        console.log("socket error");
    }

    function handleConnection(ws) {
        ws.on("message",handleMessage);
        console.log("socket connect");
    }

    function handleMessage(params) {
        console.log("socket message");
    }

    Init();

})(ws)