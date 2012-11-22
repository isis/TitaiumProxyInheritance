/**
 * @author k-ishida
 */
(function _SubSubCustomViewModule(){
	var	SubCustomView = require("ui/common/SubCustomView");
	function _f() {
		var self = _f._superConstructor.apply(this, arguments);
		self._makeSuper();

		Ti.API.debug("subsubcastomview constructed!");
		
		return self;
	}
	_f._superConstructor = SubCustomView;

	
	module.exports = _f;
}).call(this);
