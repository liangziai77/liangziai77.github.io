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
var data_gz = [{ "title": "小良 - 更新器 3.5 (规则)", "image": "img/xiaoliang.png", "rq": "更新：2019年4月24日", "details": "内置：Wf规则、Pin脚本、破解App 等\n此规则只用于更新小良个人规则", "jsurl": "http://t.cn/RkKnE6a", "url": "workflow://import-workflow/?url=https%3A%2F%2Fgitee.com%2Fyao07%2Fupdate_device%2Fraw%2Fmaster%2F%25E8%25A7%2584%25E5%2588%2599%2F%25E5%25B0%258F%25E8%2589%25AF%2520-%2520%25E6%259B%25B4%25E6%2596%25B0%25E5%2599%25A8%25203.5.wflow&name=%E5%B0%8F%E8%89%AF%20-%20%E6%9B%B4%E6%96%B0%E5%99%A8%203.5", "button": "添加规则" }, { "title": "🔥ssr免费获取", "image": "img/ss.jpg", "rq": "更新：2019年11月22日", "details": "运行规则可获取最新的一条ssr", "jsurl": "", "url": "a3179112a78f482fb806bc46fd00b5ed", "button": "添加规则" }, { "title": "🔥在线福利 6.5", "image": "img/zxfl.jpg", "rq": "更新：2019年11月21日", "details": "修复更新\n数据来自互联网800资源采集。", "jsurl": "", "url": "8f9d176b9cf045b6b12561258e6a5333", "button": "添加规则" }]

var data_jb = [{"title":"小良 - 更新器 v2.6 Js版","image":"img/xl.png","rq":"更新：2019年1月27日","details":"js脚本是运行在pin或jsbox上的程序, 可以方便快捷的更新小良作品","jsurl":"https://ae85.cn/jb.html","url":"gxq","button":"安装脚本"},{"title":"🔥抖阴 2.4","image":"img/douyin.png","rq":"更新：2019年11月23日","details":"修复更新\n\n上滑下拉可切换视频。","jsurl":"https://ae85.cn/jb.html","url":"douyin","button":"安装脚本"},{"title":"🔥微信零钱生成器","image":"img/wxlq.png","rq":"更新：2019年11月23日","details":"仅供娱乐","jsurl":"https://ae85.cn/jb.html","url":"wxlq","button":"安装脚本"}]

var data_yy = [{"title":"Youtube++ - 增强版","image":"img/Youtube.jpg","rq":"更新：2019年4月22日","details":"1080p下载、去视频广告等功能\n⚡️️ v12.44.16      💾96.9MB","jsurl":"https://ae85.cn/img/appts.png","url":"Youtube","button":"安装"},{"title":"Filza - 文件管理","image":"img/filza.png","rq":"更新：2019年4月22日","details":"ios11~11.1.2 可查系统文件\n改字体、美化主题、游戏破解、等","jsurl":"https://ae85.cn/img/appts.png","url":"FilzaEscaped","button":"点击 - 进入"},{"title":"Twitter++ - 增强版","image":"img/Twitter.jpg","rq":"更新：2019年4月22日","details":"可本地保存图片、视频等功能\n⚡️️ v7.11      💾82.3MB","jsurl":"https://ae85.cn/img/appts.png","url":"Twitter","button":"安装"}]

var data_qt = [{"title":"手机获取百度BDUSS教程","image":"img/bduss.jpg","rq":"视频教程","details":"手机端利用抓包工具获取BDUSS\n视频操作有点快，多看几遍吧！","jsurl":"http://t.cn/RrCoaJm","url":"http://t.cn/Rkb7u8i","button":"观看"},{"title":"TestFlight申请和安装","image":"img/tf.jpg","rq":"视频教程","details":"TestFlight(app测试)申请和安装","jsurl":"http://t.cn/Rma7VqB","url":"http://t.cn/Rma7VqB","button":"观看"},{"title":"Pin-js脚本获取添加方法","image":"img/Pin.png","rq":"视频教程","details":"教你如何获取小良所分享的脚本\n视频操作有点快，多看几遍吧！","jsurl":"http://player.youku.com/embed/XMzQyMDA0NjQwNA==","url":"http://player.youku.com/embed/XMzQyMDA0NjQwNA==","button":"观看"}]

function kap_cj(data,lei){
    var txt1 = "";
    for (var i = 0; i < 3; i++) {
        co_sj()
        var arr = data[i]
        if(lei==4){
            var an =`window.open('${arr.url}')`
        }else{
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
$("#gz").html(kap_cj(data_gz,1));
$("#jb").html(kap_cj(data_jb,2));
$("#yy").html(kap_cj(data_yy,3));
$("#qt").html(kap_cj(data_qt,4));

function install(id, lei) {
    // var host = window.location.host;
    var gz_url = "https://workflow.is/workflows/" + id;
    var jb_url = "https://ae85.cn/jsbox/" + id + ".html";
    var url;
    if (isios()) {
        if (lei == 1) {
            url = gz_url;
        } else if (lei == 2) {
            url = jb_url;
        } else if (lei == 3) {
            url = "itms-services://?action=download-manifest&url=https://gitee.com/yao07/APP/raw/master/" + id + ".xml"
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
        if (lei == 1) {
            url = gz_url;
            if(gz_url.indexOf("workflow://") != -1){
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


