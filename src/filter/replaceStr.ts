//ex:
//replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
//ecDo.replaceStr('18819322663',[3,5,3],0)
//result：188*****663
//ecDo.replaceStr('asdasdasdaa',[3,5,3],1)
//result：***asdas***
//ecDo.replaceStr('1asd88465asdwqe3',[5],0)
//result：*****8465asdwqe3
//ecDo.replaceStr('1asd88465asdwqe3',[5],1,'+')
//result："1asd88465as+++++"


/* 
    @description  字符替换*，隐藏手机号或者身份证号等
    @autor        cheng liang
    @create       2020-09-30 10:48"
    @params       regArr: 字符格式 type: 替换方式 ARepText: 替换文本
    @return       
*/
//字符串循环复制,count->次数
function repeatStr(str: string, count: number) {
    var text = "";
    for (var i = 0; i < count; i++) {
        text += str;
    }
    return text;
}

export default function replaceStr(str: string, regArr: number[], type: number, ARepText: string) {
    let regtext = "";
    let Reg: any = null;
    const replaceText: string = ARepText || "*";
    //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
    if (regArr.length === 3 && type === 0) {
        regtext = "(\\w{" + regArr[0] + "})\\w{" + regArr[1] + "}(\\w{" + regArr[2] + "})"
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, "$1" + replaceCount + "$2")
    }
    else if (regArr.length === 3 && type === 1) {
        regtext = "\\w{" + regArr[0] + "}(\\w{" + regArr[1] + "})\\w{" + regArr[2] + "}"
        Reg = new RegExp(regtext);
        var replaceCount1 = repeatStr(replaceText, regArr[0]);
        var replaceCount2 = repeatStr(replaceText, regArr[2]);
        return str.replace(Reg, replaceCount1 + "$1" + replaceCount2)
    }
    else if (regArr.length === 1 && type === 0) {
        regtext = "(^\\w{" + regArr[0] + "})"
        Reg = new RegExp(regtext);
        replaceCount = repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
    else if (regArr.length === 1 && type === 1) {
        regtext = "(\\w{" + regArr[0] + "}$)"
        Reg = new RegExp(regtext);
        replaceCount = repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
}
