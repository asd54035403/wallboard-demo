# Wallboard Demo

本專案是一個以 React 製作的客服監控與報表嘗試Demo，  
適合展示客服中心即時監控、專員狀態、佇列、Trunk、統計圖表等功能。  
所有資料皆為假資料（mock data），無需後端即可直接體驗完整流程。

## 快速開始

```bash
npm install
npm start
```

## 部署

本專案可直接部署於 Netlify、Vercel 等靜態網站服務。  
如需支援 SPA 路由，請確認 `public/_redirects` 檔案內容如下：

```
/*    /index.html   200
```

---

> 本專案僅供展示用途，所有資料皆為前端假資料，無需後端伺服器