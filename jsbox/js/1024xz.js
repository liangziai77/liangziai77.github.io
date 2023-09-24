/*
2023年9月24日 更新
更换源地址
脚本仅供代码学习，请勿分享。非法传播照成法律问题与作者无关。

by：iPhone 8、小良
https://iphone8.vip/
https://ae85.cn/
*/


$cache.set("id", "5")
$cache.set("pg", 1)
var js_name = "1024下载"
var urlt = $text.base64Decode("aHR0cHM6Ly95ajIzMDZzLmNsaWNrLw==")
var data = [{ "name": "亚洲無碼", "id": "5" }, { "name": "日本騎兵", "id": "22" }, { "name": "歐美新片", "id": "7" }, { "name": " 三級寫真", "id": "18" },]
const mrhb = {
    type: "button",
    props: {
      id: "hb_img",
      radius: 25,
      src: "https://iphone8.vip/img/hb.jpg",
    },
    events: {
      tapped: function(sender) {
        $app.openURL("https://ae85-1251930860.cos.ap-chengdu.myqcloud.com/hongbao.html")
      }
    },
    layout: function(make, view) {
      make.bottom.inset(50)
      make.width.height.equalTo(50)
      make.right.inset(15)
    }
  }
$ui.render({
    props: {
        title: js_name
    },
    views: [{
        type: "menu",
        props: {
            id: "meun",
            items: data.map(function (item) {
                return item.name
            }),
        },
        layout: function (make) {
            make.left.top.right.equalTo(0)
            make.height.equalTo(50)

        },
        events: {
            changed: function (sender) {
                $cache.set("id", data[sender.index].id)
                $cache.set("pg", 1)
                getdata()
            }
        }
    },
    {
        type: "list",
        layout: function (make) {
            make.right.left.bottom.inset(0)
            make.top.equalTo($("meun").bottom)
        },
        events: {
            didSelect: function (sender, indexPath, data) {
                var id = data.split("\n")
                geting(id[1], id[0])
            },
            didReachBottom: function (sender) {
                sender.endFetchingMore()
                var page = $cache.get("pg") + 1
                $cache.set("pg", page)
                getdata()
            }
        }

    },mrhb]
})

function getdata() {
    var id = $cache.get("id")
    var pg = $cache.get("pg")
    $ui.loading(true)
    $http.get({
        url: urlt + "pw/thread.php?fid=" + id + "&page=" + pg,
        handler: function (resp) {
            $ui.loading(false)
            var text = resp.data.replace(/\n|\s|\r/g, "")
            if (text.indexOf('普通主题') !== -1) {
                text = text.split("普通主题")[1]
            }
            var shu = text.match(/class=\"tr3t_one\">(\S*?)<\/h3>/g)
            if (pg == 1) {
                var data = []
            } else {
                var data = $("list").data
            }
            for (i in shu) {
                var a = shu[i]
                if (a.indexOf('href=') !== -1) {
                    var txt = a.split("<h3>")[1]
                    var mc = txt.match(/\">(\S*?)<\/a>/)[1]
                    var id = a.match(/href=\"(\S*?)\"/)[1]
                    data.push(mc + "\n" + id)
                }
            }
            $("list").data = data
            $("list").endFetchingMore()
        }
    })
}

getdata()

function geting(id, mc) {
    $ui.loading(true)
    $http.get({
        url: urlt + "pw/" + id,
        handler: function (resp) {
            $ui.loading(false)
            var text = resp.data.match(/id=\"read_tpc\">.*?<\/div>/)
            text = text[0].replace('id=\"read_tpc\">', "")
            var links = text.match(/href=\"(\S*?)\"/g)
            var shu = links[links.length - 1]
            var url = $detector.link(shu)[0];
            var html = `<html><head><meta charset="UTF-8"><title>${mc}</title><style> body,div{ font-size:42px;} </style> </head><body><div>${text}</body></html>`
            $ui.push({
                props: {
                    title: mc
                },
                views: [{
                    type: "web",
                    props: {
                        html: html,
                    },
                    layout: $layout.fill
                }, {
                    type: "button",
                    props: {
                        id: "hb_img",
                        src: "https://iphone8.vip/jsbox/img/xun.jpg",
                        radius: 30
                    },
                    events: {
                        tapped: function (sender) {
                            geturl(url, 1)
                        },
                        longPressed: function (sender) {
                            geturl(url, 2)
                        }
                    },
                    layout: function (make, view) {
                        make.top.inset(30)
                        make.width.height.equalTo(60)
                        make.right.inset(15)
                    }
                },mrhb]
            })
        }
    })
}

function geturl(url, dian) {
    var turl = url.match(/(http.?:\/\/.*?)\//)[1]
    $http.get({
        url: url,
        handler: function (resp) {
            $ui.loading(false)
            var text = resp.data.replace(/\n|\s|\r/g, "")
            var curl = text.match(/class=\"uk-button\"onclick=\"setpos\(\);\"href=\"(\S*?)\"/)[1]
            curl = turl + curl.replace(/amp;/g, "")
            $clipboard.text = curl
            if (dian == 1) {
                var canOpen = $app.openURL("thunder://" + $text.base64Encode("AA" + curl + "ZZ"));
                if (!canOpen) {
                    $ui.alert({
                        message: "请先安装迅雷",
                        actions: [{
                            title: "跳转安装",
                            handler: function () {
                                $app.openURL("https://iphone8.vip/yy.html");
                            }
                        },
                        {
                            title: "复制磁力链接",
                            handler: function () {
                                alert("已复制\n" + url)
                            }
                        }
                        ]
                    })
                }
            } else {
                alert("已复制磁力链接")
            }

        }
    })
}


async function get_updata() {
    const resp = await $http.get($text.base64Decode("aHR0cHM6Ly9pcGhvbmU4LnZpcC9jb25maWcvMTAyNC5qc29u"));
    if (resp.response.statusCode === 200) {
        if (resp.data.down.version != "2.3") {
            $ui.alert({
                title: "发现新版本 - " + resp.data.down.version,
                message: resp.data.down.upexplain,
                actions: [
                    {
                        title: "立即更新",
                        handler: function () {
                            download(resp.data.down.updata)
                        }
                    }, {
                        title: "取消"
                    }
                ]

            });

        }
    }
}
get_updata()

function download(url) {
    $ui.toast("正在安装中 ...");
    $http.download({
        url: url,
        handler: function (resp) {
            $addin.save({
                name: js_name,
                data: resp.data,
                handler: function () {
                    $ui.alert({
                        title: "安装完成",
                        message: "\n是否打开？\n" + js_name,
                        actions: [
                            {
                                title: "打开",
                                handler: function () {
                                    $app.openExtension(js_name)
                                }
                            },
                            {
                                title: "不了"
                            }]
                    });
                }
            })
        }
    })
}