$ui.render({
  props: {
    title: "在线福利 - iPhone 8、小良"
  },
  views: [{
    type: "list",
    props: {
      rowHeight: 64.0,
      separatorInset: $insets(0, 5, 0, 0),
      template: [{
          type: "image",
          props: {
            id: "image"
          },
          layout: function(make, view) {
            make.left.top.bottom.inset(5)
            make.width.equalTo(view.height)
          }
        },
        {
          type: "label",
          props: {
            id: "label",
            font: $font("bold", 17),
            lines: 0
          },
          layout: function(make) {
            make.left.equalTo($("image").right).offset(10)
            make.top.bottom.equalTo(0)
            make.right.inset(10)
          }
        }
      ],
      actions: [{
          title: "Share",
          handler: function(tableView, indexPath) {
            var object = tableView.object(indexPath)
            $share.sheet([object.url, object.label.text])
          }
        },
        {
          title: "Open",
          handler: function(tableView, indexPath) {
            $app.openURL(tableView.object(indexPath).url)
          }
        }
      ]
    },
    layout: $layout.fill,
    events: {
      didSelect: function(tableView, indexPath) {
        openURL(tableView.object(indexPath).url)
      },
      pulled: function(sender) {
        refetch()
      }
    }
  }]
})

function refetch() {
  $http.get({
    url: "http://yao07.3vfree.net/zxflx.html",
    handler: function(resp) {
      render(resp.data.stories)
      $cache.set("stories", resp.data.stories)
    }
  })
}

function render(stories) {
  var data = []
  for (var idx in stories) {
    var story = stories[idx]
    data.push({
      url: "" + story.id,
      image: {
        src: story.images[0]
      },
      label: {
        text: story.title
      }
    })
  }
  $("list").data = data
  $("list").endRefreshing()
}

function openURL(url) {
  $ui.push({
    props: {
      title: url
    },
    views: [{
      type: "web",
      props: {
        url: url
      },
      layout: $layout.fill
    }]
  })
}

var cache = $cache.get("stories")

if (cache) {
  render(cache)
}

refetch()
