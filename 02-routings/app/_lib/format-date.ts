
export function sayingHello(name:string) : string {
  getcurrentdate();
  return ` Hello, ${name}! Welcome to the Dashboard Page. `;
}

export function getcurrentdate() : string {
  const currentDate = new Date();
  const date = currentDate.toDateString();
  return  `${name } is using this at ${date}`
}

console.log(sayingHello('upendra'));
