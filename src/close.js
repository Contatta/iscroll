
IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( typeof define == 'function' && typeof define.amd == 'object' ) {
    define(function() { return IScroll; });
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);