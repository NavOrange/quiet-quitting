import EditorState from './editor-state'

export default class History {
  private states: EditorState[] = []

  public push(state: EditorState) {
    this.states.push(state)
  }

  public pop() {
    return this.states.pop()
  }
}
