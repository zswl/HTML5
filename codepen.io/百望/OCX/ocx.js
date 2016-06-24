/**
 * 开票终端标识
 */
var kpzdbs = "01001";
//纳税人识别号
var nsrsbh = "110101100015600";
//发票代码
var fpdm = "1100098083";
/**
 * 发票类型代码：
 * 004:增值税专用发票
 * 007:增值税普通发票
 */
var fplxdm = "004";
//税控服务器地址
var servletip = "192.168.172.25";
//税控服务器访问端口
var servletport = "7005";
//税控钥匙密码
var keypwd = "88888888";
//安全码
var aqm = "267a3df1a6422b2cc08677c7bc31dcdc42ebdfe0c568a8c8fa7ab13ea7929ae4416016e6d31b6110e25ee7286b510ad0eccf881851baa9aa264090fd3065963676552a2af32a3b72c4dbba2a1d11aab3687af6691b79bcba1e483155b1035f3e5b44989d7f6d9a307ba9e90cb96526c75b01aff1aeef80cbd7fd87628fa0dc248031f57ab6a1c5bc4b3fd83563f918434b37654855287e9e42ab007e1d0b08c089d82cfa63b31065422a4bb1329489bb8f17a8c3ef973833f01326f3bd3ec5e9bdba43693a4a730affc5fcc327f97c9862c83b83536e057305ec542f000eb4bb60f588322a9c3fe93f5dfd4157ae8b9231d15bf49c2107615a72c29927899857";
//发票起始号码
var qshm = "";
//发票截止号码
var jzhm = "";
/*
    慎用此方法，因此种方法会因各种原因创建对象失败，导致无法调用ActiveX组件
    var sk = null;
    sk = document.createElement("object");
    sk.setAttribute("ID", "sk");
    sk.setAttribute("CLASSID", "clsid:003BD8F2-A6C3-48EF-9B72-ECFD8FC4D49F");
    sk.setAttribute("codebase", "NISEC_SKSCX.ocx#version=1,0,0,1");
    sk.using = true;
*/


