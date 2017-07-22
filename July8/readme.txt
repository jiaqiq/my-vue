
1.forEach(function(val, ind, arr) {
	
}, thisArg)

2.Math.max.apply(null, []);

3. function sortArr() {
	return a - b;
}

var arr1 = [1, 3, 2];

arr1.sort(sortArr);

4.push() 后添加， 返回新长度
  pop()  后移除， 返回移除项
  unshift() 前添加  返回新长度
  shift() 前移除   返回移除项

5. es5 数组的5个迭代方法 每个方法2个参数，第一函数，第二，影响this 的值，传入的方法中会接收3个参数，1数组项的值，2,索引，3，数组本身

 var arr = [1, 2, 3, 4, 5, 6, 'a', 'b', true, false];

        var every1 = arr.every(function(item, index, array) {
        	return (item > 2);
        })
          var some1 = arr.some(function(item, index, array) {
        	return (item > 2);
        })  
          var filter1 = arr.filter(function(item, index, array) {
        	return (typeof item == "string");
        })  
          var map1 = arr.map(function(item, index, array) {
        	return (item * 2);
        }) 
          var forEach1 = arr.forEach(function(item, index, array) {
        	 // console.log(item)
        })
        console.log(every1)
        console.log(some1)
        console.log(filter1)
        console.log(map1)

