# my-vue

this is my vue

jdk  ��������

�½���  JAVA_HOME��  jdk��װ·��  �磺E:\jdk1.7 

path ��  ;%JAVA_HOME%\bin;

CLASS_PATH

����ֵ��.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar

����java�����Ƿ����óɹ�

win+R  cmd  java -version


jdk1.7��ѹ���Ѿ���װ�õ�

jdk��Ҫ����������

����http://mint-ui.github.io/#!/zh-cn ͨ��chrome�޷��򿪵�����

1.ͨ��C:\Windows\System32\drivers\etc �ҵ�hosts

2.http://blog.csdn.net/comhaqs/article/details/52698766 �ο�

3.cmd������nslookup mint-ui.github.io 8.8.8.8
�õ�  Addresses:2a04:4e42:11::403 (��������Ǳ䶯��)
      Aliases:mint-ui.github.io 
      �Ҳ�С�ֻ�ʾ����
      nslookup elemefe.github.io 8.8.8.8
      ��Ȩ��Ӧ��:
      ����:    sni.github.map.fastly.net
      Addresses:  2a04:4e42:11::403
                151.101.77.147
      Aliases:  elemefe.github.io

4.�޸� hosts ��������2a04:4e42:11::403   mint-ui.github.io ����

5.hosts�������� http://www.ittribalwo.com/article/1631.html �ο�

6.�����Ϳ��Դ���

��vue�йص�UI���
1.element-ui   http://element.eleme.io/#/zh-CN/
2.iView        https://www.iviewui.com/

vue �� blocks �� items ��˫��ѭ����ʾ��ͼ����ʾ������
1.ͼ��ѭ����ʾ��ʽһ
<el-col :span="3">
   <div :class="circleClassArr[index1]" class="circle">
       <i :class="iconClassArr[index1]"></i>
   </div>
</el-col>