import fs from 'fs'
import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'

type MatchData = {
  date: Date, 
  homeTeam: string, 
  awayTeam:string, 
  homeScore: number, 
  awayScore: number, 
  winner: MatchResult, 
  referee:string
}

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map((row: string[]): MatchData => {
      return {
        date: dateStringToDate(row[0]),
        homeTeam: row[1], 
        awayTeam: row[2],
        homeScore: parseInt(row[3]),
        awayScore: parseInt(row[4]),
        winner: row[5] as MatchResult,  // type assertion
        referee: row[6]
      };
    })
  }
}