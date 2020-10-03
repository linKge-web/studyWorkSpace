////////////////// 对象解构赋值 ///////////////////
// key名字必须是一一对应
// let obj = {
//   a: 1,
//   b: 2
// }
// let {a,b,c} = obj;
// console.log(a,b,c);  //1 2 undefined

////////////////// 数组解构赋值 ///////////////////
// 顺序必须是一一对应
// let ary = [1,2,3,4];
// let [a,b,c,d] = ary;
// console.log(a,b,c,d); //1 2 3 4

// 面试题：交换ab的数值
// let a = 1,b = 2;
// [b,a] = [a,b];
// console.log(a,b);

// let a = 1,
//     b = 2;
// let ary = [a,b];
// console.log(ary);  //[1, 2]
// [a,b] = ary;
// console.log(a,b);  //1,2

////////////////// 字符串解构赋值 ///////////////////
// let str = 'hello world';
// let [a,b] = str;
// console.log(a,b);  //h,e
//但是数字不行，因为数字本身就只是一个字符串

////////////////// 展开运算符 数组展开 ///////////////////
// let arr = [1,2,3,4];
// let arry1 = ['a','b','c',...arr,'d'];
// console.log(arry1);

// //剩余参数问题
// let arr3 = [1,2,3,4,5,6];
// let [a,...b] = arr3;
// console.log(a,b);  //剩余都赋值给b

////////////////// 展开运算符 对象展开 ///////////////////
// 如果是当个赋值，名字必须一一对应，否则会是undefined
// let obj1 = {
//   name: 'ken',
//   age: 18
// };
// let obj2 = {
//   ...obj1,
//   a: 1,
//   b: 2,
//   c: 3
// }
// console.log(obj2);
// let {a,...b} = obj2;
// console.log((a));  ///1
// console.log(b);  //{name: "ken", age: 18, b: 2, c: 3}

// let {aa,...bb} = obj2;
// console.log(aa,bb);  //undefined {name: "ken", age: 18, a: 1, b: 2, c: 3}

////////////////// set方法 ///////////////////

// set方法可以去重,保留第一次出现的
// let arr = [1,2,2,3,1,5,6,4,3];
// let set = new Set(arr);
// console.log(set);

// //这样就可以转成没哟重复的数组了
// arr = [...set];
// console.log(arr);  //[1, 2, 3, 5, 6, 4]

// 关于set的一些方法
// let arr = [1,2,3,4,1,3,5,2,"c"];
// let data = new Set(arr);

// // add方法  =
// console.log(data.add('new'));
// //返回的是set本身 所以可以反复的add()
// data.add(11).add(22).add(33);
// console.log(data);

// // delete方法（） 返回的是true或者false，是否删除成功
// console.log(data.delete('c'));
// console.log(data.delete('d'));
// console.log(data);

// //has()方法。查看是否存在某个元素  返回的是boolean值
// console.log(data.has(11));

// //size，类似map的length，查看长度
// console.log(data.size);


////////////////// map方法 ///////////////////
// map一些方法
// clear()、delete()、get()、has()、set()
// let arr = [
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   ['d', 4],
// ];
// let map = new Map(arr);
// console.log(map);

//clear清空map对象
// console.log(map.clear());
// console.log(map);

// delete(key)方法 返回true或者false
// console.log(map.delete('a'));

// // get(key);
// console.log(map.get('b'));

// //has(kay) 方法  查看是否有某一个元素
// console.log(map.has('b'));

// //set() 方法  添加一个  返回值也是对象本身
// console.log(map.set('e',4));
// map.set('f',5,'g',6).set('h',7)
// console.log(map);


////////////////// 箭头函数 ///////////////////

// let fn = (num1,num2) => num1 * num2;

// console.log(fn(2,3));

// 箭头函数必须有返回值


////////////////// 箭头函数 和普通函数区别 的不定参 ///////////////////

// let fun = function() {
//   console.log(arguments);
// }

// fun(1,2,3,4)

// // 箭头函数会报错
// // let fn = () => {
// //   console.log(arguments);  //arguments is not defined
// // }
// // 可以用展开运算符解决这个问题
// let fn = (a,b,...arg) => {
//   console.log(a,b);  //1 2
//   console.log(arg);
// }

// fn(1,2,3,4)


////////////////// 箭头函数和普通函数的区别，this///////////////

// document.onclick = () => {
//   console.log(this);  //window
// }

// document.onclick = function() {
//   // function fn() {
//   //   console.log(this);  //正常的话就是指向window的
//   // }
//   let fn = () => {
//     console.log(this);  //document
//   }
//   fn();
// }

// let fn1 ;
// let fn2 = function() {
//   console.log(this); //window
//   fn1 = () => {
//     console.log(this);  //this
//   }
// }
// fn2();
// fn1();

// let fn3 = (a = 10,b = 20) => {
//   console.log(a + b);
// }
// fn3();  //30
/**
 * 箭头函数本身没有this
 *  箭头函数中定义的this 就是所在的作用域的this
 * 
 * 
 */

 ////////////////// 数组新增 ///////////////
//  类数组转成数组

// 数组扁平化方法
// falt
// let arr = [
//   1,
//   [2,3,4,
//     [3]
//   ]
// ] 
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

// 只需要提取key
let ary = [
  ['小明',18],
  ['小文',22]
];

let newArry = ary.flatMap((item) => {
  item = item.filter((item,index) => {
    return index == 0;
  })
  return item;
})
console.log(newArry); //["小明", "小文"]