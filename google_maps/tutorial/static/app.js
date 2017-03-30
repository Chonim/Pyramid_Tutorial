var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

$(document).ready(function() {

    initMap();
    var pos = $("#map").position();
    var position = pos.left;

    $('.side-menu li').each(function(i) {
        var t = $(this);
            if (position >= 240) {
              setTimeout(function() {
                t.addClass('hide-menu');
              }, (i + 1) * 10);
        } else {
            setTimeout(function() {
                t.removeClass('hide-menu');
            }, (i + 1) * 30);
        }
    });

    $('.side-menu').hover(function() {
        $('.side-menu').css("width",0)
    })

})