var map;
var overlays = [];

//Runs when page is done loading
function initialize() {

    //Javascript object to help configure google map.
    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(39.707, -101.503),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    //Create google map, place it in 'map-canvas' element, and use 'mapOptions' to
    //help configure it
    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    //Add the "click" event listener to the map, so we can capture
    //lat lon from a google map click.
    google.maps.event.addListener(map, "click", function(event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();

        if($('#lat1').val() == ""){
            $('#lat1').val(lat);
            $('#lon1').val(lng);
        }else if($('#lat2').val() == ""){
            $('#lat2').val(lat);
            $('#lon2').val(lng);
            var lat1 = $('#lat1').val();
            var lon1 = $('#lon1').val();
            var lat2 = $('#lat2').val();
            var lon2 = $('#lon2').val();
            addBoundingBox(lat1,lon1,lat2,lon2);
            //addCircle(lat1,lon1,lat2,lon2);
        }else{
            $('#lat1').val(lat);
            $('#lon1').val(lng);
            $('#lat2').val("");
            $('#lon2').val("");
        }

        var lat1 = parseFloat($('#lat1').val());
        var lon1 = parseFloat($('#lon1').val());
        var lat2 = parseFloat($('#lat2').val());
        var lon2 = parseFloat($('#lon2').val());

        console.log(lat1+","+lon1+","+lat2+","+lon2);


        var QueryNum = $('#QueryNum').val();


        var PostData = {
            lat:lat,
            lng:lng ,
            query_num: QueryNum
        }

        $.post("backend.php", PostData)
            .done(function( data ) {
                var obj = data;
                for (var i in obj){
                    switch(obj[i].Type){
                        case "MultiPolygon":
                            addMultiPolygon(obj[i].Coordinates);
                            break;
                        case "Polygon":
                            addPolygon(obj[i].Coordinates,HexColor());
                            break;
                        case "LineString ":
                            addPolyLine(obj[i].Coordinates);
                            break;
                        case "Point":
                            addPoint(obj[i].Coordinates);
                            break;
                    }
                }
            });

    });
    
    $('#submit_form').on("click",function() {
    	console.log("clicked");
        $.post("backend.php", $( "#Form1" ).serialize())
        	.done(function( data ) {
                data = JSON.parse(data);
				var obj = data;
				for (var i in obj){
					//eval() evaluates the expression	
					var shp = eval('('+obj[i]+')');
					
                    switch(shp.type){
                        case "MultiPolygon":
                            addMultiPolygon(shp.coordinates);
                            break;
                        case "Polygon":
                            addPolygon(shp.coordinates,HexColor());
                            break;
                        case "LineString":
                            addPolyLine(shp.coordinates,HexColor());
                            break;
                        case "Point":
                            addPoint(shp.coordinates);
                            break;
                    }
                }
				
            });
	}); 

}

function addCircle(lat1,lon1,lat2,lon2){
    
	
		// This example creates circles on the map, representing
	// populations in North America.

	// First, create an object containing LatLng and population for each city.
	var citymap = {};
	citymap['chicago'] = {
	  center: new google.maps.LatLng(41.878113, -87.629798),
	  population: 2714856
	};
	var cityCircle;

	// Create the map.
	  var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng(37.09024, -95.712891),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	  };

	  var map = new google.maps.Map(document.getElementById('map-canvas'),
		  mapOptions);

	  // Construct the circle for each value in citymap.
	  // Note: We scale the area of the circle based on the population.
	  for (var city in citymap) {
		var populationOptions = {
		  strokeColor: '#FF0000',
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: '#FF0000',
		  fillOpacity: 0.35,
		  map: map,
		  center: citymap[city].center,
		  radius: Math.sqrt(citymap[city].population) * 100
		};
		// Add the circle for this city to the map.
		cityCircle = new google.maps.Circle(populationOptions);
	  
}

	
}

function addBoundingBox(lat1,lon1,lat2,lon2){
    clearMarkers();
    var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(lat1, lon1),
        new google.maps.LatLng(lat2, lon2))
    });

    overlays.push(rectangle);
}

function addMultiPolygon(obj){

    color = HexColor();

    for (var i in obj){
        addPolygon(obj[i],color);
    }

}

function addPolygon(obj,Color) {

   // console.log("Polygon: ");
    //console.log(obj);
    //console.log(obj.length);

    var PolyCoords = [];

    for (var i in obj){
		console.log('obj[i]:'+obj[i]);
        for(var j=0;j<obj[i].length;j++){
		console.log('obj[i][j]:'+obj[i][j]);
            var latlng = new google.maps.LatLng(obj[i][j][1],obj[i][j][0]);
            PolyCoords.push(latlng);
        }
    }

    var polygon = new google.maps.Polygon({
        paths: PolyCoords,
        title: obj.fullname,
        fillColor: Color,
        fillOpacity: 0.2,
        strokeWeight: 2,
        strokeColor: Color,
        map: map
    });

    overlays.push(polygon); //Add polygon to global array of polygons

}

function addPolyLine(obj,Color){
	//console.log("LineString");
    var LineCoords = [];
    for (var i in obj){
		//console.log(obj[i]);
            var latlng = new google.maps.LatLng(obj[i][1],obj[i][0]);
            LineCoords.push(latlng);
        
    }
    var polyline = new google.maps.Polyline({
        path: LineCoords,
        geodesic: true,
        strokeColor: Color,
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
    });

    overlays.push(polyline); //Add polygon to global array of polygons
}

function addPoint(obj) {
    //console.log(obj[0]);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(obj[1],obj[0]),
        map: map
    });
    overlays.push(marker); //Add marker to global array of markers
}

//Sets the map on all markers (could change the map, or set to null to erase markers)
function setAllMap(map) {
    for (var i = 0; i < overlays.length; i++) {
	console.log(overlays[i]);
        overlays[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    overlays = [];	//set global marker array to EMPTY
}

function HexColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function process(key,value) {
    //if(isInt(key) === true)
        console.log(key + " : "+value);
}

function iterate(o,func){
    for (var i in o) {
        func.apply(this,[i,o[i]]);
    }
}

function traverse(o,func) {
    for (var i in o) {
        func.apply(this,[i,o[i]]);
        if (o[i] !== null && typeof(o[i])=="object") {
            //going on step down in the object tree!!
            traverse(o[i],func);
        }
    }
}

function isInt(value) {
    return !isNaN(parseInt(value,10)) && (parseFloat(value,10) == parseInt(value,10));
}