import { Tool } from './tool'

export default class SelectionTool implements Tool {
  mouseDown(): void {
    console.log('Selection icon')
  }
  mouseUp(): void {
    console.log('Draw dashed rectangle')
  }
}
