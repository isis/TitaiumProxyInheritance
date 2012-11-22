/**
 * @author k-ishida
 */
(function _SubSubSubCustomViewModule(){
	var	SubSubCustomView = require("ui/common/SubSubCustomView");
	
	function testFunc(factor) {
		Ti.API.debug("SubSubSubCustomView testFunc{");
		
		var s = this._doInSuper(arguments.callee.name, arguments);

		Ti.API.debug("}SubSubSubCustomView testFunc");
		return s;
	}
	
	function _f() {
		var self = _f._superConstructor.apply(this, arguments);
		self._makeSuper();
		
		self._override(testFunc);

		Ti.API.debug("subsubsubcastomview constructed!");
		
		return self;
	}
	_f._superConstructor = SubSubCustomView;

	
	module.exports = _f;
}).call(this);
