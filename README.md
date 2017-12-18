## 介绍

根据youtube视频学习Vue，视频地址： https://www.youtube.com/watch?v=JEn16aQoowE

项目分为：`client_labs`提供前台页面展示和`server_labs`提供后端api服务。


## 安装

首先获取到源代码，使用如下命令：
```
git clone https://github.com/curder/laravel-chat-spa-damo.git
```

### server_cabs

```
cd server_cabs
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlte
php artisan migrate
```

获取assess_token和client_id
```
php artisan passport:install
```
将获取的到**Client Id**和**Laravel Password Grant Client**的值填写到：`client_labs/src/env.js`中，以保证需要验证的api请求都能正常生成Authorization值。

**使用tinker注册一个系统用户**

```
factory(App\User::class)->create();
```
默认的密码是：`secret`

**启动本地服务**

```
php artisan serve
```


### client_labs

```
cd client_labs && npm i && npm run dev
```

写入`clientId`和`clientSecret`配置
```

```

> 执行完上面的命令后，应该会在本地开启8080端口的前台预览。


## 相关功能

用户注册、退出登录，用户列表、会话展示等。
