export class PiClient {
  hashRate10s = 0;
  hashRate1m = 0;
  hashRate10m = 0;
  constructor(
    public name = '',
    public ip = '',
    public created = new Date().getTime(),
    public color = ''
  ) {
      this.hashRate10m = Math.floor(Math.random() * 10 + 1);
      this.hashRate10s = Math.floor(Math.random() * 10 + 1);
      this.hashRate1m = Math.floor(Math.random() * 10 + 1);
  }
}
export const PiClients: PiClient[] = [];
