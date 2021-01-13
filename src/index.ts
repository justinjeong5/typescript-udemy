import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'

const reader = new MatchReader('football.csv');
reader.read();

let manUinitedWins = 0;

reader.data.forEach(match=>{
  if((match.homeTeam === 'Man United' && match.winner === MatchResult.HomeWin)
    || (match.awayTeam === 'Man United' && match.winner === MatchResult.AwayWin)) {
    manUinitedWins++;
  }
}) 

console.table(reader.data)
console.log(`Man United won ${manUinitedWins} games`)  
