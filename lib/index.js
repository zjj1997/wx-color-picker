import { hsv2rgb } from './utils';

Component({
    externalClasses: [
        'class',
        'area-class',
        'bar-class',
        'area-indicator-class',
        'bar-indicator-class',
    ],
    data: {
        H: 0,
        S: 0,
        V: 100,
    },
    lifetimes: {
        attached() {
            this.triggerEvent('change', hsv2rgb({ h: this.data.H, s: this.data.S, v: this.data.V }));
            wx.createSelectorQuery()
                .in(this)
                .select('.area')
                .boundingClientRect(({ width, height }) => {
                    this.areaWidth = width;
                    this.areaHeight = height;
                })
                .select('.bar')
                .boundingClientRect(({ height }) => {
                    this.barHeight = height;
                })
                .exec();
        },
    },
    observers: {
        'H, S, V': function (h, s, v) {
            this.triggerEvent('change', hsv2rgb({ h, s, v }));
        },
    },
    methods: {
        handleAreaChange(e) {
            const { x, y } = e.detail;
            this.setData({
                S: x * 100 / this.areaWidth,
                V: (1 - y / this.areaHeight) * 100,
            });
        },
        handleBarChange(event) {
            const { y } = event.detail;
            this.setData({ H: y * 360 / this.barHeight });
        },
    },
})
