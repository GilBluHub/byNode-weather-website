// app.js from the public/js/

//puzzle.mead.io/puzzle

// gitconsole.log('clint side javascropt loaded')

// fetch('http://localhost:3000/weather?address=london').then((response)=>{
//     response.json().then((data)=>{
//         if (data.error){
//             console.log(data.error)
//         }else{
//             console.log(" the location is :  "+data.location)
//             console.log("the forecast is : " + data.forecast)
//         }
       
//     })
// })

//------------geting the location from the form --------------------------------

// --- step 1 : select the element from html duc  -----

const weatherForm=document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
//"#"=search by ID 
//"."=search by CLASS 


//--- step 2 : event listener -> 2 param  : the event i.e submit , the sec is what to do "e" for event is what passet in 
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault() // makes the brwoser NOT refresh it self 
    // step 3 : 
    const location=search.value
    messageOne.textContent='Loading ...'
    messageTwo.textContent=''

    
    //fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            messageOne.textContent=data.error
            //console.log(data.error)
        }else{
            messageOne.textContent=" the location is :  "+data.location 
            messageTwo.textContent="  the forecast is :  " + data.forecast
          
            //console.log(" the location is :  "+data.location)
            // console.log("the forecast is : " + data.forecast)
        }
       
    })
})



   // console.log('your location :'+ location)
})


