var count = 9;

for (var i = 0; i < count; i++) {
  var raster = new Raster('m'+i);
  raster.position = Point.random() * view.size;
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
		//item.position.x += item.bounds.width / 50;
		item.position.y += item.bounds.height / 50;

    //item.rotation += Math.random(2*i/50)-1;
    
    item.rotation += Math.random(5)-2;
    

		// If the item has left the view on the right, move it back
		// to the left:
		if (item.bounds.top > view.size.height) {
			item.position.y = -item.bounds.height;
			item.position.x = Math.random()*view.size.width;
		}
	}
}


/*
// The amount of circles we want to make:
var count = 20;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Rectangle({
	center: [0, 0],
	point: [20, 20],
  size: [60, 60],
	fillColor: 'chocolate'
});

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}

var raster = new Raster('manu');

raster.position = path.center;

var group = new Group([path, raster]);
group.clipped = true;

group.position = view.center;

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
		item.position.x += item.bounds.width / 50;
		group.position.x += .1;

    item.rotation += Math.random(2*i/50)-1;
    
    group.rotation += .05;
    

		// If the item has left the view on the right, move it back
		// to the left:
		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
		if (group.bounds.left > view.size.width) {
			group.position.x = -group.bounds.width;
		}
	}
}
*/