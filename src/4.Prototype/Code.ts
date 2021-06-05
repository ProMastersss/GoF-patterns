export class Code {
  protected creator: string = "Чей то";

  constructor(public code: string) {}

  copyCode(): Code {
    return new Code(
      "Код:" +
        this.code +
        " Написал его " +
        this.creator +
        ". Мы его скопировали ＼(≧▽≦)／"
    );
  }
}
