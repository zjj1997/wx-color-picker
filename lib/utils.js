module.exports = {
    hsv2rgb({ h, s, v }) {
        h = h % 360;
        s = s / 100;
        v = v / 100;
        let r = 0, g = 0, b = 0;
        let i = parseInt((h / 60) % 6);
        let f = h / 60 - i;
        let p = v * (1 - s);
        let q = v * (1 - f * s);
        let t = v * (1 - (1 - f) * s);
        switch (i) {
            case 0:
                r = v; g = t; b = p;
                break;
            case 1:
                r = q; g = v; b = p;
                break;
            case 2:
                r = p; g = v; b = t;
                break;
            case 3:
                r = p; g = q; b = v;
                break;
            case 4:
                r = t; g = p; b = v;
                break;
            case 5:
                r = v; g = p; b = q;
                break;
            default:
                break;
        }
        r = parseInt(r * 255.0)
        g = parseInt(g * 255.0)
        b = parseInt(b * 255.0)
        return { r, g, b };
    },

    rgb2hsv({ r, g, b }) {
        let h = 0, s = 0, v = 0;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        v = max / 255;
        if (max === 0) {
            s = 0;
        } else {
            s = 1 - (min / max);
        }
        if (max === min) {
            h = 0;
        } else if (max === r && g >= b) {
            h = 60 * ((g - b) / (max - min)) + 0;
        } else if (max === r && g < b) {
            h = 60 * ((g - b) / (max - min)) + 360
        } else if (max === g) {
            h = 60 * ((b - r) / (max - min)) + 120
        } else if (max === b) {
            h = 60 * ((r - g) / (max - min)) + 240
        }
        h = parseInt(h);
        s = parseInt(s * 100);
        v = parseInt(v * 100);
        return { h, s, v }
    },

    rgb2hex({ r, g, b }) {
        let hex = x => `0${parseInt(x).toString(16)}`.slice(-2);
        return `#${hex(r)}${hex(g)}${hex(b)}`.toUpperCase();
    },
}