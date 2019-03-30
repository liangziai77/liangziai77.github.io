/*
短视频下载器 2.3
2019年3月30日 更新
修复：修复部分解析失败报错问题。
支持：长按【解析】按钮,自动提取剪贴板链接中的视频。

支持：微信公众号视频、小红书去水印、快手短视频无水印、全民小视频无水印、微博、秒拍、小咖秀、晃咖、微视、美拍、网易云音乐、陌陌、映客、小影 等平台的视频下载。

脚本使用密码到在公众号【小良科技】中回复〖285〗即可获取。

by：iPhone 8、小良
更多js脚本： https://ae85.cn/
*/

const base64 = "aHR0cHM6Ly9naXRlZS5jb20veLZvMDcvdXBkYXRlX2RldmljZS9yYXcvbLZzdGVyL2R1YW5zaGlwaW5nLmpzb24="
$ui.loading(true)
$http.get({
    url: $text.base64Decode(base64.replace(/LZ/g, "WF")),
    handler: function (resp) {
        $ui.loading(false)
        if (resp.response.statusCode == "200") {
            var info = resp.data;
            $cache.set("info", info)
            if (info.bb != "2.3") {
                $ui.alert({
                    title: "温馨提示",
                    message: info.gxsm,
                    actions: [{
                        title: "进入官网",
                        handler: function () {
                            $app.openURL(info.gw)
                        }
                    }, {
                        title: "关注公众号",
                        handler: function () {
                            $ui.alert({
                                title: "温馨提示",
                                message: "跳转微信会自动复制公众号ID\n请跳转到微信-搜索-公用号-粘贴-关注",
                                actions: [{
                                    title: "跳转微信",
                                    handler: function () {
                                        $clipboard.text = "ae85-cn"
                                        $app.openURL("weixin://")
                                    }
                                }, {
                                    title: "取消"
                                }]
                            })
                        }
                    }]
                })
            } else {
                yanz()

            }

        } else {
            $ui.alert("加载失败")
        }
    }
})
function yanz() {
    var file = $file.read("key.txt");
    if (!file) {
        cshyz();
    } else {
        if (yzmm(file.string)) {
            zjm();
            tcgg()
            getclipboard()
        } else {
            cshyz();
        }
    }
}
function yzmm(t) {
    var key = $cache.get("info").key
    if (key == t) {
        return 1;
    } else {
        return 0;
    }
}
function tcgg() {
    var gg = $cache.get("info").gg
    if ($file.exists("gg.txt")) {
        var file = $file.read("gg.txt").string
        if (file != gg) {
            xrwj(gg)
        }
    } else {
        xrwj(gg)
    }
}
function xrwj(nr) {
    $ui.alert(nr);
    $file.write({
        data: $data({ string: nr }),
        path: "gg.txt"
    })
}
function getclipboard() {
    var url = $clipboard.link
    if (url) {
        $ui.alert({
            title: "要提取剪贴板中的链接",
            message: $clipboard.text,
            actions: [{
                title: "取消",
                handler: function () {
                }
            }, {
                title: "提取",
                handler: function () {
                    $('bjk').text = url
                    tmenu(url)
                }
            }]
        })
    }
}

