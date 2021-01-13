import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

// Create an object that satisties the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


let manUinitedWins = 0;

matchReader.matches.forEach(match=>{
  if((match.homeTeam === 'Man United' && match.winner === MatchResult.HomeWin)
    || (match.awayTeam === 'Man United' && match.winner === MatchResult.AwayWin)) {
    manUinitedWins++;
  }
}) 

console.table(matchReader.matches)
console.log(`Man United won ${manUinitedWins} games`)  
