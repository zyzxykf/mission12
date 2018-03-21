/*fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: '/home/nodeJs/public'
  })
});*/

//给所有js css png文件rul地址添加hash值；
fis.match('*.{css,png}', {
  useHash: true
});
fis.match('baidu-logged.js', {
  useHash: true
});

// js压缩 fis-optimizer-uglify-js 插件进行压缩
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

// css压缩 fis-optimizer-clean-css 插件进行压缩
fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

// png压缩 fis-optimizer-png-compressor 插件进行压缩
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// html压缩 invoke fis-optimizer-html-minifier
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
})

//简单合并
fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});