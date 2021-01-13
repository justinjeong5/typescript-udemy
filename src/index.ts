import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n')
.map((row: string): string[] => row.split(','))

// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUinitedWins = 0;

matches.forEach(match=>{
  if((match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    || (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
    manUinitedWins++;
  }
}) 

console.log(`Man United won ${manUinitedWins} games`)
