# @7inch/storage

A basic library wrapper with localStorage and sessionStorage.

## Install

```sh
npm i @7inch/storage
# with yarn
yarn add @7inch/storage
# or with pnpm
pnpm i @7inch/storage
```

## Usage

Take localStorage for example, same as sessionStorage.

```js
import { localStore } from "@7inch/storage";

// set a data item
localStore.set("foo", 10);
// get a data item
localStore.get("foo");
// remove a data item
localStore.remove("foo");
// check a data item if exists
localStore.has("foo");
// clear all items
localStore.clear();
```

## License

MIT
