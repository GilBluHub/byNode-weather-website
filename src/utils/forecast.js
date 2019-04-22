const request=require('request')

//const darkSkyURL = 'https://api.darksky.net/forecast/2696dfc24132dc11be14d730cd878fcd/37.8267,-122.4233'
    //  ?units=si
    // &lang=he
    // request 2 arguments : 1- the url , 2 the function to run 
    // json<>JSON , "json:true" make the respons as JSON and not a string

  const forecast = (latitude,longitude ,callback) =>{
    const url='https://api.darksky.net/forecast/2696dfc24132dc11be14d730cd878fcd/'+latitude +','+ longitude+'?units=si'
 
    //const url='https://api.darksky.net/forecast/2696dfc24132dc11be14d730cd878fcd/'+latitude +','+ longitude

      // "response.body" is know just object "body"

      request ({url,json : true},(error,{body})=>{
          if(error){
              callback('unable to connect darksky',undefined)
          }else if(body.error){
              callback('un able to find location from darksky',undefined)
          }else {
              callback(undefined,body.daily.data[0].summary + 'its the corrently ' + body.currently.temperature +' C degress out ' + ' There is a ' + body.currently.precipProbability + ' % chance of rain.' + "latitude : "+ body.latitude + "  longitude : " + body.longitude )
          }
      })
  }


  // ----- befor destructing es6  ----
 
//   const forecast = (latitude,longitude ,callback) =>{
//     const darkSkyURL='https://api.darksky.net/forecast/2696dfc24132dc11be14d730cd878fcd/'+latitude +','+ longitude+'?units=si'
 
//     //const darkSkyURL='https://api.darksky.net/forecast/2696dfc24132dc11be14d730cd878fcd/'+latitude +','+ longitude

//       request ({url:darkSkyURL,json : true},(error,response)=>{
//           if(error){
//               callback('unable to connect darksky',undefined)
//           }else if(response.body.error){
//               callback('un able to find location from darksky',undefined)
//           }else {
//               callback(undefined,response.body.daily.data[0].summary + 'its the corrently ' + response.body.currently.temperature +' degress out ' + ' There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//           }
//       })
//   }


  //---------------------------------


module.exports= forecast