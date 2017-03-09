
function previewModel03 (){
    var self;
    self = new Ext.Panel({
        id:'previewModel03',
        cls:'previewModel03',
        baseCls:'',
        width:520,
        height:600,
        target:'model03',
        items:[{
            xtype:'panel',
            baseCls:'',
            id:'M03_TopPanel',
            cls:'M03_TopPanel',
            width:520,
            height:110,
            layout:{
                type:'hbox',
                align:'stretch'
            },
            defaults:{
                xtype:'label',
                margins:'20 0 0 0'
            },
            items:[{
                width:6,
                cls:'M03_TopBlank01'
            },{
                cls:'M03_TopBlank02',
                width:12,
                margins:'36 0 0 0'
            },{
                cls:'M03_TopBlank03',
                width:10,
                margins:'80 0 0 0'
            },{
                width:6,
                cls:'M03_TopBlank04'
            },{
                width:6,
                cls:'M03_TopBlank05',
                margins:'36 0 0 0'
            },{
                cls:'M03_TopBlank06',
                width:12,
                margins:'50 0 0 0'
            },{
                cls:'M03_TopBlank07',
                width:12,
                margins:'36 0 0 0'
            },{
                width:6,
                cls:'M03_TopBlank08'
            },{
                cls:'M03_TopBlank09',
                width:3
            },{
                id:'M03_Name',
                cls:'M03_Name',
                text:user.name,
                width:100,
                margins:'36 0 0 0'
            },{
                xtype:'panel',
                id:'M03_InfoPanel01',
                cls:'M03_InfoPanel',
                baseCls:'',
                width:150,
                layout:{
                    type:'vbox',
                    align:'stretch'
                },
                items:[{
                    xtype:'label',
                    height:20,
                    margins:'50 0 0 0',
                    cls:'M03_InfoLabel',
                    text:'应聘：'+user.job
                },{
                    xtype:'label',
                    height:20,
                    cls:'M03_InfoLabel',
                    text:'现居住地：'+user.address
                }]
            },{
                xtype:'panel',
                id:'M03_InfoPanel02',
                cls:'M03_InfoPanel',
                baseCls:'',
                flex:1,
                layout:{
                    type:'vbox',
                    align:'stretch'
                },
                items:[{
                    xtype:'label',
                    height:20,
                    margins:'50 0 0 0',
                    cls:'M03_InfoLabel',
                    text:'邮箱：'+user.email
                },{
                    xtype:'label',
                    height:20,
                    cls:'M03_InfoLabel',
                    text:'电话：'+user.phone
                }]
            }]
        },{
            xtype:'panel',
            baseCls:'',
            id:'M03_BlankPanel',
            cls:'M03_BlankPanel',
            width:436,
            height:3
        },{
            xtype:'panel',
            baseCls:'',
            id:'M03_ContentPanel',
            cls:'M03_ContentPanel',
            width:520,
            height:450,
            layout:{
                type:'hbox',
                align:'stretch'
            },
            items:[{
                xtype:'panel',
                baseCls:'',
                width:120,
                id:'M03_ContentLeft',
                cls:'M03_ContentLeft',
                layout:{
                    type:'vbox',
                    align:'stretch'
                },
                defaults:{
                    xtype:'label',
                    height:22
                },
                items:[{
                    text:'教育背景',
                    cls:'M03_EduLabel'
                },{
                    text:'专业技能',
                    cls:'M03_EduLabel',
                    margins:'110 0 0 0'
                },{
                    text:'特长爱好',
                    cls:'M03_EduLabel',
                    margins:'150 0 0 0'
                }]
            },{
                xtype:'panel',
                baseCls:'',
                width:355,
                id:'M03_ContentRight',
                cls:'M03_ContentRight',
                margins:'0 0 0 4',
                layout:{
                    type:'vbox',
                    align:'stretch'
                },
                defaults:{
                    xtype:'label',
                    height:22
                },
                items:[{
                    cls:'M03_BlankLabel',
                    margins:'0 344 0 0'
                },{
                    cls:'M03_EduContentLabel',
                    height:110,
                    margins:'0 0 0 5',
                    text:user.edu
                },{
                    cls:'M03_BlankLabel',
                    margins:'0 344 0 0'
                },{
                    cls:'M03_EduContentLabel',
                    height:150,
                    margins:'0 0 0 5',
                    text:user.skill
                },{
                    cls:'M03_BlankLabel',
                    margins:'0 344 0 0'
                },{
                    cls:'M03_EduContentLabel',
                    height:110,
                    margins:'0 0 0 5',
                    text:user.hobby
                }]

            }]
        }]
    });
    return self;
}
