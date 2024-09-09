window.addEventListener("load",function(){
    let minus=this.document.querySelector("#minus")
    let plus=this.document.querySelector("#plus")
    let soluong=this.document.querySelector("#sl")
    let dathang=this.document.querySelector(".dathang")
    minus.addEventListener("click",function(event){
        event.preventDefault();
        if(soluong.innerText>0){
            soluong.innerText-=1;
        }
    })
    plus.addEventListener("click",function(event){
        event.preventDefault();
        let temp=parseInt(soluong.innerText);
        temp+=1;
        soluong.innerText=temp;
    })
    dathang.addEventListener("click",function(){
        if(soluong.innerText>0&&confirm("Bạn có chắc chắn đặt hàng không!"))
        {
            alert("Đã xác nhận đặt hàng")
        }
    })
})


