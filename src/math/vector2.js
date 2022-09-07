/**
 * @module Vect2
 * @namespace Math
 */
class Vect2 {

    #x = 0;
    #y = 0;

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x=0,y=0){

        this.#x = x;
        this.#y = y;
    }

    set x(value){ this.#x = value; }
    set y(value){ this.#y = value; }

    get x(){ return this.#x; }
    get y(){ return this.#y; }
}

export default Vect2;