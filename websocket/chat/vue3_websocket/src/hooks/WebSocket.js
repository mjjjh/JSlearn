import { socketurl } from "@/configs";
function useWebSocket(handleMessage){
    const ws = new WebSocket(socketurl);

    const Init = ()=>{
        bindEvent();
    }
    function bindEvent(){
        ws.addEventListener("open",handleOpen);
        ws.addEventListener("close",handleClose);
        ws.addEventListener("error",handleError);
        ws.addEventListener("message",handleMessage);
    }

    function handleOpen(e){
        console.log("Socket Open");
    }

    function handleClose(e){
        console.log("Socket Close");
    }

    function handleError(e){
        console.log("Socket Error");
    }

    Init();
    return ws;
}

export default useWebSocket;
