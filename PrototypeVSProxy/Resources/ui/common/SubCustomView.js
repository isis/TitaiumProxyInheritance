/**
 * @author k-ishida
 */
(function _SubCustomViewModule(){
	var	CustomView = require("ui/common/CustomView");
	
	function testFunc() {
		Ti.API.debug("SubCustomView testFunc{");
		
		var s = this._doInSuper(arguments.callee.name, arguments);
		
		Ti.API.debug("}SubCustomView testFunc");
		return s;
	}

	function _f() {
		var self = _f._superConstructor.apply(this, arguments);
		self._makeSuper();

		self._override(testFunc);
		
		Ti.API.debug("subcastomview constructed!");
		return self;
	}
	_f._superConstructor = CustomView;

	
	module.exports = _f;
}).call(this);
