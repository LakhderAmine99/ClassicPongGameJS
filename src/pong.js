import Rectangle from "./pong/shape/rectangle.js";
import { Keyboard,keyCodes } from "./pong/keyboard/keyboard.js";
import { Utils } from "./utils/index.js";

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
     * @type {Keyboard} #keyboard
     */
    #keyboard = null;

    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     * @param {{}} options 
     */
    constructor(canvas,options){

        this.#canvas = canvas;
        this.#options = options;

        this.#keyboard = new Keyboard();

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

        this.#handleEvents();
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

        this.#keyboard.handle('keydown',(e) => {

            if(e.keyCode == keyCodes.UP){

                Utils.Directions.MOVE_UP = true;
            }

            if(e.keyCode == keyCodes.DOWN){

                Utils.Directions.MOVE_DOWN = true;
            }
        });

        this.#keyboard.handle('keyup',(e) => {

            if(e.keyCode == keyCodes.UP){

                Utils.Directions.MOVE_UP = false;
            }

            if(e.keyCode == keyCodes.DOWN){

                Utils.Directions.MOVE_DOWN = false;
            }
        });
    }

    /**
     * @private
     */
    #update(){

        window.requestAnimationFrame(() => this.#update(),() => this.#canvas);

        if(Utils.Directions.MOVE_UP && !Utils.Directions.MOVE_DOWN){
    
            this.#sprites[0].y -= 4;
        }
            
        if(Utils.Directions.MOVE_DOWN && !Utils.Directions.MOVE_UP){
    
            this.#sprites[0].y += 4;
        }
    
        this.#render();
    }

    /**
     * @private
     */
    #render(){

        this.#drawingContext.clearRect(0,0,this.#canvas.width,this.#canvas.height);

        this.#sprites.forEach(sprite => {

            sprite.draw(this.#drawingContext);
        });
    }

    get #drawingContext(){ return this.#canvas.getContext('2d'); }
}

export default Pong;