interface Vihecle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

const printVehicle = ({name, year, broken}: Vihecle): void => {
  console.log(`Name: ${name}, Year: ${year}, Broken: ${broken}`)
}

printVehicle(oldCivic);
 