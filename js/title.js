var OriginTitle = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			$('[rel="icon"]').attr('href', "/favicon.png");
			document.title = '众里寻他千百度......  |' + OriginTitle;
			clearTimeout(titleTime);

		} else {
			$('[rel="icon"]').attr('href', "/favicon.png");
			document.title = '蓦然回首, 那人却在, 灯火阑珊处。 |BoyInTheSun';
			titleTime = setTimeout(function() {
				document.title = OriginTitle;
			}, 2000);
		}
	});