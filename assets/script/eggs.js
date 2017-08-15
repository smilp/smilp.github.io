function addEgg() {
    //创建一个div
    var div = document.createElement('div');
    //设置div的属性
    div.id='eggdiv';
    div.innerHTML = '<iframe src="https://ykilin.moe/smilp/egg.html" frameborder="no" style="position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;max-width:600px;max-height:350px;display:block;margin:auto;text-align:center;border-radius:5px;"></iframe>';
    div.style.background = "rgba(0,0,0,.85)";
    div.style.position="fixed";
    div.style.zIndex=10000;
    div.style.top="0";
    div.style.bottom="0";
    div.style.left="0";
    div.style.right="0";
    div.onclick=function(){div.parentNode.removeChild(div);};
    var bo = document.body; //获取body对象.
    //动态插入到body中
    bo.insertBefore(div, bo.lastChild);
}
function eggNotice1(){
    alert("啊哈哈，是不是看到动的东西就很想点？可惜不是这里\n提示：仔细找吧，找到一个看似不能按却能按的地方，那就是了√");
}
function eggNotice2(){
    alert("提示：那是一个生日礼物噢！");
}
//儒创建的div我就不客气地借用啦嘻嘻（
function smilp1(){
    alert("哇我的妈，我就说怎么找不到你这玩意儿写哪儿的\n终于被我找到了嘻嘻嘻嘻嘻\n但是你不可以用奇怪的方法找\n请你慢慢把所有可能的一个个点开谢谢合作\n提示2：❤");
}
function smilp2(){
    alert("嗨嗨嗨，不是这里噢❤继续找找w");
}
function smilp3(){
    alert("嗯好的w恭喜恭喜w彩蛋的1/3：\n https://pan.baidu.com \n提示3：既然能找到这个了，下一个就知道是哪里了吧(ﾉ*･ω･)ﾉ");
}
function smilp4(){
    alert("彩蛋寻找完成度：2/3 鼓掌o(〃'▽'〃)o\n /s/1jI66h06 \n好啦，密码到底在哪里呢w\n提示last：你自己找咯◐▽◑");
}
function last(){
    alert("哇我的妈，搞这个东西真的要搞死我了\n然后我是故意不搞鼠标变化的\n也不知道你有没有使诈直接进来看源代码惹\n总之能找到这里真是辛苦了\n密码：8j4x\n我是不是很厉害！夸我夸我✧*｡٩(ˊωˋ*)و✧*｡;
}
