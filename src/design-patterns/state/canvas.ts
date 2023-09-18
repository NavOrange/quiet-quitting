import { Tool } from './tool'

export default class Canvas {
  private currentTool: Tool

  public mouseDown() {
    this.currentTool.mouseDown()
  }
  public mouseUp() {
    this.currentTool.mouseUp()
  }

  public getCurrentTool() {
    return this.currentTool
  }

  public setCurrentTool(currentTool: Tool) {
    this.currentTool = currentTool
  }
}
