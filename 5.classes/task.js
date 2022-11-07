class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = state;
    this.type = type;
  }

  fix() {
    return this.state *= 1.5;
  }

  set state(number) {
    if(number < 0) {
      return this._state = 0;
    } else if (number > 100) {
      return this._state = 100;
    }else this._state = number;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if(book.state > 30) {
      return this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findResult = this.books.find((item) => item[type] === value);
    return findResult || null;
  }

  giveBookByName(bookName) {
    const findResult = this.books.find((item) => item.name === bookName);
    this.books = this.books.filter((item) => item.name !== bookName);
    return findResult || null;
  }
}

let libraryUK = new Library('Library of the United Kingdom');
libraryUK.addBook(
  new FantasticBook(
    "J.K. Rowling",
    "Harry Potter and the Philosopher's Stone",
    1997,
    223
  )
);

libraryUK.addBook(
  new FantasticBook(
    "J.R.R. Tolkien",
    "The Hobbit, or There and Back Again",
    1919,
    310
  )
);
const hobbit = new FantasticBook(
    "J.R.R. Tolkien",
    "The Hobbit, or There and Back Again",
    1919,
    310
  );

libraryUK.addBook(
  new NovelBook(
    "Jane Austen",
    "Pride and Prejudice",
    1813,
    407
  )
);

libraryUK.addBook(
  new DetectiveBook(
    "Agatha Christie",
    "Ten Little Niggers",
    1939,
    272
  )
);

console.log(libraryUK.findBookBy("releaseDate", 1919).name);
libraryUK.giveBookByName("The Hobbit, or There and Back Again");
hobbit.state = 40;
hobbit.fix();
libraryUK.addBook(hobbit);
console.log(libraryUK);