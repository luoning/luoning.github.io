var date=new Date;  
var year=date.getFullYear();   
var month=date.getMonth()+1;  
month =(month<10 ? "0"+month:month);  
var day=date.getDate() 
var mydate = (year.toString()+"/"+month.toString()+"/"+day.toString());  


var data={
    "name": "美食与旅行",
    "article": [{
        "title": "冰糖葫芦儿 · 甜",
        "img": "http://s1.cdn.xiachufang.com/71397168926111e5a10fb82a72e00100.jpg",
        "txt": "冰糖葫芦 酸甜有滋味，猜想娃应该喜欢吃，那么趁娃睡着了，作出几个来尝尝...",
        "time": "2017-10-22 09:10:00",
        "tags": {
            "tag": ["传统美食", "吃货尝鲜"]
        }
    }, {
        "title": "酸梅柠檬水",
        "img": "http://www.yiteng365.com/photos/dishesImage/213.jpg",
        "txt": "柠檬切片，放入锅中，倒入水，放入话梅。用小火把水煮开，然后保持小火的火力，继续煮大约3分钟后关火。晾凉后放入冰箱冰镇，透心亮后就可以喝了。",
        "time": "2017-10-23 14:31:00",
        "tags": {
            "tag": ["美味日常", "制作方便"]
        }
    }, {
        "title": "青梅酒",
        "img": "http://s9.rr.itc.cn/r/wapChange/20164_29_13/a80rzy41576591428596.jpg",
        "txt": "泡青梅用的白酒，度数可以选择中低度数的白酒，大约在25度-45度左右就可以了。我选用了29.5度的双蒸酒，口感灰常好，酸甜度刚好，也不太刺激！",
        "time": "2017-10-23 07:30:00",
        "tags": {
            "tag": ["时间大厨", "浓韵"]
        }
    }, {
        "title": "蛋黄酥",
        "img": "http://cp1.douguo.net/upload/caiku/d/f/6/600x400_dff8709a8050e03138858abcb41fb506.jpg",
        "txt": "蛋黄酥，中式酥皮点心，最好的口感是刚出炉的时候，外皮酥脆内馅绵软口感超赞！",
        "time": "2017-10-23 07:30:00",
        "tags": {
            "tag": ["吃货尝鲜", "好吃例证"]
        }
    } 
    ],
    "jieqi":[{
    	"title": "立春",
    	"txt":"谓春季开始之节气",
    	"time":[0, 3.87],
        "img":"https://my.yjbys.com/uploads/image/20161208/1481180671317789.jpg"
	},{
		"title": "雨水",
    	"txt":"冬去春来，气温回升，湿度增大，冷空气仍频繁。 ",
    	"time":[1,18.73],
        "img":"http://imgcdn.guoku.com/images/bc3540975ecbe844b261b82de5184057.jpg"
	},{
		"title": "惊蛰",
    	"txt":"冬天蛰伏土冬眠生物开始活动。乍寒乍暖。",
    	"time":[2,5.63],
        "img":"http://www.guoshu.cn/file/upload/201703/13/1312302524750.jpg"
	},{
		"title": "春分",
    	"txt":"阳光直照赤道，昼夜等长。",
    	"time":[3,20.646],
        "img":"http://img.mp.itc.cn/upload/20160321/94a6b8fbf77f40cb9c04306f297a64da_th.jpg"
	},{
		"title": "清明",
    	"txt":"气温回升，天气逐渐转暖。 ",
    	"time":[4,5.59],
        "img":"http://img.mp.itc.cn/upload/20170402/58cda38e00e440948009b3284bbf360c_th.jpg"
	},{
		"title": "谷雨",
    	"txt":"雨水增多，利于谷类生长。",
    	"time":[5,20.888],
        "img":"http://scimg.jb51.net/allimg/170316/106-1F31612130C25.jpg"
	},{
		"title": "立夏",
    	"txt":"万物生长，欣欣向荣。",
    	"time":[6,6.318],
        "img":"http://www.yn.chinanews.com/pub/uploadfile/2014/0505/20140505042412688.gif"
	},{
		"title": "小满",
    	"txt":"麦类等夏熟作物此时颗粒开始饱满，但未成熟。 ",
    	"time":[7,21.04],
        "img":"http://n1.itc.cn/img8/wb/recom/2016/05/19/146364684879831135.JPEG"
	},{
		"title": "芒种",
    	"txt":"麦类等有芒作物已经成熟，可以收藏种子。",
    	"time":[8,5.678],
        "img":"http://www.chzy.org.cn/uploadfile/2017/0605/20170605113522712.png"
	},{
		"title": "夏至",
    	"txt":"日光直射北回归线，“日北至，日长至，日影短至”，故曰“夏至”。 ",
    	"time":[9,21.37],
        "img":"http://www.hfec.cc/ueditor/php/upload/image/20160623/1466644698226141.jpg"
	},{
		"title": "小暑",
    	"txt":"入暑，标志着我国大部分地区进入炎热季节。 ",
    	"time":[10,7.108],
        "img":"http://pic1.win4000.com/wallpaper/d/577f56ef360d4.jpg"
	},{
		"title": "大暑",
    	"txt":"我国广大地区一年中最炎热的时期，“大暑不热”，雨水偏多。 ",
    	"time":[11,22.83],
        "img":"https://my.yjbys.com/uploads/image/20160719/1468898543128789.jpg"
	},{
		"title": "立秋",
    	"txt":"草木开始结果，到了收获季节。 ",
    	"time":[12,7.5],
        "img":"http://pic2.orsoon.com/2017/0523/20170523025029455.png"
	},{
		"title": "处暑",
    	"txt":"暑气即将结束，天气将变得凉爽了。正值秋收，降水十分宝贵。 ",
    	"time":[13,23.13],
        "img":"http://n1.itc.cn/img8/wb/recom/2016/08/23/147195032644848957.JPEG"
	},{
		"title": "白露",
    	"txt":"气温下降，晚上贴近地面的水气在草木上结成白色露珠。",
    	"time":[14,7.646],
        "img":"http://www.huizhou.cn/food/djys/201609/W020160908402091065564.png"
	},{
		"title": "秋分",
    	"txt":"日光直射点又回到赤道，形成昼夜等长。 ",
    	"time":[15,23.042],
        "img":"http://img.nongji360.com/n/news/2016/09/22/112711963681.jpg"
	},{
		"title": "寒露",
    	"txt":"天气更冷，露水有森森寒意，故名为“寒露风”。",
    	"time":[16,8.318],
        "img":"http://img.mp.itc.cn/upload/20161008/6f77779a606a4df19984592ca14a835c_th.jpeg"
	},{
		"title": "霜降",
    	"txt":"霜对生长中的农作物危害很大。",
    	"time":[17,23.438],
        "img":"http://img.mp.itc.cn/upload/20161023/89585096631e4d27a62b87ab4e5b781e_th.jpeg"
	},{
		"title": "立冬",
    	"txt":"每年11月7日前后。",
    	"time":[18,7.438],
        "img":"./img/ld.jpg"
	},{
		"title": "小雪",
    	"txt":"大地尚未过于寒冷，虽开始降雪，但雪量不大",
    	"time":[19,22.36],
        "img":"http://365jia.cn/uploads/news/folder_1744198/images/ff6835bcf54da8a2c6fc2822fc120450.jpg"
	},{
		"title": "大雪",
    	"txt":"此时太阳直射点快接近南回归线，北半球昼短夜长。",
    	"time":[20,7.18],
        "img":"http://www.tianqi.com/upload/article/13-11-25/XKiA_131125091458_1.jpg"
	},{
		"title": "冬至",
    	"txt":"白昼最短的一天。气温持续下降，进入“三九”。",
    	"time":[21,21.94],
        "img":"http://img.cnys.com/uploads/121019/1-12101Z93509D0.jpg"
	},{
		"title": "小寒",
    	"txt":"此时气候开始寒冷。",
    	"time":[22,5.4055],
        "img":"http://pic1.16pic.com/00/11/74/16pic_1174833_b.jpg"
	},{
		"title": "大寒",
    	"txt":"一年中最寒冷的时候。",
    	"time":[23,20.12],
        "img":"http://365jia.cn/uploads/news/folder_1744198/images/a8ffb0f08fdb7b593bfec2e15cf0976b.jpeg"
	}
    ] 
}

