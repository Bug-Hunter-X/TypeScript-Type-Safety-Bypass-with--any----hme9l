function greet(person: string): string {
  return `Hello, ${person}!`;
}

function processData(data: any[]): void {
  data.forEach(item => {
    if (typeof item === 'string') {
      console.log(greet(item));
    } else {
      console.log('Invalid data type');
    }
  });
}

const data = ["John", 123, "Jane", true];
processData(data);