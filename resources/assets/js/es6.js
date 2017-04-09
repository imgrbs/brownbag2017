//var const let

var a = 5 //gobal scope
a = 'Name'  //no error

if(true) {
  var a = 7
}
console.log(a) //in ocnsole will show 7

const a = 5; //non gobal scope
a = 'Name' //will show error

if(true) {
  const a = 7
}
console.log(a) //will show error

let a = 5; //non gobal scope
a = 'Name' //no error

if(true) {
  let a = 7
}
console.log(a) //will show error

function f_name (parameter) {
  return parameter;
}

var f_name = function (parameter) {
  return parameter;
}

const f_name = (parameter) => {
  return parameter;
}

const f_name = parameter => console.log(parameter);

const obj = {
  id: 58130500106,
  name: 'Kittipong'
}

const id = obj.id
const name = obj.name

const obj = {
  id: 58130500106,
  name: 'Kittipong'
}

const { id, name } = obj


const a = ['John', 'Doe', 5]
const b = ['Foo', 'Bar', 7]

//want an array with ['John', 'Doe', 5, 'Foo', 'Bar', 7]

for(let i=0;i<a.length;i++){
  b.push(a[i]);
}
console.log(b) //will display ['John', 'Doe', 5, 'Foo', 'Bar', 7]

b = [...b, ...a]
console.log(b) //will display ['John', 'Doe', 5, 'Foo', 'Bar', 7]

//a.js
module.exports = {
  a: 'Foo',
  b: 'Bar'
}

export const h = {
  a: 'Foo',
  b: 'Bar'
}

var a = require('./a')

//a.js
const h = {
  a: 'Foo',
  b: 'Bar'
}
export default h

const h = {
  a: 'Foo',
  b: 'Bar'
}
const i = {
  a: 'Jonh',
  b: 'Doe'
}

export {a, b}

import h from './a'
import { h, i } from './a'

var f_name = function (parameter) {
  if(typeof parameter === 'undefined'){
    parameter = 0
  }
  return paramter
}

const f_name = (parameter = 0) => {
  return parameter;
}