import fs from 'fs';
import path from 'path';
import parse from './parser.js';

export default (filepath1, filepath2) => {
    const extension1 = path.extname(filepath1).slice(1);
    const extension2 = path.extname(filepath2).slice(1);
  
    const validPath1 = path.resolve(process.cwd(), filepath1);
    const validPath2 = path.resolve(process.cwd(), filepath2);
  
    const data1 = fs.readFileSync(`${validPath1}`, 'utf-8');
    const data2 = fs.readFileSync(`${validPath2}`, 'utf-8');
  
    const object1 = parse(data1, extension1);
    const object2 = parse(data2, extension2);

    return {object1, object2};
  };