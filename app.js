const button = document.getElementsByTagName("input");
const screen = document.querySelector("#mainScreen");

screen.addEventListener('keyup',()=>{
    console.log(screen.value)
})

for(let i=0 ; i<button.length ; i++){
    button[i].addEventListener('click',function(){
       if(screen.value=="0"){
           screen.value = this.value;
       }else{
          
 switch(this.value){
     case "Clear" : screen.value = " "; break;

     case "=" : screen.value =eval(screen.value); break;

     default : screen.value += this.value;break;
     
 }
 

       }
      

    })
}