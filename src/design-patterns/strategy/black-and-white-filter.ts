import { Filter } from './filter'

export default class BlackAndWhiteFilter implements Filter {
  apply(filename: string): void {
    console.log(filename + ' Applying B&W filter.')
  }
}
