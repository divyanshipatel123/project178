var coordinates = {}
$(document).ready(function(){
    getCoordinates()
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