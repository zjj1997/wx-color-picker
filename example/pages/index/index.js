const { rgb2hex } = require('wx-color-picker/utils');

Page({
  data: {
    rgb: {
      r: 0,
      g: 0,
      b: 0,
    },
    hex: '',
  },
  onLoad() {},
  handleColorChange(e) {
    const rgb = e.detail;
    const hex = rgb2hex(rgb);
    this.setData({ rgb, hex });
  },
});