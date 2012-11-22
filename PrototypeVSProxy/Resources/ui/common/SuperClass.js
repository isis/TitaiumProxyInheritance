/**
 * @author k-ishida
 */
(function _SuperClassModule(){
	function _f() {
		Ti.API.log('superclass construct!');
		
		// init properties here
		
	}
	_f.prototype.classname = 'superclass';
	
	// init methods here
	
	// export 
	module.exports = _f;
}).call(this);
