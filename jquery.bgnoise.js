/**
 * jQuery Background Noise Plugin.
 * jquery.bgnoise.js
 * 
 * A simple jQuery plugin which generates a noise effect on the background of DOM elements using HTML5 canvas element.
 * 
 * Inspired from Jeffrey Way's canvas technique.
 * http://net.tutsplus.com/tutorials/javascript-ajax/how-to-generate-noise-with-canvas/
 * 
 * April 2011
 * 
 * @author M. Yılmaz SÜSLÜ
 */

(function($) {
    $.fn.bgnoise = function(settings) {
        var options = {
                opacity : .08,
                size: 40, // Canvas size in pixels. Higher values degrades preformance. Between 40-80 is enough.
                color: '#ebebeb' // Fallback background fill color if browser doesn't support canvas.
              };
        
        return this.each(function() {
        	if ( !!!document.createElement('canvas').getContext ) {
        	    $(this).css({ 'background-color' : options.color });
        	    return false;
        	    }
        	
        	if(settings) { $.extend(options, settings); }
        	
        	   var canvas = document.createElement('canvas'),
        	       ctx = canvas.getContext('2d'),
        	       x,y,r,g,b;
        	   canvas.width = canvas.height = options.size;
        	   // = options.size;
        	   for(x = 0; x <= options.size; x++) {
        		   for(y = 0; y <= options.size; y++) {
        			   r = Math.floor( Math.random() * 255 );
        		       g = Math.floor( Math.random() * 255 );
        		       b = Math.floor( Math.random() * 255 );
        			   ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + options.opacity + ")";
        			   ctx.fillRect(x, y, 1, 1);
        		   }
        	   }
        	   $(this).css({'background-image' : "url(" + canvas.toDataURL('image/png') + ")" });
        });
    };
})(jQuery);
