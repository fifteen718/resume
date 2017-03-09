
var resumePersonalInfo = new Ext.Panel({
    id:'resumePersonalInfo',
    cls:'resumePersonalInfo',
    baseCls:'',
    items:[{
        xtype:'panel',
        id:'namePanel',
        cls:'namePanel',
        baseCls:'',
        width:220,
        height:24,
        layout: {
            type: "hbox",
            align: "stretch"
        },
        items:[{
            xtype:'label',
            id:'nameLabel',
            cls: 'nameLabel',
            text:'姓名：',
            width:66
        },{
            xtype:'textfield',
            id:'nameTextField',
            cls:'nameTextField',
            width:140
        }]
    },{
        xtype:'panel',
        id:'jobPanel',
        cls:'namePanel',
        baseCls:'',
        width:220,
        height:24,
        layout: {
            type: "hbox",
            align: "stretch"
        },
        items:[{
            xtype:'label',
            id:'jobLabel',
            cls: 'nameLabel',
            text:'应聘岗位：',
            width:66
        },{
            xtype:'textfield',
            id:'jobTextField',
            cls:'nameTextField',
            width:140
        }]
    },{
        xtype:'panel',
        id:'emailPanel',
        cls:'namePanel',
        baseCls:'',
        width:220,
        height:24,
        layout: {
            type: "hbox",
            align: "stretch"
        },
        items:[{
            xtype:'label',
            id:'emailLabel',
            cls: 'nameLabel',
            text:'邮箱：',
            width:66
        },{
            xtype:'textfield',
            id:'emailTextField',
            cls:'nameTextField',
            width:140
        }]
    },{
        xtype:'panel',
        id:'phonePanel',
        cls:'namePanel',
        baseCls:'',
        width:220,
        height:24,
        layout: {
            type: "hbox",
            align: "stretch"
        },
        items:[{
            xtype:'label',
            id:'phoneLabel',
            cls: 'nameLabel',
            text:'电话：',
            width:66
        },{
            xtype:'textfield',
            id:'phoneTextField',
            cls:'nameTextField',
            width:140
        }]
    },{
        xtype:'panel',
        id:'addressPanel',
        cls:'namePanel',
        baseCls:'',
        width:220,
        height:24,
        layout: {
            type: "hbox",
            align: "stretch"
        },
        items:[{
            xtype:'label',
            id:'addressLabel',
            cls: 'nameLabel',
            text:'现居地：',
            width:66
        },{
            xtype:'textfield',
            id:'addressTextField',
            cls:'nameTextField',
            width:140
        }]
    },{
        xtype:'tabpanel',
        id:'infoTabPanel',
        cls:'infoTabPanel',
        width:230,
        height:200,
        activeTab:0,
        defaults:{
            autoScroll:true
        },
        items:[{
            title:'教育背景',
            xtype:'textarea',
            id:'eduTextarea',
            cls:'eduTextarea'
        },{
            title:'专业技能',
            xtype:'textarea',
            id:'skillTextarea',
            cls:'eduTextarea'
        },{
            title:'特长爱好',
            xtype:'textarea',
            id:'hobbyTextarea',
            cls:'eduTextarea'
        }]
    },{
        xtype:'panel',
        id:'infoButtonsPanel',
        cls:'infoButtonsPanel',
        baseCls:'',
        width:250,
        height:24,
        layout: {
            type: "hbox",
            align: "stretch"
        },
        items:[{
            xtype:'button',
            id:'infoResetBtn',
            cls:'infoResetBtn',
            text:'重置',
            width:60,
            margins:'0 0 0 50',
            handler:function(){
                var inputEl = Ext.select(".resumePersonalInfo input").elements;
                for (var i=0; i<inputEl.length; i++) {
                    inputEl[i].value = null;
                }
                Ext.getCmp("eduTextarea").setValue(null);
                Ext.getCmp("skillTextarea").setValue(null);
                Ext.getCmp("hobbyTextarea").setValue(null);
            }
        },{
            baseCls:'',
            flex:1
        },{
            xtype:'button',
            id:'infoSureBtn',
            cls:'infoSureBtn',
            text:'确定',
            width:60,
            margins:'0 50 0 0',
            handler:function(){
                var userName = Ext.getCmp("nameTextField").getValue();
                var userJob = Ext.getCmp("jobTextField").getValue();
                var userEmail = Ext.getCmp("emailTextField").getValue();
                var userPhone = Ext.getCmp("phoneTextField").getValue();
                var userAddress = Ext.getCmp("addressTextField").getValue();
                var userEdu = Ext.getCmp("eduTextarea").getValue();
                var userSkill = Ext.getCmp("skillTextarea").getValue();
                var userHobby = Ext.getCmp("hobbyTextarea").getValue();
                if (userName == null || userName.match(/^[ ]*$/)) {
                    kk.msg("alert", "名字不能为空！", function () {
                        Ext.getCmp("nameTextField").setValue(null);
                        Ext.getCmp("nameTextField").focus();
                    });
                    return false;
                }

                user.name = userName;
                user.job = userJob;
                user.email = userEmail;
                user.phone = userPhone;
                user.address = userAddress;
                user.edu = userEdu;
                user.skill = userSkill;
                user.hobby = userHobby;

                if ( Ext.getCmp("resumePreview").items.items.length == 0 ){
                    Ext.getCmp("model01").el.dom.click();
                } else {
                    var modelId = Ext.getCmp("resumePreview").items.items[0].target;
                    Ext.getCmp(modelId).el.dom.click();
                }
            }
        }]
    }]
});