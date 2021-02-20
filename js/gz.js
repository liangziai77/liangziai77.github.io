// lei=1   规则
// lei=2   脚本
// lei=3   应用
// lei=4   其他
var color = 100;
function co_sj() {
    if (color == 112) {
        color = 101;
    } else {
        color++;
    }
}
var data_gz = [{"title":"小良 - 更新器 3.5 (规则)","image":"img/xiaoliang.png","rq":"更新：2019年4月24日","details":"内置：Wf规则、Pin脚本、破解App 等\n此规则只用于更新小良个人规则","url":"a261538eb87b4f989f8b48d46b4a87bb"},{"title":"🔥Instagram图像视频下载1.3","image":"img/Instagram.png","rq":"更新：2021年2月21日","details":"支持：多图一键下载。\n\n使用方法：在Instagram客户端复制分享链接后运行规则","url":"01642ee3c46249d9bd8f0252a014e25c"},{"title":"🔥音乐下载 1.5","image":"img/yyxz.png","rq":"更新：2021年2月19日","details":"修复不能使用问题。\n可导入音乐播放器","url":"4fe5a4c8e18643b2959fce63268ed1fa"},{"title":"🔥free-ss(免费ss)","image":"img/ss.jpg","rq":"更新：2021年2月15日","details":"科学上网，请配合 Shadowrocket（小火箭）软件使用","url":"d8b52d6b15714080bd8227d3b0e90101"},{"title":"Pornhub视频下载","image":"img/down.png","rq":"更新：2020年7月12日","details":"可设置默认下载方式，支持调用手机迅雷自动创建下载任务","url":"acef5f74051c47069d62e7e515a32a15"},{"title":"剪贴板文字转语音v1.0","image":"img/yuyin.png","rq":"群友：深巷旧港丶 提供","details":"将剪贴板文字转语音以mp3形式导出，可以配合MP3转音乐插件使用","url":"14dd1649dc434a4da128de39433bc350"},{"title":"秒拍视频真实地址提取下载","image":"img/mpzltq.png","rq":"更新：2020年6月27日","details":"可提取视频的真实地址，可以作为外链使用，分享给朋友或者下载。","url":"24ac7fe97eed417f924028a554386078"}, {"title":"网址缩短","image":"img/sdwz.png","rq":"更新：2020年6月27日","details":"复制你要缩短的链接，然后运行规则，缩短后规则会自动将缩短后的短链接拷贝至手机剪贴板","url":"6f1acb30c626484caba74233072ff4c5"}, {"title":"bilibili-视频下载 1.2","image":"img/bilibili.png","rq":"更新：2020年6月11日","details":"默认1080p高清MP4视频，大视频建议启用迅雷下载","url":"dacdfd9617ff4ac2a51de02a8c9fcc9d"},{"title":"淘宝验号查询助手","image":"img/tbyhcxzs.png","rq":"更新：2020年6月5日","details":"淘宝信誉，淘气值，买家卖家评论，等多种信息一键查询，无需电脑。","jsurl":"","url":"89d6ed5c371048f0a4fe86a255d42f3b","button":"添加规则"}, {"title":"在线福利 6.5","image":"img/zxfl.jpg","rq":"更新：2019年11月21日","details":"修复更新\n数据来自互联网800资源采集。","url":"8f9d176b9cf045b6b12561258e6a5333"}, {"title":"音乐下载 1.3","image":"img/yyxz.png","rq":"更新：2019年6月6日","details":"修复不能使用问题。\n可导入音乐播放器，具体看演示视频\n可搜索，也支持QQ音乐分享链接","url":"d5e0065c80504189acee74007dbd01fd"}, {"title":"网购历史价格查询 1.3","image":"img/wanggou.png","rq":"更新：2019年4月12日","details":"更新支持领取隐藏优惠券！\n支持：淘宝、天猫、京东、舒宁、亚马逊、等各大网商","url":"8ca33507da2b4c329c59e317ea69facb"}, {"title":"视频评论","image":"img/gz_sppl.png","rq":"发布：2019年4月11日","details":"微信朋友圈、QQ空间- 视频评论 - 高逼格-超好玩","url":"54070609392c4be69b3f1428027d0f36"}, {"title":"语音评论","image":"img/gz_yypl.png","rq":"发布：2019年4月4日","details":"微信朋友圈、QQ空间- 语音评论 - 高逼格-超好玩","url":"efd5ecfc02db473eb9fa8bf32117976c"}, {"title":"Workflow规则安装器1.1","image":"img/xzdzzh.png","rq":"发布：2019年4月1日","details":"旧版Workflow可以用这个规则添加捷径上分享出来的规则","url":"95d88679ce9f43979174679a3170e2dc"}, {"title":"公众号.音.视.图下载1.1","image":"img/gzhyst.png","rq":"发布：2019年3月31日","details":"支持：视频、音频、图片、封面图下载","url":"33eaccf34e5e47c9b6411de53c03855e"}, {"title":"DJ多多下载","image":"img/djdd.png","rq":"发布：2019年3月6日","details":"规则暂不支持高音质下载","url":"ea3b112335964f939f84974930f4bf12"}, {"title":"Tumblr-视频/图片下载1.3","image":"img/tanbure.png","rq":"更新：2018年11月24日","details":"更新修复无法使用问题\n图片还未修复，只能下一张图\n支持：Yuotube等其他视频下载","url":"a1e51c747c78405fb0bff6e3e5663731"}, {"title":"支付宝赏金生成器","image":"img/qian.png","rq":"发布：2018年11月20日","details":"娱乐装逼用的。\n不会使用的看教程。","url":"cb8517ddada445189b8d66547ce49482"}, {"title":"皮皮虾去水印下载 1.5","image":"img/pipixia.png","rq":"更新：2018年11月17日","details":"修复更新。\n修复无法下载问题。\n无需借助第三方工具即可以mp4方式保存到相册。","url":"c62b097297dd4054a01798c3cda65972"}, {"title":"不越狱修改运营商名称1.2","image":"img/yysxg.png","rq":"更新：2018年11月16日","details":"支持：ios12以下系统(不包含ios12)\n同时支持：移动、联通、电信、三网修改。","url":"bd660418245a47e18396505d7239a467"}, {"title":"iM短影去水印下载","image":"img/momo.png","rq":"发布：2018年11月9日","details":"使用方法：到im短影客户端复制视频分享地址运行规则，即可将视频保存到相册。","url":"4d16dc8e6aa34258a13c9f64601390fa"}, {"title":"VIP视频在线观看1.3","image":"img/vipspjx.jpg","rq":"更新：2018年10月29日","details":"支持：优酷、腾讯、芒果、等VIP网站<br>Safari浏览器、Alook、pin的代码生成","url":"8471c459f71447b3ad1250d5cf5390c9"}, {"title":"百度云盘万能钥匙","image":"img/yunpanwnys.png","rq":"更新：2018年10月25日","details":"使用方法：在Safari浏览器上打开 需要密码的百度云盘链接，运行规则\n使用前请观看视频教程","url":"522370ed161748729f8a29086be6bc3b"}, {"title":"微视无水印下载 1.1","image":"img/weishixiazai.png","rq":"发布：2018年10月21日","details":"用法：复制视频链接运行规则即可","url":"497a5a38e0914eafb0afcca65a92cac0"}, {"title":"YouTube视频下载","image":"img/youtube.png","rq":"发布：2018年10月9日","details":"支持：选择视频品质下载（1080p/720p）","url":"05767a9814b0413a859665f9617195dd"}, {"title":"火萤视频无水印下载 2.1","image":"img/huoyin.png","rq":"更新：2018年8月16日","details":"修复更新。\n无需借助第三方工具即可以mp4方式保存的相册。","url":"41d70048298c4ef6b18cff49826993fd"}, {"title":"BTbtt - 电影下载 1.2","image":"img/btbtt.png","rq":"更新:2018.8.14","details":"本次更新修复了下载失败问题，删除错误动作。\n资源来自BTbtt论坛，资源多更新快。","url":"960d2f8b08d74bc1b31f27bb21110b80"},  {"title":"iCloud Drive 文件外链","image":"img/wjwl.png","rq":"更新：2018年5月27日","details":"功能：利用Workflow规则提取iCloud Drive 文件外链。\n使用前请视频教程","url":"8acc2de898ff46bcab4eff574c4d491a"}, {"title":"js导入pin-支持新版本","image":"img/jsdrgz.png","rq":"更新：2018年5月17日","details":"功能：利用Workflow规则把js脚本导入pin中使用。\n使用前请视频教程","url":"e866d6f4c0e64ebba9dbd2d38cb1ca41"}, {"title":"酷狗音乐下载 2.3","image":"img/kgxz.png","rq":"更新：2018年5月1日","details":"更新：支持最新版本(8.9.7)酷狗。目前收费歌曲只支持标准音质下载，免费歌曲可无损高品下载。","url":"f2f01e7459194d8593353bbfcb20b849"}, {"title":"二维码识别 1.1","image":"img/erweima.png","rq":"更新：2018年1月15日","details":"支持：复制二维码链接进行识别\n\n也可直接在相册启动规则识别","url":"8409a78f3de94b4b80d1af0a5b59eab6"}, {"title":"80s - 电影下载 - 更新","image":"img/80s.png","rq":"更新：2018年1月9日","details":"修复了复制链接问题。\n不会用的看我朋友圈演示视频","url":"544c00c3cdd648258e5f18b82846450b"}, {"title":"书签 1.1 - 新增分类功能","image":"img/shuqian.png","rq":"更新：2017年1月21日","details":"快速打开网址、添加、修改、删除。方便管理网址 注：规则用到 iCloud Drive  请开启","url":"0cbc26e05a3e414795e3a823ced74e76"}, {"title":"极速影院","image":"img/jsyy.png","rq":"初版发布","details":"海量资源，高清视频极速稳定观看。","url":"bae3edb464ef4906a9c570ea829d28da"}, {"title":" MOMO陌陌 - 视频下载","image":"img/momo.png","rq":"更新：2017年9月25日","details":"使用方法：复制陌陌分享地址运行规则，完成下载后会有震动提示","url":"81d43e0f9cb149b1824d9fdbc3e216e7"}, {"title":" 路由器管理 - 半成品😂","image":"img/lyqgl.png","rq":"支持少部分路由器","details":"使用前请先配置好路由器账号、密码和路由器管理地址\n\n目前功能：路由器快速重启、查看wifi密码...","url":"6ac71d6e12ed4d7387f449a5aaa49af6"}, {"title":" OCR + 翻译-图片转文字","image":"img/ocr.png","rq":"更新：2017年6月21日","details":"图片转文字，截图翻译、等。\n不会用的看我朋友圈演示视频","url":"90d78da826994365b97ed440d22c1b7e"}, {"title":"下载地址转换","image":"img/xzdzzh.png","rq":"更新：2017年6月20日","details":"迅雷地址转换成真实地址\n80s的迅雷地址转成真实地址在线看","url":"2991f49df273475a8c484f4023746a1f"}, {"title":"电影搜索引擎","image":"img/dyss.jpg","rq":"更新：2017年4月30日","details":"新增：蓝莓影院搜索\n内置小牛、天天、深度、等视频网","url":"2e30a316174f4237b7e727ac0d9d0336"}, {"title":"搜索工具大全","image":"img/ssgjdq.jpg","rq":"很少人用、放弃更新","details":"新增：威锋论坛搜索\n百度、谷歌、淘宝、网盘、等\n问别人问题前请先搜索…","url":"8dfbb38c45d848a68f6b771228944916"}, {"title":"以图搜图","image":"img/ytst.jpg","rq":"Google识图需要挂V","details":"新增：百度识图、搜狗识图\n手机无需翻墙即可使用。\n可用于查找未知名称的电影…","url":"e7bd9120a3404cf2b98759d59f492307"}]


function kap_cj(data) {
    var txt1 = "";
    for (var i = 0; i < data.length; i++) {
        co_sj()
        var arr = data[i]
        txt1 = txt1 + `<div class="col-md-4" onclick="install('${arr.url}')">
        <div class="kap s${color}">
            <img src="./${arr.image}">
            <div class="title">
                <h4>${arr.title}</h4>
                <p class="ri">${arr.rq}</p>
            </div>
            <div class="sm">
                <p>${arr.details}</p>
            </div>
        </div>
        </div>`
    }
    return txt1;
}
$("#gz").html(kap_cj(data_gz));


function install(id) {
    // var host = window.location.host;
    var url = "https://workflow.is/workflows/" + id;

    if (isios()) {
        if (id.indexOf("workflow://") != -1) {
            url = id;
        }

        window.open(url);

    } else {
        $("#qrcode").empty();
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            width: 230,
            height: 230,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        if (id.indexOf("workflow://") != -1) {
            url = "https://ae85.cn/gz.html";
        }
        qrcode.makeCode(url);
        $(".ma_tac").show();
    }
}

function isios() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["iPhone", "iPad", "iPod"];
    var flag = false;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}


