const codeBreaker = require('./codeBreaker');
const instancia=new codeBreaker();

test('adivino todos', () => {
  expect(instancia.guess("1234")).toBe(" x x x x");
});

test('no adivino ninguno', () => {
  expect(instancia.guess("5678")).toBe("");
});

test('adivino numeros pero no posicion', () => {
  expect(instancia.guess("4321")).toBe(" _ _ _ _");
});

test('adivino 3 numeros pero no posicion', () => {
  expect(instancia.guess("4329")).toBe(" _ _ _");
});

test('adivino 2 numeros pero no posicion', () => {
  expect(instancia.guess("9812")).toBe(" _ _");
});

test('adivino 2 numeros con posicion y 2 numeros sin posicion', () => {
  expect(instancia.guess("1243")).toBe(" x x _ _");
});

test('adivino 1 numero con posicion y 2 numeros sin posicion y 1 no adivino', () => {
  expect(instancia.guess("1328")).toBe(" x _ _");
});







