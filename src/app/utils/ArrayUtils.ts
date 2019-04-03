export class ArrayUtils {

  static isFirst(arr: Array<any>, item: any) {
    const index = arr.indexOf(item);
    return index === 0;
  }

  static isLast(arr: Array<any>, item: any) {
    const index = arr.indexOf(item);
    return index === arr.length;
  }

  static swapArray(arr: Array<any>, index1: number, index2: number) {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr;
  }
}
