const request=require('request')

const geocode = (address,callback) =>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ2lsb25tYXBib3giLCJhIjoiY2p1NXkyZGk4MGN3YzN5dDNjM2hjY3M4bCJ9.wx9NnvTld8rBy-rMTwBfOw&limit=1'
    
      // safe URL : '+ encodeURIComponent(adress) +'
      //const geoCodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoiZ2lsb25tYXBib3giLCJhIjoiY2p1NXkyZGk4MGN3YzN5dDNjM2hjY3M4bCJ9.wx9NnvTld8rBy-rMTwBfOw&limit=1"
   

     // "response.body" is know just object "body"

      request({url,json: true}, (error,{body})=>{
   
       if(error){
           callback('unable to connect to location services',undefined)
       } else if(body.features.length===0){
           callback('unable to find location',undefined)
       }else{
           callback(undefined,{
           
                longitude : body.features[0].center[0],
                latitude :  body.features[0].center[1],
                location :  body.features[0].place_name
   
           })
       }
   
      })
   }

module.exports=geocode

// ---- before destructing -------------------------------------------

// const geocode = (address,callback) =>{
//     const geoCodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ2lsb25tYXBib3giLCJhIjoiY2p1NXkyZGk4MGN3YzN5dDNjM2hjY3M4bCJ9.wx9NnvTld8rBy-rMTwBfOw&limit=1'
    
//       // safe URL : '+ encodeURIComponent(adress) +'
//       //const geoCodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(adress)+'.json?access_token=pk.eyJ1IjoiZ2lsb25tYXBib3giLCJhIjoiY2p1NXkyZGk4MGN3YzN5dDNjM2hjY3M4bCJ9.wx9NnvTld8rBy-rMTwBfOw&limit=1"
   
//       request({url: geoCodeURL,json: true}, (error,response)=>{
   
//        if(error){
//            callback('unable to connect to location services',undefined)
//        } else if(response.body.features.length===0){
//            callback('unable to find location',undefined)
//        }else{
//            callback(undefined,{
           
//                 longitude : response.body.features[0].center[0],
//                 latitude :  response.body.features[0].center[1],
//                 location :  response.body.features[0].place_name
   
//            })
//        }
   
//       })
//    }



//---------------MAPBOX ---------------------------------------

//const geoCodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2lsb25tYXBib3giLCJhIjoiY2p1NXkyZGk4MGN3YzN5dDNjM2hjY3M4bCJ9.wx9NnvTld8rBy-rMTwBfOw&limit=1"

// const geoCodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/tel%aviv.json?access_token=pk.eyJ1IjoiZ2lsb25tYXBib3giLCJhIjoiY2p1NXkyZGk4MGN3YzN5dDNjM2hjY3M4bCJ9.wx9NnvTld8rBy-rMTwBfOw&limit=1"
//      // &limit=1  -> it means that we will get just one result of search
// request ({url:geoCodeURL, json: true}, (error , response)=>{
      
//     if(error){
//        console.log('unable to connect MAPBOX') 
//     }else if (response.body.features.length===0){
//         console.log('no response from MAPBOX')

//     }else{
//         const longitude=response.body.features[0].center[0]
//         const latitude=response.body.features[0].center[1]
//         console.log("lat is  : " + latitude)
//         console.log("long is : " +longitude)
//     }
    
// })  // end of : geoCodeURL

//------------------------------------------------------------------
   