function cshyz() {
    $ui.render({
        props: {
            title: "短视频下载器 2.3"
        },
        views: [
            {
                type: "label",
                props: {
                    id: "dx1",
                    text: "请输入密码进行验证",
                    textColor: $color("#ff0000"),
                    align: $align.center
                },
                layout(make, view) {
                    make.top.inset(10);
                    make.left.right.inset(0);
                }
            },
            {
                type: "button",
                props: {
                    id: "bt1",
                    title: "确定"
                },
                layout: function (make) {
                    make.top.equalTo($("dx1").bottom).inset(15);
                    make.right.inset(10);
                    make.height.equalTo(40);
                    make.width.equalTo(100);
                },
                events: {
                    tapped: function (sender) {
                        var bs = $text.base64Encode($("wd").text);
                        if (yzmm(bs)) {
                            $file.write({
                                data: $data({ string: bs }),
                                path: "key.txt"
                            });
                            zjm();
                        } else {
                            $ui.toast("验证失败……");
                            $ui.alert(
                                "请输入正确的密码\n如果不知道密码\n请到公众号：ae85-cn\n上回复 285 获取"
                            );
                        }
                    }
                }
            },
            {
                type: "input",
                props: {
                    id: "wd",
                    font: $font(22),
                    placeholder: "请输入开起密码...",
                    darkKeyboard: true
                },
                layout: function (make, view) {
                    make.top.equalTo($("dx1").bottom).inset(15);
                    make.left.inset(10);
                    make.height.equalTo(40);
                    make.right.equalTo($("bt1").left).inset(5);
                },
                events: {
                    returned: function (sender) {
                        $("wd").blur();
                    }
                }
            },
            {
                type: "web",
                props: {
                    id: "webyz",
                    toolbar: true,
                    html: `<head><meta charset="UTF-8"></head><body><span style="font-size:34px;"><h1>使用说明：</h1><h2>为了防止他人恶意调用使脚本和谐速度过快，将为脚本添加了开启密码，并定期更改。请到公众号获取开启密码。</h2><h1>密码获取：</h1><h2>前往公众号【小良科技】在聊天窗口中回复〖285〗即可获取。<br></h2><br><h1><a href="http://t.cn/E49YWj6">点击观看</a> 视频教程</h1> <h1><a href="https://ae85.cn/fuli/xiaoliang.html">点击领取</a> 支付宝红包</h1><h1><a href="https://ae85.cn/lxfs.html">关注公众号</a> 小良科技</h1><h2>by：iPhone 8、小良&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://ae85.cn/">https://ae85.cn/</a> </h2></span></body>`
                },
                layout: function (make) {
                    make.top.equalTo($("wd").bottom).inset(10);
                    make.bottom.inset(0);
                    make.left.right.inset(10);
                }
            }
        ]
    });
}
const by = {
    type: "label",
    props: {
        align: 1,
        font: $font(14),
        text: "iPhone 8、小良 (https://ae85.cn)",
        textColor: $color("#bbb")
    },
    layout: (make, view) => {
        make.bottom.inset(2);
        make.left.right.inset(0);
        make.height.equalTo(30);
    }
}

var timer;
var count;
function zjm() {
    $ui.render({
        props: {
            title: "短视频下载 2.3",
            bgcolor: $color("#e6e6e6"),
            navButtons: [
                {
                    title: "Title",
                    icon: "008",
                    handler: function () {
                        sysm();
                    }
                }
            ]
        },
        views: [{
            type: "label",
            props: {
                id: "tis1",
                text: "请将视频链接粘贴到下方：",
                font: $font(14)
            },
            layout: function (make, view) {
                make.left.inset(15);
                make.top.inset(30);
            }
        }, {
            type: "text",
            props: {
                id: "bjk",
                lines: 0,
                radius: 5,
                placeholder: "输入视频地址… \n或长按【解析】按钮"
            },
            layout: function (make) {
                make.top.equalTo($("tis1").bottom).inset(5)
                make.right.left.inset(15);
                make.height.equalTo(160);
            },
            events: {
                returned: function (sender) {
                    $("bjk").blur();
                    tmenu($('bjk').text);
                }
            }
        }, {
            type: "button",
            props: {
                title: "解  析",
                id: "bt1"
            },
            layout: function (make) {
                make.top.equalTo($("bjk").bottom).inset(15)
                make.right.left.inset(15);
                make.height.equalTo(45);
            },
            events: {
                tapped: function (sender) {
                    tmenu($('bjk').text);
                },
                longPressed: function (info) {
                    $('bjk').text = $clipboard.link;
                    tmenu($clipboard.link)
                }
            }
        }, {
            type: "label",
            props: {
                id: "tis2",
                text: "目前支持：微信公众号视频、小红书去水印、快手短视频无水印、全民小视频无水印、微博、秒拍、小咖秀、晃咖、微视、美拍、网易云音乐、陌陌、映客、小影 等平台的视频下载。",
                font: $font(14),
                lines: 0,
                textColor: $color("#aaa"),
                align: 4,
            },
            layout: function (make, view) {
                make.top.equalTo($("bt1").bottom).inset(10)
                make.right.left.inset(15);
                make.height.equalTo(100);

            }
        },
        {
            type: "web",
            props: {
                id: "web",
            },
            layout: function (make, view) {
                make.top.equalTo(0)
                make.right.left.inset(0)
                make.height.equalTo(1)
            }
        }, {
            type: "spinner",
            props: {
                loading: false
            },
            layout: function (make, view) {
                make.bottom.equalTo($("bjk").bottom).inset(-10)
                make.centerX.equalTo(view.super)
            }
        }, by]
    });
}

