import * as P5 from 'p5';

class Cursor {

  container:HTMLDivElement;
  radius:number;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.radius = 75;
    new P5(this.sketch);
  }

  sketch = (p5: P5) => {
    p5.setup = () => {
      const canvas = p5.createCanvas(this.container.offsetWidth, this.container.offsetHeight);
      canvas.parent(this.container);
      canvas.style('position', 'absolute');
      canvas.style('left', 0);
      canvas.style('top', 0);
      canvas.style('z-index', 1);
      p5.frameRate(60);
    }

    p5.mouseWheel = (event:any) => {
      this.radius += event.delta;
      if(this.radius < 10) 
        this.radius = 20;
    }

    p5.draw = () => {
      p5.clear();
      p5.circle(p5.mouseX, p5.mouseY, this.radius); 
    }
  }
}

export default Cursor;