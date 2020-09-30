//格式化处理字符串
/* 
    @description  格式化处理字符串
    @autor        cheng liang
    @create       2020-09-30 11:25"
    @params       
    @return       
*/
export default function formatText(str: string, size: number, delimiter: any) {
    var _size = size || 3; var _delimiter = delimiter || ",";
    var regText = "\\B(?=(\\w{" + _size + "})+(?!\\w))";
    var reg = new RegExp(regText, "g");
    return str.replace(reg, _delimiter);
}
