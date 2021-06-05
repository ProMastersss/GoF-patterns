export abstract class Transport {
  constructor(protected name: string) {}

  // Ехать
  abstract drive(): string;
}
