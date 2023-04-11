import Sketch from "react-p5";

let mouseX = 0;
let mouseY = 0;
let pmouseX = 0;
let pmouseY = 0;

export default function Canvas(props) {

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(props.width, props.height).parent(canvasParentRef)
    }

    const mp = (e) => {
        if (e.mouseY > 620 || e.mouseY < 0 || e.mouseX > 1080 || e.mouseX < 0) {
            return;
        }
        mouseX = e.mouseX;
        mouseY = e.mouseY;
        props.x_coordinates.push(mouseX);
        props.y_coordinates.push(mouseY);
    }

    const draw = (p5) => {
        p5.background(255, 0);
        console.log(mouseX, mouseY, pmouseX, pmouseY);
        p5.line(mouseX, mouseY, pmouseX, pmouseY);
        pmouseX = mouseX;
        pmouseY = mouseY;
    };

    return <Sketch setup={setup} draw={draw} mousePressed={mp} />;
};