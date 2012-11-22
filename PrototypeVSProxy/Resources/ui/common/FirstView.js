//FirstView Component Constructor

function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		var CustomView = require("ui/common/SubSubSubCustomView");
		var customView = new CustomView({top:0, left:14});
		
		var s = customView.testFunc(5);		
		Ti.API.debug(s);
		customView.testProp = 30;
		s = customView.testFunc(15);		
		Ti.API.debug(s);
		
				
	});
	
	return self;
}

module.exports = FirstView;
