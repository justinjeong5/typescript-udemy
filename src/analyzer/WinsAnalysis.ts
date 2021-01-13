import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from '../MatchResult'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  
  run(matches: MatchData[]): string {
    let wins = 0;
    matches.forEach(match => {
      if((match.homeTeam === this.team && match.winner === MatchResult.HomeWin)
        || (match.awayTeam === this.team && match.winner === MatchResult.AwayWin)) {
        wins++;
      }
    }) 
    return `Team ${this.team} won ${wins} games`;
  }
}