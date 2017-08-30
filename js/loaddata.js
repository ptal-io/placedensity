
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
				//buildStyle();
		    });
		    $('#layers').append("<div class='mlayers' id='lbar' onclick='toggleLayer(\"bar\")'>BAR</div>");
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
		    $('#layers').append("<div class='mlayers' id='loff' onclick='toggleLayer(\"off\")'>OFFICE</div>");
		}}).error(function() {});