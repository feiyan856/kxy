var size = 40;
var size1 = 10;
var yy = 200;
var yy1 = 250;
var graphDrillDown={
    getOption:function(){
        var option = null ;
        option = {
            tooltip: {
                formatter: '{b}'
            },
            backgroundColor: '#0F0C29',
            animationDuration: 1000,
            animationEasingUpdate: 'quinticInOut',

            // 图底部的图示
            // legend: [{
            //  formatter: function(name) {
            //      return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
            // },
            // tooltip: {
            //    show: true
            // },
            //  selectedMode: 'false',
            //  top: 20,
            //  right: 0,
            //  textStyle: {
            //      color: '#464646'
            //   },
            //data: ['用户体验度', '专业化咨询', '办事流程优化', '投诉建议', '其他', '监督', '特点', '专业']
            // }],

            series: [{
                name: '知识体系',
                type: 'graph',
                layout: 'force',
                force: {
                    repulsion: 30,
                    gravity: 0.1,
                    edgeLength: 30,
                    layoutAnimation: true,
                },
                // 名称及对应位置
                data: [{
                    "name": "重庆知行宏图科技有限公司",
                    //symbol: 'image://../app_themes/assets/img/1.jpg',
                    x: 10,
                    y: yy,
                    "symbolSize": 80,
                    label: {
                        normal: {
                            position: 'inside',
                            fontSize: 14,
                            color: '#fff',
                        }
                    },
                    "draggable": "true"
                }, {
                    "name": "张三",
                    x: 10,
                    y: yy,
                    "symbolSize": size,
                    "category": "张三",
                    "draggable": "true",
                    label: {
                        normal: {
                            position: 'inside',
                            fontSize: 14,
                            color: '#fff',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'orange'
                        }
                    }
                }, {
                    x: 70,
                    y: yy,
                    "name": "王五",
                    "symbolSize": size,
                    "category": "王五",
                    "draggable": "true",
                    label: {
                        normal: {
                            position: 'inside',
                            fontSize: 14,
                            color: '#fff',
                        }
                    },
                }, {
                    x: 140,
                    y: yy1,
                    "name": "重庆药友有限公司",
                    "symbolSize": size,
                    "category": "重庆药友有限公司",
                    "draggable": "true",
                    label: {
                        normal: {
                            position: 'inside',
                            fontSize: 14,
                            color: '#fff',
                        }
                    },
                }, {
                    "name": "李四",
                    x: 150,
                    y: yy1,
                    "symbolSize": size,
                    "category": "李四",
                    "draggable": "true",
                    label: {
                        normal: {
                            position: 'inside',
                            fontSize: 14,
                            color: '#fff',
                        }
                    },

                }, {
                    x: 220,
                    y: yy1,
                    "name": "鸿七",
                    "symbolSize": size,
                    "category": "鸿七",
                    "draggable": "true",
                    label: {
                        normal: {
                            position: 'inside',
                            fontSize: 14,
                            color: '#fff',
                        }
                    },
                }, ],
                // 对应关系
                links: [{
                    "source": "重庆知行宏图科技有限公司",
                    "target": "张三",
                    "name": '法定代表人',
                    "tooltip": {
                        "trigger": 'item',
                        "formatter": function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    "label": {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    "lineStyle": {
                        "normal": {
                            "width": 2.0,
                            "curveness": 0.2,
                            "color": '#f56e12'
                        }
                    }
                }, {
                    "source": "重庆知行宏图科技有限公司",
                    "target": "李四",
                    "name": '董事',
                    "tooltip": {
                        "trigger": 'item',
                        "formatter": function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    "label": {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    "lineStyle": {
                        "normal": {
                            "width": 2.0,
                            "curveness": 0.2,
                            "color": '#f56e12'
                        }
                    }
                }, {
                    "source": "重庆知行宏图科技有限公司",
                    "target": "王五",
                    "name": '主要人员',
                    "tooltip": {
                        "trigger": 'item',
                        "formatter": function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    "label": {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    "lineStyle": {
                        "normal": {
                            "width": 2.0,
                            "curveness": 0.2,
                            "color": '#f56e12'
                        }
                    }
                }, {
                    "source": "重庆知行宏图科技有限公司",
                    "target": "鸿七",
                    "name": '财务负责人',
                    "tooltip": {
                        "trigger": 'item',
                        "formatter": function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    "label": {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    "lineStyle": {
                        "normal": {
                            "width": 2.0,
                            "curveness": 0.2,
                            "color": '#f56e12'
                        }
                    }
                }, {
                    "source": "重庆知行宏图科技有限公司",
                    "target": "重庆药友有限公司",
                    "name": '股东',
                    "tooltip": {
                        "trigger": 'item',
                        "formatter": function(params, ticket, callback) {
                            return params.data.name;
                        }
                    },
                    "label": {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                params.name = params.data.name;
                                return params.name;
                            },
                            show: true
                        }
                    },
                    "lineStyle": {
                        "normal": {
                            "width": 2.0,
                            "curveness": 0.2,
                            "color": '#f56e12'
                        }
                    }
                }],
                // 大的节点名称
                categories: [{
                    'name': '重庆知行宏图科技有限公司'
                }, {
                    'name': '张三'
                }, {
                    'name': '李四'
                }, {
                    'name': '王五'
                }, {
                    'name': '鸿七'
                }, {
                    'name': '重庆药友有限公司'
                }],
                focusNodeAdjacency: true,
                roam: true,
                label: {
                    normal: {
                        show: true,
                        color: 'source',
                        formatter: '{b}',
                        fontSize: 13,
                        fontStyle: '600',
                        position: 'top',
                    }
                },
                lineStyle: {
                    normal: {
                        width: 3.5,
                        color: 'source',
                        curveness: 0,
                        type: "solid"
                    }
                }
            }]
        };
        return option;
    },
initChart : function( myChart,option) {
    myChart.setOption(option);
    myChart.on('click',function(object){
// 销毁之前的echarts实例
        echarts.dispose(dom);
// 初始化一个新的实例
        var myChart = echarts.init(dom);
        //这里就模拟一个测试数据，做为demo演示
        //实际可以根据点击的节点信息，动态获取该节点关联的点及边数据
        if (object.name == '张三'){
            option.series[0].data.push(
                {
                    "name": "办事结果反馈",
                    x: 20,
                    y: yy,
                    "symbolSize": size1,
                    "category": "张三",
                    "draggable": "true"
                },
                {
                    x: 30,
                    y: yy1,
                    "name": "系统功能缺陷",
                    "symbolSize": size1,
                    "category": "张三",
                    "draggable": "true"
                },
                {
                    x: 40,
                    y: yy,
                    "name": "线下办事便捷度",
                    "symbolSize": size1,
                    "category": "张三",
                    "draggable": "true",
                    "value": 1
                },
                {
                    x: 50,
                    y: yy,
                    "name": "查询功能缺失",
                    "symbolSize": size1,
                    "category": "张三",
                    "draggable": "true",
                    "value": 1
                }
                );
            option.series[0].links.push(
                {
                    "source": "张三",
                    "target": "办事结果反馈"
                },
                {
                    "source": "张三",
                    "target": "线下办事便捷度"
                },
                {
                    "source": "张三",
                    "target": "系统功能缺陷"
                },
                {
                    "source": "张三",
                    "target": "查询功能缺失"
                },{
                "source": "张三",
                    "target": "重庆药友有限公司"
            }
            );
        }else if(object.name == "王五"){
            option.series[0].data.push(
                {
                    x: 80,
                    y: yy1,
                    "name": "补件优先",
                    "symbolSize": size1,
                    "category": "王五",
                    "draggable": "true"
                },
                {
                    x: 90,
                    y: yy,
                    "name": "预审准确度",
                    "symbolSize": size1,
                    "category": "王五",
                    "draggable": "true"
                },
                {
                    x: 100,
                    y: yy1,
                    "name": "预约修正",
                    "symbolSize": size1,
                    "category": "王五",
                    "draggable": "true"
                },
                {
                    x: 110,
                    y: yy1,
                    "name": "口径不一致",
                    "symbolSize": size1,
                    "category": "王五",
                    "draggable": "true"
                },
                {
                    x: 120,
                    y: yy1,
                    "name": "非必要材料要求",
                    "symbolSize": size1,
                    "category": "王五",
                    "draggable": "true"
                },
                {
                    x: 130,
                    y: yy1,
                    "name": "重庆药友有限公司   ",
                    "symbolSize": size1,
                    "category": "王五",
                    "draggable": "true"
                }
                );
            option.series[0].links.push(
                {
                    "source": "王五",
                    "target": "补件优先"
                },
                {
                    "source": "王五",
                    "target": "预审准确度"
                },
                {
                    "source": "王五",
                    "target": "预约修正"
                },
                {
                    "source": "王五",
                    "target": "口径不一致"
                },
                {
                    "source": "王五",
                    "target": "非必要材料要求"
                },
                {
                    "source": "王五",
                    "target": "重庆药友有限公司   "
                });
        }else if(object.name == "李四"){
            option.series[0].data.push(
                {
                    "name": "办事指南",
                    x: 170,
                    y: yy1,
                    "symbolSize": size1,
                    "category": "李四",
                    "draggable": "true"

                },
                {
                    "name": "材料预审",
                    x: 180,
                    y: yy1,
                    "symbolSize": size1,
                    "category": "李四",
                    "draggable": "true"

                },
                {
                    "name": "经营范围专业化咨询",
                    x: 190,
                    y: yy1,
                    "symbolSize": size1,
                    "category": "李四",
                    "draggable": "true"

                },
                {
                    "name": "申请材料",
                    x: 200,
                    y: yy1,
                    "symbolSize": size1,
                    "category": "李四",
                    "draggable": "true"

                });
            option.series[0].links.push(
                {
                    "source": "李四",
                    "target": "办事指南"
                },
                {
                    "source": "李四",
                    "target": "重庆药友有限公司  "
                },
                {
                    "source": "李四",
                    "target": "材料预审"
                },
                {
                    "source": "李四",
                    "target": "经营范围专业化咨询"
                },
                {
                    "source": "李四",
                    "target": "申请材料"
                });
        }
        myChart.setOption(option, true);
        graphDrillDown.initChart(myChart,option);
    });
},
};


