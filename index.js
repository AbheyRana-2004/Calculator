
let a = document.querySelectorAll(".span");
let i = 0;
for (let i = 0; i < a.length; i++) {
    a[i].onclick=(e)=>{
        let a = document.getElementById("Calculator");
        
        if(e.target.innerHTML == "C" ){
            a.value = "";

        } else if(e.target.innerHTML == "="){
            if(a.value==''){
                a.value='enter number';
            }
          let output = eval(a.value);
            a.value =  output;

        } else if(e.target.innerHTML == "del"){
            a.value = a.value.slice(0,-1);

        } else a.value += e.target.innerHTML
    }
    console.log(i);
    
}