	_layers = {'off':true,'bar':true};
	var _timeron = false;

	var days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
	var _day = 0;
	var _hour = 12;
	$('#lbl').html(days[_day] + " " + _hour + ":00");
	for(var i=0;i<24;i++) {
		$("#btnshour").append("<div style='height:12px;font-size:10px;' class='btn' onclick='stHour("+i+")'>"+i+":00</div>")
	}
	for(var i=0;i<7;i++) {
		$("#btnsday").append("<div style='height:60px;line-height:60px' class='btn' onclick='stDay("+i+")'>"+days[i]+"</div>")
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
				$('#loff').css({'backgroundColor':'#ccc'});
			} else {
				placetypes.addLayer(_offices);
				$('#loff').css({'backgroundColor':'#d95f02'});
			}
		} else if (t == 'bar') {
			if (placetypes.hasLayer(_bars)) {
				placetypes.removeLayer(_bars);
				$('#lbar').css({'backgroundColor':'#ccc'});
			} else {
				placetypes.addLayer(_bars);
				$('#lbar').css({'backgroundColor':'#7570b3'});
			}
		} else if (t == 'mus') {
			if (placetypes.hasLayer(_museum)) {
				placetypes.removeLayer(_museum);
				$('#lmus').css({'backgroundColor':'#ccc'});
			} else {
				placetypes.addLayer(_museum);
				$('#lmus').css({'backgroundColor':'#e7298a'});
			}
		} else if (t == 'cof') {
			if (placetypes.hasLayer(_coffee)) {
				placetypes.removeLayer(_coffee);
				$('#lcof').css({'backgroundColor':'#ccc'});
			} else {
				placetypes.addLayer(_coffee);
				$('#lcof').css({'backgroundColor':'#a6761d'});
			}
		} else if (t == 'res') {
			if (placetypes.hasLayer(_restaurants)) {
				placetypes.removeLayer(_restaurants);
				$('#lres').css({'backgroundColor':'#ccc'});
			} else {
				placetypes.addLayer(_restaurants);
				$('#lres').css({'backgroundColor':'#1b9e77'});
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
			$('#monochrome').css({backgroundColor:'#ccc'});
		}
		buildStyle();
	}

	function gradient() {
		if(_gradient == 0.2) {
			_gradient = 1.0;
			$('#gradient').css({backgroundColor:'#f1efec'});
		} else {
			_gradient = 0.2;
			$('#gradient').css({backgroundColor:'#ccc'});
		}
		buildStyle();
	}

	function currentDay() {
		var d = new Date();
		_day = d.getDay();
		_hour = d.getHours();
		buildStyle();
	}

	function autoplay() {
		if (_timeron) {
			clearInterval(_timer);
			$('#auto').html("<img src='img/play.png' style='width:40px' />");
			$('#lbl').css({color:'#333'});
			_timeron = false;
		} else {
			_timer = setInterval(function(){ increaseDay(); }, 3200);
			$('#auto').html("<img src='img/playon.png' style='width:41px'/>");
			$('#lbl').css({color:'#f00'});
			_timeron = true;
		}
		
		
	}