const profile = {
  hisName: 'justin',
  birthYear: 1991,
  age: 30,
  coords:{
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// desctructuring annotation
const { age }: { age: number } = profile;
const { hisName, birthYear }: { hisName: string; birthYear: number } = profile;
const { 
  coords: {lat, lng} 
}: { coords: {lat: number; lng: number} } = profile;
