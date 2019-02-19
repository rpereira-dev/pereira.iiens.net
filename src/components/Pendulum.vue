<style>

#canvasID {
    width: 100%;
    height: 100%;
}

</style>

<template>

  <div>
	<canvas id="canvasID" style="border: none;"></canvas>
  </div>

</template>

<script>
export default {
    mounted() {
        var DoublePendulum = function(m1, m2, l1, l2, theta1, theta2) {
            this.m1 = m1;
            this.m2 = m2;
            this.l1 = l1;
            this.l2 = l2;
            this.theta1 = theta1;
            this.theta2 = theta2;
            this.dTheta1 = 0;
            this.dTheta2 = 0;
            this.d2Theta1 = 0;
            this.d2Theta2 = 0;
            this.massVolum = 7874; //kg.m^-3, fer
            this.updates = [];
            this.dt = 0;

            this.update = function(dt) {
                let mu =  1 + m1 / m2;
                let g = 9.81;
                let dTheta = this.theta1 - this.theta2;
                let cosTheta1 = Math.cos(this.theta1);
                let sinTheta1 = Math.sin(this.theta1);
                let cosTheta2 = Math.cos(this.theta2);
                let sinTheta2 = Math.sin(this.theta2);
                let cosDTheta = Math.cos(dTheta);
                let cos2DTheta = Math.cos(dTheta);
                let sinDTheta = Math.sin(dTheta);

                this.d2Theta1 = 0;
                this.d2Theta2 = 0;

                while (this.updates.length > 0) {
                    let updateFunction = this.updates.pop();
                    updateFunction();
                }

                this.d2Theta1 += (g * (sinTheta2 * cosDTheta - mu * sinTheta1) - (this.l2 * this.dTheta2 * this.dTheta2 + this.l1 * this.dTheta1 * this.dTheta1 * cosDTheta) * sinDTheta) / (this.l1 * (mu - cos2DTheta));

                this.d2Theta2 += (mu * g * (sinTheta1 * cosDTheta - sinTheta2) + (mu * this.l1 * this.dTheta1 * this.dTheta1 + this.l2 * this.dTheta2 * this.dTheta2 * cosDTheta) * sinDTheta) / (this.l2 * (mu - cos2DTheta));

                
                this.dTheta1 += this.d2Theta1 * dt;
                this.dTheta2 += this.d2Theta2 * dt;
                this.theta1 += this.dTheta1 * dt;
                this.theta2 += this.dTheta2 * dt;

                this.dt = dt;
            }

            function drawLine(ctx, x1, y1, x2, y2, color, lineWidth) {
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }

            function drawCircle(ctx, x0, y0, r, color) {
                ctx.strokeStyle = color;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x0, y0, r, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.stroke();
            }

            this.draw = function() {
                let ctx = canvas.getContext("2d");
        
                let x0 = canvas.width * 0.5;
                let y0 = canvas.height * 0.3;

                let scale = ((canvas.height < canvas.width) ? canvas.height : canvas.width) * 0.5 / (this.l1 + this.l2) * 0.8;

                let x1 = this.l1 * Math.sin(this.theta1) * scale + x0;
                let y1 = this.l1 * Math.cos(this.theta1) * scale + y0;

                let x2 = this.l2 * Math.sin(this.theta2) * scale + x1;
                let y2 = this.l2 * Math.cos(this.theta2) * scale + y1;

                let r1 = Math.cbrt(this.m1 / this.massVolum / 4 / Math.PI * 3) * scale;
                let r2 = Math.cbrt(this.m2 / this.massVolum / 4 / Math.PI * 3) * scale;
                let r0 = (r1 + r2) * 0.5;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                drawLine(ctx, x0 - r0 * 4, y0, x0 + r0 * 4, y0, "black", r0 * 0.5);
                drawLine(ctx, x0, y0, x1, y1, "gray", r1 * 0.5);
                drawLine(ctx, x1, y1, x2, y2, "gray", r2 * 0.5);

                drawCircle(ctx, x0, y0, r1 * 0.5, "black");
                drawCircle(ctx, x1, y1, r1, "black");
                drawCircle(ctx, x2, y2, r2, "black");
            }
        };

        const onResize = () => {
            canvas.width = document.body.clientWidth; //document.width is obsolete
            canvas.height = document.body.clientHeight; //document.height is obsolete	
        }

        const randomPendulum = () => {

            let m1 = 4 + Math.random() * 6; //kg
            let m2 = 4 + Math.random() * 6;
            let l1 = 0.3 + Math.random() * 0.4 ; // m
            let l2 = 0.3 + Math.random() * 0.4 ; // m
            let theta1 = Math.random() * 2.0 * Math.PI; // rad
            let theta2 = Math.random() * 2.0 * Math.PI; // rad
            
            return (new DoublePendulum(m1, m2, l1, l2, theta1, theta2));
        }


        // init the loop
        let then = Date.now();
        let fps = 60.0;
        let interval = 1.0 / fps;
        let precision = 64.0;
        let step =  interval / precision;
        let timeElapsed = 0;
        let pendulum = randomPendulum();
        window.onresize = onResize;

        // init the canvas 
        const canvas = document.getElementById("canvasID");
        onResize();

        const sleep = (ms) => {
	        return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function loop() {
            requestAnimationFrame(loop);

            var now = Date.now();
            let dt = (now - then) / 1000.0;
            timeElapsed += dt;
            if (dt > interval) {
                then = now - (dt % interval);
                var i = 0;
                while (i * step < dt) {
                    pendulum.update(step);
                    i++;
                }
                pendulum.draw();
            } else {
                await sleep(interval);
            }
        }
    
        // start the loop
		loop();
    }
};
</script>
