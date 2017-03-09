
function previewModel02 (){
    var self;
    self = new Ext.Panel({
        id:'previewModel02',
        cls:'previewModel02',
        baseCls:'',
        width:400,
        height:600,
        target:'model02',
        layout: {
            type: "hbox",
            align: "stretch"
        },
        items:[{
            xtype:'panel',
            baseCls:'',
            id:'M02_LeftPanel',
            cls:'M02_LeftPanel',
            width:80,
            layout: {
                type: "vbox",
                align: "stretch"
            },
            defaults:{
                xtype:'label',
                height:22
            },
            items:[{
                id:'M02_NameLabel',
                cls:'M02_NameLabel',
                text:'Name',
                margins:'25 4 0 0'
            },{
                id:'M02_ContactLabel',
                cls:'M02_ContactLabel',
                text:'Contact',
                margins:'0 4 0 0'
            },{
                cls:'M02_NameLabel',
                text:'School',
                margins:'60 4 0 0'
            },{
                cls:'M02_ContactLabel',
                text:'Education',
                margins:'0 4 0 0'
            },{
                cls:'M02_NameLabel',
                text:'Major',
                margins:'130 4 0 0'
            },{
                cls:'M02_ContactLabel',
                text:'Skill',
                margins:'0 4 0 0'
            },{
                cls:'M02_NameLabel',
                text:'Hobby',
                margins:'100 4 0 0'
            },{
                cls:'M02_ContactLabel',
                text:'Qualities',
                margins:'0 4 0 0'
            }]
        },{
            xtype:'panel',
            baseCls:'',
            id:'M02_RightPanel',
            cls:'M02_RightPanel',
            width:320,
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items:[{
                xtype:'label',
                id:'M02_Name',
                cls:'M02_Name',
                height:30,
                margins:'21 0 0 6',
                text:user.name
            },{
                xtype:'label',
                id:'M02_Job',
                cls:'M02_Job',
                height:20,
                margins:'0 0 0 6',
                text:'应聘'+user.job
            },{
                xtype:'label',
                id:'M02_Email',
                cls:'M02_Email',
                height:18,
                margins:'2 0 0 6',
                text:'邮箱:'+user.email
            },{
                xtype:'label',
                id:'M02_Phone',
                cls:'M02_Email',
                height:18,
                margins:'0 0 0 6',
                text:'电话:'+user.phone
            },{
                xtype:'label',
                id:'M02_Address',
                cls:'M02_Email',
                height:18,
                margins:'0 0 0 6',
                text:'地址:'+user.address
            },{
                xtype:'label',
                cls:'M02_SpotLabel',
                height:9,
                margins:'9 302 0 6'
            },{
                xtype:'label',
                id:'M02_EduContentLabel',
                cls:'M02_EduContentLabel',
                height:154,
                margins:'0 0 0 11',
                text:user.edu
            },{
                xtype:'label',
                cls:'M02_SpotLabel',
                height:9,
                margins:'12 302 0 6'
            },{
                xtype:'label',
                id:'M02_SkillContentLabel',
                cls:'M02_EduContentLabel',
                height:122,
                margins:'0 0 0 11',
                text:user.skill
            },{
                xtype:'label',
                cls:'M02_SpotLabel',
                height:9,
                margins:'12 302 0 6'
            },{
                xtype:'label',
                id:'M02_HobbyContentLabel',
                cls:'M02_EduContentLabel',
                height:120,
                margins:'0 0 0 11',
                text:user.hobby
            }]
        }]
    });
    return self;
}
