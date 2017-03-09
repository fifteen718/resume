function colorClickFn (thisId,colorStyle){
    var thisCmp = Ext.getCmp(thisId);
    thisCmp.el.on("click", function () {
        for (var i = 0; i < Ext.select(".colorSelectChange").elements.length; i++) {
            var selectedId = Ext.select(".colorSelectChange").elements[i].id;
            var selectedCmp = Ext.getCmp(selectedId);
            selectedCmp.removeClass("colorSelectChange");
        }
        thisCmp.addClass("colorSelectChange");

        var nowCls = Ext.getCmp("resumePreview").el.dom.className;
        Ext.fly('resumePreview').replaceClass(nowCls, colorStyle);
    });
}

var colorSelectPanel = new Ext.Panel({
    xtype: 'panel',
    baseCls: '',
    id: 'colorSelectPanel',
    cls: 'colorSelectPanel',
    width: 500,
    height: 28,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    defaults: {
        xtype: 'label',
        width: 20,
        margins: '4 0 4 12'
    },
    items: [{
        text: '请选择你喜欢的颜色：',
        id: 'colorSelectPanelTitle',
        cls: 'colorSelectPanelTitle',
        width: 140,
        margins: '0 0 0 10'
    }, {
        id: 'color01',
        cls: 'colorSelectLabel color01',
        listeners: {
            afterrender: function () {
                colorClickFn("color01","colorStyle01");
            }
        }
    }, {
        id: 'color02',
        cls: 'colorSelectLabel color02',
        listeners: {
            afterrender: function () {
                colorClickFn("color02","colorStyle02");
            }
        }
    }, {
        id: 'color03',
        cls: 'colorSelectLabel color03',
        listeners: {
            afterrender: function () {
                colorClickFn("color03","colorStyle03");
            }
        }
    },{
        id: 'color04',
        cls: 'colorSelectLabel color04',
        listeners: {
            afterrender: function () {
                colorClickFn("color04","colorStyle04");
            }
        }
    },{
        id: 'color05',
        cls: 'colorSelectLabel color05',
        listeners: {
            afterrender: function () {
                colorClickFn("color05","colorStyle05");
            }
        }
    },{
        id: 'color06',
        cls: 'colorSelectLabel color06',
        listeners: {
            afterrender: function () {
                colorClickFn("color06","colorStyle06");
            }
        }
    }]
});

var screenToolPanel = new Ext.Panel({
    id: 'screenToolPanel',
    cls: 'screenToolPanel',
    baseCls:'',
    width: 120,
    height: 28,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
        xtype:'button',
        width:60,
        margins:'2 10 2 10',
        text:'生成图片',
        handler:function(){
            var length = Ext.getCmp("resumePreview").items.items.length;
            if (length < 1){
                kk.msg("请选择模板！");
                return false;
            } else {
                var nowId = Ext.getCmp("resumePreview").items.items[length - 1].id;
                var $previewIframe=$('#'+ nowId);
                html2canvas($previewIframe, {
                    onrendered: function(canvas) {
                        var url = canvas.toDataURL();
                        var triggerDownload = $("<a>").attr("href", url).attr("download", "简历.png").appendTo("body");
                        triggerDownload[0].click();
                        triggerDownload.remove();
                    }
                });
            }
        }
    },{
        xtype: 'label',
        width:16,
        margins:'6 10 6 10',
        id: 'fullBtn',
        cls: 'fullBtn',
        listeners: {
            afterrender: function () {
                this.el.on("click", function () {
                    kk.exitFullscreen();
                    kk.fullScreen(document.documentElement);
                    Ext.fly("fullBtn").toggleClass("EscBtn");
                });
            }
        }
    }]
});

var resumeTitle = new Ext.Panel({
    id: 'resumeTitle',
    baseCls: '',
    items: [{
        xtype: 'label',
        id: 'resumeTitleLabel',
        cls: 'resumeTitleLabel',
        width:249,
        text: 'MyResume'
    }, colorSelectPanel, screenToolPanel]
});
