import p5 from 'p5';

const sketch = (p) => {
    p.setup = function() {
        p.createCanvas(400, 400, p.WEBGL);
    };

    p.draw = function() {
        p.background("aqua");
    };
};

new p5(sketch);
