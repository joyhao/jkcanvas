import iShaper from "../Shaper/iShaper";
import Shaper from "../Shaper/Shaper";
import {callback, colorsHash} from "../../status/status";
import {randomColor} from "../../utils/utils";

export default class Circle extends Shaper {
    constructor(circle: iShaper) {
        super(circle)
        this.render()

    }

    checkISRect() {
        return this.width === this.height ? true : false
    }

    render() {
        if (!this.checkISRect()) {
            console.warn('圆的宽高要一样')
            return
        }
        const ctx = this.ctx
        const ctxHit = this.ctxHit
        const color = randomColor()
        !colorsHash[color] && (colorsHash[color] = color)
        // draw on "scene" canvas first
        ctx.beginPath();
        ctx.fillStyle = this.backgroundColor;
        ctx.arc(this.left, this.top, this.width, 0, 2 * Math.PI, false);
        ctx.fill();

        // then draw on offscren "hit" canvas
        ctxHit.beginPath();
        ctxHit.fillStyle = colorsHash[color]
        ctxHit.arc(this.left, this.top, this.width, 0, 2 * Math.PI, false)
        ctxHit.fill();


        callback['click'][color] = ()=>{
            this.clearCircle(this.left,this.top,this.width+2,ctx)
            this.clearCircle(this.left,this.top,this.width+2,ctxHit)
           delete colorsHash[color]
        }
    }

    clearCircle( x:number , y:number , radius:number ,ctx:CanvasRenderingContext2D){
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.restore();
    }
}