function initMap() {
    // The location of Uluru
    var uluru = {lat: 4.3263, lng: 101.1395};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }