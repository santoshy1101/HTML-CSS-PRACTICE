
function fun(){
    const first ="Hi, You Called me";
    const second ="me phele hi call ho chuka hu";
    let count = 0
    return ()=>{
        if(count<1){
            console.log(first)
            count++;
        }
        else{
            console.log(second)
        }
        
        
    }

}

const myfun = fun();
myfun()
myfun()
myfun()