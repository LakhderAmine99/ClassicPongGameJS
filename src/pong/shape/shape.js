/**
 * @module Shape
 * @namespace Shape
 * @abstract
 */
class Shape {

    #x = null;
    #y = null;
    #options = null;

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {{}} options 
     */
    constructor(x,y,options){

        this.#x = x;
        this.#y = y;
        this.#options = options;
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     * @public
     * @virtual
     */
    draw(context){}

    /**
     * @param {number} value
     */
    set x(value){ this.#x = value; }
    
    /**
     * @param {number} value
     */
    set y(value){ this.#y = value; }

    get x(){ return this.#x; }
    get y(){ return this.#y; }
    get options(){ return this.#options; }
}

export default Shape;