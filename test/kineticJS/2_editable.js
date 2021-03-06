var mensaje = new Kinetic.Text({
    x: 5,
    y: 5,
    text: 'mensaje ...',
    fontSize: 10,
    fontFamily: 'Calibri',
    textFill: '#555'
});

var mensaje2 = new Kinetic.Text({
    x: 5,
    y: 18,
    text: 'Nodo posición x: 100, y: 60',
    fontSize: 10,
    fontFamily: 'Calibri',
    textFill: '#555'
});

var nodo = new Kinetic.Text({
    x: 100,
    y: 60,
    stroke: '#555',
    strokeWidth: 2,
    fill: '#ddd',
    text: 'Prueba para texto\nsegunda línea',
    fontSize: 10,
    fontFamily: 'Calibri',
    textFill: '#555',
    width: 'auto',
    padding: 10,
    align: 'center',
    fontStyle: 'italic',
    shadow: {
        color: 'black',
        blur: 10,
        offset: [5, 5],
        opacity: 0.3
    },
    cornerRadius: 10,
    draggable : true
});

nodo.on('mouseout', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    mostrarMensaje('mouseout ' + mensaje);
});

nodo.on('mousemove', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    mostrarMensaje('mousemove ' + mensaje);
});

nodo.on('mousedown', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    console.log('mousedown ' + mensaje);
});

nodo.on('mouseup', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    console.log('mouseup ' + mensaje);
});

nodo.on('mouseenter', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    console.log('mouseenter ' + mensaje);
});

nodo.on('mouseleave', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    console.log('mouseleave ' + mensaje);
});

nodo.on('click', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    console.log('click ' + mensaje);
});

nodo.on('dblclick', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    console.log('dblclick ' + mensaje);
    var textarea = new MM.DOM.create ('textarea', {'id'  : 'editNodo', 
					     'innerHTML': nodo.getText(), 
					     'style' : 'position: absolute; ' +
					     'top : ' + (nodo.getY()+7) + 'px; ' +
					     'left: ' + (nodo.getX()+7) + 'px; ' + 
					     'width: ' + (nodo.getWidth()-14) + 'px; ' +
					     'height: ' + (nodo.getHeight()-14) + 'px; ' +
					     'max-width: ' + (nodo.getWidth()-14) + 'px; ' +
					     'max-height: ' + (nodo.getHeight()-14) + 'px; ' +
					     'border: none; ' +
					     'background-color: ' + nodo.getFill() + '; ' + 
					     'color: ' + nodo.getTextFill() + '; ' +
					     'font-family: ' + nodo.getFontFamily() + '; ' +
					     'font-size: ' + nodo.getFontSize() + 'pt; '
					    });
    textarea.onblur = function () {
	nodo.setText(this.value);
	layer.draw();
	this.remove();
    };
    document.body.appendChild(textarea);
    textarea.select();
    textarea.focus();
});

nodo.on('dragstart', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    console.log('dragstart ' + mensaje);
});

nodo.on('dragend', function() {
    var mousePos = stage.getMousePosition();
    var x = mousePos.x;
    var y = mousePos.y;
    var mensaje = 'x: ' + x + ', y: ' + y;
    console.log('dragend ' + mensaje);
    mostrarMensaje2('Nodo posición x: ' + nodo.getX() + ', y: ' + nodo.getY() );
});

var layer;
var stage;

window.onload = function load() {
    stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
    });
    
    layer = new Kinetic.Layer();
    layer.add(mensaje);
    layer.add(mensaje2);
    layer.add(nodo);
    stage.add(layer);
}

function mostrarMensaje (texto) {
    mensaje.setText(texto);
    layer.draw();
}

function mostrarMensaje2 (texto) {
    mensaje2.setText(texto);
    layer.draw();
}
