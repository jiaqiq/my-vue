
1.forEach(function(val, ind, arr) {
	
}, thisArg)

2.Math.max.apply(null, []);

3. function sortArr() {
	return a - b;
}

var arr1 = [1, 3, 2];

arr1.sort(sortArr);

4.push() ����ӣ� �����³���
  pop()  ���Ƴ��� �����Ƴ���
  unshift() ǰ���  �����³���
  shift() ǰ�Ƴ�   �����Ƴ���

5. es5 �����5���������� ÿ������2����������һ�������ڶ���Ӱ��this ��ֵ������ķ����л����3��������1�������ֵ��2,������3�����鱾��

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
		
6.ģ����ѯ ������Ҫ����  ����ģ����ѯû���Ѵ��ڵ��������ݣ���Ҫʵʱ��ѯ���������Ի���������ʾ���ģ� Ȼ�����޸��ύ��ʱ�� ���ж���id�������ģ��ύid�����ˣ����磺����Ҫ�ͻ�����

7.�������νṹ������forѭ��ʱ������ڶ�������û��(children)���������������û�е�����(children)�ĵڶ������ݱ����洢�����������������������������ѵڶ����͵������ĺϲ���һ����������ܼ��������Ķ������һ����

8.˫��forѭ�����׳��ֵ�ֻѭ�����һ�������ǰ�渲�ǵ����⣬�������ŵ����.

9.element-ui��Ĭ����ʽ�޷��޸ĵ�����,������assets ���潨����reset.css�������õ�ҳ��ʽ����scoped�����޸ĵ�����.

