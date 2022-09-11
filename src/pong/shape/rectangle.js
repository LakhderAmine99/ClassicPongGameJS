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

        context.rect(this.x,this.y,this.options.width,this.options.height);

        context.fill();
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} w 
     * @param {number} h 
     */
    setVerticalBoundaries(y,h){

        if(this.y <= y || this.bottom >= h)
            this.speedY *= -1;
    }

    /**
     * @returns {number}
     */
    get centerX(){ return this.x + (this.options.width/2); }

    /**
     * @returns {number}
     */
    get centerY(){ return this.y + (this.options.height/2); }

    /**
     * @returns {number}
     */
    get width(){ return this.options.width; }
    
    /**
     * @returns {number}
     */
    get height(){ return this.options.height; }

    /**
     * @returns {number}
     */
    get halfWidth(){ return (this.width/2) | 0; }

    /**
     * @returns {number}
     */
    get halfHeight(){ return (this.height/2) | 0; }

    /**
     * @returns {number}
     */
    get right(){ return this.x + this.width; }

    /**
     * @returns {number}
     */
    get bottom(){ return this.y + this.height; }
}

export default Rectangle;