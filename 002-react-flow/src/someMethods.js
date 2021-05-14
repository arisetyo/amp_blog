// @flow

/**
 *
 * Examples of method written using Flow's static typing
 *
 */

function multiply(n1: number, n2: number): number {
  return n1 * n2;
}

function retStr(n: any): string {
  return '123';
}

function retBool(): boolean {
  return false;
}

const retBool2 = (): boolean => {
  return true;
}

const square = (n: number): number => {
  return n * n;
}

function foo(x: ?number): any {
  if (x) {
    return x;
  }
  return "default string";
}

export {
  multiply,
  retStr,
  retBool,
  retBool2,
  square,
  foo
};