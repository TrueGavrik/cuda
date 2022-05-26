const modal = $.modal()

 document.querySelector("#buttonHead").onclick = function(){
     modal.open()
 };

 document.querySelector("#modal__window-close").onclick = function(){
    modal.close()
};

 document.querySelector("#modal__window-cancel").onclick = function(){
    modal.close()
};

