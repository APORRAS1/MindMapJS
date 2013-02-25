var Arista = MM.Class.extend({
    init: function (capa, nodoOrigen, nodoDestino) {
	this.capa = capa;
	this.nodoOrigen = nodoOrigen;
	this.nodoDestino = nodoDestino;
	this.context = capa.getCanvas().getContext();
	this.render();
    },

    calcularPuntos: function () {
	this.x1 = (this.nodoOrigen.getX() + this.nodoOrigen.getWidth() / 2) * MM.devicePixelRatio;
	this.y1 = (this.nodoOrigen.getY() + this.nodoOrigen.getHeight() / 2) * MM.devicePixelRatio;
	this.x2 = (this.nodoDestino.getX() + this.nodoDestino.getWidth() / 2) * MM.devicePixelRatio;
	this.y2 = (this.nodoDestino.getY() + this.nodoDestino.getHeight() / 2) * MM.devicePixelRatio;
	this.c1x = this.x1 + (this.x2-this.x1)/2;
	this.c1y = this.y1;
	this.c2x = this.x1 + (this.x2-this.x1)/2;
	this.c2y = this.y2;
    },
    
    render: function () {
	var c = this.context;
	this.calcularPuntos();

	c.beginPath();
	c.moveTo(this.x1, this.y1);
	c.bezierCurveTo (this.c1x, this.c1y, this.c2x, this.c2y, this.x2, this.y2);
	c.strokeStyle = '#555';
	c.lineWidth = 2;
	c.stroke();
	c = null;
    }
});

