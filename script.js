// Fetch lanes data from our Glitch project
var vzv_tcst = fetch('https://data.cityofnewyork.us/resource/hiik-hmf3.geojson')
  .then(function (response) {
    // Read data as JSON
    return response.json();
  });



// Once both have loaded, do some work with them
Promise.all([vzv_tcst])
  .then(function (fetchedData) {
    console.log('Both datasets have loaded');
    // Unpack the data from the Promise
	var vzv_tcst = fetchedData[1];

  
  

// get color depending on population density value
function getColor(d) {
return d > 6  ? '#1a9850' :
	   d > 3  ? '#91cf60' :
	   d > 0  ? '#d9ef8b' :
	   d > -3  ? '#fdae61' :
	   d > -6  ? '#d7191c' :
	   d < -6  ? '#d7191c' :
				  '#ffffff';
}










///////////////////////////////////////////////////////////////////////////////////
    function style_Total(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.P12_00to10_Total),
		fillOpacity: .7,
 		fillColor: getColor(feature.properties.P12_00to10_Total),
      };
    }
	
    function highlightFeature_Total(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 2,
        color: "#666",
        dashArray: "",
        fillOpacity: .7
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
    var Total;
    function resetHighlight_Total(e) {
      Total.resetStyle(e.target);
    }

    function onEachFeature_Total(feature, layer) {
      layer.on({
        mouseover: highlightFeature_Total,
        mouseout: resetHighlight_Total
      });
    }
	
    Total = L.geoJson(P12_00to10, {
      style: style_Total,
      onEachFeature: onEachFeature_Total
    });
// Add popups to the layer
Total.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Total, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////
    function style_Children(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.P12_00to10_0_to_17),
		fillOpacity: .7,
 		fillColor: getColor(feature.properties.P12_00to10_0_to_17),
      };
    }
	
    function highlightFeature_Children(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 2,
        color: "#666",
        dashArray: "",
        fillOpacity: .7
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
    var Children;
    function resetHighlight_Children(e) {
      Children.resetStyle(e.target);
    }

    function onEachFeature_Children(feature, layer) {
      layer.on({
        mouseover: highlightFeature_Children,
        mouseout: resetHighlight_Children
      });
    }
	
    Children = L.geoJson(P12_00to10, {
      style: style_Children,
      onEachFeature: onEachFeature_Children
    });
// Add popups to the layer
Children.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Children, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////
    function style_Adults(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.P12_00to10_18_to_64),
		fillOpacity: .7,
 		fillColor: getColor(feature.properties.P12_00to10_18_to_64),
      };
    }
	
    function highlightFeature_Adults(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 2,
        color: "#666",
        dashArray: "",
        fillOpacity: .7
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
    var Adults;
    function resetHighlight_Adults(e) {
      Adults.resetStyle(e.target);
    }

    function onEachFeature_Adults(feature, layer) {
      layer.on({
        mouseover: highlightFeature_Adults,
        mouseout: resetHighlight_Adults
      });
    }
	
    Adults = L.geoJson(P12_00to10, {
      style: style_Adults,
      onEachFeature: onEachFeature_Adults
    });
// Add popups to the layer
Adults.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Adults, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////
    function style_Elders(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.P12_00to10_65_over),
		fillOpacity: .7,
 		fillColor: getColor(feature.properties.P12_00to10_65_over),
      };
    }
	
    function highlightFeature_Elders(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 2,
        color: "#666",
        dashArray: "",
        fillOpacity: .7
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }
    var Elders;
    function resetHighlight_Elders(e) {
      Elders.resetStyle(e.target);
    }

    function onEachFeature_Elders(feature, layer) {
      layer.on({
        mouseover: highlightFeature_Elders,
        mouseout: resetHighlight_Elders
      });
    }
	
    Elders = L.geoJson(P12_00to10, {
      style: style_Elders,
      onEachFeature: onEachFeature_Elders
    });
// Add popups to the layer
Elders.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Elders, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



var mapOptions = {
	zoomControl: false, 
	attributionControl: false, 
	center: [18.244434, -66.456089],
	zoom: 10,
	minZoom: 9,
	maxZoom: 19,
};


var map = L.map('map', mapOptions);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';


var positron = L.tileLayer('https://api.mapbox.com/styles/v1/jaramana/ck7z3cf7m1o1p1inwpn8fcw33/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFyYW1hbmEiLCJhIjoiY2pzeGx0b2R1MDNuajN5cDVtemprcjhyaCJ9.m04uOZABAigD1SL9vbUJvw', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var positronLabels = L.tileLayer('https://api.mapbox.com/styles/v1/jaramana/ck7z43nef12h71in0o7l0mvrh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFyYW1hbmEiLCJhIjoiY2pzeGx0b2R1MDNuajN5cDVtemprcjhyaCJ9.m04uOZABAigD1SL9vbUJvw', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);

/*/
var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);
/*/



Total.addTo(map);



L.control.zoom({
     position:'topright'
}).addTo(map);









function getColor(d) {
return d > 6  ? '#1a9850' :
	   d > 3  ? '#91cf60' :
	   d > 0  ? '#d9ef8b' :
	   d > -3  ? '#fee08b' :
	   d > -6  ? '#fc8d59' :
	   d > -100  ? '#d73027' :
				  '#ffffff';
}

var legend = L.control({ position: "bottomright" });
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:14px;font-weight: bold;">Percent Change</h6>'],
		grades = [100, 6, 3, 0, -3, -6, -100],
        labels = ["> 6%", "3 to 6%", "0 to 3%", "-3 to 0%", "-6 to -3%", "< -6%", "No Data"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : ''));
        div.innerHTML = labels_title.join('');
    }
    return div;
};
legend.addTo(map);

  

var overlays = {
	"All ages": Total,
	"Ages 17 and under": Children,
	"Ages 18 to 64": Adults,
	"Ages 64 and over": Elders
};


var Title = {
};



var layerControl2 = L.control.layers(Title, null, {position: "topleft",collapsed: false}).addTo(map);
$(".leaflet-control-layers-list").before("<center><h6>PR Pop Change</h6><h7>2000 to 2010</h7></center>");
  
//Render Layer Control & Move to Sidebar
var layerControl = L.control.layers(overlays, null, {position: "bottomleft",collapsed: false}).addTo(map);
var oldLayerControl = layerControl.getContainer();
var newLayerControl = $("#layercontrol");
newLayerControl.append(oldLayerControl);
//$(".leaflet-control-layers-list").before("<h6>Languages Spoken at Home</h6>");
  });



var popupTemplate_Total = document.querySelector('.popupTemplate_Total').innerHTML;
var popupTemplate_Children = document.querySelector('.popupTemplate_Children').innerHTML;
var popupTemplate_Adults = document.querySelector('.popupTemplate_Adults').innerHTML;
var popupTemplate_Elders = document.querySelector('.popupTemplate_Elders').innerHTML;