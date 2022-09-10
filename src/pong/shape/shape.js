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
     * 
     * @param {number} x 
     * @param {number} y 
     */
    setPosition(x,y){

        this.#x = x;
        this.#y = y;
    }

    /**
     * @param {number} value
     */
    set x(value){ this.#x = value; }
    
    /**
     * @param {number} value
     */
    set y(value){ this.#y = value; }

    /**
     * @param {number} value
     */
    set speedX(value){ this.#options.speedX = value; }

    set speedY(value){ this.#options.speedY = value; }

    /**
     * @param {string} color
     */
    set color(value){ this.#options.color = value; }

    get x(){ return this.#x; }
    get y(){ return this.#y; }
    get speedX(){ return this.#options.speedX; }
    get speedY(){ return this.#options.speedY; }
    get color(){ return this.#options.color; }
    
    get options(){ return this.#options; }

    /**
     * @returns {number}
     */
    get centerX(){}

    /**
     * @returns {number}
     */
    get centerY(){}
}

export default Shape;