import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzer/WinsAnalysis'
import { Summary } from './Summary'

// Create an object that satisties the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'), 
  new ConsoleReport()
)

summary.buildAndPrintReport(matchReader.matches);
