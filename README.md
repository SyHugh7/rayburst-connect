# Rayburst Connect (Chromium) — 本地回退补丁版

Rayburst 桌面下载器自带的 Chromium 扩展（manifest 2.1.8），做了一处小改动，用于修复某些下载被 Rayburst 以 `fallback / unreachable` 拒绝、确认窗口不弹出的问题。

## 改动

只改了 `background.js` 的 `submitToDesktopApi`：

1. 仍然先带 `finalUrl` 请求 Rayburst；
2. 如果 Rayburst 返回 `{"action":"fallback"}`，且 `finalUrl` 与原始 `url` 不同，则去掉 `finalUrl`，用原始 URL 再请求一次；
3. 回退成功时在诊断日志里记 `urlFallback: "original"`。

## 安装

1. 打开 `chrome://extensions`，开启“开发者模式”；
2. “加载已解压的扩展程序”，选择本目录；
3. 如果使用手动加载的扩展，需要配合 `RayburstFix.bat` 注册 native messaging 并放行扩展 ID。

## 说明

- 扩展版权归 Rayburst / aninsomniacy 所有，本仓库仅为本地兼容性补丁分发。
- 本目录包含扩展运行所需的全部文件，不含任何用户数据或密钥。
