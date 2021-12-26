<div align="center">

# NANO —— 动漫圣地巡礼地点全收录

<!-- markdownlint-disable-next-line MD036 -->
_✨ Author: Saltro | NagisaCo | wzkMaster | kinokosi ✨_
</div>

<p align="center">
  <a href="https://github.com/Saltro/nano">
    <img src="https://img.shields.io/badge/Github-nano-brightgreen?logo=github" alt="frontend_repository">
  </a>
  <a href="https://github.com/NagisaCo/nano_backend">
    <img src="https://img.shields.io/badge/Github-nano_backend-brightgreen?logo=github" alt="backend_repository">
  </a>
  <br />
  <img src="https://img.shields.io/github/workflow/status/Saltro/nano/Nano-frontend%20CI" alt="CI">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/Saltro/nano">
  <a href="stargazers">
    <img src="https://img.shields.io/github/stars/NagisaCo/nano_backend?color=yellow&label=Github%20Stars" alt="star">
  </a>
</p>
<!-- markdownlint-enable MD033 -->

**注意：本项目未添加任何开源协议，即作者保留一切版权和其权利。开源该代码仅用于学习参考，在未征得作者同意之前不得进行修改、分发、商用、非商用。**

## 简介

NANO -「圣地巡礼」是一个展示二次元圣地巡礼相关旅游资讯的内容型平台。提供了动漫作品的相关信息以及圣地，并记录了各个地点的地址、照片等详细信息。

![首页展示](https://s4.ax1x.com/2021/12/25/Td8KjP.png)

### 作品

网站提供了动漫的筛选和搜索功能，方便用户快速找到感兴趣的动漫信息。

![作品筛选](https://s4.ax1x.com/2021/12/26/TdGNIe.png)

### 地点

对于圣地信息，网站提供了大量实景对比图和精确的坐标，并在地图上进行了标识，方便用户按图索骥。

![地点列表](https://s4.ax1x.com/2021/12/26/TdGtaD.png)

### 用户

用户注册登录后可以对感兴趣的动漫和地点进行收藏。

![用户收藏](https://s4.ax1x.com/2021/12/26/TdGYVO.md.png)

## 项目介绍

本项目由团队共同完成，从需求提出到实现，共计用时约一个月。

### 产品设计

在项目开始之前，团队成员通过线下讨论，选定项目主题——亚文化圈的作品检索与展示。

经过接近一周的现有产品对比与分析，我们确定了目前国内市场上竞品较少且在特地人群中需求较为突出的产品目标，即将「作品信息展示」与「圣地巡礼」相结合，并结合项目的实际情况，确定了产品的设计。

- *圣地巡礼*

  *圣地巡礼是指 ACGN 爱好者根据自己喜欢的作品，造访故事背景区域，该场所则被称为圣地。这个名词是从朝圣而来的，原先是指宗教上寻觅灵性意义的过程。*

### UI 设计

UI 由团队成员 *kinokosi* 使用 `Figma` 软件，结合作品主题，选用粉色作为主色调，并开始 UI 设计。

![UI 设计](https://s4.ax1x.com/2021/12/26/TdYzVK.png)

### 前端

- 部署地址：
- 仓库地址：[Saltro/nano](https://github.com/Saltro/nano)

前端由团队共同开发，主要使用 `React` 框架进行开发，自行搭建项目并完成项目格式规范配置。

![前端仓库](https://s4.ax1x.com/2021/12/26/TdYvb6.png)

### 后端

- API 地址：[api.nano.nagico.cn](https://api.nano.nagico.cn)
- 静态资源服务器：[media.nano.nagico.cn](https://media.nano.nagico.cn)
- 后台管理界面：[admin.nano.nagico.cn](https://api.nano.nagico.cn/admin)
- 项目地址：[NagisaCo/nano_backend](https://github.com/NagisaCo/nano_backend)

后端由团队成员 *NagisaCo* 开发，使用 `Django` 与 `DRF` 框架，运用 `MySQL 数据库`、`Redis 缓存`、`Celery 异步任务`、`FastDFS 分布式存储`、`腾讯云 sms 短信接口`、`simpleui 后台管理`，接口基本符合 `REST` 规范，使用 `jwt` 鉴权，相关项目可 `Docker` 一键部署。

![后端仓库](https://s4.ax1x.com/2021/12/26/TdYjDx.png)

### 部署

本项目采用前后端分离部署：

- 前端使用 `Github Actions` 与 `Docker` 实现了 CI/CD  
  ![Github Actions](https://s4.ax1x.com/2021/12/26/TdtAKI.png)
- 后端使用 `docker-compose` 实现多容器同时部署与管理  
  ![docker-compose](https://s4.ax1x.com/2021/12/26/TdtErt.png)

## 项目构建与部署

### 本地运行

- 依赖安装

  ```bash
  $ npm install
  ```

- 项目启动
  
  ```bash
  $ npm run dev
  ```

- 项目构建

    ```bash
    $ npm run build
    ```

### Docker 容器化部署

- 依赖安装

  ```shell
  $ npm ci
  ```

- 项目构建

  ```shell
  $ npm run build --if-present
  ```

- 镜像生成

  ```shell
  $ docker build -t nano_frontend:latest .
  ```

- 项目部署

  *请将 EXPOSE_PORT 替换为本地暴露的端口*

  ```shell
  $ docker run -d --name nano_frontend -p EXPOSE_PORT:80 nano_frontend:latest
  ```

## 项目目录结构

.
├── Dockerfile
├── README.md
├── commitlint.config.js
├── nginx.conf
├── package-lock.json
├── package.json
├── postcss.config.js
├── src  // 项目源码
        ├──assets  // 静态资源
        ├──components  // 自定义组件
        ├──context  // 状态管理
        ├──layouts  // 页面布局
        ├──request  // 后端请求
        ├──typings  // ts类型文件
        ├──utils
        ├──views  // 页面容器
├── template 
        ├──index.html
├── tsconfig.json
├── webpack.config.js

