import { Compressor } from './compressor'
import { Filter } from './filter'

export default class ImageStorage {
  public store(filename: string, compressor: Compressor, filter: Filter) {
    compressor.compress(filename)
    filter.apply(filename)
  }
}
