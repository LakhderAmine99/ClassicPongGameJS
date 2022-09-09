import Shape from './shape.js';

class Rectangle extends Shape {

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {{}} options 
     */
    constructor(x,y,options){

        super(x,y,options);
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     * @public
     */
    draw(context){

        context.beginPath();

        context.fillStyle = this.options.color;

        context.moveTo(this.x,this.y);
        context.lineTo(this.x + this.options.width,this.y);
        context.lineTo(this.x + this.options.width,this.y + this.options.height);
        context.lineTo(this.x,this.y + this.options.height);
        context.lineTo(this.x,this.y);

        context.fill();
    }
}

export default Rectangle;