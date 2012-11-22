/**
 * @author k-ishida
 */
(function _SubClassModule(){
	var superclass = require('ui/common/SuperClass');
	function _f() {
		_f.prototype._supperconstructor.apply(this, arguments);
		Ti.API.log('subclass construct!');	
		// init properties here
	}
	_f.prototype = Object.create(superclass.prototype);
	_f.prototype._supperconstructor = _f.prototype.constructor;
	_f.prototype.constructor = _f;	// for subclass of this subclass

	_f.prototype.classname = 'subclass';
	
	// init methods here
	
	module.exports = _f;
}).call(this);
