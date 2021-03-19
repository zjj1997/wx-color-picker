
Component({
    externalClasses: ['class', 'moveable-class'],
    properties: {
        direction: {
            type: Array,
            value: ['X', 'Y'],
        },
    },
    data: {
        moveableSize: {
            width: 0,
            height: 0,
        },
        boundingRect: {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
        },
        position: {
            x: 0,
            y: 0,
        },
    },
    lifetimes: {
        attached() {
            wx.createSelectorQuery()
                .in(this)
                .select('.moveable')
                .boundingClientRect(({ width, height}) => {
                    this.setData({ moveableSize: { width, height } });
                })
                .exec();
        },
    },
    methods: {
        touchStart(event) {
            const touch = event.touches[0];
            wx.createSelectorQuery()
                .in(this)
                .select('.wrapper')
                .boundingClientRect(({ left, top, right, bottom, width, height }) => {
                    const _this = this;
                    const boundingRect = { left, top, right, bottom, width, height };
                    let position = {};
                    let x = touch.clientX - boundingRect.left;
                    let y = touch.clientY - boundingRect.top;
                    if (~_this.data.direction.indexOf('X')) {
                        x = Math.max(x, 0);
                        position.x = Math.min(x, boundingRect.width - _this.data.moveableSize.width);
                    }
                    if (~_this.data.direction.indexOf('Y')) {
                        y = Math.max(y, 0);
                        position.y = Math.min(y, boundingRect.height - _this.data.moveableSize.height);
                    }
                    this.setData({ boundingRect, position }, () => this.triggerEvent('change', position));
                })
                .exec();
        },
    },
})
