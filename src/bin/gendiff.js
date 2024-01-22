#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .argument('[filepath1]')
  .argument('[filepath2]')
  .parse(process.argv);

const options = program.opts();

if (!program.args.length) program.help();