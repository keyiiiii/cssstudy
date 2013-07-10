(function(){
	
	/* I want them to be Meiryo */
	var html = document.getElementsByTagName('html')[0];
	if(/windows/i.test(navigator.userAgent)){
		html.className = 'os-win';
	}

	/* from html5bp
	   usage: log('inside coolFunc', this, arguments); */
	window.log = function(){
	  log.history = log.history || [];   // store logs to an array for reference
	  log.history.push(arguments);
	  if(this.console) {
		  arguments.callee = arguments.callee.caller;
		  console.log( Array.prototype.slice.call(arguments) );
	  }
	};
	(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

	/* NS */

	var slide = window.slide = {};

	/* outline */

	slide.outline = (function(){

		var list = [
			'はじめに',
			'jQueryの基本',
			'何か作ってみる',
			'プラグイン',
			'どうjQueryと付き合っていくか'
		];

		var drawnIndex = 0;

		var $orig = $('<ul></ul>');
		$.each(list, function(i, current){
			$orig.append('<li>' + current + '</li>');
		});

		function draw(indexMode){
			var $el = $orig.clone();
			if(indexMode){
				$el.addClass('indexMode');
			}else{
				$el.children().eq(drawnIndex).addClass('highlight');
				drawnIndex++;
			}
			$('div').last().append($el);
		}

		return {
			draw: draw
		}

	})();

})();
