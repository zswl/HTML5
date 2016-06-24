/**
发票开具
*/
function fpkj(){
	  var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\" ?>\r\n<business id=\"10008\" comment=\"发票开具\">\r\n<body yylxdm=\"1\">\r\n<kpzdbs>010001</kpzdbs>\r\n<fplxdm>004</fplxdm>\r\n<fpqqlsh></fpqqlsh>\r\n<kplx>0</kplx>\r\n<tspz>00</tspz>\r\n<xhdwsbh>110111159632110</xhdwsbh>\r\n<xhdwmc>中国某银行股份有限公司</xhdwmc>\r\n<xhdwdzdh>222 333</xhdwdzdh>\r\n<xhdwyhzh>农业银行 621</xhdwyhzh>\r\n<ghdwsbh>liwy001_SBH</ghdwsbh>\r\n<ghdwmc>liwy001</ghdwmc>\r\n<ghdwdzdh>liwy001_DH</ghdwdzdh>\r\n<ghdwyhzh>liwy001_ZH</ghdwyhzh>\r\n<qdbz>0</qdbz>\r\n<fyxm count=\"1\">\r\n<group xh=\"1\">\r\n<fphxz>0</fphxz>\r\n<spmc>周年纪念银章</spmc>\r\n<spsm></spsm>\r\n<ggxh>3盎司</ggxh>\r\n<dw>件</dw>\r\n<spsl>1</spsl>\r\n<dj>3900</dj>\r\n<je>3900</je>\r\n<sl>0.17</sl>\r\n<se>566.67</se>\r\n<hsbz>1</hsbz>\r\n</group>\r\n</fyxm>\r\n<hjje>3333.33</hjje>\r\n<hjse>566.67</hjse>\r\n<jshj>3900</jshj>\r\n<bz></bz>\r\n<skr>张丽萍</skr>\r\n<fhr>朱永杰</fhr>\r\n<kpr>李文姚</kpr>\r\n<tzdbh></tzdbh>\r\n<yfpdm></yfpdm>\r\n<yfphm></yfphm>\r\n<qmcs></qmcs>\r\n</body>\r\n</business>";
console.log(sInputInfo);
try
    {
ret = sk.Operate(sInputInfo);
    console.log(ret);
    }
catch(e)
    {
    console.log(e.message + ",errno:" + e.number);
    }
}

/**
发票打印
*/

function fpdy(){
	  var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"20004\"comment=\"发票打印\">\r\n<body yylxdm=\"1\">\r\n<kpzdbs>010001</kpzdbs>\r\n<fplxdm>004</fplxdm>\r\n<fpdm>1110098079</fpdm>\r\n<fphm>27454670</fphm>\r\n<dylx>1</dylx>\r\n<dyfs>1</dyfs>\r\n</body>\r\n</business>";
console.log(sInputInfo);
try
    {
ret = sk.Operate(sInputInfo);
    console.log(ret);
    }
catch(e)
    {
    console.log(e.message + ",errno:" + e.number);
    }
}


/**
 * 领购核对
 */
function fplg(){
    var sInputInfo = "<?xml version=\"1.0\" encoding=\"gbk\"?>\r\n<business id=\"11001\" comment=\"发票领购信息核对\">\r\n<body yylxdm=\"1\">\r\n<hdbz>1</hdbz>\r\n<nsrsbh>110111159632110</nsrsbh>\r\n<kpzdbs>010001</kpzdbs>\r\n<fplxdm>004</fplxdm>\r\n<fpdm>1110098079</fpdm>\r\n<qshm>27454670</qshm>\r\n</body>\r\n</business>";
    console.log(sInputInfo);
    try
    {
        ret = sk.Operate(sInputInfo);
        console.log(ret);
    }
    catch(e)
    {
        console.log(e.message + ",errno:" + e.number);
    }
}