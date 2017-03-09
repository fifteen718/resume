Ext.onReady(function(){
    console.log("\n德\n\n玛\n\n西\n\n亚\n\n！\n\nhttp://blog.csdn.net/fifteen718");
    new Ext.Viewport({
        layout:'border',
        defaults:{
            collapsible:true
        },
        items:[{
            region:'north',
            height:28,
            baseCls:'',
            id:'northPanel',
            cls:'northPanel',
            collapsible:false,
            items:[resumeTitle]
        },{
            title:'简历预览',
            region:'center',
            id:'centerPanel',
            cls:'centerPanel',
            collapsible:false,
            autoScroll:true,
            items:[resumePreview]
        },{
            title:'信息栏',
            region:'west',
            minSize:100,
            maxSize:300,
            width:250,
            items:[resumePersonalInfo]
        },{
            title:'模板中心',
            region:'east',
            minSize:100,
            maxSize:300,
            width:250,
            items:[resumeModelCenter]
        }]
    });

});