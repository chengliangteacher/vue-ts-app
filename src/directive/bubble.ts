class Bubble {
    // [x: string]: null;
    bArr: any;
    bAttr: any;
    sArr: any;
    pArr: any;
    sAttr: any;
    pAttr: any;
    maxNum: number;
    canvas: any;
    ctx: any;
    width: number;
    height: number;
    el: any;
    constructor(config: any) {
        console.log(config)
        this.canvas = {};
        this.ctx = {};
        this.maxNum = 120;
        this.bArr = [];
        this.bAttr = {};
        this.sArr = [];
        this.sAttr = {};
        this.pArr = [];
        this.pAttr = {};
        this.el = config.el;
        this.width = config.width;
        this.height = config.height;
        this.initCanvas(config);
        // this.initSnow();
        // this.initBubble(config);
        this.initParticles();


        this.startAnimation(this.drawParticles.bind(this));

        // setInterval(() => {
        //     this.drawParticles();
        //     // this.drawCircle();
        // }, 50)
    }
    initParticles() {
        for (let i = 0; i < this.maxNum; i++) {
            const pAtrr = {
                x: Math.random() * this.width, //x坐标
                y: Math.random() * this.height, //y坐标
                radius: (Math.random() * 3 + 1) | 0, //半径
                angle: Math.random() * 360 | 0,
                speed: Math.random(), //移动速度
                color: "#fff"
            }
            this.pArr.push(pAtrr);
        }
    }
    drawParticles() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        const circle = () => {
            this.pArr.forEach((attr: any) => {
                //画圆
                this.ctx.beginPath();
                this.ctx.arc(attr.x, attr.y, attr.radius, 0, 2 * Math.PI, false);
                this.ctx.strokeStyle = attr.color;
                this.ctx.fillStyle = attr.color;
                this.ctx.fill();
                attr.x += Math.cos(attr.angle) * attr.speed;
                attr.y += Math.sin(attr.angle) * attr.speed;
                if (attr.x < 0 || attr.x > this.width || attr.y < 0 || attr.y > this.height) {
                    attr.x = Math.random() * this.width;
                    attr.y = Math.random() * this.height;
                    attr.radius = (Math.random() * 3 + 1) | 0; //半径
                    attr.angle = Math.random() * 360 | 0;//发射角度
                    attr.speed = Math.random();//发射速度
                }
            });
        }
        const line = () => {
            for (let i = 0; i < this.maxNum; i++) {
                for (let j = i + 1; j < this.maxNum; j++) {
                    const x1 = this.pArr[i].x;
                    const x2 = this.pArr[j].x;
                    const y1 = this.pArr[i].y;
                    const y2 = this.pArr[j].y;
                    const dis = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                    if (dis < 150) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(x1, y1);
                        this.ctx.lineTo(x2, y2);
                        this.ctx.strokeStyle = `rgba(255,255,255,${(150 - dis) / dis})`;
                        this.ctx.strokeWidth = 1;
                        this.ctx.stroke();
                    }
                }
            }
        }

        circle();
        line();
    }






    initCanvas(config: any) {
        console.log(this)
        this.width = config.width ? config.width : window.innerWidth;
        this.height = config.height ? config.height : window.innerHeight;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.style.position = "fixed";
        this.canvas.style.left = 0;
        this.canvas.style.top = 0;
        // this.canvas.style.zIndex = 0;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.el.appendChild(this.canvas);
        this.canvas.addEventListener("mousemove", (e: any) => {
            const x = e.offsetX;
            const y = e.offsetY;
            this.pArr[0].x = x;
            this.pArr[0].y = y;
        });
    }


    initSnow() {
        for (let i = 0; i < 120; i++) {
            const snowAttr = {
                x: Math.random() * this.width, //x坐标
                y: Math.random() * this.height, //y坐标
                radius: (Math.random() * 4 + 3) | 0, //半径
                speed: Math.random() * 5 + 1, //下落速度
                color: "#369"
            }
            this.sArr.push(snowAttr);
        }
    }

    drawSnow() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.sArr.forEach((attr: any) => {
            this.ctx.beginPath();
            this.ctx.arc(attr.x, attr.y, attr.radius, 0, 2 * Math.PI, false);
            this.ctx.strokeStyle = attr.color;
            this.ctx.fillStyle = attr.color;
            this.ctx.fill();
            this.ctx.stroke();

            attr.y += attr.speed;
            if (attr.x < 0 || attr.x > this.width || attr.y < 0 || attr.y > this.height) {
                attr.y = 0;
                attr.radius = (Math.random() * 7 + 5) | 0;//半径
                attr.speed = Math.random() * 10 + 0.2;//发射速度
            }
        });
    }

    //初始化泡泡
    initBubble(config: any) {
        for (let i = 0; i < 120; i++) {
            const bubbleAttr = {
                x: this.width / 2, //x坐标
                y: this.height / 2, //y坐标
                radius: (Math.random() * 7 + 5) | 0, //半径
                angle: Math.random() * 360 | 0, //发射角度
                speed: Math.random() * 10 + 0.2, //发射速度
                r: Math.random() * 255 | 0, //红色 0 ~ 255
                g: Math.random() * 255 | 0, //绿色 0 ~ 255
                b: Math.random() * 255 | 0, //蓝色 0 ~ 255
                a: Math.random() * 0.2, //透明度
            }
            this.bArr.push(bubbleAttr);
        }
    }
    //画泡泡
    drawCircle() {
        //清除画布
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.bArr.forEach((attr: any) => {
            this.ctx.beginPath();
            this.ctx.arc(attr.x, attr.y, attr.radius, 0, 2 * Math.PI, false);
            this.ctx.strokeStyle = `rgba(${attr.r},${attr.g},${attr.b},${attr.a})`;
            this.ctx.fillStyle = `rgba(${attr.r},${attr.g},${attr.b},${attr.a})`;
            this.ctx.fill();
            this.ctx.stroke();
            attr.x += Math.cos(attr.angle) * attr.speed;
            attr.y += Math.sin(attr.angle) * attr.speed;
            if (attr.x < 0 || attr.x > this.width || attr.y < 0 || attr.y > this.height) {
                attr.x = this.width / 2;
                attr.y = this.height / 2;
                attr.radius = (Math.random() * 7 + 5) | 0;//半径
                attr.angle = Math.random() * 360 | 0;//发射角度
                attr.speed = Math.random() * 3 + 1;//发射速度
                attr.r = Math.random() * 255 | 0;
                attr.g = Math.random() * 255 | 0;
                attr.b = Math.random() * 255 | 0;
                attr.a = Math.random() * 0.2;
            }
        });
    }
    //执行动画
    startAnimation(fn: any) {
        requestAnimationFrame(() => {
            this.startAnimation(fn)
        })
        fn();
    }
}

export default {
    bind(el: any, binding: any) {
        new Bubble({
            width: window.screen.width,
            height: window.screen.height,
            el,
        });
    },
};
