/* import Editor from './memento/editor'
import History from './memento/history'

const editor = new Editor()
const history = new History()

editor.setContent('a')
history.push(editor.createState())
editor.setContent('b')
history.push(editor.createState())
editor.setContent('c')
editor.restore(history.pop())
editor.restore(history.pop())

console.log(editor.getContent) */

/* import Canvas from './state/canvas'
import EraserTool from './state/eraser-tool'
import SelectionTool from './state/selection-tool'

const canvas = new Canvas()
canvas.setCurrentTool(new EraserTool())
canvas.mouseDown()
canvas.mouseUp() */

/* import BrowseHistory from './iterator/browse-history'
const history = new BrowseHistory()
history.push('a')
history.push('b')
history.push('c')
const iterator = history.createIterator()

while (iterator.hasNext()) {
  const url = iterator.current()
  console.log(url)
  iterator.next()
} */

import ImageStorage from './strategy/ImageStorage'
import BlackAndWhiteFilter from './strategy/black-and-white-filter'
import JpegCompressor from './strategy/jpeg-compressor'
import PngCompressor from './strategy/png-compressor'
const imageStorage = new ImageStorage()
imageStorage.store('a', new JpegCompressor(), new BlackAndWhiteFilter())
imageStorage.store('a', new PngCompressor(), new BlackAndWhiteFilter())
