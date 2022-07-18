//variable

let openbtn=document.getElementById('open-btn')
let modelcontainer=document.getElementById('model-container')

let closebtn= document.getElementById('close-btn')

//event listner
openbtn.addEventListener('click', function(){
   modelcontainer.style.display='block';



} )

closebtn.addEventListener('click', function(){
    modelcontainer.style.display ='none';



})
window.addEventListener('click', function(cross){
    if(cross.target===modelcontainer){
        modelcontainer.style.display='none';
    }
})
