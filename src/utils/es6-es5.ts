import {parse}  from '@babel/parser';
import * as babel from "@babel/core";
import * as fs from 'fs';
import * as path from 'path';

const origin  =fs.readFileSync('src/es6_test.ts').toString();

const ast =  parse(origin,{sourceType:'module'});
const result = babel.transformFromAstSync(ast,origin,{
    presets:['@babel/preset-env']
})
// 路径都是基于当前项目的不是文件夹，这里不是 ../ 而是直接src就可以了
fs.writeFileSync('dist/transform_es5.js',result?.code?.toString() || '');
