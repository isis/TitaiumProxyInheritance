/**
 * @author k-ishida
 */
(function _CustomViewModule(){
	
	function _makeSuper() {
		var tmp_super = function(){};
		tmp_super._doInSuper = _doInSuper;
		tmp_super._self = this._self;
		tmp_super._super = this._super;
		this._super = tmp_super;
	}

	function _override(f) {
		var methodname = f.name;
		if (this[methodname]) {
			if (!this._super) {
				this._super = function() {};
			}
			this._super[methodname] = this[methodname];
			this[methodname] = f;
		}
	}
	
	function _doInSuper(methodname, args) {
		var s = this._super;
		while (s) {
			if (s[methodname]) {
				return s[methodname].apply(s, args);
			}
			s = s._super;
		}
	}

	function testFunc(factor) {
		Ti.API.debug("CustomView testFunc");
		return this._self.testProp * factor;
	}
	
	function _f(opt) {
		var self = Ti.UI.createView(opt); // create View instance as example Ti.Proxy 
		self._self = self;
		self._makeSuper = _makeSuper;
		self._override = _override;
		self._doInSuper = _doInSuper;
				
		self.testProp = 1;

		self.testFunc = testFunc;

		Ti.API.debug("castomview constructed!");
		return self; // return instance of Ti.Proxy
	}

	
	module.exports = _f;
}).call(this);
