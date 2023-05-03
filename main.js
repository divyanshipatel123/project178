
//var latitude  = 22.7868542 , longitude = 88.3643296

var img1 = document.querySelector("#amber")
var img2 = document.querySelector("#lotus")
var img3 = document.querySelector("#gate")
var img4 = document.querySelector("#gateway")
var img5 = document.querySelector("#victoria")
var img6 = document.querySelector("#SOU")
var img7 = document.querySelector("#temple")

var longitude , latitude , destination

$(document).ready(function(){
    alert('give permission to access your location')
    initGeoLocation()
})

function initGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }else{
        alert("your browser does not support this function")
    }
}
function success(position){
    longitude = position.coords.longitude;
    latitude = position.coords.latitude
    
    // adding the mapbox and map

    //initializing mapbox    23.144830260641722, 79.9488774165702
    mapboxgl.accessToken = "pk.eyJ1Ijoic2hyaXRpLWRodWxpeWEiLCJhIjoiY2xncm93NHEzMHFmcDNpbXN3a2l3ejBnNyJ9.7tmuZTUhtLwQnEkq6txKcg"

    var map = new mapboxgl.Map({
        container:"map",
        style:"mapbox://styles/mapbox/streets-v11",
        center:[longitude,latitude],
        zoom:4
    })
    
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy:true},
        trackUserLocation:true
    }))

    map.addControl(
        new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }).on("result" , function(e){
        destination = e.result.center
        console.log(destination[1] , destination[0] , " the destination in amp contrals")
    })

    )
    
    //adding the markers
    //amber
    marker1 = new mapboxgl.Marker({
        element:img1
    }).setLngLat([75.85133 , 26.98547]).addTo(map)
    //lotus
    marker2 = new mapboxgl.Marker({
        element:img2
    }).setLngLat([77.25911 , 28.55351]).addTo(map)
    //gate 
    marker3 = new mapboxgl.Marker({
        element:img3
    }).setLngLat([77.22952042470025 , 28.613213369726132]).addTo(map)
    //gateway
    marker4 = new mapboxgl.Marker({
        element:img4
    }).setLngLat([72.82987500052646 , 19.009182328386252]).addTo(map)
    //victoria
    marker5 = new mapboxgl.Marker({
        element:img5
    }).setLngLat([88.35300823909962 , 22.544278628260873]).addTo(map)
    //statue of unity
    marker6 = new mapboxgl.Marker({
        element:img6
    }).setLngLat([73.71909425329783,21.838177722749442]).addTo(map)
    //khajuraaho temple
    marker7 = new mapboxgl.Marker({
        element:img7
    }).setLngLat([79.92155287981298, 24.85222169572912]).addTo(map)
}

$(function(){
    $("button").click(function(){
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })   
})

