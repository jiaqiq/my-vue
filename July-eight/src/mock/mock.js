import Mock from 'mockjs'; //es6语法引入mock模块

export default Mock.mock('/api/personList', { //输出数据
  'tableData|100': [{
    'date': '@date()', //随机生成日期

    'name': '@name', //随机生成姓名

    'address': '@county(true)' //随机生成地址
  }]
});
