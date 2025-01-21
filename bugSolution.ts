function greet(person: string): string {
  return `Hello, ${person}!`;
}

function processData<T extends string | number>(data: T[]): void {
  data.forEach(item => {
    if (typeof item === 'string') {
      console.log(greet(item));
    } else if (typeof item === 'number') {
      console.log(`Number: ${item}`);
    } else {
      console.log('Invalid data type');
    }
  });
}

const data = ["John", 123, "Jane", 456];
processData(data); 