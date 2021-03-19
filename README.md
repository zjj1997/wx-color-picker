### 1. 介绍

微信小程序 高性能颜色选择器组件 

### 2. 通过 npm 安装
`npm i wx-color-picker -S`

如何在微信小程序中使用 npm ？参考： [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

### 3. 构建 npm 包

打开微信开发者工具，点击 工具 -> 构建 npm，并勾选 使用 npm 模块 选项，构建完成后，即可引入组件。

### 4. 使用组件

``` json

"usingComponents": {
    "color-picker": "wx-color-picker"
}

```

``` html

<color-picker
    class="color-picker"
    area-class="color-picker-area"
    bar-class="color-picker-bar"
    area-indicator-class="color-picker-area-indicator"
    bar-indicator-class="color-picker-bar-indicator"
    bind:change="handleColorChange"
/>

```

``` js

const { rgb2hex } = require('wx-color-picker/utils');

handleColorChange(e) {
    const rgb = e.detail;
    const hex = rgb2hex(rgb);
    console.log('rgb', hex);
    console.log('hex', hex);
}

```

``` css

.color-picker {
  width: 600rpx;
  height: 500rpx;
  display: flex;
  justify-content: space-between;
}

.color-picker-area {
  width: 500rpx;
  height: 500rpx;
}

.color-picker-bar {
  width: 32rpx;
  height: 500rpx;
}

.color-picker-area-indicator {
  width: 28rpx;
  height: 28rpx;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border: 1px solid #fff;
  position: absolute;
  transform: translate(-50%, -50%);
}

.color-picker-bar-indicator {
  width: 32rpx;
  height: 12rpx;
  border-radius: 4rpx;
  box-shadow: 0 0 4rpx rgba(0, 0, 0, .6);
  background-color: rgba(255, 255, 255, 0.6);
}

```


### 5. 预览
![perview](./assets/miniProgramCode.jpg)