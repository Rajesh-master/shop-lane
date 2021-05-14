var parlel= document.getElementById("parlel");
var image= document.createElement("img")
image.src="https://i.imgur.com/96OnkX7.png"
parlel.appendChild(image)
image.style.width="100%";
var grid=document.getElementById("grid");
var secondGrid=document.getElementById("secondGrid")
var big =document.getElementById("big");
var bigImage=document.createElement("img");
big.appendChild(bigImage);
bigImage.className="bigImage";
big.style.display="none";
var content=document.createElement("div")
var icon2=document.createElement("button");


function griding(prev,name,brand,price,id,photo1,photo2,photo3,photo4,photo5,description){
    
    
    var menCloth = document.getElementById("mencloth");
    var inImage = document.createElement("img");
    inImage.src=prev
    inImage.className="inimage";
    inImage.onclick = function() {myFunction()};
    var heading = document.createElement("h2")
    heading.innerHTML=name
    var brando=document.createElement("h3")
    brando.innerHTML=brand;
   var prices =document.createElement("h3")
    prices.innerHTML="RS."+price;
    prices.className="prices"
    var indiv = document.createElement("div");
    indiv.className="indiv"
    indiv.appendChild(inImage);
    indiv.appendChild(heading);
    indiv.appendChild(brando);
    indiv.appendChild(prices);
    menCloth.appendChild(indiv);
    // menCloth.appendChild(price);
    function myFunction() {
        grid.style.display="none";
        parlel.style.display='none';
        big.style.display="inline-block";
        //var footer=document.getElementById("footer");
        //footer.style.marginTop="400px"
        $(document).ready(function (){
            console.log("script loaded")
            list1=[photo1,photo2,photo3,photo4,photo5]
            
            
           // for (var m=0;m<4;m++);{
                var leftImage = document.createElement("img");
                leftImage.src=list1[0]
                leftImage.className="inimagess";
                var bighead=document.createElement("h3");
                bighead.innerHTML=name;
                bighead.className="bighead"
                content.appendChild(bighead)
                var bigbrand=document.createElement("h2");
                bigbrand.innerHTML=brando.innerHTML;
                bigbrand.className="bigbrand"
                var bigprice=document.createElement("h2");
                bigprice.innerHTML="price" + prices.innerHTML;
                bigprice.className="bigprice"
                var bigdesc=document.createElement("p");
                bigdesc.innerHTML=description;
                bigdesc.style.fontSize="23px"
                bigdesc.style.fontWeight="100"
                content.className="content"
                content.appendChild(bigdesc)
                content.appendChild(bigprice)
                content.appendChild(bigbrand);
                var button =document.createElement("button");
                button.innerHTML="Add to cart";
                button.id="button";
                var counts1=0;
                content.appendChild(button);
                button.onclick = function () {
                    counts1++;
                    var obj={Link:prev,Name:name,Brand:brand,Price:price}
                    
                    //if(localStorage.getItem("data")===null){
                       // var objList=[];
                        //objList.push(obj);
                        var objList=localStorage.getItem("data")===null ? [] :JSON.parse(localStorage.getItem("data"))
                        
                            
                            objList.push(obj);
                            localStorage.setItem("data",JSON.stringify(objList));
                        
                        
                    //}
        
                    
                    //var icon=document.createElement("button");
                    //icon.innerHTML=localStorage.getItem("click",count);
                    //content.appendChild(icon);
                    localStorage.setItem("click1",counts1);
                    var icon1=document.createElement("button");
                icon1.innerHTML=localStorage.getItem("click1",counts1)  ;
                icon1.className="icon1"
                content.appendChild(icon1);
                }
                
                secondGrid.appendChild(leftImage)
                big.appendChild(content)
                
                var leftImage1 = document.createElement("img");
                leftImage1.src=list1[1]
                leftImage1.className="inimagess";
                secondGrid.appendChild(leftImage1)
                var leftImage2 = document.createElement("img");
                leftImage2.src=list1[2]
                leftImage2.className="inimagess";
                secondGrid.appendChild(leftImage2);
                var leftImage3 = document.createElement("img");
                leftImage3.src=list1[3]
                leftImage3.className="inimagess";
                secondGrid.appendChild(leftImage3)
                var leftImage4 = document.createElement("img");
                leftImage4.src=list1[4]
                leftImage4.className="inimagess";
                bigImage.src=leftImage.src
                secondGrid.appendChild(leftImage4)
                leftImage.onclick = function() {limage()}
                leftImage1.onclick = function() {limage1()}
                leftImage2.onclick = function() {limage2()}
                leftImage3.onclick = function() {limage3()}
                leftImage4.onclick = function() {limage4()}
                
                function limage(){
                    leftImage.classList.add("active");
                    
                    bigImage.src=leftImage.src;
                    leftImage2.classList.remove("active")
                    leftImage3.classList.remove("active")
                    leftImage4.classList.remove("active")
                    leftImage1.classList.remove("active")
    
                }

                function limage1(){
                    leftImage1.classList.add("active");
                    
                    bigImage.src=leftImage1.src;
        
                    leftImage2.classList.remove("active")
                    leftImage3.classList.remove("active")
                    leftImage4.classList.remove("active")
                    leftImage.classList.remove("active")
                }
                function limage2(){
                    bigImage.src=leftImage2.src;
                    leftImage2.classList.add("active");
                    leftImage1.classList.remove("active")
                    leftImage3.classList.remove("active")
                    leftImage4.classList.remove("active")
                    leftImage.classList.remove("active")
                }
                function limage3(){
                    bigImage.src=leftImage3.src;
                    leftImage3.classList.add("active");
                    leftImage2.classList.remove("active")
                    leftImage1.classList.remove("active")
                    leftImage4.classList.remove("active")
                    leftImage.classList.remove("active")
                }
                function limage4(){
                    bigImage.src=leftImage4.src;
                    leftImage4.classList.add("active");
                    leftImage2.classList.remove("active")
                    leftImage3.classList.remove("active")
                    leftImage1.classList.remove("active")
                    leftImage.classList.remove("active")
                }


           // }
            
              
                

            
        })
      }
}
var header=document.getElementById("header")
var icon2=document.createElement("button");
                icon2.innerHTML=parseInt(localStorage.getItem("click1")) +parseInt(localStorage.getItem("click2")) ;
                icon2.className="icon2"
                header.appendChild(icon2);
