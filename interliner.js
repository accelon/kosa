import { readTextLines,nodefs } from "./nodebundle.cjs";
await nodefs;
const sanskrit=readTextLines('off/sanskrit.txt');
const xuanzhang=readTextLines('off/xuanzhang.txt');
const paramartha=readTextLines('off/paramartha.txt');
const cyan='\x1b[36m%s\x1b[0m',yellow='\x1b[33m%s\x1b[0m';
for (let i=100;i<110;i++) {
    console.log(sanskrit[i])
    console.log(cyan,xuanzhang[i])
    console.log(yellow,paramartha[i])
    console.log('')
}