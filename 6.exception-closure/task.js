function parseCount(value) {
  if (isNaN(Number.parseInt(value))) {
    throw new Error ('Невалидное значение');
  }
  return Number.parseInt(value, 10);
}

function validateCount(value) {
  try {
    console.log('внутри блока try');
    return parseCount(value, 10);
  }
  catch(error) {
    console.log('перехватили ошибку');
    return error;
  }
  finally {
    console.log('внутри блока finally');
  }
}

console.log(validateCount('f032'));



class Triangle {
  constructor(a, b, c) {

    this.a = a;
    this.b = b;
    this.c = c;
    this.perimeter = null;
    this.area = null;

    if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
      throw new Error ('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    return this.perimeter = this.a + this.b + this.c;
  }

  getArea () {
    const p = this.perimeter / 2;
    return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c), 2)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }
  catch {
    return {
      getPerimeter() {
        return ('Ошибка! Треугольник не существует');
      },

      getArea() {
        return ('Ошибка! Треугольник не существует');
      }
    };
  }
}

