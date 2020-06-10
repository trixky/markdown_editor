# markdown_editor

A simple markdown editor using [react](https://fr.reactjs.org/), with the [marked](https://www.npmjs.com/package/marked) module. __(docker)__

![Image description](https://i.ibb.co/yRwSXDR/markdown-editor-screenshot-1.png)

## Usage Without Docker

### Requirements

- node  12.16.3
- npm   6.14.4

```bash
npm install
npm start
```
You can then connect to the site at [http://localhost:3000/](http://localhost:3000/)

> The server run in development mode.

## Usage With Docker

### Requirements

- docker 19.03.6

```bash
# build
docker build -t markdown_editor .
# run
docker run -it --rm -p 4000:3000 markdown_editor
```
You can then connect to the site at [http://localhost:4000/](http://localhost:4000/)

> The server run in production mode.
