const TEXT_BOX=document.querySelector("#box");
let control=0;
function poner(n){

    
    
    if(control==1){
        if(n=="+"||n=="-"||n=="*"||n=="/"||n==0){
            console.log("valor invalido")
        }else{
            TEXT_BOX.value+=n
            control--
        }
        
    }else{
        if(n=="+"||n=="-"||n=="*"||n=="/"){
            
            TEXT_BOX.value+=n
            control++
        }else{
            if(TEXT_BOX.value==""||TEXT_BOX.value==0){
                TEXT_BOX.value=n
            }else{
                TEXT_BOX.value+=n
            }
        }

       
    }

    

}
async function resultado(){
    if(TEXT_BOX.value==""){
        TEXT_BOX.value=0
    }else{
        const options = {method: 'POST',headers: {"Content-type": "application/json;charset=UTF-8"},body: `{"operacion":"${TEXT_BOX.value}"}`};

            let  nuevo_valor=await fetch('http://localhost:3000/calculator',options)
           nuevo_valor=await nuevo_valor.json();
          TEXT_BOX.value=nuevo_valor.respuesta
            


        
        
    }
   
}  
function limpiar(){
    TEXT_BOX.value=""
} 

document.addEventListener('keydown',(e)=>{
    let event=e.key;
    let enter=e.keyCode;
    if(enter==13){ 
        
        resultado()
    }else{
        if(event=="c"){
            let a=document.getElementById(`${event}`);
            a.setAttribute("class","active")
            setTimeout(()=>{
            a.setAttribute("class","")
        },100)  
        limpiar() 
        }else{
            let a=document.getElementById(`${event}`);
            a.setAttribute("class","active")
            setTimeout(()=>{
               a.setAttribute("class","")
            },100)   
           
           console.log(event)
           if(event=="+"||event=="-"||event=="*"||event=="/"){
               poner(event)
           }
           poner(event)
        }

      
    }
   

   
    

       
    
})