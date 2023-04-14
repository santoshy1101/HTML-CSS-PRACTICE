let a=10;
let b=10;

//  promise is a object which is respresenting success or failure of asynchronus operations

const waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        b=30
        resolve(30)
    },2000)
})

waitingData.then((res)=>{
    console.log(a+res)
})
