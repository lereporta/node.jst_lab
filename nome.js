let input, button, greeting;

function setup() {
  const canvasContainer = createCanvas(1920, 1080);
  canvasContainer.parent('canvasContainer');

  input = createInput();
  input.position(20, 65);

  button = createButton('enviar');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Qual seu nome?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('Olá ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
