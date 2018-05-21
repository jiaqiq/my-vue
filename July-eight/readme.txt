
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
		
6.模糊查询 回显需要中文  由于模糊查询没有已存在的下拉数据，需要实时查询搜索，所以回显让其显示中文， 然后在修改提交的时候 再判断是id还是中文，提交id就行了（例如：主次要客户经理）

7.遍历树形结构的三级for循环时，如果第二级里面没有(children)第三级的情况，把没有第三极(children)的第二级数据遍历存储下来，第三极还是正常遍历，最后把第二级和第三级的合并到一块给树。不管几级遍历的都是最后一级。

8.双重for循环容易出现到只循环最后一个后面把前面覆盖的问题，把声明放到外边.

9.element-ui的默认样式无法修改的问题,可以在assets 里面建立个reset.css用来重置当页样式加了scoped难以修改的问题.

