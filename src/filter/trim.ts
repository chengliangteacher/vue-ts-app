/* 
    @description  去除空格
    @autor        cheng liang
    @create       2020-09-30 09:20"
    @params       type 1-所有空格 2-前后空格 3-前空格 4-后空格
    @return       
*/
export default function trim(value: string, trim: number) {
    switch (trim) {
    case 1:
        return value.replace(/\s+/g, "");
    case 2:
        return value.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
        return value.replace(/(^\s*)/g, "");
    case 4:
        return value.replace(/(\s*$)/g, "");
    default:
        return value;
    }
}
