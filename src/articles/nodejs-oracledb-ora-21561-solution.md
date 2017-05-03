```metadata
{
  "title": "Node.js oracledb \"ORA-21561 - OID generation failed\" 解决方案",
  "date": "2016-01-12 12:55:31",
  "tags": ["Node.js","Linux"]
}
```



## Background
千辛万苦在虚拟机的`CentOS 6`下编译好`oracledb`,运行时报错
"ORA-21561 - OID generation failed"

## Solution
原因是虚拟机下的`CentOS`连接到oracle服务器的时候,本地没有有效的连接名称(机器名)
[Origin Post](http://chaos667.tumblr.com/post/20006357466/ora-21561-and-oracle-instant-client-112)

需要在`hosts`列表中添加本地的机器名.
假设我local机器名为`centos-vm`

```sh
sudo gedit /etc/hosts   (vi也行)
```

查找`127.0.0.1` 在对应的hostname后面添加`centos-vm`,即本机器名


![修改CentOS hosts文件](https://img.alicdn.com/tfscom/TB17d0.LpXXXXXpXpXXXXXXXXXX.png)

重启即可.