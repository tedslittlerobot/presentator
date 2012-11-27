var pt = require('./main.js');
var fs = require('fs');

fs.readFile('./presentation.js', 'utf8', function(e, p) {
	console.log(p);
	var pres = JSON.parse(p);
// var pres = {
// 	name: 'Test Presentation',
// 	slides: [
// 		{
// 			name: 'The First Slide',
// 			objects: []
// 		}
	// ]
// };
	pt.init(pres);
});

