import CreateCanvas, {Selector} from "../core/CreateCanvas";
import Circle from "../shaper/Circle/Circle";

export default class BarChart{
    createCanvas:CreateCanvas
    ctx: CanvasRenderingContext2D
    constructor(selector:Selector) {
       this.createCanvas= new CreateCanvas(selector)
       this.ctx = this.createCanvas.ctx
        new Circle({
            backgroundColor:'#ffccff',
            left:300,
            top:200
        })
        new Circle({
            backgroundColor:'#ff88cc',
            left:350,
            top:200
        })
        new Circle({
            backgroundColor:'#ff66cc',
            left:350,
            top:250
        })
    }

}