mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9'
// });



geocode('el fenix dallas, tx', mapboxToken).then(function (result) {
    console.log(result);
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        zoom: 18,

    });

    map.jumpTo({center: result});

    map.addControl(new mapboxgl.NavigationControl());
    map.setZoom(20);


    var popupElFenix = new mapboxgl.Popup()
        .setHTML('<h2>El Fenix</h2><br>Best TexMex around!');

    var marker = new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(popupElFenix)
        .addTo(map);

});