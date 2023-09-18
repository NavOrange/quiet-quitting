import { Compressor } from './compressor'

export default class JpegCompressor implements Compressor {
  compress(filename: string): void {
    console.log(filename + ' Compressing useing JPEG.')
  }
}
