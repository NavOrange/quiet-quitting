import EditorState from './editor-state'

export default class Editor {
  private content: string

  public createState() {
    return new EditorState(this.content)
  }

  public restore(state: EditorState) {
    this.content = state.getContent
  }

  public setContent(content: string) {
    this.content = content
  }

  public get getContent() {
    return this.content
  }
}