function sysm() {
    $ui.push({
        props: {
            title: "使用说明"
        },
        views: [{
            type: "web",
            props: {
                id: "webxia",
                bgcolor: $color("#e6e6e6"),
                html: `<head><meta charset="UTF-8"></head><body><span style="font-size:34px;"><br><h1>使用说明：</h1><h2>脚本已支持：微信公众号、小红书去水印、皮皮虾无水印、抖音无水印、Tik Tok (国际版抖音) 无水印、快手无水印、火山无水印、全民小视频无水印、今日头条、西瓜视频、微博、秒拍、小咖秀、晃咖、微视、美拍、网易云音乐、陌陌、映客、小影 等平台的视频下载。<br><br>修复更新</h2><br><h1><a href="http://t.cn/E49YWj6">点击观看</a> 视频教程</h1> <h1><a href="https://ae85.cn/fuli/xiaoliang.html">点击领取</a> 支付宝红包</h1><h1><a href="https://ae85.cn/lxfs.html">关注公众号</a> 小良科技</h1><h2>by：iPhone 8、小良&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://ae85.cn/">https://ae85.cn/</a> </h2></span></body>`
            },
            layout: function (make) {
                make.left.right.inset(10);
                make.top.bottom.inset(0)
            }
        },]
    });
}

function cgjm(url) {
    $('spinner').loading = false;
    $ui.push({
        props: {
            title: "解析完成"
        },
        views: [{
            type: 'view',
            props: {
                id: 'vediobtn'
            },
            layout: function (make, view) {
                make.left.bottom.right.inset(10);
                make.top.inset(30);
            },
            views: [{
                type: 'video',
                props: {
                    id: 'videobof',
                    src: url,
                    radius: 7,
                    bgcolor: $color('#eee')
                },
                layout: function (make, view) {
                    make.left.right.inset(10);
                    make.top.equalTo(20);
                    make.height.equalTo(250);
                }
            }, {
                type: 'button',
                props: {
                    title: '下载视频',
                    id: 'dBtn',
                    bgcolor: $color('#409eff')
                },
                layout: function (make, view) {
                    make.top.equalTo($('videobof').bottom).inset(30)
                    make.left.inset(20);
                    make.height.equalTo(50);
                    make.width.equalTo(130)
                },
                events: {
                    tapped: function (sender) {
                        download(url)
                    }
                }
            },
            {
                type: 'button',
                props: {
                    title: '复制链接',
                    id: 'fBtn',
                    bgcolor: $color('#909399')
                },
                layout: function (make, view) {
                    make.top.equalTo($('videobof').bottom).inset(30)
                    make.right.inset(20);
                    make.height.equalTo(50);
                    make.width.equalTo(130)
                },
                events: {
                    tapped: function (sender) {
                        $clipboard.text = url;
                        $ui.toast('复制成功!');
                    }
                }
            }]
        }, by]
    });
}

function zhur() {
    var webView = $("web")
    webView.eval({
        script: `var URL = document.getElementsByClassName("btn btn-success")[0].href; window.name = URL`,
        handler: function (result, error) {
            if (result.code == 4) {
                if (count == 4) {
                    $('spinner').loading = false;
                    $ui.alert("解析失败\n请检查链接是否有问题")
                    timer.invalidate()
                }
                count++;

            } else {
                cgjm(result)
                timer.invalidate()
            }
        }
    })
}
function download(url) {
    $ui.toast("正在下载中 ...");
    $ui.loading(true);
    $http.download({
        url: url,
        handler: function (resp) {
            $ui.loading(false);
            if (resp.response.statusCode == "200") {
                $share.sheet(["download.mp4", resp.data]);
            } else {
                $ui.alert("下载失败");
            }
        }
    });
}

function tmenu(text) {
    var url = $detector.link(text);
    url = url[0]
    if (!url) {
        $ui.alert("请先输入视频链接");
    } else {
        $ui.toast("处理中，请稍后···")
        $('spinner').loading = true;
        if (url.search(/douyinshortvideo.|amemv.|iesdouyin.|douyin.com|huoshan.com|huoshan.|huoshanzhibo.|hotsoonzb.|smzhuhe.|woaidazhe./) != -1) {
            douyin(url);
        } else if (url.search(/tiktok.com|tiktokcdn.|tiktokv./) != -1) {
            tiktok(url);
        } else if (url.search(/pipix.com|hulushequ.|pipixia./) != -1) {
            pipix(url);
        } else if (url.search(/toutiaoimg.cn|365yg.com|ixigua.|xiguaapp.|xiguavideo.|xiguashipin.|pstatp.|zijiecdn.|toutiaocdn.|toutiaoimg.|toutiao12.|toutiao11.|neihanshequ./) != -1) {
            toutiao(url);
        } else if (url.search(/weixin.qq.com/) != -1) {
            weixin_gzh(url);
        } else if (url.search(/xiaohongshu.com/) != -1) {
            xiaohongshu(url);
        } else if (url.search(/gifshow.|kuaishou.|kwai.|kw./) != -1) {
            kuaishou(url);
        } else if (url.search(/vigovideo.|yxixy.|chenzhongtech.|miaopai.|xiaokaxiu.|yixia.|weibo.|weico.|meipai.|musical.|musemuse.|muscdn.|xiaoying.|vivavideo.|immomo.|momocdn.|inke.|flipagram.|163.|weishi.qq|qzone.qq|kg4.qq|kg3.qq|kg2.qq|kg1.qq|kg.qq|instagram.|hao222.|haokan.baidu|quduopai.|nuoruien./) != -1) {
            count = 1
            var turl = $cache.get("info").turl
            $('web').url = $text.base64Decode(turl) + url;
            timer = $timer.schedule({
                interval: 3,
                handler: function () {
                    zhur();
                }
            });
        } else {
            $ui.alert("暂不支持该链接解析\n请检测链接是否有误？\n或联系作者反馈");
            $('spinner').loading = false;
        }
    }
}

