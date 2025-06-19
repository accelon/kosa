# 俱舍論 平行語料

## prerequisite
node 或 bun

## 說明

* raw/*.docx 原始文件  
* raw/kosa.txt   split.js 需要的文件
* off/sanskrit.txt 梵文本
* off/paramartha.txt 真諦譯本
* off/xuanzhang.txt 玄奘譯本

## 重新生成梵文及兩種譯本

    node split

## 檢查

    node interliner

展示如何快速讀取不同譯本的逐行文字

## todo

1. 切分成較小的 md
1. 目錄標注
1. 送到 模型建立逐詞對照