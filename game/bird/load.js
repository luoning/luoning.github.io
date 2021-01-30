var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#71c5cf';
    //this.game.load.image('bird', 'assets/bird.png');  
        this.game.load.image('pipe', 'assets/pipe.png'); 
        this.game.load.image('back', 'assets/back.jpg'); 
        this.game.load.audio('jump', 'assets/jump.wav');
        this.game.load.spritesheet('bird', 'metalslug_mummy37x45.png', 37, 45, 18);
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};