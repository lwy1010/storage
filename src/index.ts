type storageType = "localStorage" | "sessionStorage";

class Storage {
  private storage: globalThis.Storage;

  constructor(type: storageType) {
    this.storage = window[type];
  }

  get<T>(key: string, parse = true): T {
    const value = this.storage.getItem(key);
    return value && parse ? JSON.parse(value) : value;
  }

  set(key: string, value: any, parse = true) {
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

export const localStore = new Storage("localStorage");

export const sessionStore = new Storage("sessionStorage");
