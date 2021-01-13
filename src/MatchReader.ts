import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'
import { MatchData } from './MatchData'
import { CsvFileReader } from './CsvFileReader'

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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