import Pong from './src/pong.js';

function Application(){

    this.run = function(){

        console.log('Pong game is up and running...');

        init();
    }

    function init(){

        const canvas = document.getElementById('application');
        const options = {};

        const pong = new Pong(canvas,options);

        window.onclick = () => pong.start();
        window.ondblclick = () => pong.setScreenSize('FULL');
    }
}

const setup = (() => {

    window.onload = () => {

        window.app = new Application();
        window.app.run();
    }

})();