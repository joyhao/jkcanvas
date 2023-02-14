import {callback, colorsHash, getJKCount, setCtx, setJKCount} from "../status/status"

export type Selector = HTMLElement | HTMLCanvasElement | string;
export default class CreateCanvas {
    private readonly selector: Selector
    container: HTMLElement;
    canvas: HTMLCanvasElement;
    canvasHit: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    ctxHit: CanvasRenderingContext2D;

    constructor(selector: Selector = 'body') {
        this.selector = selector
        this.container = this.query()
        this.canvasHit = this.init('canvas-hit')
        this.canvas = this.init('canvas')
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
        this.ctxHit = this.canvasHit.getContext('2d') as CanvasRenderingContext2D
        setCtx({
            ctx: this.ctx,
            ctxHit: this.ctxHit,
        })

        this.events()
    }

    private query(): HTMLElement {
        if (this.selector instanceof HTMLElement) {
            return this.selector
        }
        if (typeof this.selector === 'string') {
            return document.querySelector(this.selector) ?? document.body
        }
        return document.body
    }

    private init(title:string) {
        const {width, height} = this.container.getBoundingClientRect()
        const canvas = document.createElement('canvas')
        const cunt = getJKCount()
        canvas.className = `jk-${title}  jk-canvas-${cunt} `
        canvas.style.cssText = `position:absolute;left:0;top:0;z-index:${cunt};user-select:none`
        canvas.width = width
        canvas.height = height
        setJKCount(cunt + 1)
        this.container.appendChild(canvas)
        return canvas
    }

    private events() {
        this.canvas.addEventListener('click', (e: MouseEvent) => {
            const mouse = {
                x: e.clientX - this.canvas.offsetLeft,
                y: e.clientY - this.canvas.offsetTop,
            }
            const px = this.ctxHit.getImageData(mouse.x, mouse.y, 1, 1).data
            const color = `rgb(${px[0]},${px[1]},${px[2]})`;
            const shape = colorsHash[color];
            if (shape) {
                callback['click'][color]()
            }
        })
    }
}