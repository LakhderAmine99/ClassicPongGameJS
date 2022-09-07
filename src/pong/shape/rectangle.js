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

    }
}

export default Rectangle;