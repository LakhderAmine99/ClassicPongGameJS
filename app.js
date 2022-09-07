import Pong from './src/pong.js';

function Application(){

    this.run = function(){

        console.log('Pong game is up and running...');
    }

    function init(){

        const canvas = document.getElementById('application');

        const pong = new Pong();
    }
}

const setup = (() => {

    window.onload = () => {

        window.app = new Application();
        window.app.run();
    }

})();