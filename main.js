(function(){
	var screen = window.screen;
	var w = screen.width;
	var h = screen.height;
	var w_left_pad = 20;
	var w_right_pad = 20;

	var svg = d3.select("body")
				.append("svg");
	var rect = svg.append("rect")
				.attr("id", "main_banner");


	set_on_resize();
	d3.select(window).on("resize", set_on_resize);
	function set_on_resize(){
		
				svg.attr("width", window.innerWidth-w_left_pad-w_right_pad)
					.attr("height", h);


		rect.attr("x", w_left_pad)
			.attr("y", 0)
			.attr("width", window.innerWidth)
			.attr("height", 200)
			.attr("fill", d3.rgb(20,50,80, 1));
		}
	})();
