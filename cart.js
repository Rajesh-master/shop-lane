console.log("scripted loaded")


localFile=JSON.parse(localStorage.getItem("data"));



//if(localFile.length===0){
//    var dot=document.createElement("h1");
//    dot.innerHTML="NO CART HERE"
//    order.appendChild(dot);

//}
for(i=0;i<localFile.length;i++){
    var cart=document.createElement("div");
    var cartImage=document.createElement("img");
    cartImage.src= localFile[i].Link;
    var cartHead=document.createElement("h3");
    cartHead.innerHTML=localFile[i].Name
    cartPrice=document.createElement("h4");
    cartPrice.innerHTML="RS. "+localFile[i].Price;
    cartPrice.style.display="flex";
    
    cart.appendChild(cartHead)
cart.appendChild(cartImage);
cart.appendChild(cartPrice);
var mainCart=document.getElementById("cart")
mainCart.appendChild(cart);
cartImage.className="cartImage"
cart.className="carting"


}

count=0
 for(j=0;j<localFile.length;j++){
     var pricing=localFile[j].Price;
     count=count+pricing
 }

 var finalAmount=count
 var finalBar=document.createElement("div");
 var amount=document.createElement("h3");
 amount.innerHTML="RS. " +finalAmount;
 var simple=document.createElement("h2");
 simple.innerHTML="THE TOTAL AMOUNT"
 var checkout=document.createElement("button");
 checkout.innerHTML="CHECK OUT";
 checkout.className="checkout";

 finalBar.appendChild(simple);
 finalBar.appendChild(amount);
 finalBar.appendChild(checkout);
 finalBar.className="finalBar";
 mainCart.appendChild(finalBar);

 checkout.onclick=function(){
     localStorage.clear();
     mainCart.style.display="none";
     var order=document.getElementById("order");
     var placed=document.createElement("img");
     placed.className="placed";
     order.className="order";
     placed.src="https://image.flaticon.com/icons/png/128/3500/3500833.png"
     var note=document.createElement("h1");
     note.innerHTML="ORDER PLACED";

     order.appendChild(placed)
     order.appendChild(note);
     

 }
 



