# @7inch/storage

[![npm](https://img.shields.io/npm/v/@7inch/storage)](https://npmjs.com/package/@7inch/storage)

[English](README.md) | [中文](README.zh-CN.md)

## Introduction

A basic library wrapper with localStorage and sessionStorage, base on Typescript and rollup.

## Install

```sh
npm i @7inch/storage
```

## Usage

Take localStorage for example(same as sessionStorage):

```js
import { localStore, sessionStore } from "@7inch/storage";

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

Made with ❤️ Published under [MIT License](./LICENSE).
