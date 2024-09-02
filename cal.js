let input = document.getElementById("input")
let buttons =document.querySelectorAll('button');

let convert = Array.from(buttons)
let string =""
convert.forEach(btn=>{
btn.addEventListener("click",function(e){
  


  if(e.target.innerHTML === "DEL"){
    string = string.substring(0,string.length-1);
    input.value = string;
  }else if(e.target.innerHTML === "AC"){
      string = "";
      input.value = string;
  }else if(e.target.innerHTML === "="){
         string = eval(string)
      input.value =string;
  
  }
  
  
  
  
  else{string += e.target.innerHTML;
    input.value = string
  } 
 

  


 console.log(e.target.innerHTML)
})
});


