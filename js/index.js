// lei=1   规则
// lei=2   脚本
// lei=3   应用
// lei=4   其他
var color = 101;
function co_sj() {
    if (color == 112) {
        color = 101;
    } else {
        color++;
    }
}
var data_gz = [{"title":"🔥小良 - 更新器 3.7 (规则)","image":"img/xiaoliang.png","rq":"更新：2022年3月26日","details":"内置：Wf规则、Pin脚本、破解App 等\n此规则只用于更新小良个人规则","url":"1ac20838a1864bfd88d50008dd385f82"},{"title":"🔥YouTube视频下载","image":"img/youtube.png","rq":"发布：2022年3月20日","details":"支持：选择视频品质下载（1080p/720p）","url":"1d826257d89c4af7b5894110cd9c0b4f"},{"title":"🔥Pornhub视频下载1.3","image":"img/down.png","rq":"更新：2022年3月18日","details":"可以选择视频清晰度品质下载，支持调用手机迅雷下载","url":"35e0454b5d614c879426bbb30fd31952"}]

var data_jb = [{"title":"🔥1024视频","image":"img/1024sp.png","rq":"更新：2022年4月11日","details":"在线视频","url":"1024sp"},{"title":"🔥1024小说","image":"img/1024xs.png","rq":"更新：2022年4月11日","details":"在线小说","url":"1024xs"},{"title":"🔥1024图库","image":"img/1024tp.png","rq":"更新：2022年4月11日","details":"在线图库","url":"1024tk"},]

var data_yy = [{ "title": "Shadowrocket - 小火箭", "image": "img/Shadowrocket.jpg", "rq": "⚡️️ v2.1.2　💾7.25MB", "details": "证书已掉，未越狱的请勿安装<br>科学上网利器", "url": "Shadowrocket" }, { "title": "手机迅雷", "image": "img/xunlei.png", "rq": "⚡️️ v5.3.2　💾62.7MB", "details": "证书已掉，未越狱的请勿安装", "url": "xunlei" }, { "title": "Pin - 剪贴板扩展 (越狱版)", "image": "img/Pin.png", "rq": "⚡️️ v3.2.2　💾13.8MB", "details": "需要手机越狱才能安装", "url": "pin" }, { "title": "JSBox - 越狱版", "image": "img/jsbox.jpg", "rq": "⚡️️ v1.24.0　💾29.8MB", "details": "需要手机越狱才能安装", "url": "jsbox" }]

var data_qt = [{ "title": "Telegram 直连", "image": "img/tg_logo.png", "rq": "Safari 浏览器中打开", "details": "无需科学上网即可使用Telegram", "url": "http://3f.ae85.cn:772/api/telegram.php" }, { "title": "屏蔽iOS 13.x系统自动更新", "image": "img/settings.png", "rq": "Safari 浏览器中打开", "details": "ios13用户不想系统自动下载更新的可以安装这个描述文件", "url": "https://ae85.cn/ios/iOS13.mobileconfig" }, { "title": "手机获取百度BDUSS教程", "image": "img/bduss.jpg", "rq": "视频教程", "details": "手机端利用抓包工具获取BDUSS\n视频操作有点快，多看几遍吧！", "url": "http://t.cn/Rkb7u8i", }]

function kap_cj(data, lei) {
    var txt1 = "";
    for (var i = 0; i < 3; i++) {
        co_sj()
        var arr = data[i]
        if (lei == 4) {
            var an = `window.open('${arr.url}')`
        } else {
            var an = `install('${arr.url}',${lei})`
        }
        txt1 = txt1 + `<div class="col-md-4" onclick="${an}">
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
$("#gz").html(kap_cj(data_gz, 1));
$("#jb").html(kap_cj(data_jb, 2));
$("#yy").html(kap_cj(data_yy, 3));
$("#qt").html(kap_cj(data_qt, 4));

function install(id, lei) {
    // var host = window.location.host;
    // var gz_url = "https://workflow.is/workflows/" + id;
    var gz_url = "https://www.icloud.com/shortcuts/" + id;
    var jb_url = "https://ae85.cn/jsbox/" + id + ".html";
    var url;
    if (isios()) {
        if (lei == 1) {
            url = gz_url;
            if (gz_url.indexOf("workflow://") != -1) {
                url = id;
            }
        } else if (lei == 2) {
            url = jb_url;
        } else if (lei == 3) {
            url = "itms-services://?action=download-manifest&url=https://gitee.com/yao07/APP/raw/master/" + id + ".xml"
            if (id.indexOf('http') !== -1) {
                url = id
            }
        }
        // window.open(url,'_self');
        window.location.href = url


    } else {
        $("#qrcode").empty();
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            width: 230,
            height: 230,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        if (lei == 1) {
            url = gz_url;
            if (gz_url.indexOf("workflow://") != -1) {
                url = "https://ae85.cn";
            }
        } else if (lei == 2) {
            url = jb_url
        } else if (lei == 3) {
            url = "https://ae85.cn/yy.html"
        }
        qrcode.makeCode(url);
        $(".ma_tac").show();
    }
}

function install_gz(id) {
    window.open()
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


