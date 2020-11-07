let i =1;
setInterval(()=> {
    if(i===10){
        console.log(i);
        console.log("종료");
        process.exit();
    }
    console.log(i);
    i+=1;
},300);