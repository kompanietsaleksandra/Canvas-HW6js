'use strict';

class Figure {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

class Line extends Figure {
    constructor(x, y, x2, y2, color) {
        super(x, y, color);
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(objline, ctx) {
        ctx.beginPath();
        ctx.moveTo(objline.x, objline.y);
        ctx.lineTo(objline.x2, objline.y2);
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.strokeStyle = objline.color;
        ctx.stroke();
    }
}

class Circle extends Figure {
    constructor(x, y, radius, color) {
        super(x, y, color);
        this.radius = radius;
    }

    draw(obg, ctx) {
        ctx.beginPath();
        ctx.arc(obg.x, obg.y, obg.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = obg.color;
        ctx.fill();
        ctx.stroke();
    }
}

class Rect extends Figure {
    constructor(x, y, width, height, color) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }

    draw(objrect, ctx) {
        ctx.fillStyle = objrect.color;
        ctx.fillRect(objrect.x, objrect.y, objrect.width, objrect.height);

    }
}

class Canvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
    }

    add(...objects) {
        const arr = objects;
        arr.forEach( (obj) => {
            obj.draw(obj, this.ctx);
        });
    }
}

const circle = new Circle(120, 120, 50, 'rgba(0,0,255,.25)');
const drawArea = new Canvas('canvas-id');
drawArea.add(circle);
let rect = new Rect(260, 130, 60, 120, 'rgba(79,48,71,.15)'); // x, y, w, h, color
drawArea.add(rect);
let line = new Line(50, 250, 200, 200, 'rgba(177,212,21,.25)');
drawArea.add(line);



