# 1.HTTP 请求交互的基本过程

<pre>
                    >>>>>>>>>>>>>>>>>
        客户端（浏览器）              服务器
                    <<<<<<<<<<<<<<<<<
</pre>

- 1.1 浏览器向服务器发送的HTTP请求也叫请求报文。<br />请求报文有三部分组成：请求行、请求头、
请求体
- 1.2 服务器接受到请求后，处理请求，返回给客户端的响应又叫响应报文。<br />响应报文也有三部分组成：响应状态行、响应头、响应体
- 1.3 浏览器接收到响应体，解析响应体显示到页面。


# 2 请求报文
### 2.1 请求行  请求地址
        GET / 01.html
### 2.2 多个请求头
   - 请求头都是有两部分组成：key和value
   - Host：主机
   - Content-Type:请求体的内容类型 主要有两种固定格式 
        + application/x-www-form-urlencoded
        + application/json      
   - Accept：**text/html**,**application/xhtml+xml**,**application/xml**; 客户端可以接收的文件类型列表 

### 2.3 请求体
   - Get 一般没有请求体
   - Post 一般都有请求体
      + x-www-form-urlencoded格式：键值对参数，键名 = 键值，多个键值对之间用&连接（例：name=xiaoming&age=16）
      + json格式：JSON字符串参数（例：{"name":"xiaoming","age":16}）
  

# 3 响应报文
### 3.1 响应状态行：
- 响应状态码status，响应文本statusText，响应码和对应的文本是固定的
- 200 ok 请求成功
- 201 Created 已创建，成功请求并创建了新的资源
- 401 Unauthorized 未授权/请求要求用户的身份认证
- 404 Not-Found 服务器无法根据客户端的请求找到资源
- 500 Internal Server Error 服务器内部错误，无法完成请求

### 3.2 多个响应头
- Content-Type 响应体的内容类型
   + text/html; chartset=utf-8
   + text/json

### 3.3 响应体
html/css/js/json/图片



# 4 不同类型的请求及其作用
- GET ： 从服务器端读取数据
- POST ：从服务器端添加新数据
- PUT ： 更新服务器已经存在的数据
- DELETE : 删除服务器端的数据



# 5 API的分类
### 5.1 REST API ： restful
1. 发送请求进行增删改查哪种类型操作由请求方式来决定
2. 同一个请求路径可以进行多个操作
3. 请求方式会用放到GET/POST/PUT/DELETE

### 5.2 非REST API ： restless
1. 请求方式不决定请求的增删改查操作
2. 一个请求路径只对应一个操作
3. 一般只有GET/POST



#  请求参数
/posts/1 :  通过这种方式传递参数的形式叫：params  会直接返回某一资源本身

/posts?id=1 : query  实际上是对现有数据的过滤




# Ajax技术(Asynchronous JavaScript and XML)
1. Ajax请求也是一种http请求，是一种特殊的http请求
2. 由浏览器或者Ajax发起的请求对于服务器来说是没有区别的，这个区别主要体现在客户端
3. 浏览器本身的主要功能就是发起请求和接收响应，直接解析响应内容，显示到页面，伴随着网页的刷新的
4. Ajax通过Ajax引擎发起请求，对于Ajsx的响应数据只会被传递到监听函数中，监听函数会自带调用。不会对界面进行任何的操作。需要收到DOM。所以叫做局部更新
5. Ajax请求只有在XMLHttpRequest对象和fetch可以发送。别的都是非Ajax请求
XMLHttpRequest：JS内置对象，Ajax技术就是通过这个对象来实现的



# 同源策略
**浏览器**为了安全考虑，会拒绝接收非同源地址的响应结果。对于非同源的地址，服务器是会返回结果的，但是浏览器为了安全考虑拒绝接收。

### 同源
如果两个页面拥有相同的协议、域名、端口，那么这两个页面就属于同一个源的两个地址（路径可以不同）


```
//http默认端口80
   http://example.com/dir/01.html



   http://example.com/dir/02.html （同源）
   http://example.com:81/dir/01.html （非同源 端口不同）
   http://v1.example.com/dir/01.html   （非同源 域名不同）
   https://example.com/dir/01.html （非同源 协议不同）
```


### 解决方案
- 后端解决
CORS：跨域资源共享
实现CORS关键在于服务器，只要服务器实现CORS接口，就可以跨域通信。只需要在服务器端设置响应头         Access-Control-Allow-Origin:'*'

- JSONP：json width padding，是一种绕开同源策略限制的方式来实现的跨域，不属于ajax请求<br />对于script标签中的src属性，不受同源策略限制
```html
   <script>
      var fn1 = function(){}
   </script>
   <script src="http://url?callback=fn1"></script>
```
这个url需要返回的是js代码,url里可以使用fn；
相当于数据在后端，前端只是打印结果，不属于ajax请求