			(function animationCercle() {
				var racine = document.documentElement;
			    var circle = racine.getElementById('green-halo');
			    var interval = 30;
			    var angle = 0;
			    var angle_increment = 6;

			    window.timer = window.setInterval(function () {
			        circle.setAttribute("stroke-dasharray", angle + ", 20000");
			       	console.log(angle);

			        if (angle >= 360) {
			            window.clearInterval(window.timer);
			        }
			        angle += angle_increment;
			    }.bind(this), interval);
			})()