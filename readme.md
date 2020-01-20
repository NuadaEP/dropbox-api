# Dropbox

A simple rest API using NodeJS and Socket.io to upload and show files at realtime. Just like a dropbox.

## Instalation Guide

To install dropbox packages you can use:

```shell
$ npm install
```

or

```shell
$ yarn install
```

## Endpoint

Get the Insomnia exported file at project structure.

Base url: http://[::]:port/api

Routes

**Create a Box: [POST '/boxes']**

Send JSON:

```shell
{
  "title": "Box title",
}
```

Return JSON:

```shell
{
  "files": [],
  "_id": "5e25af14dad7200354fbb4ae",
  "title": "Box title",
  "createdAt": "2020-01-20T13:45:56.446Z",
  "updatedAt": "2020-01-20T13:45:56.446Z",
  "__v": 0
}
```

**Show a Box: [GET '/boxes/:id']**

Send url param:

```shell
":id => Box id"
```

Return JSON (without file into box):

```shell
{
  "files": [],
  "_id": "5e25af14dad7200354fbb4ae",
  "title": "Box title",
  "createdAt": "2020-01-20T13:45:56.446Z",
  "updatedAt": "2020-01-20T13:47:32.357Z",
  "__v": 1
}
```

Return JSON (with file into box):

```shell
{
  "files": [
    {
      "_id": "5e25af74dad7200354fbb4af",
      "title": "file.jpg",
      "path": "1fc0daf96befe4f864628a3b73f03448-file.jpg",
      "createdAt": "2020-01-20T13:47:32.310Z",
      "updatedAt": "2020-01-20T13:47:32.310Z",
      "__v": 0,
      "url": "http://localhost:3333/files/1fc0daf96befe4f864628a3b73f03448-file.jpg",
      "id": "5e25af74dad7200354fbb4af"
    }
  ],
  "_id": "5e25af14dad7200354fbb4ae",
  "title": "Box title",
  "createdAt": "2020-01-20T13:45:56.446Z",
  "updatedAt": "2020-01-20T13:47:32.357Z",
  "__v": 1
}
```

**Create a Box: [POST '/boxes/:id/files']**

Send url param:

```shell
":id => Box id"
```

Send Multipart:

```shell
  "file => <file_uploaded>"
```

Return JSON:

```shell
{
  "_id": "5e25af74dad7200354fbb4af",
  "title": "file.jpg",
  "path": "1fc0daf96befe4f864628a3b73f03448-file.jpg",
  "createdAt": "2020-01-20T13:47:32.310Z",
  "updatedAt": "2020-01-20T13:47:32.310Z",
  "__v": 0,
  "url": "http://localhost:3333/files/1fc0daf96befe4f864628a3b73f03448-file.jpg",
  "id": "5e25af74dad7200354fbb4af"
}
```
