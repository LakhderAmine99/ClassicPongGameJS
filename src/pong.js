import Rectangle from "./pong/shape/rectangle.js";

class Pong {

    /**
     * @type {HTMLCanvasElement} #canvas
     */
    #canvas = null;

    /**
     * @type {{}} #options
     */
    #options = null;

    /**
     * @type {Rectangle[]} #sprites
     */
    #sprites = [];

    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     * @param {{}} options 
     */
    constructor(canvas,options){

        this.#canvas = canvas;
        this.#options = options;

        this.#init();
    }

    /**
     * 
     * @private
     */
    #init(){

        this.#sprites.push(new Rectangle(

            20,
            ((this.#canvas.height/2) - 100/2) | 0,
            {
                width: 20,
                height: 100,
                color: 'white'
            }
        ));

        this.#sprites.push(new Rectangle(

            this.#canvas.width - 20 - 20,
            ((this.#canvas.height/2) - 100/2) | 0,
            {
                width: 20,
                height: 100,
                color: 'white'
            }
        ));

        this.#sprites.push(new Rectangle(

            ((this.#canvas.width/2) - 20/2) | 0,
            ((this.#canvas.height/2) - 20/2) | 0,
            {
                width: 20,
                height: 20,
                color: 'lightgreen'
            }
        ));
    }

    /**
     * 
     * @param {string} value 
     */
    setScreenSize(value){

        if(value === 'FULL'){

            this.#canvas.requestFullscreen();
        }

        if(value === 'MEDIUM'){

            this.#canvas.width = document.body.clientWidth/2 | 0;
            this.#canvas.height = document.body.clientHeight/3 | 0;
        }
    }

    start(){

        this.#update();
    }

    pause(){

    }

    end(){

    }

    /**
     * @private
     */
    #handleEvents(){

    }

    /**
     * @private
     */
    #update(){

        this.#render();
    }

    /**
     * @private
     */
    #render(){

        this.#sprites.forEach(sprite => {

            sprite.draw(this.#drawingContext);
        });
    }

    get #drawingContext(){ return this.#canvas.getContext('2d'); }
}

export default Pong;