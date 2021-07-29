type storageType = "localStorage" | "sessionStorage";

class Storage {
  private storage: globalThis.Storage;

  constructor(type: storageType) {
    this.storage = window[type];
  }

  get(key: string, parse: boolean) {
    const value = this.storage.getItem(key);
    return value && parse ? JSON.parse(value) : value;
  }

  set(key: string, value: any, parse: boolean) {
    this.storage.setItem(key, parse ? JSON.stringify(value) : value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  has(key: string) {
    const value = this.storage.getItem(key);
    return value === null ? false : true;
  }

  clear() {
    this.storage.clear();
  }
}

const localStore = new Storage("localStorage");

const sessionStore = new Storage("sessionStorage");

export { localStore, sessionStore };
