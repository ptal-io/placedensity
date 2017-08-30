	var _bars =null;
	var _offices = null;
	var _monochrome = false;

	var map = L.map('map', {zoomControl: false}).setView([38.907192, -77.036871], 14);

	L.control.zoom({position:'bottomleft'}).addTo(map);


	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ',
		id: 'mapbox.light'
	}).addTo(map);


	var placetypes = new L.layerGroup();
	placetypes.addTo(map);


	function buildStyle() {
		$('#lbl').html(days[_day] + " " + _hour + ":00");
		var x = _day*24+_hour;


		o = 10 - off_sigs[x];
		b = 10 - bar_sigs[x];

		for(var i=1;i<=10;i++) {
	    	if (i <= b)
	    		$((".bar"+i)).animate({fillOpacity: 0.0}, 2000, function() {});
	    	else
	    		$((".bar"+i)).animate({fillOpacity: 0.2}, 2000, function() {}); 
	    	if (i <= o)
	    		$((".off"+i)).animate({fillOpacity: 0.0}, 2000, function() {});
	    	else
	    		$((".off"+i)).animate({fillOpacity: 0.2}, 2000, function() {});
	    }

	    if(_monochrome) {
		    for(var i=0;i<_offices.getLayers().length;i++) {
		    	_offices.getLayers()[i].setStyle({fillColor:'#000'});
		    }
		    for(var i=0;i<_bars.getLayers().length;i++) {
		    	_bars.getLayers()[i].setStyle({fillColor:'#000'});
		    }
		} else {
			for(var i=0;i<_offices.getLayers().length;i++) {
		    	_offices.getLayers()[i].setStyle({fillColor:'#d95f02'});
		    }
		    for(var i=0;i<_bars.getLayers().length;i++) {
		    	_bars.getLayers()[i].setStyle({fillColor:'#7570b3'});
		    }
		}
	}

	var basestyle = {
		"color": "#000",
		"fillColor": "#030",
	    "weight": 0.0,
	    "fillOpacity": 0.2
	}