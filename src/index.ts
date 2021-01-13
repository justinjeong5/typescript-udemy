import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('football.csv');
reader.read();

// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUinitedWins = 0;

reader.data.forEach(match=>{
  if((match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    || (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
    manUinitedWins++;
  }
}) 

console.log(`Man United won ${manUinitedWins} games`)  
