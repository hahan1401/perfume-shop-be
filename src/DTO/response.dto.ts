export class ResponseDTO<T = unknown> {
  constructor(
    private data: T,
    private total?: number,
  ) {}

  public getData(): T {
    return this.data;
  }

  public getTotal(): number {
    return this.total ?? 0;
  }

  toObject() {
    return {
      data: this.getData(),
      total: this.getTotal(),
    };
  }
}