function briding(prev,name,brand,price,id,photo1,photo2,photo3,photo4,photo5,description){
    var menCloth = document.getElementById("second-mencloth");
    var inImage = document.createElement("img");
    inImage.src=prev
    inImage.className="inimage";
    inImage.onclick = function() {myFunction()};
    var heading = document.createElement("h2")
    heading.innerHTML=name
    var brando=document.createElement("h3")
    brando.innerHTML=brand;
   var prices =document.createElement("h3")
    prices.innerHTML="RS."+price;
    prices.className="prices"
    var indiv = document.createElement("div");
    indiv.className="indiv"
    indiv.appendChild(inImage);
    indiv.appendChild(heading);
    indiv.appendChild(brando);
    indiv.appendChild(prices);
    menCloth.appendChild(indiv);
    // menCloth.appendChild(price);
    function myFunction() {
        grid.style.display="none";
        parlel.style.display='none';
        big.style.display="inline-block";
        var footer=document.getElementById("footer");
        footer.style.marginTop="400px"
        $(document).ready(function (){
            console.log("script loaded")
            list1=[photo1,photo2,photo3,photo4,photo5]
            
           // for (var m=0;m<4;m++);{
                var leftImage = document.createElement("img");
                leftImage.src=list1[0]
                leftImage.className="inimagess";
                var bighead=document.createElement("h3");
                bighead.innerHTML=name;
                bighead.className="bighead"
                content.appendChild(bighead)
                var bigbrand=document.createElement("h2");
                bigbrand.innerHTML=brando.innerHTML;
                bigbrand.className="bigbrand"
                var bigprice=document.createElement("h2");
                bigprice.innerHTML="price" + prices.innerHTML;
                bigprice.className="bigprice"
                var bigdesc=document.createElement("p");
                bigdesc.innerHTML=description;
                bigdesc.style.fontSize="23px"
                bigdesc.style.fontWeight="100"
                content.className="content"
                content.appendChild(bigdesc)
                content.appendChild(bigprice)
                content.appendChild(bigbrand);
                
                secondGrid.appendChild(leftImage)
                big.appendChild(content)
                
                var leftImage1 = document.createElement("img");
                leftImage1.src=list1[1]
                leftImage1.className="inimagess";
                secondGrid.appendChild(leftImage1)
                var leftImage2 = document.createElement("img");
                leftImage2.src=list1[2]
                leftImage2.className="inimagess";
                secondGrid.appendChild(leftImage2);
                var leftImage3 = document.createElement("img");
                leftImage3.src=list1[3]
                leftImage3.className="inimagess";
                secondGrid.appendChild(leftImage3)
                var leftImage4 = document.createElement("img");
                leftImage4.src=list1[4]
                leftImage4.className="inimagess";
                bigImage.src=leftImage.src
                secondGrid.appendChild(leftImage4)
                var button =document.createElement("button");
                button.innerHTML="Add to cart";
                button.id="button";
                var counts2=0;
                content.appendChild(button);
                button.onclick = function () {
                    counts2++;
                    var obj={Link:prev,Name:name,Brand:brand,Price:price}
                    
                    //if(localStorage.getItem("data")===null){
                       // var objList=[];
                        //objList.push(obj);
                        var objList=localStorage.getItem("data")===null ? [] :JSON.parse(localStorage.getItem("data"))
                        
                            
                            objList.push(obj);
                            localStorage.setItem("data",JSON.stringify(objList));
                        
                        
                    //}
                    
                    localStorage.setItem("click2",counts2);
                    var icon1=document.createElement("button");
                icon1.innerHTML=localStorage.getItem("click2",counts2)  ;
                icon1.className="icon1"
                content.appendChild(icon1);
                }
                
                    
                
                leftImage.onclick = function() {limage()}
                leftImage1.onclick = function() {limage1()}
                leftImage2.onclick = function() {limage2()}
                leftImage3.onclick = function() {limage3()}
                leftImage4.onclick = function() {limage4()}
                function limage(){
                    leftImage.classList.add("active");
                    
                    bigImage.src=leftImage.src;
                    leftImage2.classList.remove("active")
                    leftImage3.classList.remove("active")
                    leftImage4.classList.remove("active")
                    leftImage1.classList.remove("active")
    
                }

                function limage1(){
                    leftImage1.classList.add("active");
                    
                    bigImage.src=leftImage1.src;
        
                    leftImage2.classList.remove("active")
                    leftImage3.classList.remove("active")
                    leftImage4.classList.remove("active")
                    leftImage.classList.remove("active")
                }
                function limage2(){
                    bigImage.src=leftImage2.src;
                    leftImage2.classList.add("active");
                    leftImage1.classList.remove("active")
                    leftImage3.classList.remove("active")
                    leftImage4.classList.remove("active")
                    leftImage.classList.remove("active")
                }
                function limage3(){
                    bigImage.src=leftImage3.src;
                    leftImage3.classList.add("active");
                    leftImage2.classList.remove("active")
                    leftImage1.classList.remove("active")
                    leftImage4.classList.remove("active")
                    leftImage.classList.remove("active")
                }
                function limage4(){
                    bigImage.src=leftImage4.src;
                    leftImage4.classList.add("active");
                    leftImage2.classList.remove("active")
                    leftImage3.classList.remove("active")
                    leftImage1.classList.remove("active")
                    leftImage.classList.remove("active")
                }


           // }
            
              
                

            
        })
      }
}




var http = new XMLHttpRequest();
http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
http.onreadystatechange= function(){
    if (this.readyState===4){
        var sources=JSON.parse(this.responseText);
        for( var pos=0 ; pos<5; pos++){
           griding( sources[pos].preview,sources[pos].name,sources[pos].brand,sources[pos].price,sources[pos].id,sources[pos].photos[0],sources[pos].photos[1],sources[pos].photos[2],sources[pos].photos[3],sources[pos].photos[4],sources[pos].description);
           
       }
       for ( var i=5 ; i<11;i++){
           briding( sources[i].preview,sources[i].name,sources[i].brand,sources[i].price,sources[i].id,sources[i].photos[0],sources[i].photos[1],sources[i].photos[2],sources[i].photos[3],sources[i].photos[4],sources[i].description);
       }
      

    }
}
 http.send();

// var mnm=new XMLHttpRequest();
// mnm.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
// mnm.onreadystatechange=function(){
//     if(this.readyState===4){
//         var resources=JSON.parse(this.responseText);
//         for(j=0;j<5;j++){
//            matrix(resources[j].photos[j])
//         
//         }
//        
//     }
// }
// mnm.send();

