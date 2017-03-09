var kk = {};
var user = {};
user.name = "姓名";
user.job = "";
user.email = "";
user.phone = "";
user.address = "";
user.edu = "";
user.skill = "";
user.hobby = "";

kk.msg = function (type, msg, fn) {
    Ext.MessageBox.buttonText.ok = "确定";
    Ext.MessageBox.buttonText.cancel = "取消";
    Ext.MessageBox.buttonText.yes = "确定";
    Ext.MessageBox.buttonText.no = "取消";
    switch (type) {
        case "alert":
            Ext.MessageBox.show({
                closable: false,
                msg: msg,
                buttons: Ext.MessageBox.OK,
                fn: fn
            });
            break;
        case "confirm":
            Ext.MessageBox.confirm('', msg, fn);
            break;
        case "prompt":
            Ext.MessageBox.prompt('', msg, fn);
            break;
        default:
            Ext.MessageBox.show({
                msg: type,
                buttons: Ext.MessageBox.OK
            });
    }
};

//  全屏方法 传参 对象必须是 document.element
kk.fullScreen = function (element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
};

//  退出全屏 不用传参
kk.exitFullscreen = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
};