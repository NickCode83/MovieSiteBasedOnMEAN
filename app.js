var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');




//首先翻译这句英文，大概的意思就是新版的express中已经不包含bodyparser了，那就需要大家单独安装bodyparser，安装命令是npm install body-parser,然后在app.js中加载body-parser模块var bodyParser = require('body-parser')，把app.use(express.bodyParser())替换成app.use(bodyParser.urlencoded({ extended: false }))，这样调试就没问题了。

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());




app.use(express.static(path.join(__dirname,'bower_components')));
app.listen(port);

console.log('imooc started on port ' + port);

//route
//index page
app.get('/',function(req,res){
res.render('index',{
title:'demo1 首页1',
movies:[{
title:'钢铁侠',
_id:1,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
},{
title:'钢铁侠',
_id:2,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
},{
title:'钢铁侠',
_id:3,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
},{
title:'钢铁侠',
_id:4,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
},{
title:'钢铁侠',
_id:5,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
},{
title:'钢铁侠',
_id:6,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
}]
});
});

//detail page
app.get('/movie/:id',function(req,res){
res.render('detail',{
title:'demo1 详情页',
movie:{
director:'javan',
country:'china',
title:'钢铁侠',
year:2014,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
language:'chinese',
flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
}
});
});

//list page
app.get('/admin/list',function(req,res){
res.render('list',{
title:'demo1 列表页',
movies:[{
_id:1,
director:'javan',
country:'china',
title:'钢铁侠',
year:2014,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
language:'chinese',
flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
},{
_id:2,
director:'javan',
country:'china',
title:'钢铁侠',
year:2014,
poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
language:'chinese',
flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
summary:'中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造'
}]
});
});

//admin page
app.get('/admin/movie',function(req,res){
res.render('admin',{
title:'demo1 后台录入页',
movie:{
director:'',
country:'',
title:'',
year:'',
poster:'',
language:'',
flash:'',
summary:''
}
});
});
