;(function(doc,storage,loaction){
    
    const oUsrname = doc.querySelector("#user");
    const oBtin = doc.querySelector("#btn");

    const Init = () =>
    {
        bindEvent();
    }

    function bindEvent() {
        oBtin.addEventListener("click",handleBtnclick,false);
    }

    function handleBtnclick(){
        const username = oUsrname.value.trim();

        if(username.length < 6)
        {
            alert("长度小于6");
            return;
        }
        storage.setItem("username",username);
        loaction.href = "index.html";

    }

    Init();

})(document,localStorage,location);