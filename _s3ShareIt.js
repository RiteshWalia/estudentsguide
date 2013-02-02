(function($) {

	var methods = {
		create: function(options) {
			if($('#s3ShareIt', $(options.el))) {
				var el = $('#s3ShareIt', $(options.el));
			} else {
				$(options.el).prepend('<div id="s3ShareIt"></div>');
				var el = $('#s3ShareIt', $(options.el));
			}
			var html = '';
			for(i in this.links) {
				if(options[i] == true) {
					html += this.links[i];
				}
			}
			var minus = parseInt(parseInt(options.thumbWidth) / 3);
			$(el).css({
				'position': 'absolute',
				'top': '100px',
				'left': -minus + 'px',
				'width': options.thumbWidth + 'px',
				'opacity': options.opacity
			}).hover(function() {
				$(this).stop().fadeTo('fast', 1);
			}, function() {
				$(this).stop().fadeTo('fast', options.opacity);
			}).append(html).find('a').hover(function() {
				$(this).stop().animate({'marginLeft': '120px'}, 'fast');
			}, function() {
				$(this).stop().animate({'marginLeft': '0px'}, 200);
			});
			var minTop = 130;
			$(window).scroll(function(){
				var position = $(window).scrollTop();
				if(position < minTop) {
					el.stop().animate({'top': 100}, 200);
				} else {
					el.stop().animate({'top': parseInt(position)+10}, 200);
				}
			});
		},
		
		links: {
			'twitter': '<a target="_blank" title="Twitt it!" href="http://twitter.com/home?status='+ $('title').html() +'+-+'+ document.location +'"><img alt="twitter" src="https://sites.google.com/site/estudentsguide/file-cabinet/twitter.png"></a>',
			'facebook': '<a target="_blank" title="Share on Facebook" href="http://www.facebook.com/sharer.php?u='+ document.location +'"><img alt="facebook" src="https://sites.google.com/site/estudentsguide/file-cabinet/facebook.png"></a>',
			'digg': '<a target="_blank" title="Submit to Digg" href="http://digg.com/submit?phase=2&amp;url='+ document.location +'"><img alt="digg" src="https://sites.google.com/site/estudentsguide/file-cabinet/digg.png"></a>',
			'delicius': '<a target="_blank" title="Submit to Delicius" href="http://del.icio.us/post?url='+ document.location +'"><img alt="delicious" src="https://sites.google.com/site/estudentsguide/file-cabinet/delicious.png"></a>',
			'stumbleupon': '<a target="_blank" title="Submit to StumpleUpon" href="http://www.stumbleupon.com/submit?url='+ document.location +'"><img alt="stumbleupon" src="https://sites.google.com/site/estudentsguide/file-cabinet/stumbleupon.png"></a>',
			'reddit': '<a target="_blank" title="Submit to Reddit" href="http://reddit.com/submit?url='+ document.location +'"><img alt="reddit" src="/img/s3ShareIt/reddit.png"></a>',
			'technorati': '<a target="_blank" title="Share on Technorati" href="http://technorati.com/faves?add='+ document.location +'"><img alt="technorati" src="/img/s3ShareIt/technorati.png"></a>',
			'linkedin': '<a target="_blank" title="Share on LinkedIn" href="http://www.linkedin.com/shareArticle?mini=true&url='+ document.location +'&title='+ $('title').html() +'"><img alt="linkedin" src="/img/s3ShareIt/linkedin.png"></a>',
			'myspace': '<a target="_blank" title="Share on MySpace" href="http://www.myspace.com/index.cfm?fuseaction=postto&t=&c=&u='+ document.location +'&l="><img alt="facebook" src="/img/s3ShareIt/myspace.png"></a>',
		}
	};

	$.fn.s3ShareIt = function(options) {
		var options = options;
		this.each(function() {
			var defaults = {
				'twitter': true,
				'facebook': true,
				'digg': true,
				'delicius': true,
				'stumbleupon': true,
				'reddit': true,
				'technorati': true,
				'linkedin': true,
				'myspace': true,
				'opacity': 1,
				'el': this,
				'thumbWidth': 48
			}
			options = $.extend(true, defaults, options);
			methods.create(options);
			return this;
		});
	};

})(jQuery);
