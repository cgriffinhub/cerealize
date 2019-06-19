var width = 500,
    height = 500;
	
var canvas = d3.select("#cerealizeContainer").append("canvas").attr("width", width).attr("height", height).attr('id', 'canvas1');
var canvas2 = d3.select("#cerealizeContainer").append("canvas").attr("width", width).attr("height", height).attr('id', 'canvas2');
var canvas3 = d3.select("#cerealizeContainer").append("canvas").attr("width", width).attr("height", height).attr('id', 'canvas3');

var context = canvas.node().getContext("2d");
var context2 = canvas2.node().getContext("2d");
var context3 = canvas3.node().getContext("2d");

// var checkedValue = $('input[name=base]:checked').attr("id");

$('input[name=base]').change(function() {
    if ($(this).attr("id") == 'Puffs') {
       puffs();
    }
    else if ($(this).attr("id") == 'Flakes') {
       flakes();
    }
	else if ($(this).attr("id") == 'Squares') {
       squares();
    }
	
});


$('input[name=addon]').change(function() {
    if ($(this).attr("id") == 'Marshmallows') {
       marshmallows();
    }
	
});

$('input[name=addon2]').change(function() {
    if ($(this).attr("id") == 'Raisins') {
       raisins();
    }
});


function puffs() {	
	// how many, how big
var nodes = d3.range(100).map(function() { return {radius: 25}; }),
    root = nodes[0];

root.radius = 0;
root.fixed = true;

var force = d3.layout.force()
// gravity controls how much stop each node has
    .gravity(0.05)
    .charge(function(d, i) { return i ? 0 : -1000; })
    .nodes(nodes)
    .size([width, height]);

force.start();



force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i,
      d,
      n = nodes.length;

  for (i = 1; i < n; ++i) q.visit(collide(nodes[i]));

  context.clearRect(0, 0, width, height);
  context.fillStyle = "steelblue";
  context.beginPath();
  for (i = 1; i < n; ++i) {
    d = nodes[i];
    context.moveTo(d.x, d.y);
    /*
	context.rotate(Math.floor(Math.random() * Math.floor(180)) * Math.PI / 180);
context.rotate(20 * Math.PI / 180);
context.fillRect(d.x, d.y, d.radius, d.radius);

context.fillStyle = "#009900";
    context.fillRect(d.x, d.y, d.radius, d.radius);

    context.strokeStyle = "#0000ff";
    context.lineWidth   = 5;
    context.strokeRect(d.x, d.y, d.radius, d.radius);
*/ 
     context.arc(d.x, d.y, d.radius, 0, -2 * Math.PI);

	
  }
  context.fill();
});

canvas.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});

function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;

  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
		  // how far apart each node is
          // r = node.radius + quad.point.radius;
          r = 60;
		  
      if (l < r) {
        l = (l - r) / l * .3;
		
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
	
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
}





function flakes() {	
	// how many, how big
var nodes = d3.range(100).map(function() { return {radius: 15}; }),
    root = nodes[0];

root.radius = 0;
root.fixed = true;

var force = d3.layout.force()
// gravity controls how much stop each node has
    .gravity(0.05)
    .charge(function(d, i) { return i ? 0 : -1000; })
    .nodes(nodes)
    .size([width, height]);

force.start();



force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i,
      d,
      n = nodes.length;

  for (i = 1; i < n; ++i) q.visit(collide(nodes[i]));

  context.clearRect(0, 0, width, height);
  context.fillStyle = "steelblue";
  context.beginPath();
  
  
  for (i = 1; i < n; ++i) {
    d = nodes[i];
    context.moveTo(d.x, d.y);
    /*
	context.rotate(Math.floor(Math.random() * Math.floor(180)) * Math.PI / 180);
context.rotate(20 * Math.PI / 180);
context.fillRect(d.x, d.y, d.radius, d.radius);

context.fillStyle = "#009900";
    context.fillRect(d.x, d.y, d.radius, d.radius);

    context.strokeStyle = "#0000ff";
    context.lineWidth   = 5;
    context.strokeRect(d.x, d.y, d.radius, d.radius);
*/ 
     var numberOfSides = 6,
        size = 30,
        Xcenter = d.x,
        Ycenter = d.y,
        step  = 2 * Math.PI / numberOfSides,//Precalculate step value
        shift = (Math.PI / 180.0) * d.x-18;//Quick fix ;)

    
    	var curStep = 1 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 2 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 3 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 4 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 5 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 6 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 7 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));

    
    

	
  }
  context.fill();
});

canvas.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});

function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;

  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
		  // how far apart each node is
          // r = node.radius + quad.point.radius;
          r = 67;
		  
      if (l < r) {
        l = (l - r) / l * .3;
		
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
	
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
}


