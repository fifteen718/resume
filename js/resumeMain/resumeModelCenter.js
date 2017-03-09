
function modelClick(modelId,previewModelId){
    // 1、添加选中样式
    for (var i = 0; i < Ext.select(".modelBasicSelect").elements.length; i++) {
        var selectedId = Ext.select(".modelBasicSelect").elements[i].id;
        var selectedCmp = Ext.getCmp(selectedId);
        selectedCmp.removeClass("modelBasicSelect");
    }
    Ext.getCmp(modelId).addClass("modelBasicSelect");

    // 2、显示选中模板
    if(Ext.getCmp("resumePreview").items){
        Ext.getCmp("resumePreview").removeAll();
    }
    var previewModel = previewModelId();
    resumePreview.add(previewModel);
    resumePreview.doLayout();
}

var resumeModelCenter = new Ext.Panel({
    baseCls: '',
    id: 'resumeModelCenter',
    items: [{
        xtype: 'panel',
        id: 'model01',
        cls: 'modelBasic model01',
        baseCls: '',
        width: 50,
        height: 70,
        listeners: {
            afterrender: function () {
                this.el.on("click", function () {
                    modelClick(this.id,previewModel01);
                });
            }
        }
    }, {
        xtype: 'panel',
        id: 'model02',
        cls: 'modelBasic model02',
        baseCls: '',
        width: 50,
        height: 70,
        listeners: {
            afterrender: function () {
                this.el.on("click", function () {
                    modelClick(this.id,previewModel02);
                });
            }
        }
    }, {
        xtype: 'panel',
        id: 'model03',
        cls: 'modelBasic model03',
        baseCls: '',
        width: 50,
        height: 70,
        listeners: {
            afterrender: function () {
                this.el.on("click", function () {
                    modelClick(this.id,previewModel03);
                });
            }
        }
    }]
});
