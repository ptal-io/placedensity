
	var _layersloaded = 0;

	// LOAD COFFEE
	$.ajax({
		dataType: "json",
		url: "data/coffee_l10.geojson",
		success: function(data) {
			_coffee = new L.layerGroup();
			_coffee.id = "cof";
			_coffee.addTo(placetypes);
		    $(data.features).each(function(key, data) {
		    	basestyle.className = "cof"+data.properties.lvl;
		    	basestyle.fillColor = "#a6761d";
		    	db = new L.geoJson(data, {style: basestyle});
		    	db.id = 'cof';
		    	db.addTo(_coffee);
		    });
		    $('#layers').append("<div class='mlayers' id='lcof' style='background-color:#a6761d' onclick='toggleLayer(\"cof\")'>COFFEESHOP</div>");
		    _layersloaded++;
		    checkLayersLoaded();
		}}).error(function() {});

	// LOAD BARS
	$.ajax({
		dataType: "json",
		url: "data/bar_l10.geojson",
		success: function(data) {
			_bars = new L.layerGroup();
			_bars.id = "bar";
			_bars.addTo(placetypes);
		    $(data.features).each(function(key, data) {
		    	basestyle.className = "bar"+data.properties.lvl;
		    	basestyle.fillColor = "#7570b3";
		    	db = new L.geoJson(data, {style: basestyle});
		    	db.id = 'bar';
		    	db.addTo(_bars);
		    });
		    $('#layers').append("<div class='mlayers' id='lbar' style='background-color:#7570b3' onclick='toggleLayer(\"bar\")'>BAR</div>");
		    _layersloaded++;
		    checkLayersLoaded();
		}}).error(function() {});

	// LOAD OFFICES
	$.ajax({
		dataType: "json",
		url: "data/offices_l10.geojson",
		success: function(data) {
			_offices = new L.layerGroup();
			_offices.id = "off";
			_offices.addTo(placetypes);
		    $(data.features).each(function(key, data) {
		    	basestyle.className = "off"+data.properties.lvl;
		    	basestyle.fillColor = "#d95f02";
		    	db = new L.geoJson(data, {style: basestyle});
		    	db.id = 'off';
		    	db.addTo(_offices);
		    });
		    $('#layers').append("<div class='mlayers' id='loff' style='background-color:#d95f02' onclick='toggleLayer(\"off\")'>OFFICE</div>");
		    _layersloaded++;
		    checkLayersLoaded();
		}}).error(function() {});

	// LOAD MUSEUMS
	$.ajax({
		dataType: "json",
		url: "data/museums_l10.geojson",
		success: function(data) {
			_museum = new L.layerGroup();
			_museum.id = "mus";
			_museum.addTo(placetypes);
		    $(data.features).each(function(key, data) {
		    	basestyle.className = "mus"+data.properties.lvl;
		    	basestyle.fillColor = "#e7298a";
		    	db = new L.geoJson(data, {style: basestyle});
		    	db.id = 'mus';
		    	db.addTo(_museum);
		    });
		    $('#layers').append("<div class='mlayers' id='lmus' style='background-color:#e7298a' onclick='toggleLayer(\"mus\")'>MUSEUM</div>");
		    _layersloaded++;
		    checkLayersLoaded();
		}}).error(function() {});

	// LOAD MUSEUMS
	$.ajax({
		dataType: "json",
		url: "data/restaurant_l10.geojson",
		success: function(data) {
			_restaurants = new L.layerGroup();
			_restaurants.id = "res";
			_restaurants.addTo(placetypes);
		    $(data.features).each(function(key, data) {
		    	basestyle.className = "res"+data.properties.lvl;
		    	basestyle.fillColor = "#1b9e77";
		    	db = new L.geoJson(data, {style: basestyle});
		    	db.id = 'res';
		    	db.addTo(_restaurants);
		    });
		    $('#layers').append("<div class='mlayers' id='lres' style='background-color:#1b9e77' onclick='toggleLayer(\"res\")'>RESTAURANT</div>");
		    _layersloaded++;
		    checkLayersLoaded();
		}}).error(function() {});


	function checkLayersLoaded() {
		if(_layersloaded == 5) {
			currentDay();
			buildStyle();
			$('#loadingbg').fadeOut(3000);
			$('#loading').fadeOut(1000);
		}
	}