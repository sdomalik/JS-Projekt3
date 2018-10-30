let geo = navigator.geolocation
let lat
let lng 
if(geo){
    geo.getCurrentPosition(function(location){
        lat = location.coords.latitude
        lng = location.coords.longitude
        console.log('szerokosc ' + Lat)
        console.log('dlugosc ' + Lng)

        let mapOptions = {
            center: new google.maps.LatLng(lat,lng)
        }
    })   
}
else{
    console.log('niedostepny')
}

function myMap() 
{
let mapProp= {
    center: new google.maps.LatLng(),
    zoom:5,
}

let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}




