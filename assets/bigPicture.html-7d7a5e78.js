import{_ as r,Y as d,Z as t,a0 as l,a1 as i,a2 as a,$ as e,H as s}from"./framework-8c11374e.js";const o={},p=l("blockquote",null,[l("p",null,[l("strong",null,"导言：学编程最缺的是一个全面的整体的视角和框架，而不是什么知识点"),l("em",null,"好比是学盖房子 ，但有人告诉你打地基很重要然后一直教你打地基 ，你打了三年地基还是不知道怎么盖房子；另一波人又告诉你房屋装修很重要，然后一直教你装修，装了三年修还是不知道怎么盖房子。还有教你拌水泥的、烧砖的... 它们确实很重要，但在一开始不应该只学部分而没有整体结构。"),l("strong",null,"只学部分而没有整体结构会导致很多人不知道能干什么，能做什么，看不懂项目。")])],-1),c=l("h2",{id:"编程语言结构",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#编程语言结构","aria-hidden":"true"},"#"),i(" 编程语言结构")],-1),u={href:"https://www.bilibili.com/video/BV1aY411A7oL/?spm_id_from=333.999.0.0&vd_source=76760acef1cb4d83b7c2dbdf4e22b12c",target:"_blank",rel:"noopener noreferrer"},h=e('<h3 id="第一关-用js语言认识数据和函数" tabindex="-1"><a class="header-anchor" href="#第一关-用js语言认识数据和函数" aria-hidden="true">#</a> 第一关：用JS语言认识数据和函数</h3><p>模型：数据与函数</p><ul><li><p>数据Data是保存在内存或硬盘上的信息；函数function是处理数据的逻辑和过程，也可翻译为功能。</p></li><li><p>在一个能运行js的程序环境中输入let AAA</p></li><li><p>let是关键词，翻译过来是让、要，作用是告诉系统，我要一点儿内存来存放数据，系统听到就划一些内存给它保存这个数据。</p></li><li><p>现在AAA里什么值都没有，接下来给它加具体值，直接写AAA = “显示一行文字”，AAA就保存了这段文字。</p></li><li><p><strong>注意📢，此处的“=”等于号不是数学里的相等，而是左边的声明要了一块内存，相当于有了一个小包包，右边的这段字符数据放进了这个小包包里面。</strong></p></li><li><p>let是赋予的意思。</p></li><li><p>也可以直接写let BBB = “这样写更方便”创建数据。</p></li></ul><p>数据创建好了，要怎么样利用它呢？这时候该函数登场了。</p><ul><li><p>函数就是功能，用来处理数据的。</p></li><li><p>浏览器环境里有很多自带的函数，例如window.document.write(AAA)窗口.文档.写入函数</p></li><li><p>点号在代码里代表分级包含关系，相当于我的家庭.我的妈妈.做饭函数</p></li><li><p>让函数执行需要加上括号，括号里就是调用它执行的参数</p></li><li><p>这行代码的意思是调用窗口里的文档里的写函数，参数是AAA，浏览器的页面上就会写出这个数据的具体值了——显示一行文字</p></li><li><p>调用 我的家庭.我的妈妈.做饭函数（西红柿，鸡蛋）→ 桌子上出现一盘西红柿炒鸡蛋</p></li><li><p>除了调用环境自带的函数，也可自定义函数function kongHanShu()</p></li></ul><h3 id="第二关-与网页交互——写一个点赞函数" tabindex="-1"><a class="header-anchor" href="#第二关-与网页交互——写一个点赞函数" aria-hidden="true">#</a> 第二关：与网页交互——写一个点赞函数</h3><p>![[网页交互-点赞函数代码.png]]</p><ul><li>button标签有个特殊的属性，Onclick dianzan()这个属性会监听你的鼠标点击行为。当鼠标点击这个标签时它就会调用里面这个名字的函数。</li><li>js代码写在script标签里，在这里写一个dianzan函数。</li></ul><p>dianzan函数的内部计算过程是：</p><ul><li>第一步先用浏览器自带的标签选择器函数获取到点赞数标签，放在点赞数标签这个数据里；getElementById函数——get是获取，Element是元素，By是通过，Id是id属性，加起来就是通过网页元素id属性的值获取到这个标签。</li><li>第二步声明一个点赞数的数据，用parseInt这个函数把标签里的文字转化为数字；inner内部，text文字，parse是转化，int是整数，加起来就是把点赞数标签的内部文字转化成整数。为什么要转化一下？因为浏览器的机制是获取到标签的内容都会是字符形式，文字和数字不能相加对吧，所以要转化一下。</li><li>第三步声明一个叫新数字的标签，值就是点赞数加1。</li><li>最后一步，把新的数字给到标签的内部文本，就完成了；后面这个return有没有都行，因为这个函数不需要返回值。程序从上到下执行完自然会结束。</li></ul><h3 id="第三关-函数的计算过程——真实世界的点赞函数" tabindex="-1"><a class="header-anchor" href="#第三关-函数的计算过程——真实世界的点赞函数" aria-hidden="true">#</a> 第三关：函数的计算过程——真实世界的点赞函数</h3><ul><li>真实世界的点赞函数不会这么简单，let声明的数据只会保存在当前运行的内存上，一刷新就没了。</li><li>真实的数据都保存在服务器数据库上，用伪代码模拟一下：</li><li>![[函数计算过程-真实世界函数伪代码.png]]</li><li>接收两个参数，用户的id即uid，视频的id即bv</li><li>然后调用数据库函数database，查询点赞记录这张表里面是否有这个用户点赞这个视频的记录。</li><li>如果有就执行取消点赞。数据库中的该视频点赞数减1.</li><li>删除点赞记录。</li><li>再调用浏览器函数把返回的新点赞数渲染到屏幕上。</li><li>如果没有，那么就点赞数加1，添加点赞记录渲染画面</li><li>数据库的表就相当于Excel表格或记事本。不同记事本有不同类型的记录，这里就是点赞记录表和视频点赞数表。</li><li>函数的计算过程：加减乘除之类的<strong>运算符号</strong> 和 判断循环之类的<strong>控制结构</strong>→多学几种就能实现各种各样的程序逻辑</li><li>真实的会更复杂一些：数据库的函数一般在服务器上使用，也会有网络通信函数等更多功能和判断，但是新手了解这些就足够了。后面再学实际项目的时候慢慢补充。</li></ul><h3 id="第四关-结构和本质" tabindex="-1"><a class="header-anchor" href="#第四关-结构和本质" aria-hidden="true">#</a> 第四关：结构和本质</h3><p>js结构图 ![[js结构图.png]]</p><ul><li><p>也可以把它放到其他语言中。比如java中的类，拆开就是数据与函数的集合</p></li><li><p>只有把边界划分好，才能更加清晰地去学习编程语言</p></li><li><p>数据可以通过let等关键词保存在内存里；</p></li><li><p>可以通过内存数据库的函数保存在其他内存中；</p></li><li><p>可以通过浏览器的函数保存在浏览器中；</p></li><li><p>可以通过文件系统的函数保存在电脑或服务器上的文件系统中；</p></li><li><p>更多的是数据库的函数保存在数据库中。</p></li><li><p>不同类型和用途的数据保存在不同的地方。</p></li><li><p>函数就是一个接收输入参数、计算功能、输出结果的一个过程。</p></li><li><p>中间的计算过程包括加减乘除等运算和判断循环之类的控制结构。</p></li><li><p>它可以处理各种或简单或复杂的逻辑，将数据处理成我们想要的样子，将程序运行成我们期待的功能。</p></li><li><p>也被称为算法，但其实拆开了看就是大家都会的逻辑和数学计算。</p></li><li><p>我们平常生活中的很多思考和处理足以超过绝大多数的程序逻辑。</p></li><li><p>唯一阻碍我们的是面对陌生事物的恐惧。</p></li><li><p>编程不陌生，完全可以自学学会。</p></li><li></li><li><p>不仅是编程，任何事物都有结构。当我们去拆开分析才能更好研究本质。</p></li></ul><h4 id="拆解自己" tabindex="-1"><a class="header-anchor" href="#拆解自己" aria-hidden="true">#</a> 拆解自己</h4><ul><li>阻碍学好编程最大困难不是编程本身难，最大问题是缺乏动力。</li><li>我为什么要学编程？</li><li>除了数字化趋势，工资等老生常谈的原因， 最大原因应该是编程让人快乐。</li></ul><h4 id="拆解快乐" tabindex="-1"><a class="header-anchor" href="#拆解快乐" aria-hidden="true">#</a> 拆解快乐</h4><ul><li>在脑科学领域，快乐的感觉本质是一些激素，比如多巴胺、血清素、内啡肽之类的。</li><li>没有好快之分，缺一不可。</li><li>但随着现代科技的爆炸式发展，一些东西被过度利用了。比如多巴胺。</li><li>人类原始大脑认为获取信息对我们的存活和发展是有用的，所以会分泌激素保证我们的好奇心探索欲。没有的人类已经被自然选择淘汰了。</li><li>但是这套机制的变化完全赶不上现代社会信息的爆炸增长。一打开手机就会有各种各样推荐的文章视频和音乐。</li><li>推荐机制会充分利用我们的大脑结构（大脑皮层-边缘系统-中脑-脑干）和分泌的各种激素，让我们因获取信息而兴奋。然后越刷越会被精准推送，这样一个大循环下来，形成了神经依赖，塑造了当下的我们。</li></ul><h5 id="欲望的信使——多巴胺" tabindex="-1"><a class="header-anchor" href="#欲望的信使——多巴胺" aria-hidden="true">#</a> 欲望的信使——多巴胺</h5><ul><li>多巴胺在其中发挥重要作用。<strong>但多巴胺在大脑中不代表快乐，而是一种奖励机制，作用于渴望。</strong></li><li>喝一杯奶茶的时候里面的糖分和咖啡因会让身体反馈很好喝， 大脑神经突触就会被塑性。 之后一想到奶茶，多巴胺就会大量分泌，作用于促使我们去喝的渴望；如果欲望不被满足，就会产生焦虑痛苦等副作用。</li><li>刷短视频一样，获得新鲜信息的反馈已经塑造了奖励机制， 形成了神经依赖。 不刷就焦虑。</li><li>为什么不刷就焦虑？因为多巴胺是奖励，作用于渴望，想的时候会产生，没有得到就会身心焦虑烦躁， 一直提醒。但一旦获得， 多巴胺就会停止，因为奖励已经完成。这就是刷视频玩游戏过后会很空虚的原因，<strong>因为这种机制带来的不是真正的快乐。</strong></li><li>而且当我们被这种奖励机制奴役，兴奋的阈值会越来越高。以前能刺激到的信息现在已经刺激不到了，迫使内容创作者也在不断挑战更加猎奇更加刺激的信息来赢得关注。在内容领域劣币驱逐良币，用心创作的有深度内容不容易被关注。但这总有到头的时候，到那一刻就很难快乐了。</li><li>如果对很多内容已经感到无聊了，那想一想生活中的快乐频率是否也减少了。</li></ul><p>个人思考</p>',22),b=l("li",null,[i("从成本收益角度来看，"),l("strong",null,"上网冲浪对大脑来说是低成本行为"),i("；短期涌上去的快感算高回报，中期内耗痛苦，长期抑郁：")],-1),f=l("li",null,[l("strong",null,"短期与中长期对冲——收益几乎为零或者是负数，低成本但却是亏本买卖。")],-1),g=l("li",null,[i("而"),l("strong",null,"学习对大脑来说是高成本行为"),i("；短期低回报，中期间断性快乐（学会的时候找到工作的时候发工资的时候），长期源源不断的幸福感和获得感：")],-1),_=l("li",null,[l("strong",null,"无论短期还是中长期收益为正并随着复利效应持续增高，高成本超高回报。")],-1),v=l("li",null,"![[生活选择-成本收益.jpg]]",-1),m={href:"https://www.bilibili.com/video/BV1YR4y187Dw/?spm_id_from=333.999.0.0&vd_source=76760acef1cb4d83b7c2dbdf4e22b12c",target:"_blank",rel:"noopener noreferrer"},x=l("li",null,"多巴胺脱瘾——刻意训练，避免高刺激活动，让大脑不再处于大量多巴胺中，让多巴胺受体恢复（多巴胺上瘾类似于糖尿病患者肥胖患者的胰岛素抵抗）",-1),w=l("li",null,"这样为什么有用？就好比一个天天下馆子的人，给他一碗米饭没有配菜，他会觉得无法接受；但设想一下，他到了一个荒岛上，岛上什么吃的也没有，此时再给他一碗米饭估计会很珍惜，这碗普通的米饭也没那么糟糕了。",-1),j=l("li",null,"多巴胺脱瘾也是同样的原理，通过极大地可以降低阈值，无聊的事情比如运动学习打扫卫生也会变得有趣起来。取而代之的是，你必须把更多的多巴胺跟真正有益于你的事情结合起来，比如健身，比如学习，比如深入专注，比如写作。",-1),A=e('<h5 id="什么是真正的快乐" tabindex="-1"><a class="header-anchor" href="#什么是真正的快乐" aria-hidden="true">#</a> 什么是真正的快乐？</h5><ul><li>学界无定论，内啡肽和血清素是重要因素。</li><li>很多时候表现为内心的宁静、成就感、幸福感、获得感、满足感这些长期快乐的感觉。</li><li>产生机制很复杂，可以被观测到的有学习、记忆、创造、运动、稳定的社会关系、被肯定、安全、社群地位等。和我们的实际生活体验确实的对应的。</li><li>关于学习和创造</li><li>谁能拒绝亲手做一件东西的快乐呢？</li><li>从这个角度上看，编程投入可控，创造无上限，性价比还是挺高的。</li></ul><p>疑惑：学习不应该是痛苦的吗？</p><ul><li>大脑机制，内啡肽之类的激素产生比较慢；</li><li>但是与之相反，面对脱离舒适区的恐惧时，大脑杏仁核（位于边缘系统）却反应迅速。</li><li>![[内啡肽与杏仁核.png]]</li><li><strong>在学习的过程中没有很好的正反馈去调动多巴胺和内啡肽之类的激素，压倒恐惧和焦虑的感觉，那么不断积累的烦躁和节约能量的潜意识就会阻止去学习。</strong></li></ul><h2 id="前后端全景图" tabindex="-1"><a class="header-anchor" href="#前后端全景图" aria-hidden="true">#</a> 前后端全景图</h2>',5),S={href:"https://www.bilibili.com/video/BV1iY4y157WD/?spm_id_from=333.999.0.0&vd_source=76760acef1cb4d83b7c2dbdf4e22b12c",target:"_blank",rel:"noopener noreferrer"},B=l("li",null,"![[数据与函数.png]]",-1),y=e(`<h3 id="创建数据的关键词" tabindex="-1"><a class="header-anchor" href="#创建数据的关键词" aria-hidden="true">#</a> 创建数据的关键词</h3><ul><li>let创建的数据是变量</li><li>const创建的数据是常量</li><li>function mingcheng(){}专门用来创建函数数据的</li><li>var被淘汰，因为会跑出作用域，有风险污染全局变量</li></ul><h3 id="数据都有什么样" tabindex="-1"><a class="header-anchor" href="#数据都有什么样" aria-hidden="true">#</a> 数据都有什么样？</h3><ul><li>在js中，所有数据在底层都是对象object，简单理解就是一堆数据的集合；</li><li>对象和单独创建数据相比不需要关键词let，也不需要 = 号，而是 ：号</li><li><strong>这种形式专业名词叫“键值对” key:value 名字:具体的值</strong></li><li>MDN上js的数据结构分为原始值和对象两类，原始值包括文本字符string，数字number，布尔值boolean，空值null，未定义undefined，大整数bigint，符号类型symbol</li><li>注意null和undefined的区别：如果一个a数据为空，那么他的值是null；而undefined代表根本没有a数据被定义，所以尽量不要用undefined，处理不好容易报错</li><li>原始值在底层还是对象，自带很多功能函数和属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let ren = {
    name:&quot;corinne&quot;,      //文本字符string 被引号包裹，单双反引号都可
    age:18,              //数字number
    Sheisagirl:true,     //布尔值boolean 真和假，是和否
    hobby:{              //对象里面可以再嵌套对象，无限叠加下去
        first:reading
        second:dancing
        three:sleeping
    },
    income:null,         //空值null
    future:undefined,    //未定义undefined 不要给自己贴标签，也不要给未来设限，觉得自己是女性还是个文科生或者年级大了就不能转码了。人生来是自由的，即使戴着镣铐但依然可以跳舞；你必须竭尽所能去朝这个目标努力，日进一卒，真诚对己。
    fans:18014398509481984n //大整数bigint，数字超过2的53次方时使用，格式是后面的数字加个字母n
    ID number:Symbol(&#39;xxxxx&#39;) //符号类型，创建唯一且不可修改的值
    
}  //一个大括号就是一个空对象，在这个大括号里面可以加任何数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数也是对象，但其中有计算过程</li><li>特殊的对象是数组array，非常关键的数据类型，结构可以是平级的数据无线排列，也可以包括所有原始值和对象<code>let data = [1,true,null,{a:&quot;a&quot;}]</code></li><li>另一个特殊对象，正则reg对象</li></ul><p>js通用内置对象数据，见MDN</p>`,7),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"},E=e("<p>不同运行环境不同的内置数据。</p><ul><li>比如当你的js代码运行在浏览器中时就会自带window对象，包含关于浏览器功能的数据和函数。用window对象完成所有对网页的控制。</li><li>插入标签和图片，循环播放，使用动画等，都可以用window对象中的函数实现出来。</li></ul><p>📢<strong>编程语言本身只有计算的功能，就是一个有数据有函数的环境。它能实现的所有功能都是由不同环境提供的，而不同环境又是由不同函数实现的。一层一层嵌套下去，最终反映在调用硬件的电流开关上，屏幕的led灯，内存的电门，硬盘的电位等等</strong></p><ul><li><p>除了浏览器，也可通过node.js等框架运行在服务器上，这些框架会提供给它几个对象用来操作文件系统，网络通信，数据库函数等等。</p></li><li><p>框架和库、包之类的名词都差不多，所有组合了功能，提供了便利的函数，都可以叫框架和库</p></li><li><p>没有框架就要自己烧砖拌水泥自己盖房子，框架相当于别人已经给你弄好毛坯房，自己直接往里面加装修就行</p></li><li><p>微信小程序里面有个wx对象用来操控小程序，其他厂商有不同的名字但本质一样</p></li><li><p>还有app里的，桌面端，智能硬件里面的，各种各样的环境数据，用的时候查文档就行</p></li><li><p>假如人是js，那么当人在房间里运行时可以调用房间里的数据和函数，比如查看房间面积，开灯之类的；当人在汽车中运行的时候可以调用汽车里的数据和函数，看汽车时速或者踩油门等等</p></li><li><p>代码里有个特殊的部分就是注释，对代码的说明，是写给人看的，程序会忽略。分单行注释（vscode快捷键：command+/）和多行注释（vscode快捷键：shift+option+a）</p></li></ul><p>数据命名规则</p>",5),N={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E5%85%B3%E9%94%AE%E5%AD%97",target:"_blank",rel:"noopener noreferrer"},z=e("<li><p>不能以数字开头</p></li><li><p>字母大小写严格区分</p></li><li><p>起名字一看就知道是什么数据，代码不仅是给电脑看的，也是给人看的</p></li><li><p>小驼峰写法（通用）——首字母小写，后面的单词首字母大写用于区分</p></li><li><p>用js关键词创建的这些数据，都是保存在环境内存中的，一刷新或重启</p></li><li><p>一切数据都会回到刚打开的状态</p></li><li><p>也就是代码定义好的那些</p></li><li><p>运行过程中改变的都不会保存</p></li>",8),D=e(`<h3 id="内存数据和硬盘数据" tabindex="-1"><a class="header-anchor" href="#内存数据和硬盘数据" aria-hidden="true">#</a> 内存数据和硬盘数据</h3><ul><li>数据库，存放数据的仓库</li><li>内存数据库，可以理解为在服务器上运行的一个对象object</li><li>如果不做保存的话重启还是会丢数据</li><li>大部分数据库的数据都是保存在硬盘上</li></ul><h4 id="前端后端" tabindex="-1"><a class="header-anchor" href="#前端后端" aria-hidden="true">#</a> 前端后端</h4><p>![[前端后端.png]]</p><ul><li>前端就是用户的设备，比如电脑手机手环</li><li>给这些设备开发浏览器网页app小程序之类的就叫做前端开发</li><li>主要的工作内容就是处理用户界面和交互逻辑</li><li>后端就是服务器，网络，数据库之类的</li><li>运行在服务器上的程序就叫服务server，主要作用是处理数据库和安全</li></ul><h5 id="为什么要分前后端" tabindex="-1"><a class="header-anchor" href="#为什么要分前后端" aria-hidden="true">#</a> 为什么要分前后端</h5><ul><li><p>1.数据需要集中储存。比如发一条动态别人怎么能看到？所以要保存在服务器的数据库上，这样别人一上线查询服务器数据库就能看到我的动态了</p></li><li><ol start="2"><li>安全。前端的代码所有人都能看到，如果前端直连数据库的话，那数据库的安全没有保证。所以一般都是后端开一个服务，公开一个网络地址，这个服务的名词叫做API应用程序接口，会判断前端发过来不同的网络请求数据，分别调用对应的函数或其他服务。这些函数根据传来的参数去操作数据库进行处理。这样一来前端只发送固定的参数，接收结果的数据，用户再通过不同的api接口完成各种数据功能的同时，也不会知道内部具体代码是怎么样的就很安全。</li></ol></li><li><p>3.权限管理。一些软件之所以有破解版，要么是故意不防，要么是实现功能不走一圈后端。破解也就是把前端代码里判断vip的部分给改掉，而如果所有功能由后端实现，后端每一次都会查一下在数据库里到底是不是vip，不是的话就不返回相关数据就不可能破解。在线应用和游戏无法破解就是这个原因。同样的道理也适合企业管理软件等等需要鉴别用户权限的产品。</p></li><li><p>只有知道前端后端的作用才能写好完整的项目，这个很重要，对理解产品有很好的帮助。</p></li></ul><p>前端数据库</p><ul><li>写了一个浏览器小工具但数据只保存在内存中一刷新就没了</li><li>加上浏览器的localStorage函数来CRUD数据</li><li>局限：前端数据库只保存在当前浏览器中，换一个浏览器或电脑前面保存的就没有了。</li><li>想在任何前端都可以同步怎么办？后端登场</li></ul><p>前后端交互流程 ![[前后端交互.png]]</p><ul><li>前端根据用户的行为执行不同的函数，通过网络函数请求服务器地址API；</li><li>后端接收到请求数据后根据参数执行对应的函数。这些函数可能会操作数据库并发送回前端执行结果数据。</li><li>前端收到数据后进行相应操作然后再接着循环不断。</li><li>通俗解释，如果前端发来的信是GET属性那么后端回复系统上的这个文字文件的内容；如果前端发来的信是POST属性那么后端就用发来的url数据替换掉原先的文字文件内容；如果前端发来的信是DELETE属性那么后端就把文字文件的内容清空；其他属性就啥也不干返回空值</li><li>安装好node.js打开终端，然后输入node文件名server.js，回车会提示服务已启动</li><li>电脑的自身网络地址是localhost，端口是3000，也可以设置别的端口，一般最好在2000-10000之间，不会占用电脑里其他服务的端口</li><li>本地用别人看不到，有公网ip或域名的时候才能让别人访问</li><li>改一下前端：把localStorage函数替换掉，使用浏览器的网络请求函数fetch:拉取</li><li>大概的逻辑：原先增删改查数据是调用localStorage函数操作浏览器数据库；现在增删改查数据是调用网络通信函数fetch给后端服务，后端对请求来的数据进行判断后再调用fs函数增删改查实际的文件数据；这样的话前端就不会直接操作数据库，在保证安全的情况下完成了数据的统一存取；</li><li>那如果把fs函数换成数据库函数，道理是一样的；数据库可以理解为是提供更强大的性能和功能的文件系统。如果是部署到服务器上，都是统一请求你的服务器地址，全世界的用户都会看到同步的数据</li><li>基础就是这些，后面就是熟悉各种库各种框架各种函数的用法</li></ul><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><h4 id="函数作用-处理数据-实现逻辑-交互" tabindex="-1"><a class="header-anchor" href="#函数作用-处理数据-实现逻辑-交互" aria-hidden="true">#</a> 函数作用：处理数据，实现逻辑，交互</h4><ul><li>![[函数作用.png]]</li><li>数据的增删改查：发了一个视频写了一条评论都是；不仅在js运行环境的列表对象内增加一条，在数据库内也增加了；有些数据是我们填写的，但更多数据是函数内部根据代码设置添加上去的；</li><li>数据类型转换：在函数的计算过程中逻辑运算符和判断if都是只判断数据的真和假，就是布尔类型的数据true和false；但是很多代码里判断的数据不是true和false，各种各样的都有，这就是js语言中的隐式转换，默认的隐藏的转换。除了null，undefined，空字符串&quot;&quot;，NaN，0，false这六个，其他的数据在判断时会一律转化为true，这个规则需要死记硬背。在if判断某个数据时，只要预期不是这6个值，那么这个if判断就是ok的，会执行大括号里面的代码。</li><li>第二个是比较运算符转换。1 === 1 肯定就是true，1 !== 2 也是true，后面大于小于之类的道理一样。<strong>注意📢：一个等于号是赋值，三个等于号才是等于</strong></li><li>第三个是函数转换。js运行环境内置String(),Number()Boolean()之类的函数可以把参数强制转为该类型的数据。boolean()的逻辑就是隐式转换的逻辑，还有一些自带的或是数据对象内置的，比如toString()就是转化为String字符串</li><li>交互就是去调用环境框架的函数，从而使用特定设备或软件的功能。之前写的点赞函数就是非常典型的例子。</li><li>人机交互就是处理人类的行为。系统交互就是处理机器的行为。</li></ul><h4 id="函数结构-参数-计算过程-输出结果" tabindex="-1"><a class="header-anchor" href="#函数结构-参数-计算过程-输出结果" aria-hidden="true">#</a> 函数结构：参数，计算过程，输出结果</h4><ul><li>参数不仅可以是数据，也可以是函数。把a函数当做参数传入b函数内部，b函数里面可以再执行作为参数的a函数。把参数理解为函数要使用的材料就行。</li><li>在声明函数时要在括号内指定接收参数，比如function jiaFa(a,b){return a+b}，如果调用时不传参数jiaFa()，那么a和b就是undefined，会报错。如果传入过多参数abcd，那么cd会被忽略。</li><li>函数的计算过程有两大类：运算符号和控制结构。</li></ul><h5 id="运算符号" tabindex="-1"><a class="header-anchor" href="#运算符号" aria-hidden="true">#</a> 运算符号</h5><ul><li>算术运算符就是加减乘除和求余。自增自减看图谱解释就行。<strong>赋值运算符要知道等于号不是数学的相等，而是将右边的值赋予左边的数据名称。</strong> 其他几个能看懂就行，尽量不要用。</li><li>比较运算符就是为了得出true和false这两个结果供后面的逻辑和判断使用。</li><li>逻辑运算符主要用于两个运算场景，一个是放在判断里面，就比如&amp;&amp;andand符号：当a数据为真且b数据也为真时判断OK；第二个是用于赋值，比如let c = a || b，那么当a是真值那么c就赋值为a；如果a是假值那么看b值是否为真，如果是真的话那么c就是b的值，也是假的，c才是false。问号？？控制合并符和||符号很像但他的左值是null或undefined时才会认为是假，在左值有可能为false0或空字符串的情况下进行赋值。感叹号是取反，它就是隐式转换后再取反值，比如!2，2的隐式转换是true，加一个!是false</li><li>条件运算符一般用于赋值。let d = a?b:c 当a为真时赋值d为b，当a为假时赋值d为c，其实就是一个简写的if else结构</li><li>扩展运算符不好讲，先去图谱里的文章看一下</li><li>一元运算符里typeof主要是用于判断数据类型，具体看文章。delete用于删除一个对象的属性。void用得少。</li><li>位运算符知道就行，前期用不上。</li></ul><h5 id="控制结构" tabindex="-1"><a class="header-anchor" href="#控制结构" aria-hidden="true">#</a> 控制结构</h5><ul><li>判断就是if else，如果否则。可以单独一个if，判断括号里面的内容为真，那么执行大括号里的代码。也可以加上else进行否则判断或者是else if否则如果的判断</li><li>switch的底层和if没啥区别，就是代码好看一点</li><li>循环其实也很简单，主要看for循环，while尽量不要用，新手容易写bug，实际项目中也不怎么用</li><li>for循环有三种。一种是单独的for，就相当于有个计数器来控制循环次数，看结构：for的括号里面参数用分号去分开，第一个参数是声明数字，第二个参数是判断逻辑，第三个参数是这一次循环结束后要执行的逻辑。通俗说就是先让i为0，如果i小于5那么执行大括号里的代码一次，然后i+1再次循环。</li><li>第二种是for of循环，数组里有几个项就循环几次，value是当前循环的数据项的值，这个示例可以log显示array数组里的所有数组成员</li><li>第三种是for in。和上面类似，只不过是循环查看对象的属性。 <code>for(let property in object)</code>object是对象，property是对象的属性名。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(let p in {a:1,b:2}){console.log(p)}
// a
   b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>最后是输出：函数的输出就是返回给调用方，比如<code>let a = hanShu()</code>，a就是hanShu()的返回数据，输出可以没有，可以是数据，也可以是函数。</p></li><li><p>以上是标准函数</p></li><li><p>但函数还有好几种形式。比如箭头函数。这个东西的好处在于不用写function关键词，语法更简洁：一个等于号加一个大于号=&gt;连接左边的参数和右边的大括号里的逻辑，如果省略大括号相当于直接return</p></li><li><p>还有很重要的异步函数。</p></li><li><p>异步：在程序的执行过程中，当需要执行一个长时间任务时，如果程序等着任务执行完再执行下面的就会造成后面来的计算阻塞，这时候就需要把这个任务划分到异步队列里去计算，让后面的通行，等异步计算完成后，再回来进行下一步。</p></li><li><p>相当于做饭时如果等米饭好了再做菜一步一步顺序执行太慢了，把煮米饭的任务交给电饭煲异步出去，同时炒菜，等菜做好，电饭煲那边的异步计算也完成了就是饭也好了，再拿饭过来和菜一同执行吃的函数。</p></li><li><p>一开始js中只有回调函数来处理异步任务：<strong>把另一个函数当做参数传进去，当这个函数的数据处理完成后再利用传入进来的这个回调函数把数据发送回去</strong>。很复杂而且写多了套娃太多，自己都看不懂代码，这就叫js的<strong>回调地狱</strong>。</p></li><li><p>因为写回调太痛苦了，后面开发出来promise函数来解决。promise：在承诺里面函数来处理数据，这时候的处理过程都是在异步任务队列里面，不影响主程序。承诺函数自带两个函数——resolve，reject。当</p></li></ul>`,22);function V(I,q){const n=s("ExternalLinkIcon");return d(),t("div",null,[p,c,l("ul",null,[l("li",null,[l("a",u,[i("https://www.bilibili.com/video/BV1aY411A7oL/?spm_id_from=333.999.0.0&vd_source=76760acef1cb4d83b7c2dbdf4e22b12c"),a(n)])])]),h,l("ul",null,[b,f,g,_,v,l("li",null,[l("a",m,[i("https://www.bilibili.com/video/BV1YR4y187Dw/?spm_id_from=333.999.0.0&vd_source=76760acef1cb4d83b7c2dbdf4e22b12c"),a(n)])]),x,w,j]),A,l("ul",null,[l("li",null,[l("a",S,[i("https://www.bilibili.com/video/BV1iY4y157WD/?spm_id_from=333.999.0.0&vd_source=76760acef1cb4d83b7c2dbdf4e22b12c"),a(n)])]),B]),y,l("ul",null,[l("li",null,[l("a",k,[i("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects"),a(n)])])]),E,l("ul",null,[l("li",null,[l("p",null,[l("a",N,[i("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#关键字"),a(n)]),i(" 避免内置的保留关键词")])]),z]),D])}const R=r(o,[["render",V],["__file","bigPicture.html.vue"]]);export{R as default};
