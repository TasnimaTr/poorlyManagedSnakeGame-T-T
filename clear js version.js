function apple(){

    ap=document.getElementById("ap");
   xp=Math.trunc((Math.random()*1000))
   yp=Math.trunc((Math.random()*700))
   xp=xp-(xp%30)
        //alert(xp)
        yp=yp-(yp%30)
        
        ap.style.position="absolute"
        ap.style.top = ""+String(yp)+"px";
        ap.style.left = ""+String(xp)+"px";
}
async function movefork(lastposition,b,r) {
    test=false
    fork.style.display="block"
    coorfk = document.querySelector("#fr");
    xfk = parseInt(getComputedStyle(coorfk).left); 
    yfk = parseInt(getComputedStyle(coorfk).top); 
    l=r
    t=b
    while(!(xp==xfk && yp==yfk) && ( Math.abs(yfk)<1400 && Math.abs(xfk)<1400)){ 
        
        fork.style.position="absolute"
        if(lastposition=="t"){
            t=t-30
            fork.style.top=""+String(t)+"px"

        }else if(lastposition=="b"){
            t=t+30
            fork.style.top=""+String(t)+"px"
        }else if(lastposition=="l"){
            l=l-30
            fork.style.left=""+String(l)+"px"

        }else{
            l=l+30
            fork.style.left=""+String(l)+"px"
        }

    
        await new Promise(resolve => setTimeout(resolve, 100));
    
   // }if(yfk==yp && xfk==xp){
     //   apple()
    //}
    xfk = parseInt(getComputedStyle(fork).left);
    yfk = parseInt(getComputedStyle(fork).top);
        
    if (Math.abs(xfk - xp) < 30 && Math.abs(yfk - yp) < 30) {
        apple(); 
        sc=sc+3
        test=true
        score.innerHTML = String(sc);
        break; 
    }
} 
 if (test==false){
    sc=sc-3
    score.innerHTML = String(sc);
}
        fork.style.display="none"
//fork.style.top = String(initialT)+"px";  
  //  fork.style.left = String(initialL)+"px"

}
b=0
lastposition=""
r=0
sc=0
w=50
function move(p){
    fork=document.getElementById("fr")
     sn=document.getElementById("sn");
     score=document.getElementById("score")
     sn.style.position="absolute"
     fork.style.position="absolute"
    if (p=='top'){
        sn.style.transform="rotate(270deg)"
        fork.style.transform="rotate(270deg)"
        b=b-30
        sn.style.top=""+String(b)+"px"
        fork.style.top=""+String(b)+"px"
        lastposition="t"
        
        
    }else if(p=='bottom'){
        sn.style.transform="rotate(90deg)"
        fork.style.transform="rotate(90deg)"
        b=b+30
        sn.style.top=""+String(b)+"px"
        fork.style.top=""+String(b)+"px"
        lastposition="b"
        
        
    }else if(p=='left'){
        sn.style.transform="rotateY(180deg)"
        fork.style.transform="rotateY(180deg)"
        r=r-30
        sn.style.left=""+String(r)+"px"
        fork.style.left=""+String(r)+"px"
        lastposition="l"
        
    }else if(p=="right"){
        sn.style.transform="rotate(0deg)"
        fork.style.transform="rotate(0deg)"
        r=r+30
        sn.style.left=""+String(r)+"px"
        fork.style.left=""+String(r)+"px"
        lastposition="r"
    
    }else{
        
        movefork(lastposition,b,r)
        

    }
    
     let coorsn = document.querySelector("#sn");
        let xsn = parseInt(getComputedStyle(coorsn).left); 
        let ysn = parseInt(getComputedStyle(coorsn).top);  

        let coorap = document.querySelector("#ap");
        let xap = parseInt(getComputedStyle(coorap).left); 
        let yap = parseInt(getComputedStyle(coorap).top);  

        se=document.getElementById("se")
        
        if (Math.abs(xsn - xap) < 30 && Math.abs(ysn - yap) < 30) {
        /*alert(yp+" "+b+" "+xp+" "+r)*/
       /* if (yp==b < xp==r) {*/
            apple(); 
            sc=sc+1; 
            imor=sn.src
            se.style.width="5px"
            sn.src=se.src
            score.innerHTML = String(sc);
            setTimeout(function() {
                sn.src=imor  
            
              }, 700); 
        
            }
        sn.src=sn.src
    }  

/****/document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        move('top');
    } else if (event.key === 'ArrowDown') {
        move('bottom');
    } else if (event.key === 'ArrowLeft') {
        move('left');
    } else if (event.key === 'ArrowRight') {
        move('right');
    }else if(event.key==" "){
        fork=document.getElementById("fr")
        fork.style.left=String(r)+"px"
        fork.style.top=String(b)+"px"
        move('fork');
    }
});/****///
