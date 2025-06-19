/* 將 ABHIDHARMAKOŚA interliner .docx 存成 raw/kosa.txt */
/* 切分成 sankrit.txt , xuanzhang.txt , paramartha.txt 三個文件 */
import {nodefs,readTextContent,writeChanged} from './nodebundle.cjs'
await nodefs
const outdir='off/';
const lines=readTextContent('raw/kosa.txt')
.replace(/(.)【真】/g,'$1\n【真】') //保證在開頭
.replace(/(.)【玄】/g,'$1\n【玄】')
.replace(/\n-/g,'')//merge sanskrit
.split('\n')

const paramartha=[], xuanzhang=[], sanskrit=[];
let out=sanskrit;

const segment=[];
const emit=()=>{ //輸出一行到目標文件
    out.push(segment.join('$$').trim())
    segment.length=0;
}

const splitter=()=>{
    for (let i=0;i<lines.length;i++){
        if (lines[i].startsWith('【真】')) {
            if (out==xuanzhang) {
                emit();
                out=sanskrit;//add mssing sanskirt segment
                segment.push('missing');
            }
            emit();
            out=paramartha;
        } else if (lines[i].startsWith('【玄】')){
            emit();
            out=xuanzhang;
        } else {
            if(out!==sanskrit) {
                if (lines[i].match(/\d\d\d/)||lines[i].match(/[a-y]/)) {
                    emit();
                    out=sanskrit;
                }
            }
        }
        segment.push(lines[i].replace(/^【[真玄]】/,'').replace(/\n/g,'$$'));
    }
    emit();

    if (sanskrit.length!=xuanzhang.length) console.log('xuanzuang line miss match')
    if (sanskrit.length!=paramartha.length) console.log('paramartha line miss match')
    writeChanged(outdir+'sanskrit.txt',sanskrit.join('\n'),true)
    writeChanged(outdir+'xuanzhang.txt',xuanzhang.join('\n'),true)
    writeChanged(outdir+'paramartha.txt',paramartha.join('\n'),true)
}

splitter();