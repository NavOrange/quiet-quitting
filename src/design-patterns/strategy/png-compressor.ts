import { Compressor } from './compressor'

export default class PngCompressor implements Compressor {
  compress(filename: string): void {
    console.log(filename + ' Compressing useing PNG.')
  }
}
