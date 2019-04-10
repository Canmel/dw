export class SubOption {
  text: string;
  optionInpText: boolean;

  constructor(text: string) {
    this.text = text;
    this.optionInpText = false;
  }

  static indexOfArray(options: Array<SubOption>, text: string): number {
    let result = null;
    options.forEach(function (value, index) {
      if (value.text === text) {
        return result = index;
      }
    });
    return result;
  }

  static getByTextFromArray(options: Array<SubOption>, text: string): SubOption {
    let result = null;
    options.forEach(function (value, index) {
      if (value.text === text) {
        return result = value;
      }
    });
    return result;
  }
}
