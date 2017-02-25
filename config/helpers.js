/** Created by CUIJA on 02-14-2017.*/
import * as  path from "path";

const _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}


export {
  root
}