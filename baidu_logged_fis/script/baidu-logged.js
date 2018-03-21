$(document).ready(function(){


	var baidu_HoverAndClick = {

		init: function() {
			this.render();
			this.bind();
		},

		render: function(){
			var me = this;
			me.city_weather = $("#city_weather");
			me.s_mod_setweather = $("#s_mod_setweather");

			me.s_bri = $("#s_bri");
			me.more_pro = $("#more_pro");

			me.jqueryHover = $("#kw");

			me.s_menu_item = $(".s-menu-item");
		},

		bind: function(){
			var me = this;
			/*天气hover态*/
			var timer;
			me.city_weather.hover(function() {
				clearTimeout(timer);
				timer = setTimeout(function(){
					$("#s_mod_setweather").show();
				}, 1000);
				me.city_weather.mouseleave(function(){
					clearTimeout(timer);
				});
			});

			me.s_mod_setweather.mouseleave(function(){
				me.s_mod_setweather.hide();
			});

			/*更多产品-hover态*/
			me.s_bri.hover(function(){
				me.more_pro.css({"minHeight": function(){
					var min = $(document).height();
					if(min < "600px") {
						min = "600px";
						return min;
					} 
					return min;
					}
				});
				me.more_pro.fadeIn(300);
			});

			me.more_pro.mouseleave(function(){
				me.more_pro.fadeOut(300);
			});

			/*搜索框-hover态*/
			me.jqueryHover.hover(function(){
				me.jqueryHover.addClass("nobg_s_fm_hover");
			}, function(){
				me.jqueryHover.removeClass("nobg_s_fm_hover");
			});
			me.jqueryHover.focus(function(){
				me.jqueryHover.addClass("nobg_s_fm_focus");
			});
			me.jqueryHover.focusout(function(){
				me.jqueryHover.removeClass("nobg_s_fm_focus");
			});

			/*切换-导航*/
			me.s_menu_item.click(function(){
				me.s_menu_item.removeClass("current");
				$(this).addClass("current");
				var dataId;
				dataId = $(this).attr("data-id");
				$(".s-content").css("display","none");
				switch(dataId){
					case "1":
						$("#s_content_1").css("display","block");
						break;
					case "2":
						$("#s_content_2").css("display","block");
						break;
					case "100":
						$("#s_content_100").css("display","block");
						break;
				}
			});
		}
	}

	baidu_HoverAndClick.init();

});

