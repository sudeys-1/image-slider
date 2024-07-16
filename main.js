let slider = document.querySelector("#slider")
let prevBtn = document.querySelector("#prevBtn")
let NextBtn = document.querySelector("#NextBtn")
let END = document.querySelector("#END")

let images = ["images/Screenshot 2024-07-14 at 2.08.45 PM.png",
            "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?q=80&w=3015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             "https://images.unsplash.com/photo-1568162603664-fcd658421851?q=80&w=2881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             "https://images.unsplash.com/photo-1531884070720-875c7622d4c6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
 let indexNumber = -1

NextBtn.addEventListener("click",function(){
   if(indexNumber < images.length ){
    indexNumber++
    slider.src = images[indexNumber]
   }
   if(indexNumber == images.length){
    END.innerHTML ="END "
    END.style.color ="red"
    
}
   
    // if(indexNumber == images.length){
    //     alert("dhamaafka aya gartay")
    // }
})

prevBtn.addEventListener("click",function(){
    
    if(indexNumber > 0){
        indexNumber--
        slider.src = images[indexNumber]
       }

       if(indexNumber == -1){
        END.innerHTML ="Explore different images "
        END.style.color =""
    }
       
})
