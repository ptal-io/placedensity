	_layers = {'off':true,'bar':true};

	var days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
	var _day = 0;
	var _hour = 12;
	$('#lbl').html(days[_day] + " " + _hour + ":00");
	for(var i=0;i<24;i++) {
		$("#btnshour").append("<div style='height:12px;font-size:10px;' class='btn' onclick='stHour("+i+")'>"+i+":00</div>")
	}
	for(var i=0;i<7;i++) {
		$("#btnsday").append("<div class='btn' onclick='stDay("+i+")'>"+days[i]+"</div>")
	}

	function stDay(iday) {
		_day = iday;
		buildStyle();
	}

	function stHour(ihour) {
		_hour = ihour;
		buildStyle();
	}

	function toggleLayer(t) {
		if (t == 'off') {
			if (placetypes.hasLayer(_offices)) {
				placetypes.removeLayer(_offices);
				$('#loff').css({'backgroundColor':'#fff'});
			} else {
				placetypes.addLayer(_offices);
				$('#loff').css({'backgroundColor':'#d95f02'});
			}
		} else if (t == 'bar') {
			if (placetypes.hasLayer(_bars)) {
				placetypes.removeLayer(_bars);
				$('#lbar').css({'backgroundColor':'#fff'});
			} else {
				placetypes.addLayer(_bars);
				$('#lbar').css({'backgroundColor':'#7570b3'});
			}
		} else if (t == 'mus') {
			if (placetypes.hasLayer(_museum)) {
				placetypes.removeLayer(_museum);
				$('#lmus').css({'backgroundColor':'#fff'});
			} else {
				placetypes.addLayer(_museum);
				$('#lmus').css({'backgroundColor':'#e7298a'});
			}
		} else if (t == 'cof') {
			if (placetypes.hasLayer(_coffee)) {
				placetypes.removeLayer(_coffee);
				$('#lcof').css({'backgroundColor':'#fff'});
			} else {
				placetypes.addLayer(_coffee);
				$('#lcof').css({'backgroundColor':'#a6761d'});
			}
		}
		buildStyle();
	}

	function monochrome() {
		if(_monochrome) {
			_monochrome = false;
			$('#monochrome').css({backgroundColor:'#f1efec'});
		} else {
			_monochrome = true;
			$('#monochrome').css({backgroundColor:'#fff'});
		}
		buildStyle();
	}

	function gradient() {
		if(_gradient == 0.2) {
			_gradient = 1.0;
			$('#gradient').css({backgroundColor:'#f1efec'});
		} else {
			_gradient = 0.2;
			$('#gradient').css({backgroundColor:'#fff'});
		}
		buildStyle();
	}