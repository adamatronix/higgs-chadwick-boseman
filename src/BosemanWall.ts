import * as P5 from 'p5';
import Cursor from './Cursor';
import Brush from './Brush';

class BosemanWall {

  container:HTMLDivElement;
  cursor:Cursor;
  brush:Brush;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.cursor = new Cursor(this.container);
    this.brush = new Brush();
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

    p5.mouseDragged = () => {
      this.brush.draw(p5,p5.mouseX,p5.mouseY,this.cursor.radius);
    }
  }

}

export default BosemanWall;