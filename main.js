
//getts current geolocalization and writes to variables
function getLocation(onlocationready) {
  let geo = navigator.geolocation;
  if (geo) {
    geo.getCurrentPosition(function (location) {
      let lat = location.coords.latitude
      let lng = location.coords.longitude

      onlocationready({
        lat: lat,
        lng: lng
      })
    })
  }
  else {
    console.log('niedostepny')
  }
}

//function display map in current position
function initMap() {
  getLocation(function (locationData) {
    let map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 13,
        center: locationData,
        gestureHandling: 'none',
        zoomControl: false,
        streetViewControl: false,
        keyboardShortcuts: false
      });

      //add marker in the center of map
    let marker = new google.maps.Marker({ position: locationData, map: map });    
  })

}






