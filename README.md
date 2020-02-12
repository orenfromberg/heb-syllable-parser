# heb-syllable-parser

[![Actions Status](https://github.com/orenfromberg/heb-syllable-parser/workflows/Node.js%20CI/badge.svg)](https://github.com/orenfromberg/heb-syllable-parser/actions)

This module exports a function called `syllablize` that will turn hebrew text into syllables. 

For example, calling `syllablize` on the text יְרוּשָׁלַיִם will give an array containing:
| 0 | 1  | 2 | 3 | 4  |
|---|----|---|---|----|
| יְ | רוּ | שָׁ | לַ | יִם |
