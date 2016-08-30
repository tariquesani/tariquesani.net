(function($){
  "use strict";

    /*
     ----------------------------------------------------------------------
     Map
     ----------------------------------------------------------------------
     */

    function initialize_map() {

        // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

      var myLatLng = new google.maps.LatLng(21.15175,79.01071);

      var mapOptions = {
          zoom: 13,
          center: myLatLng,
          disableDefaultUI: true,
          scrollwheel: true,
          navigationControl: true,
          mapTypeControl: true,
          scaleControl: false,
          draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
       styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":1}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(21.15175,79.01071),
        map: map,
        icon: '/images/icons/map-marker-photo.png',
        title: 'Hi, this is where I am!'
    });
    }

    google.maps.event.addDomListener(window, 'load', initialize_map);

})(jQuery);
