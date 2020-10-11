# 一些 deno 的工作脚本

## 移除所有的 bak.json

莫名其妙的会生成一些 bak.json 文件不知道是不是 uni app 导致的。这些文件还会导致无法生成预览二维码

`deno run --allow-read --allow-write --unstable .\src\微信小程序开发工具\删除bak_json.ts`