function squares() {
	// how many, how big
var nodes = d3.range(90).map(function() { return {radius: 50}; }),
    root = nodes[0];

root.radius = 0;
root.fixed = true;

var force = d3.layout.force()
// gravity controls how much stop each node has
    .gravity(0.05)
    .charge(function(d, i) { return i ? 0 : -1000; })
    .nodes(nodes)
    .size([width, height]);

force.start();



force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i,
      d,
      n = nodes.length;

  for (i = 1; i < n; ++i) q.visit(collide(nodes[i]));

  context.clearRect(0, 0, width, height);
  context.fillStyle = "steelblue";
  context.beginPath();
  for (i = 1; i < n; ++i) {
    d = nodes[i];
    context.moveTo(d.x, d.y);
  

var numberOfSides = 4,
        size = 32,
        Xcenter = d.x,
        Ycenter = d.y,
        step  = 2 * Math.PI / numberOfSides,//Precalculate step value
        shift = (Math.PI / 180.0) * d.x-18;//Quick fix ;)

    
    	var curStep = 1 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 2 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 3 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 4 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 5 * step + shift;
        context.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
/*
var y = d.y;
var radius=5;
var x = d.x;
var w = 45;
var h=45;
    
    	context.lineTo(x + w - radius, y);
    context.quadraticCurveTo(x + w, y, x + w, y + radius);
    context.lineTo(x + w, y + h - radius);
    context.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    context.lineTo(x + radius, y + h);
    context.quadraticCurveTo(x, y + h, x, y + h - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
*/
	
  }
  context.fill();
});

canvas.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});

function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;

  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
		  // how far apart each node is
          // r = node.radius + quad.point.radius;
          r = 60;
		  
      if (l < r) {
        l = (l - r) / l * .3;
		
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
	
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
}



function marshmallows() {
	// how many, how big
var nodes = d3.range(30).map(function() { return {radius: 20}; }),
    root = nodes[0];

root.radius = 0;
root.fixed = true;

var force = d3.layout.force()
// gravity controls how much stop each node has
    .gravity(0.05)
    .charge(function(d, i) { return i ? 0 : -1000; })
    .nodes(nodes)
    .size([width, height]);

force.start();



force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i,
      d,
      n = nodes.length;

  for (i = 1; i < n; ++i) q.visit(collide(nodes[i]));

  context2.clearRect(0, 0, width, height);
  context2.fillStyle = "pink";
  context2.beginPath();
  for (i = 1; i < n; ++i) {
    d = nodes[i];
    context2.moveTo(d.x, d.y);
  
/*
var numberOfSides = 4,
        size = 32,
        Xcenter = d.x,
        Ycenter = d.y,
        step  = 2 * Math.PI / numberOfSides,//Precalculate step value
        shift = (Math.PI / 180.0) * d.x-18;//Quick fix ;)

    
    	var curStep = 1 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 2 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 3 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 4 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 5 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
*/
var y = d.y;
var radius=5;
var x = d.x;
var w = 20;
var h=20;
    
    	context2.lineTo(x + w - radius, y);
    context2.quadraticCurveTo(x + w, y, x + w, y + radius);
    context2.lineTo(x + w, y + h - radius);
    context2.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    context2.lineTo(x + radius, y + h);
    context2.quadraticCurveTo(x, y + h, x, y + h - radius);
    context2.lineTo(x, y + radius);
    context2.quadraticCurveTo(x, y, x + radius, y);

	
  }
  context2.fill();
});

canvas2.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});

function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;

  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
		  // how far apart each node is
          // r = node.radius + quad.point.radius;
          r = 90;
		  
      if (l < r) {
        l = (l - r) / l * .3;
		
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
	
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
}




function raisins() {
	// how many, how big
var nodes = d3.range(30).map(function() { return {radius: 10}; }),
    root = nodes[0];

root.radius = 0;
root.fixed = true;

var force = d3.layout.force()
// gravity controls how much stop each node has
    .gravity(0.05)
    .charge(function(d, i) { return i ? 0 : -1000; })
    .nodes(nodes)
    .size([width, height]);

force.start();



force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i,
      d,
      n = nodes.length;

  for (i = 1; i < n; ++i) q.visit(collide(nodes[i]));

  context3.clearRect(0, 0, width, height);
  context3.fillStyle = "purple";
  context3.beginPath();
  for (i = 1; i < n; ++i) {
    d = nodes[i];
    context3.moveTo(d.x, d.y);
  
/*
var numberOfSides = 4,
        size = 32,
        Xcenter = d.x,
        Ycenter = d.y,
        step  = 2 * Math.PI / numberOfSides,//Precalculate step value
        shift = (Math.PI / 180.0) * d.x-18;//Quick fix ;)

    
    	var curStep = 1 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 2 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 3 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 4 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
		curStep = 5 * step + shift;
        context2.lineTo (Xcenter + size * Math.cos(curStep), Ycenter + size * Math.sin(curStep));
*/
     context3.arc(d.x, d.y, d.radius, 0, -2 * Math.PI);


	
  }
  context3.fill();
});
/*
context3.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});
*/
function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;

  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
		  // how far apart each node is
          // r = node.radius + quad.point.radius;
          r = 80;
		  
      if (l < r) {
        l = (l - r) / l * .3;
		
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
	
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
}