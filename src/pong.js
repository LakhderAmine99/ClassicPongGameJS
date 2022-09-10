import Rectangle from "./pong/shape/rectangle.js";
import Collision from "./pong/physics/collision.js";
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
     * @type {CanvasRenderingContext2D} #drawingContext
     */
    #drawingContext = null;

    scorePanel = document.querySelector('.score-panel');

    playerScore = 0;
    opponentScore = 0;
    playerScoreElement = document.querySelector('.player');
    opponentScoreElement = document.querySelector('.opponent');

    elapsedTime = performance.now();
    previewsLoop = performance.now();

    frameDuration = 1000/60;

    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     * @param {{}} options 
     */
    constructor(canvas,options){

        this.#canvas = canvas;
        this.#options = options;

        this.#drawingContext = this.#canvas.getContext('2d');

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
                width: 15,
                height: 100,
                speedX: 10,
                speedY: 10,
                color: 'white'
            }
        ));

        this.#sprites.push(new Rectangle(

            this.#canvas.width - 20 - 20,
            ((this.#canvas.height/2) - 100/2) | 0,
            {
                width: 15,
                height: 100,
                speedX: 8,
                speedY: 8,
                color: 'white'
            }
        ));

        this.#sprites.push(new Rectangle(

            ((this.#canvas.width/2) - 20/2) | 0,
            ((this.#canvas.height/2) - 20/2) | 0,
            {
                width: 20,
                height: 20,
                speedX: 6,
                speedY: 6,
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

        window.requestAnimationFrame(() => this.#update());

        this.elapsedTime += performance.now() - this.previewsLoop;
        this.previewsLoop = performance.now();

        if(this.elapsedTime >= this.frameDuration){

            if(Utils.Directions.MOVE_UP && !Utils.Directions.MOVE_DOWN){
        
                this.#sprites[0].y = Math.max(20,this.#sprites[0].y - this.#sprites[0].speedY);
            }
                
            if(Utils.Directions.MOVE_DOWN && !Utils.Directions.MOVE_UP){
        
                this.#sprites[0].y = Math.min(this.#sprites[0].y + this.#sprites[0].speedY,this.#canvas.height - this.#sprites[0].height - 20);
            }

            this.#sprites[2].x += this.#sprites[2].speedX;
            this.#sprites[2].y += this.#sprites[2].speedY;

            if(this.#sprites[2].speedY < 0){

                this.#sprites[1].y = Math.max(20,((this.#sprites[2].y + this.#sprites[1].height/2)*0.75 + Math.random()) | 0);

            }else{

                this.#sprites[1].y = Math.min(((this.#sprites[2].y + this.#sprites[1].height/2)*0.75 + Math.random()) | 0,this.#canvas.height - this.#sprites[0].height - 20);
            }
            
            if(this.#sprites[2].bottom >= this.#canvas.height){

                this.#sprites[2].speedY = -6;
            }

            if(this.#sprites[2].y <= 0){

                this.#sprites[2].speedY = 6;
            }

            if(this.#sprites[2].x <= 0){

                this.opponentScore += 1;
                this.opponentScoreElement.innerHTML = this.opponentScore;
                this.#sprites[2].x = this.#canvas.width/2 | 0;
            }
            
            if(this.#sprites[2].x > this.#canvas.width){
                
                this.playerScore += 1;
                this.playerScoreElement.innerHTML = this.playerScore;
                this.#sprites[2].x = this.#canvas.width/2 | 0;
            }

            if(Collision.hitBox(this.#sprites[0],this.#sprites[2])){

                this.#sprites[2].speedX = 6;
            }

            if(Collision.hitBox(this.#sprites[1],this.#sprites[2])){

                this.#sprites[2].speedX = -6;
            }

            this.elapsedTime -= this.frameDuration;
            this.#render();
        }
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
}

export default Pong;