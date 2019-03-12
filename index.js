#!/usr/bin/env node
const program = require('commander')

const version = require('./package.json').version
const Gzipper = require('./Gzipper')

program
  .version(version)
  .usage('[options] <path> [outputPath]')
  .option('-v, --verbose', 'detailed level of logs')
  .option(
    '-gl, --gzip-level',
    'gzip compression level 0 (no compression) - 9 (best compression)'
  )
  .option(
    '-gm, --gzip-memory-level',
    'amount of memory which will be allocated for compression 1 (minimum memory) - 9 (maximum memory)'
  )
  .option(
    '-gs, --gzip-strategy',
    'compression strategy 1 (filtered) - 2 (huffman only) - 3 (RLE) - 4 (fixed)'
  )
  .parse(process.argv)

const [target, outputPath] = program.args
new Gzipper(target, program).compress()
