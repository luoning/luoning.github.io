(function(){
	var Q = Quintus()
	.include("Sprites, Anim, Input, Touch, Scenes, UI")
	.setup({ width:800, height:480})
	.touch();

	Q.input.touchControls({
  		controls:  [ ['left','<' ],
	       ['right','>' ],
	       [],
	       [],
	       [],
	       [],
	       ['fire', 'a' ]]
	});

	Q.controls();

	Q.Sprite.extend("Player",{
		init: function(p){
			this._super(p,{
				sprite: "player",
				sheet: "player",
				x: Q.el.width /2,
				y: Q.el.height - 60,
				type: Q.SPRITE_FRIENDLY,
				speed: 10
			});

			this.add("animation");
			this.play("default");
			this.add("Gun");
			this.on("hit", function(col){
				if (col.obj.isA("Shot") && ((col.obj.p.type & Q.SPRITE_ENEMY) == Q.SPRITE_ENEMY)) {
					this.destroy();
					col.obj.destroy();
					Q.stageScene("endGame", 1, {
						label: "You die"
					});
				}
			});
		},
		step: function(dt){
			if (Q.inputs["left"]) {
				this.p.x -= this.p.speed;
			}

			if (Q.inputs["right"]) {
				this.p.x += this.p.speed;
			}

			this.p.x = clamp(this.p.x, 0 + (this.p.w / 2), Q.el.width - (this.p.w / 2));
			this.stage.collide(this);
		}
	});

	Q.Sprite.extend("Alien",{
		init: function(p){
			this._super(p,{
				sprite: "alien",
				sheet: "alien",
				x: Q.el.width /2,
				speed: 160
			});


			var log = true;

			this.p.y = this.p.h;
			this.add("animation");
			this.play("default");
			this.add("BasicAI");
			this.on("hit", function(col){

				if (log) {
					console.log(col.obj);
					console.log('Type' + col.obj.p.type);
					console.log(Q.SPRITE_FRIENDLY & Q.SPRITE_FRIENDLY);
					console.log('Sum'+col.obj.p.type & Q.SPRITE_FRIENDLY);
					console.log('None' +Q.SPRITE_NONE);
					log = false;
				}

				
				if (col.obj.isA("Shot") && ((col.obj.p.type & Q.SPRITE_FRIENDLY) == Q.SPRITE_FRIENDLY)) {
					this.destroy();
					col.obj.destroy();
					Q.stageScene("endGame", 1, {
						label: "You won"
					});
				}
			});
		},
		step: function(dt){
			this.stage.collide(this);
		}
	});

	Q.Sprite.extend("Shot",{
		init: function(p){
			this._super(p,{
				sprite: "shot",
				sheet: "shot",
				speed: 200
			});

			this.add("animation");
			this.play("default");
		},
		step: function(dt){
			this.p.y -= this.p.speed * dt;

			if(this.p.y > Q.el.height || this.p.y < 0){
				this.destroy();
			}
		}
	});

	Q.component("BasicAI",{
		added: function(){
			this.entity.changeDirections();
			this.entity.on("step", "move");
			this.entity.on("step", "tryToFire");
			this.entity.add("Gun");
		},
		extend: {
			changeDirections: function(){
				var entity = this;
				var numberOfSeconds = Math.floor((Math.random()*5)+1);
				setTimeout(function(){
					entity.p.speed = -entity.p.speed;
					entity.changeDirections();
				}, numberOfSeconds*1000);
			},
			move: function(dt){
				var entity = this;
				entity.p.x -= entity.p.speed * dt;
				if (entity.p.x > Q.el.width - (entity.p.w/2) || entity.p.x < 0 + (entity.p.w/2)) {
					entity.p.speed = -entity.p.speed;
				}
			},
			tryToFire: function(){
				var entity = this;
				var player = Q("Player").first();
				if (player) {
					if (player.p.x + player.p.w > entity.p.x && player.p.x - player.p.w < entity.p.x) {
						this.fire(Q.SPRITE_ENEMY);
					}
				}
			}
		}
	});

	Q.component("Gun",{
		added: function(){
			this.entity.p.shots = [];
			this.entity.p.canFire = true;
			this.entity.on("step", "handleFiring");
		},
		extend:{
			handleFiring: function(dt){
				var entity = this;

				for (var i = entity.p.shots.length - 1; i >= 0; i--) {
					if (entity.p.shots[i].isDestroyed) {
						entity.p.shots.splice(i,1);
					}
				}

				if (Q.inputs['fire'] && entity.p.type == Q.SPRITE_FRIENDLY) {
					entity.fire(Q.SPRITE_FRIENDLY);
				}
			},
			fire: function(type){
				var entity = this;
				var shot;

				if (entity.p.canFire) {
					if(type == Q.SPRITE_FRIENDLY){
						shot = Q.stage().insert(new Q.Shot({
							x: entity.p.x,
							y: entity.p.y - 30,
							speed: 200,
							type: Q.SPROTE_DEFAULT | Q.SPRITE_FRIENDLY
						}));
					}
					else{
						shot = Q.stage().insert(new Q.Shot({
							x: entity.p.x,
							y: entity.p.y + entity.p.h - 20,
							speed: -200,
							type: Q.SPROTE_DEFAULT | Q.SPRITE_ENEMY
						}));
					}
					

					entity.p.shots.push(shot);	
					entity.p.canFire = false;
					setTimeout(function(){
						entity.p.canFire = true;
					}, 500);
				}
			}
		}
	});

	Q.scene("mainLevel", function(stage){
		Q.gravity = 0;
		stage.insert(new Q.Sprite({
			asset: "spaceBackground.png",
			x: Q.el.width /2,
			y: Q.el.height /2,
			type: Q.SPRITE_NONE
		}));
		stage.insert(new Q.Player());
		stage.insert(new Q.Alien());
	});

	Q.scene("endGame", function(stage){
		var container = stage.insert(new Q.UI.Container({
			x: Q.width /2,
			y: Q.height /2,
			fill: "#FFFFFF"
		}));

		var button = container.insert(new Q.UI.Button({
			x:0,
			y:0,
			fill:"#CCCCCC",
			label:"Play Again"
		}));

		container.insert(new Q.UI.Text({
			x: 10,
			y: -10 - button.p.h,
			label: stage.options.label
		}));

		button.on("click", function(){
			Q.clearStages();
			Q.stageScene("mainLevel");
		});

		container.fit(20);
	});

	Q.load(["spaceBackground.png", "shipSprint.png","player.json", "shotSprint.png", "shot.json", "alienSprint.png", "alien.json"], function(){
		Q.compileSheets("shipSprint.png","player.json");
		Q.compileSheets("shotSprint.png","shot.json");
		Q.compileSheets("alienSprint.png","alien.json");

		Q.animations("player",{
			default: {
				frames: [0,1,2,3],
				rate: 1/4
			}
		});

		Q.animations("shot",{
			default: {
				frames: [0,1,2,3],
				rate: 1/4
			}
		});

		Q.animations("alien",{
			default: {
				frames: [0,1,2,3],
				rate: 1/4
			}
		});

		Q.stageScene("mainLevel");
	});

	function clamp(x, min, max){
		return x < min ? min : (x > max ? max : x);
	};
})();
