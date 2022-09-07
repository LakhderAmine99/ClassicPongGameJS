import Shape from './shape.js';
import Vect2 from '../../math/vector2.js';

class Circle extends Shape {

    /**
     * 
     * @param {Vect2} center 
     * @param {{}} options 
     */
    constructor(center=new Vect2(),options){

        super(center.x,center.y,options);
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     * @public
     */
    draw(context){

    }
}

export default Circle;