function douyin(url) {
    $http.get({
        url: url,
        handler: function (resp) {
            var text = resp.data.replace(/\n|\s|\r/g, "")
            var t = text.replace(/\\u0026/g, '"')
            var burl = t.match(/video_id=(\S*?)\"/)[1]
            cgjm($text.base64Decode($cache.get("info").douyin) + burl)
        }
    });
}

function tiktok(url) {
    tiktok = $cache.get("info").tiktok
    $http.post({
        url: $text.base64Decode(tiktok.durl),
        header: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: {
            url: url
        },
        handler: function (resp) {
            var text = resp.data.replace(/\n|\s|\r/g, "")
            var id = text.match(/<td><input(\S*?)<\/td>/g)[1]
            if (id.search("video/") != -1) {
                id = id.match(/\/video\/(\S*?)\//)[1]
            } else {
                id = id.match(/\/v\/(\S*?)\.html/)[1]
            }

            $http.post({
                url: $text.base64Decode(tiktok.jxurl) + "?aweme_ids=[" + id + "]&carrier_region=JP&is_my_cn=1&language=en&version_code=9.2.0&pass-region=1&app_name=musical_ly",
                header: {
                    "User-Agent": "TikTok/9.2.0 (iPhone; iOS 12.1; Scale/2.00)"
                },
                body: {
                },
                handler: function (resp) {
                    cgjm(resp.data.aweme_details[0].video.play_addr.url_list[0])
                }
            });
        }
    });
}

function pipix(url) {
    var id = url.match(/item\/([0-9]+)/)[1]
    $http.get({
        url: $text.base64Decode($cache.get("info").pipix) + id,
        handler: function (resp) {
            cgjm(resp.data.data.item.origin_video_download.url_list[0].url)
        }
    });
}

function toutiao(url) {
    $http.get({
        url: url,
        handler: function (resp) {
            var text = resp.data.replace(/\n|\s|\r/g, "")
            var id = text.match(/videoId:\'(\S*?)\'/)[1]
            cgjm($text.base64Decode($cache.get("info").toutiao) + id)
        }
    });
}

function weixin_gzh(url) {
    $http.get({
        url: url,
        handler: function (resp) {
            var text = resp.data.replace(/\n|\s|\r/g, "")
            // var id = text.match(/<iframeclass=\"video_iframe\".*?<\/iframe>/)[0]
            var vid = text.match(/;vid=(\S*?)\"/)[1];
            $http.get({
                url: $text.base64Decode($cache.get("info").weixin_gzh) + vid + "&defaultfmt=auto&&_qv_rmt=nvMLwa66A15612J60=&_qv_rmt2=DebxrcTN15187164w=&sdtfrom=v3010&callback=tvp_request_getinfo_callback_45248",
                handler: function (resp) {
                    var text = resp.data.replace(/\n|\s|\r/g, "")
                    var fn = text.match(/\"fn\":\"(\S*?)\"/)[1]
                    var fvkey = text.match(/\"fvkey\":\"(\S*?)\"/)[1]
                    var urlt = text.match(/\"url\":\"(\S*?)\"/)[1]
                    cgjm(urlt + fn + "?vkey=" + fvkey)
                }
            });
        }
    });
}

function xiaohongshu(url) {
    $http.get({
        url: $text.base64Decode($cache.get("info").xiaohongshu) + $text.URLEncode(url),
        header: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36",
        },
        handler: function (resp) {
            if (resp.data.errno == "0") {
                cgjm(resp.data.data.video)
            } else {
                $ui.toast("解析失败！")
                $('spinner').loading = false;
            }
        }
    });
}

function kuaishou(url) {
    $http.lengthen({
        url: url,
        handler: function (url) {
            var id = url.match(/photoId=(\S*?)\&/)[1]
            $http.get({
                url: $text.base64Decode($cache.get("info").kuaishou) + id,
                handler: function (resp) {
                    if (resp.data.result == 1) {
                        cgjm(resp.data.photo.mainUrl)
                    } else {
                        $ui.toast("解析失败！")
                        $('spinner').loading = false;
                    }
                }
            });
        }
    });
}