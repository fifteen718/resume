function previewModel01() {
    var self;
    self = new Ext.Panel({
        id: 'previewModel01',
        cls: 'previewModel01',
        baseCls: '',
        width: 400,
        height: 600,
        target: 'model01',
        layout: {
            type: "vbox",
            align: "stretch"
        },
        items: [{
            xtype: 'panel',
            id: 'selfPanel',
            baseCls: '',
            height: 120,
            margins: '20 10 0 10',
            layout: {
                type: "hbox",
                align: "stretch"
            },
            items: [{
                xtype: 'panel',
                width: 200,
                baseCls: '',
                layout: {
                    type: "vbox",
                    align: "stretch"
                },
                items: [{
                    xtype: 'label',
                    id: 'resultNameLabel',
                    cls: 'resultNameLabel',
                    text: user.name,
                    height: 20
                }, {
                    xtype: 'label',
                    id: 'resultJobLabel',
                    cls: 'resultJobLabel',
                    text: '应聘岗位：' + user.job,
                    height: 18,
                    margins: '6 0 0 0'
                }, {
                    xtype: 'label',
                    id: 'resultEmailLabel',
                    cls: 'resultEmailLabel',
                    text: '邮箱：'+ user.email,
                    height: 18,
                    margins: '8 0 0 0'
                }, {
                    xtype: 'label',
                    id: 'resultPhoneLabel',
                    cls: 'resultPhoneLabel',
                    text: '电话：'+ user.phone,
                    height: 18,
                    margins: '2 0 0 0'
                }, {
                    xtype: 'label',
                    id: 'resultAddressLabel',
                    cls: 'resultAddressLabel',
                    text: '地址：' + user.address,
                    height: 18,
                    margins: '2 0 0 0'
                }]
            }, {
                baseCls: '',
                flex: 1
            }, {
                xtype: 'panel',
                baseCls: '',
                cls: 'resultHeadImgPanel',
                id: 'resultHeadImgPanel',
                width: 45,
                margins: '0 5 60 0'

            }]
        }, {
            xtype: 'panel',
            baseCls: '',
            id: 'eduPanel',
            cls: 'eduPanel',
            height: 180,
            margins: '0 10 0 10',
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [{
                xtype: 'label',
                id: 'eduTitleLabel',
                cls: 'eduTitleLabel',
                height: 18,
                margins: '10 0 3 0',
                text: '教育背景'
            }, {
                xtype: 'label',
                baseCls: '',
                id: 'eduContentLabel',
                cls: 'eduContentLabel',
                flex: 1,
                text:user.edu
            }]
        }, {
            xtype: 'panel',
            baseCls: '',
            id: 'skillPanel',
            cls: 'eduPanel',
            height: 180,
            margins: '0 10 0 10',
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [{
                xtype: 'label',
                id: 'skillTitleLabel',
                cls: 'eduTitleLabel',
                height: 18,
                margins: '10 0 3 0',
                text: '专业技能'
            }, {
                xtype: 'label',
                baseCls: '',
                id: 'skillContentLabel',
                cls: 'eduContentLabel',
                flex: 1,
                text:user.skill
            }]
        }, {
            xtype: 'panel',
            baseCls: '',
            id: 'hobbyPanel',
            cls: 'eduPanel',
            height: 180,
            margins: '0 10 0 10',
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [{
                xtype: 'label',
                id: 'hobbyTitleLabel',
                cls: 'eduTitleLabel',
                height: 18,
                margins: '10 0 3 0',
                text: '特长爱好'
            }, {
                xtype: 'label',
                baseCls: '',
                id: 'hobbyContentLabel',
                cls: 'eduContentLabel',
                flex: 1,
                text:user.hobby
            }]
        }]
    });
    return self;
}