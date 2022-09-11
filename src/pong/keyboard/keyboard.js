export const keyCodes = {
    UP:38,
    DOWN:40
};

export function Keyboard(){

    /**
     * 
     * @param {string} eventType 
     * @param {()} handler 
     * @public
     */
    this.handle = (eventType,handler) => window.addEventListener(eventType,handler);

    /**
     * 
     * @param {string} eventType 
     * @param {()} handler 
     * @public
     */
    this.remove = (eventType,handler) => window.removeEventListener(eventType,handler);
};

