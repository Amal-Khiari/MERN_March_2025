import chalk from 'chalk';
import {
  readableFormat,
  relativeFormat,
  longFormat,
  shortFormat
} from './utils/formatDate.js';

const testDates = [
  '2023-01-01T12:34:56Z',
  '2022-08-15T08:20:00Z',
  '2020-06-10T15:45:00Z',
  '2024-12-31T23:59:59Z',
  '2019-03-25T10:00:00Z'
];

testDates.forEach(date => {
  console.log(chalk.cyan(`Original ISO Date: ${date}`));
  console.log(chalk.green(`Readable: ${readableFormat(date)}`));
  console.log(chalk.yellow(`Relative: ${relativeFormat(date)}`));
  console.log(chalk.magenta(`Long Format: ${longFormat(date)}`));
  console.log(chalk.blue(`Short Format: ${shortFormat(date)}`));
  console.log(chalk.gray('------------------------------------'));
});