class DragApp {
    isdrag: boolean;
    offsetY: number;
    offsetX: number;
    el: any
    constructor(el: any) {
        this.el = el;
        this.offsetX = 0;
        this.offsetY = 0;
        this.isdrag = false;
        this.handleEvent();
    }
    handleEvent() {
        this.el.addEventListener("mousedown", (e: any) => {
            this.el.style.cursor = "move";
            this.offsetX = e.offsetX;
            this.offsetY = e.offsetY;
            this.isdrag = true;
        }, false);
        this.el.addEventListener("mouseup", (e: any) => {
            this.isdrag = false;
            this.el.style.cursor = "auto";
        }, false);
        this.el.addEventListener("mousemove", (e: any) => {
            if (this.isdrag) {
                this.el.style.position = "fixed";
                if (e.clientX - this.offsetX < 0) {
                    this.el.style.left = 0;
                } else if (e.clientX - this.offsetX >= document.documentElement.clientWidth - 100) {
                    this.el.style.left = document.documentElement.clientWidth - 100;
                } else {
                    this.el.style.left = e.clientX - this.offsetX + "px";
                }
                if (e.clientY - this.offsetY < 0) {
                    this.el.style.top = 0;
                } else if (e.clientY - this.offsetY >= document.documentElement.clientHeight - 100) {
                    this.el.style.top = document.documentElement.clientHeight - 100 + "px";
                } else {
                    this.el.style.top = e.clientY - this.offsetY + "px";
                }
            }
        }, false);
        this.el.addEventListener("mouseleave", () => {
            this.isdrag = false;
            this.el.style.cursor = "auto";
        }, false);
    }
}

export default {
    inserted(el: any) {
        new DragApp(el);
    }
}
