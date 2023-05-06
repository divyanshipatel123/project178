var coordinates = {}
$(document).ready(function(){
    getCoordinates()
    getWeather()
})
function getCoordinates(){
    let search_params = new URLSearchParams(window.location.search)
    if(search_params.has('source') && search_params.has('destination')){
        let source = search_params.get('source')
        let destination = search_params.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]

        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]


        console.log(coordinates)

    }else{
        alert("coordinates are not selected")
        window.history.back()
    }
}
function getWeather(){
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lon}&appid=f5ecb1f95d8e32f30c12be3eb3e98769`,
        type:"get",
        success:function(response){
            let name = response.name;
            let weather = response.weather[0].main
            let temp = response.main.temp - 273
            console.log("the weather: " , weather)
            console.log("name" , name)
            console.log(response , "    response")

            temp = temp.toString().substring(0, 5)

            console.log("temp: " , temp)
            $('scene_container').append(
                `
                <a-entity gps-entity-place="latitude:${coordinates.destination_lat}; longitude:${coordinates.destination_lon}">
                    <a-entity>
                        <a-text height="50" value="The Weather Forecast is ${weather} at ${name} \n The temperature is ${temp}*C"></a-text>
                    </a-entity>
                </a-entity>
                `
            )
        }
    })
}