// Problem 1

type Value = string | boolean | number;
const formatValue = (value: Value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "boolean") {
    return !value;
  }
  if (typeof value === "number") {
    return value * 10;
  }
};

const getLength = (value: string | unknown[]) => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number | string;
};

const filterByRating = (items: Item[]): Item[] => {
  return items
    .filter((item) => Number(item.rating) >= 4 && Number(item.rating) <= 5)
    .map((item) => ({
      ...item,
      rating: Number(item.rating).toFixed(1),
    }));
};

interface ActiveUsers {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: ActiveUsers[]): ActiveUsers[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (myBook: Book) => {
  console.log(
    `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${
      myBook.publishedYear
    }, Available: ${myBook.isAvailable ? "Yes" : "No"}`
  );
};

type Tarray = Array<number | string | undefined>;

const getUniqueValues = (array1: Tarray, array2: Tarray): Tarray => {
  const newarray = [...array1, ...array2];
  let temp: Tarray = [];
  let k = 0;
  for (let i = 0; i < newarray.length; i++) {
    const current = newarray[i];
    let isduplicate = false;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === current) {
        isduplicate = true;
        break;
      }
    }
    if (!isduplicate) {
      temp[k] = current;
      k++;
    }
  }
  return temp;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  let total = products.reduce((acc, current) => {
    const totalWithoutDiscount = current.price * current.quantity;
    const totaldiscount = current.discount
      ? (current.discount * totalWithoutDiscount) / 100
      : 0;
    return acc + (totalWithoutDiscount - totaldiscount);
  }, 0);

  return total;
};