~function SetParameter() { //参数设置
    //var sInputInfo = "<?xml version=\"1.0\" encoding=\"GBK\"?>\r\n<business id=\"20001\" comment=\"\">\r\n
    //<body yylxdm=\"1\">\r\n<servletip>192.168.2.150</servletip>\r\n
    //<servletport>7005</servletport>\r\n<servletname>1</servletname>\r\n
    //<keypwd>88888888</keypwd>\r\n<aqm>267a3df1a6422b2cc08677c7bc31dcdc42ebdfe0c568a8c8fa7ab13ea7929ae4416016e6d31b6110e25ee7286b510ad0eccf881851baa9aa264090fd3065963676552a2af32a3b72c4dbba2a1d11aab3687af6691b79bcba1e483155b1035f3e5b44989d7f6d9a307ba9e90cb96526c75b01aff1aeef80cbd7fd87628fa0dc248031f57ab6a1c5bc4b3fd83563f918434b37654855287e9e42ab007e1d0b08c089d82cfa63b31065422a4bb1329489bb8f17a8c3ef973833f01326f3bd3ec5e9bdba43693a4a730affc5fcc327f97c9862c83b83536e057305ec542f000eb4bb60f588322a9c3fe93f5dfd4157ae8b9231d15bf49c2107615a72c29927899857</aqm></body>\r\n</business>";
    var jsonObj = {
        "servletip": servletip,
        "servletport": servletport,
        "keypwd": keypwd,
        "aqm": aqm
    };
    var sInputInfo = createInputInfo(jsonObj, "20001", "参数设置", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}();
/**
税控钥匙信息查询
*/
function KeyQuery() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"GBK\"?>\r\n<business id=\"20002\" comment=\"税控钥匙信息查询\">\r\n
    <body yylxdm=\"1\">\r\n<keypwd>88888888</keypwd>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "keypwd": keypwd
    };
    var sInputInfo = createInputInfo(jsonObj, "20002", "税控钥匙信息查询", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
当前未开票号查询
*/
function fpQuery() {
    /*
    var sInputInfo = "<?xml version=\"1.0\"  encoding=\"GBK\"?>\r\n<business id=\"10004\" comment=\"查询当前未开票号\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>"+fplxdm+"</fplxdm>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm
    };
    var sInputInfo = createInputInfo(jsonObj, "10004", "查询当前未开票号", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
获取监控管理数据
*/
function termi() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"10002\" comment=\"获取监控管理数据\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>"+fplxdm+"</fplxdm>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm
    };
    var sInputInfo = createInputInfo(jsonObj, "10002", "获取监控管理数据", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
发票开具
*/
function fpkj() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"10008\" comment=\"发票开具\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>"+fplxdm+"</fplxdm>\r\n
    <fpqqlsh>201604051</fpqqlsh>\r\n<kplx>0</kplx>\r\n<tspz>00</tspz>\r\n<xhdwsbh>"+nsrsbh+"</xhdwsbh>\r\n
    <xhdwmc>海闻软件技术有限公司</xhdwmc>\r\n<xhdwdzdh>写死的22222222</xhdwdzdh>\r\n<xhdwyhzh>写死的银行22222222222</xhdwyhzh>\r\n
    <ghdwsbh>110108199003061101</ghdwsbh>\r\n<ghdwmc>技术处</ghdwmc>\r\n<ghdwdzdh>研发楼4006112366</ghdwdzdh>\r\n
    <ghdwyhzh>6228480016123</ghdwyhzh>\r\n<qdbz>1</qdbz>\r\n<fyxm count=\"1\">\r\n<group xh=\"1\">\r\n<fphxz>0</fphxz>\r\n
    <spmc>劳务费</spmc>\r\n<spsm></spsm>\r\n<ggxh></ggxh>\r\n<dw></dw>\r\n<spsl>1</spsl>\r\n<dj>1000</dj>\r\n<je>1000.00</je>\r\n
    <sl>0.17</sl>\r\n<se>170.00</se>\r\n<hsbz>0</hsbz>\r\n</group>\r\n</fyxm>\r\n<hjje>1000.00</hjje>\r\n<hjse>170.00</hjse>\r\n
    <jshj>1170.00</jshj>\r\n<bz></bz>\r\n<skr>税控测试</skr>\r\n<fhr>税控测试</fhr>\r\n<kpr>税控测试</kpr>\r\n<tzdbh></tzdbh>\r\n
    <yfpdm></yfpdm>\r\n<yfphm></yfphm>\r\n<qmcs>01c2014282000000</qmcs>\r\n</body>\r\n</business>";
    */
    var arr = new Array();
    arr.push("<kpzdbs>" + kpzdbs + "</kpzdbs>\r\n"); //开票终端标识
    arr.push("<fplxdm>" + fplxdm + "</fplxdm>\r\n"); //发票类型代码
    arr.push("<fpqqlsh>201604051</fpqqlsh>\r\n"); //发票请求流水号
    arr.push("<kplx>0</kplx>\r\n");
    arr.push("<tspz>00</tspz>\r\n");
    arr.push("<xhdwsbh>" + nsrsbh + "</xhdwsbh>\r\n"); //销项单位识别号
    arr.push("<xhdwmc>海闻软件技术有限公司</xhdwmc>\r\n"); //销方单位名称
    arr.push("<xhdwdzdh>写死的22222222</xhdwdzdh>\r\n");
    arr.push("<xhdwyhzh>写死的银行22222222222</xhdwyhzh>\r\n");
    arr.push("<ghdwsbh>110108199003061101</ghdwsbh>\r\n");
    arr.push("<ghdwmc>技术处</ghdwmc>\r\n");
    arr.push("<ghdwdzdh>研发楼4006112366</ghdwdzdh>\r\n");
    arr.push("<ghdwyhzh>6228480016123</ghdwyhzh>\r\n");
    arr.push("<qdbz>1</qdbz>\r\n");
    arr.push("<fyxm count=\"1\">\r\n");
    arr.push("<group xh=\"1\">\r\n");
    arr.push("<fphxz>0</fphxz>\r\n");
    arr.push("<spmc>劳务费</spmc>\r\n");
    arr.push("<spsm></spsm>\r\n");
    arr.push("<ggxh></ggxh>\r\n");
    arr.push("<dw></dw>\r\n");
    arr.push("<spsl>1</spsl>\r\n");
    arr.push("<dj>1000</dj>\r\n");
    arr.push("<je>1000.00</je>\r\n");
    arr.push("<sl>0.17</sl>\r\n");
    arr.push("<se>170.00</se>\r\n");
    arr.push("<hsbz>0</hsbz>\r\n");
    arr.push("</group>\r\n");
    arr.push("</fyxm>\r\n");
    arr.push("<hjje>1000.00</hjje>\r\n");
    arr.push("<hjse>170.00</hjse>\r\n");
    arr.push("<jshj>1170.00</jshj>\r\n");
    arr.push("<bz></bz>\r\n");
    arr.push("<skr>税控测试</skr>\r\n");
    arr.push("<fhr>税控测试</fhr>\r\n");
    arr.push("<kpr>税控测试</kpr>\r\n");
    arr.push("<tzdbh></tzdbh>\r\n");
    arr.push("<yfpdm></yfpdm>\r\n");
    arr.push("<yfphm></yfphm>\r\n");
    arr.push("<qmcs>01c2014282000000</qmcs>\r\n");
    var sInputInfo = createInputInfo(arr.join(""), "10008", "发票开具", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
发票打印
*/
function fpdy() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"GBK\"?>\r\n<business id=\"20004\"comment=\"发票打印\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>"+fplxdm+"</fplxdm>\r\n<fpdm>"+fpdm+"</fpdm>\r\n
    <fphm>40050000</fphm>\r\n<dylx>1</dylx>\r\n<dyfs>1</dyfs>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm,
        "fpdm": fpdm,
        "fphm": qshm,
        "dylx": "1",
        "dyfs": "1"
    };
    var sInputInfo = createInputInfo(jsonObj, "20004", "发票打印", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
领购信息核对
*/
function hedui() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"11001\" comment=\"发票领购信息核对\">\r\n
    <body yylxdm=\"1\">\r\n<hdbz>1</hdbz>\r\n<nsrsbh>"+nsrsbh+"</nsrsbh>\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>007</fplxdm>\r\n
    <fpdm>1100098082</fpdm>\r\n<qshm>40050001</qshm>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "hdbz": "1",
        "nsrsbh": nsrsbh,
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm,
        "fpdm": fpdm,
        "qshm": qshm
    };
    var sInputInfo = createInputInfo(jsonObj, "11001", "发票领购信息核对", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/*
领购信息分发
*/
function fenfa() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"10006\" comment=\"发票领购信息分发\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>007</fplxdm>\r\n<fpdm>1100098082</fpdm>\r\n
    <qshm>40050001</qshm>\r\n<fpfs>1</fpfs>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm,
        "fpdm": fpdm,
        "qshm": qshm,
        "fpfs": "1"
    };
    var sInputInfo = createInputInfo(jsonObj, "10006", "发票领购信息分发", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
领购信息回退
*/
function back() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"10007\" comment=\"发票领购信息退回\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>"+fplxdm+"</fplxdm>\r\n<fpdm>"+fpdm+"</fpdm>\r\n
    <qshm>40050001</qshm>\r\n<zzhm>40050001</zzhm>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm,
        "fpdm": fpdm,
        "qshm": qshm,
        "zzhm": jzhm
    };
    var sInputInfo = createInputInfo(jsonObj, "10007", "发票领购信息退回", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/*
开票终端查询统计
*/
function tongji() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"11012\" comment=\"开票终端查询统计\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>"+fplxdm+"</fplxdm>\r\n<cxfs>1</cxfs>\r\n
    <cxtj>2016040520160405</cxtj>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm,
        "cxfs": "1",
        "cxtj": "2016040520160405"
    };
    var sInputInfo = createInputInfo(jsonObj, "11012", "开票终端查询统计", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
空白发票作废
*/
function fpzf() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"10009\" comment=\"发票作废\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>"+fplxdm+"</fplxdm>\r\n<zflx>0</zflx>\r\n
    <fpdm>"+fpdm+"</fpdm>\r\n<fphm>40050001</fphm>\r\n<hjje></hjje>\r\n<zfr>hwsoft</zfr>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm,
        "zflx": "0",
        "fpdm": fpdm,
        "fphm": qshm,
        "hjje": "",
        "zfr": "hwsoft"
    };
    var sInputInfo = createInputInfo(jsonObj, "10009", "发票作废", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
红字发票申请与查询
*/
function redInvo() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\" ?><business id=\"11008\" comment=\"红字信息表申请\">
    <body yylxdm=\"1\"><nsrsbh>"+nsrsbh+"</nsrsbh><fplxdm>"+fplxdm+"</fplxdm><yfpdm>"+fpdm+"</yfpdm><yfphm>40050002</yfphm>
    <kpzddm>"+kpzdbs+"</kpzddm><sqyy>1</sqyy><ywlx>0</ywlx><sqrmc></sqrmc><sqjgmc></sqjgmc><lxfs></lxfs><xhdwsbh>"+nsrsbh+"</xhdwsbh>
    <xhdwmc>"+nsrsbh+"</xhdwmc><ghdwsbh>"+nsrsbh+"</ghdwsbh><ghdwmc>"+nsrsbh+"</ghdwmc><fyxm count=\"1\"><group xh=\"1\"><spmc>发票</spmc>
    <ggxh></ggxh><dw></dw><spsl></spsl><dj></dj><je>0.00</je><sl>0</sl><se>0.00</se><hsbz>0</hsbz></group></fyxm><hjje>0.00</hjje>
    <hjse>0.00</hjse><jshj>0.00</jshj></body></business>";
    */
    var arr = new Array();
    arr.push("<nsrsbh>" + nsrsbh + "</nsrsbh>\r\n");
    arr.push("<fplxdm>" + fplxdm + "</fplxdm>\r\n");
    arr.push("<yfpdm>" + fpdm + "</yfpdm>\r\n");
    arr.push("<yfphm>"+ qshm +"</yfphm>\r\n");
    arr.push("<kpzddm>" + kpzdbs + "</kpzddm>\r\n");
    arr.push("<sqyy>1</sqyy>\r\n");
    arr.push("<ywlx>0</ywlx>\r\n");
    arr.push("<sqrmc></sqrmc>\r\n");
    arr.push("<sqjgmc></sqjgmc>\r\n");
    arr.push("<lxfs></lxfs>\r\n");
    arr.push("<xhdwsbh>" + nsrsbh + "</xhdwsbh>\r\n");
    arr.push("<xhdwmc>" + nsrsbh + "</xhdwmc>\r\n");
    arr.push("<ghdwsbh>" + nsrsbh + "</ghdwsbh>\r\n");
    arr.push("<ghdwmc>" + nsrsbh + "</ghdwmc>\r\n");
    arr.push("<fyxm count=\"1\">\r\n");
    arr.push("<group xh=\"1\">\r\n");
    arr.push("<spmc>发票</spmc>\r\n");
    arr.push("<ggxh></ggxh>\r\n");
    arr.push("<dw></dw>\r\n");
    arr.push("<spsl></spsl>\r\n");
    arr.push("<dj></dj>\r\n");
    arr.push("<je>0.00</je>\r\n");
    arr.push("<sl>0</sl>\r\n");
    arr.push("<se>0.00</se>\r\n");
    arr.push("<hsbz>0</hsbz>\r\n");
    arr.push("</group></fyxm>\r\n");
    arr.push("<hjje>0.00</hjje>\r\n");
    arr.push("<hjse>0.00</hjse>\r\n");
    arr.push("<jshj>0.00</jshj>\r\n");
    var sInputInfo = createInputInfo(arr.join(""), "10009", "发票作废", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
发票查询
*/
function query() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"10010\" comment=\"发票查询\">\r\n
    <body yylxdm=\"1\">\r\n<kpzdbs>"+kpzdbs+"</kpzdbs>\r\n<fplxdm>"+fplxdm+"</fplxdm>\r\n<cxfs>0</cxfs>\r\n
    <cxtj>"+fpdm+"400500"+fplxdm+"0050199</cxtj>\r\n</body>\r\n</business>";
    */
    var jsonObj = {
        "kpzdbs": kpzdbs,
        "fplxdm": fplxdm,
        "cxfs": "0",
        "cxtj": fpdm+qshm+jzhm
    };
    var sInputInfo = createInputInfo(jsonObj, "10010", "发票查询", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}
/**
设置页边距
*/
function setBorder() {
    /*
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?><business id=\"20003\" comment=\"页边距设置\">
    <body yylxdm=\"1\"><fplxdm>"+fplxdm+"</fplxdm><top>10</top><left>10</left></body></business>";
    */
    var jsonObj = {
        "fplxdm": fplxdm,
        "top": 10,
        "left": 10
    };
    var sInputInfo = createInputInfo(jsonObj, "20003", "页边距设置", "1");
    console.log(sInputInfo);
    try {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    } catch (e) {
        console.log(e.message + ",errno:" + e.number);
    }
}

/**
 * 生成调用税控接口参数的xml字符串。
 * 1.当第一个参数是json对象时，支持json嵌套，不支持属性转换。
 * @param paramObj 
 * 1.js 对象，调用税控接口时的参数；
 * 其属性名将作为标签名，不区分大小写，属性值将作为标签的节点值。
 * 2.body标签体内的 xml 字符串
 * @param id 交易编码
 * @param comment 交易描述
 * @param yylxdm 应用类型代码，默认值为1
 * @returns {String} 调用税控接口时的xml字符串；
 * 当paramObj不是字符串也不是json对象时返回null。
 */
function createInputInfo(paramObj, id, comment, yylxdm){
	if(typeof paramObj !== "string" && !isPlainObject(paramObj)) return null;
	yylxdm = yylxdm || 1;
	var returnStr = '<?xml version="1.0" encoding="gbk"?>\r\n'
	              + '<business id="'+id+'" comment="'+comment+'">\r\n'
	              + '<body yylxdm="'+yylxdm+'">\r\n';
	   returnStr += (typeof paramObj === 'string' ? paramObj : jsonToXmlStr(paramObj));
	   returnStr += '</body>\r\n'
		          + '</business>';
	
	//将对象转为xml字符串
	function jsonToXmlStr(jsonObj){
		if(isPlainObject(jsonObj)){
			var xmlStr = '';
			for(var sKey in jsonObj){
				var lowKey = sKey.toLowerCase();
				var sValue = jsonObj[sKey];
				xmlStr += "<"+lowKey+">";
				xmlStr += jsonToXmlStr(sValue);
				xmlStr += "</"+lowKey+">\r\n";
			}
			return xmlStr;
		}else{
			return jsonObj+'';
		}
	}
	function isPlainObject(plainObj) {
		if (plainObj == null || typeof plainObj !== "object" || plainObj.nodeType || plainObj == window) {
			return false;
		}
		if (plainObj.constructor && !plainObj.constructor.prototype.hasOwnProperty("isPrototypeOf")) {
			return false;
		}
		return true;
	}
	return returnStr;
}
