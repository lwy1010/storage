# @7inch/storage

[![npm](https://img.shields.io/npm/v/@7inch/storage)](https://npmjs.com/package/@7inch/storage)

[English](README.md) | [中文](README.zh-CN.md)

## 介绍

一个简单地封装了 localStorage and sessionStorage 的库，基于 Typescript 和 rollup 编写。

## 安装

```sh
npm i @7inch/storage
```

## 用户

以 localStorage 为例(sessionStorage 的用法与此相似):

```js
import { localStore, sessionStore } from "@7inch/storage";

localStore.set("foo", 10);
localStore.get("foo");
localStore.remove("foo");
localStore.has("foo");
localStore.clear();
```

## License

Made with ❤️ Published under [MIT License](./LICENSE).
