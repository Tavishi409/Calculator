var screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
var screenValue = ''
for(item of buttons){
    item.addEventListener('click',(e)=>{
    buttonText = e.target.innerText 
    console.log('button text', buttonText)
    if(buttonText === 'MU'){
        screen.value = ""
        screenValue = screen.value 
    }
    else if(buttonText === '='){
        screen.value = eval(screenValue)
    }
    else{
        screenValue += buttonText 
        screen.value = screenValue
    }
    })
} 