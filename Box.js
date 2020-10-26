class blocks{
  constructor(x, y, width, height, angle) {
      var options = {
          'isStatic': false
      }
      this.body = Bodies.rectangle(x, y, 25, 30, options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, 30, 35);
    }
}