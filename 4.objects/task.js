function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let studentIvan = new Student('Ivan', 'male', 20);
let studentOlga = new Student('Olga', 'female', 22);
let studentElena = new Student('Elena', 'female', 38);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){ 
    this.marks = [marks];
    } else {
      this.marks.push(marks);
    }
}

Student.prototype.getAverage = function () {
  return this.average = (this.marks.reduce((acc, item) => acc += item, 0)) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
};