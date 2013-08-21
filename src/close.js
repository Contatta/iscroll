
IScroll.ease = utils.ease;

if (typeof module != 'undefined' && module.exports)
{
    module.exports = IScroll;
}
else if (typeof define == 'function' && typeof define.amd == 'object')
{
    define(function() { return IScroll; });
}

return IScroll;

})(window, document, Math);