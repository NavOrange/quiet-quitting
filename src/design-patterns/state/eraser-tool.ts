import { Tool } from './tool'

export default class EraserTool implements Tool {
  mouseDown(): void {
    console.log('Eraser icon')
  }
  mouseUp(): void {
    console.log('Erase something')
  }
}
