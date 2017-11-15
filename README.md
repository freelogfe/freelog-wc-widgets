# freelog-widgets

## 开发

### 目录结构

dist
src
├── lib
│   ├── marked.js
│   └── reveal
├── static
│   └── css
└── widgets
    ├── md-viewer
    │   ├── index.css
    │   ├── index.html
    │   └── index.js
    ├── image.html
    ├── md-viewer.html
    └── reveal.html
    
    
- lib 开源的公共库文件
- static 存放静态的资源文件如图片、公共的css
- widgets 存放widget对应的html文件，可以一个目录表示一个widget，也可以只有一个html文件

## 构建

```sh
$ gulp  #构建

$ gulp watch #监听文件变化进行构建
```
