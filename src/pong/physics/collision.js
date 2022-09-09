const CollisionStrategies = {

    BOX:0,
    CIRCLE:1
};

class Collision {

    constructor(){}

    add(strategy,...spriteObject){

        if(strategy == CollisionStrategies.BOX){

            spriteObject.forEach(sprite => {
     
                
            });
        }
        
        if(strategy == CollisionStrategies.CIRCLE){
            
            spriteObject.forEach(sprite => {

                        
            });
        }

        return this;
    }

    hitBox(){

        
    }
}

export default Collision;