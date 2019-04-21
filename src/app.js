const path=require('path')
//--- init express ---
const express = require('express')
const hbs=require('hbs')
const app = express()
//---------------------------
const geocode  = require('./utils/geocode')
const forecast = require('./utils/forecast')
//--------------------------
//Define path to express config

const publicDirectoryPath = path.join(__dirname,'../public')
// __dirname = the corrent path to the dirctory , "../public" : adding the path to the public directory
const viewPath=path.join(__dirname,'../templates/views') 
// instend to VIEWS dirctory path to TEMPLATES/views directory
const partialsPath = path.join(__dirname,'../templates/partials')
// instend to VIEWS dirctory path to TEMPLATES/partials directory


//Setup handlebars engine and views locations
app.set('view engine','hbs') // set hbs-hendlebar on express
app.set('views',viewPath) // the new path to TEMPLATES deirctory
hbs.registerPartials(partialsPath)


// setuo static directory to server
app.use(express.static(publicDirectoryPath))

//req = the clyent side requst
//res = the server side response

app.get('',(req,res)=>{
    res.render('index',{
        title:'wether app',
        name:'gil'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about me',
        name:'gil'
    })    
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'need help ? ',
        content:'this is haw we can help you ',
        name:'gil'
    })    
})

//----------------------------------------------------

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must provide an adress'
        })
    } // end if 1

     // empty object default valeu : " ={} " else the tsever will fall !
        
     geocode(req.query.address,(error,{latitude, longitude, location}={})=>{

        if (error){
             return res.send({error})  
              
        }

        forecast(latitude,longitude,(error , forecastData)=>{
            if (error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address:req.query.address
            })

        }) // end forecast
    } ) // end geocode
})// end fiction



//----------------------------------------------------





// set the 404 page - must come last!
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'gil',
        erroMessage:'help artical not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'gil',
        erroMessage:'page not found'
    })
})

// --- start the server ----
app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})




// 3000 port- for common developer port only
// -------------------------

// run the server - 
// node src/app.js
// close the server
// CTRL C 
// localhost:3000

// nodemon src/app.js

//nodemon src/app.js -e js,hbs
//-------- heroku -----
//heroku -v
//heroku login
//---------------------------------------------
// git --version
// git init
// git status
// git add.
//----------------------------------------------------------

// app.get('/weather',(req,res)=>{
//     if(!req.query.address){
//         return res.send({
//             error:'you must provide an address'
//         })

//     }
//     res.send([{
//         location :'israel',
//         forecast:'very hot',
//         address :req.query.address
//     }])

// })
//---------------------------------------------------------------------------
// app.get('',(req,res)=>{
//     res.send('hello express nodemon')

// })

// app.get('/help',(req,res)=>{
//     res.send('help pages')
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About Me</h1>')
// })