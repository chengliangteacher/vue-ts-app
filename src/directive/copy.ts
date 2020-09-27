/* eslint-disable no-unused-vars */
import { DirectiveBinding } from "vue/types/options";

class Copy {
    el: any;
    x: number;
    y: number;
    binding: DirectiveBinding;
    constructor(el: any, binding: DirectiveBinding) {
        this.el = el;
        this.binding = binding;
        this.x = 0;
        this.y = 0;
        this.init();
    }
    init() {
        this.el.style.cursor = "pointer"
        this.el.setAttribute("title", "点击复制");
        this.x = this.el.offsetLeft;
        this.y = this.el.offsetTop;
        this.el.classList.add("iconfont", "s-copy");
        this.el.addEventListener("mouseover", () => {
            this.el.classList.add("active");
        });
        this.el.addEventListener("mouseout", () => {
            this.el.classList.remove("active");
        });
        this.el.addEventListener("click", () => {
            this.runCopy();
        })
        document.addEventListener("copy", (e) => {
            if (e.target === this.el) {
                this.showCopyTip();
            }
        });
    }
    runCopy() {
        const selection = window.getSelection();
        const range = document.createRange();
        const innerHTML: string = this.el.innerHTML;
        if (this.binding.value) {
            this.el.innerHTML = this.binding.value;
        }
        range.selectNodeContents(this.el)
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("Copy", false, null || "");
            selection.removeAllRanges();
            if (this.binding.expression) {
                this.el.innerHTML = innerHTML
            }
        }
    }
    showCopyTip() {
        if (this.el.offsetParent?.offsetLeft) {
            this.x = this.x + this.el.offsetParent?.offsetLeft
        }
        this.y -= this.el.offsetParent?.scrollTop
        const dom = document.createElement("span");
        dom.innerHTML = "复制成功";
        dom.style.transition = "all .6s";
        dom.style.color = "#2c2";
        dom.style.position = "fixed";
        dom.style.left = this.x + "px";
        dom.style.top = this.y + "px";
        dom.style.zIndex = "9999";
        dom.style["whiteSpace"] = "nowrap";
        dom.style.transform = `translate3D(0, -.8rem, 0)`;
        document.documentElement.appendChild(dom);
        requestAnimationFrame(() => {
            dom.style.transform = `translate3D(0, -1.5rem, 0)`;
        });
        dom.addEventListener("transitionend", () => {
            console.log("end")
        })
        setTimeout(() => {
            document.documentElement.removeChild(dom);
        }, 600);
    }
}

export default {
    inserted(el: HTMLElement, binding: DirectiveBinding) {
        new Copy(el, binding)
    }
};
