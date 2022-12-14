import Rectangle from '../shape/rectangle.js';

class Collision {

    constructor(){}

    /**
     * 
     * @param {...Rectangle} spriteObjects 
     * @returns {Boolean} True if the sprites collides, false otherwise.
     */
    hitBox(...spriteObjects){

        let hit = false;

        let dx = spriteObjects[0].centerX - spriteObjects[1].centerX;
        let dy = spriteObjects[0].centerY - spriteObjects[1].centerY;

        let combinedHalfWidths = spriteObjects[0].halfWidth + spriteObjects[1].halfWidth;
        let combinedHalfHeights = spriteObjects[0].halfHeight + spriteObjects[1].halfHeight;

        if(Math.abs(dx) < combinedHalfWidths){

            if(Math.abs(dy) < combinedHalfHeights){

                hit = true;
            
            }else{
                
                hit = false;
            }

        }else{
                
            hit = false;
        }

        return hit;
    }
}

export default new Collision();