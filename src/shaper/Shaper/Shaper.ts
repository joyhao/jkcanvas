import iShaper from "./iShaper";
import {getCtx} from "../../status/status";


export default class Shaper implements iShaper {
    protected ctx: CanvasRenderingContext2D = getCtx().ctx
    protected ctxHit: CanvasRenderingContext2D = getCtx().ctxHit

    color: string
    backgroundColor: string
    border: string
    width: number
    height: number
    left: number
    top: number

    constructor(shaper: iShaper) {
        this.color = shaper.color ?? '#fff'
        this.backgroundColor = shaper.backgroundColor ?? '#333'
        this.border = shaper.border ?? "1px solid #ddd"
        this.width = shaper.width ?? 100
        this.height = shaper.height ?? 100
        this.left = shaper.left ?? 0
        this.top = shaper.top ?? 0
    }

    render(): void {
    }
}

