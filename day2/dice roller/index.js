function roll(){
    const num=document.getElementById("num").value;
    if(num<1){
        document.getElementById("val").textContent="give proper input first!!!!!!!!!!"
        document.getElementById("dice-img").innerHTML=""
        return;
    }
    const faces=[]
    const images=[]

    for(i=0;i<num;i++){
        const rand=Math.floor( (Math.random()*6)+1)
        faces.push(rand)
        images.push(`<img src="${rand}.png" height ="100" width="100" alt="dice ${rand}">`);
    }
    document.getElementById("val").textContent=faces.join("   ,  ")
    document.getElementById("dice-img").innerHTML=images.join("        ")
}