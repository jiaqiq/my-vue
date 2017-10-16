# my-vue

this is my vue

jdk  环境配置

新建：  JAVA_HOME是  jdk安装路径  如：E:\jdk1.7 

path 是  ;%JAVA_HOME%\bin;

CLASS_PATH

变量值：.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar

测试java环境是否配置成功

win+R  cmd  java -version


jdk1.7解压是已经安装好的

jdk需要从网上下载

关于http://mint-ui.github.io/#!/zh-cn 通过chrome无法打开的问题

1.通过C:\Windows\System32\drivers\etc 找到hosts

2.http://blog.csdn.net/comhaqs/article/details/52698766 参考

3.cmd中输入nslookup mint-ui.github.io 8.8.8.8
得到  Addresses:2a04:4e42:11::403 (这个好像是变动的)
      Aliases:mint-ui.github.io 
      右侧小手机示例：
      nslookup elemefe.github.io 8.8.8.8
      非权威应答:
      名称:    sni.github.map.fastly.net
      Addresses:  2a04:4e42:11::403
                151.101.77.147
      Aliases:  elemefe.github.io

4.修改 hosts 在最后加上2a04:4e42:11::403   mint-ui.github.io 保存

5.hosts保存问题 http://www.ittribalwo.com/article/1631.html 参考

6.这样就可以打开了

与vue有关的UI框架
1.element-ui   http://element.eleme.io/#/zh-CN/
2.iView        https://www.iviewui.com/

vue 的 blocks 和 items 的双重循环显示的图标显示的问题
1.图标循环显示方式一
<el-col :span="3">
   <div :class="circleClassArr[index1]" class="circle">
       <i :class="iconClassArr[index1]"></i>
   </div>
</el-col>