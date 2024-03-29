/*
直播 - 秋名山见 1.6
2018年11月20日
更新：修复不能用问题。
内容不可描述
by：iPhone 8、小良
https://iphone8.vip/
*/

var template = [{
    type: "image",
    props: {
        id: "tx",
        radius: 30
    },
    layout: function (make, view) {
        make.top.inset(1)
        make.centerX.equalTo(view.center)
        make.width.height.equalTo(60)

    }
}, {
    type: "label",
    props: {
        id: "mc",
        textColor: $color("#149bcc"),
        align: $align.center
    },
    layout(make, view) {
        make.right.left.inset(0)
        make.top.equalTo($("tx").bottom).inset(5)
        make.height.equalTo(30)
    }
},]

var szan = {
    type: "button",
    props: {
        id: "hb_img",
        src: "https://iphone8.vip/img/xl.png",
    },
    events: {
        tapped: function (sender) {
            sz()
        }
    },
    layout: function (make, view) {
        make.bottom.inset(30)
        make.width.height.equalTo(60)
        make.right.inset(15)
    }
}
if (typeof ($cache.get("acquiescence")) == "undefined") {
    $cache.set("acquiescence", 0)
}

var urls = [{
    name: "VLC",
    url: "vlc://",
    store: "https://itunes.apple.com/cn/app/vlc-for-mobile/id650377962?mt=8"
}, {
    name: "OPlayer Lite",
    url: "OPlayerLite://",
    store: "https://itunes.apple.com/cn/app/%E6%92%AD%E6%94%BE%E5%99%A8oplayer-lite-%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/id385907472?mt=8"
},
{
    name: "nPlayer",
    url: "nplayer-",
    store: "https://itunes.apple.com/cn/app/nplayer-lite/id1078835991?mt=8"
}
]
function zjm() {
    $ui.render({
        props: {
            title: "直播 - 秋名山见 1.6"
        },
        views: [{
            type: "matrix",
            props: {
                columns: 4,
                itemHeight: 98,
                spacing: 3,
                template: template
            },
            layout: function (make) {
                make.top.left.bottom.right.equalTo(0)
            },
            events: {
                didSelect: function (sender, indexPath, obj) {
                    getlist(obj.id, obj.mc.text)
                },
            }
        }, szan]
    })
}
const base64 = "aHR0cHM6Ly9hlzg1LmNuL3Bpbi96YjQuanNvbg=="
$ui.loading(true)
$http.get({
    url: $text.base64Decode(base64.replace(/lz/, "ZT")),
    handler: function (resp) {
        $ui.loading(false)
        if (resp.response.statusCode == "200") {
            var info = resp.data;
            $cache.set("info", info)
            if (info.version != "1.6") {
                $ui.alert({
                    title: "温馨提示",
                    message: info.Ucontent,
                    actions: [{
                        title: "进入官网",
                        handler: function () {
                            $app.openURL(info.xl)
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

function cshyz() {
    $ui.render({
        props: {
            title: "直播 - 秋名山见 1.6"
        },
        views: [
            {
                type: "label",
                props: {
                    id: "dx1",
                    text: "为了防止脚本和谐速度过快,请输入密码进行验证",
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
                            tcgg()
                            getpt()
                        } else {
                            $ui.toast("验证失败……");
                            $ui.alert(
                                "请输入正确的密码\n如果不知道密码\n请到公众号：小良科技\n公众号ID：ae85-cn\n上回复 903 获取"
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
                    html: `<head><meta charset="UTF-8"></head><body><span style="font-size:34px;"><h1>使用说明：</h1><h2>为了防止脚本恶意传播，密码将会定期修改，失效后重新到公众号获取即可。</h2><h1>密码获取：</h1><h2>前往公众号【小良科技】在聊天窗口中回复〖903〗即可获取。<br></h2><br><h1><a href="http://t.cn/E7LC0v4">点击观看</a> 视频教程</h1> <h1><a href="https://iphone8.vip/lxfs.html">关注公众号</a> 小良科技</h1><h2>by：iPhone 8、小良&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://iphone8.vip/">https://iphone8.vip/</a> </h2></span></body>`
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

function yanz() {
    var file = $file.read("key.txt");
    if (!file) {
        cshyz();
    } else {
        if (yzmm(file.string)) {
            zjm();
            tcgg()
            getpt()
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
    var gg = $cache.get("info").dont
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

function getpt() {
    var key = $cache.get("info").turl
    $ui.loading(true)
    $http.get({
        url: $text.base64Decode(key.replace(/lz/, "Fw")) + "json.txt",
        header: {
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; MP1603 Build/NMF26O)"
        },
        handler: function (resp) {
            $ui.loading(false)
            var json = resp.data.pingtai
            var data = []
            for (i in json) {
                var arr = json[i]
                data.push({
                    tx: { src: arr.xinimg },
                    mc: { text: arr.title + "(" + arr.Number + ")" },
                    id: arr.address
                })
            }
            $("matrix").data = data
            $("matrix").endRefreshing()
        }
    })
}

function getlist(id, mc) {
    var key = $cache.get("info").turl
    $ui.loading(true)
    $http.get({
        url: $text.base64Decode(key.replace(/lz/, "Fw")) + id,
        header: {
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.1; MP1603 Build/NMF26O)"
        },
        handler: function (resp) {
            $ui.loading(false)
            var json = resp.data.zhubo
            var data = []
            for (i in json) {
                var arr = json[i]
                data.push({
                    tx: { src: arr.img },
                    mc: { text: arr.title },
                    id: arr.address
                })
            }
            $ui.push({
                props: {
                    title: mc + " - 主播列表"
                },
                views: [{
                    type: "matrix",
                    props: {
                        columns: 4,
                        itemHeight: 98,
                        spacing: 3,
                        template: template,
                        data: data
                    },
                    layout: function (make) {
                        make.top.left.bottom.right.equalTo(0)
                    },
                    events: {
                        didSelect: function (sender, indexPath, obj) {
                            openbf(obj.id)
                        },
                    }
                }, szan]
            })
        }
    })
}

function openbf(url) {
    var bbf = urls[$cache.get("acquiescence")]
    var canOpen = $app.openURL(bbf.url + url);
    if (!canOpen) {
        $ui.alert({
            message: "请先安装 " + bbf.name,
            actions: [{
                title: "跳转安装",
                handler: function () {
                    $app.openURL(bbf.store);
                }
            },
            {
                title: "设置其他播放器",
                handler: function () {
                    sz()
                }
            }
            ]
        })
    }
    return canOpen;
}

function sz() {
    $ui.push({
        props: {
            title: "设置"
        },
        views: [{
            type: "list",
            props: {
                data: [{
                    title: "选择设置默认播放器",
                    rows: [{
                        type: "tab",
                        props: {
                            items: urls.map(function (item) { return item.name }),
                            index: $cache.get("acquiescence")

                        },
                        layout: $layout.center,
                        events: {
                            changed: function (sender) {
                                $cache.set("acquiescence", sender.index)

                            }
                        }
                    }]
                }, {
                    title: "安装播放器",
                    rows: [" VLC       -  跳转App Store商店下载", "OPlayer -  跳转App Store商店下载", " nPlayer -  跳转App Store商店下载"]
                }, {
                    title: "使用帮助",
                    rows: ["作者官网", "微信公众号", "关于脚本"]
                }],
                footer: {
                    type: "label",
                    props: {
                        height: 100,
                        lines: 0,
                        text: "by：iPhone 8、小良\nhttps://iphone8.vip/",
                        textColor: $color("#198567"),
                        align: $align.center,
                        font: $font(16)
                    }
                }
            },
            layout: $layout.fill,
            events: {
                didSelect: function (sender, indexPath, data) {
                    if (data == " VLC       -  跳转App Store商店下载") {
                        $app.openURL(urls[0].store)
                    } else if (data == "OPlayer -  跳转App Store商店下载") {
                        $app.openURL(urls[1].store)
                    } else if (data == " nPlayer -  跳转App Store商店下载") {
                        $app.openURL(urls[2].store)
                    } else if (data == "作者官网") {
                        web("https://iphone8.vip/", "iPhone 8、小良")
                    } else if (data == "微信公众号") {
                        web("https://iphone8.vip/lxfs.html", "微信公众号-小良Ge")
                    } else if (data == "关于脚本") {
                        web("http://qq.cn.hn/g32", "直播-秋名山见")
                    }
                }
            }
        }]
    })
}

function web(url, text) {
    $ui.push({
        props: {
            title: text
        },
        views: [{
            type: "web",
            props: {
                url: url
            },
            layout: $layout.fill
        }

        ]
    })

}