module.exports = [
    {text: '首页', link: '/'},
    {
        text: '后端',
        link: '/server/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            {
                text: 'Java',
                link: '/pages/java_base/',
                items: [
                    {text: 'Java基础', link: '/pages/java_base/'},
                    {text: 'Spring', link: '/pages/spring/'},
                    {text: 'Spring Boot', link: '/pages/spring_boot/'},
                    {text: 'Spring Cloud', link: '/pages/spring_cloud/'},
                    {text: 'Netty', link: '/pages/netty/'}
                ]
            },
            {
                text: 'Go',
                link: '/pages/go_base/',
                items: [
                    {text: 'Go基础语法', link: '/pages/go_base/'},
                    {text: 'Iris', link: '/pages/iris/'}
                ]
            },
            {
                text: 'Python',
                link: '/pages/python_base/',
                items: [
                    {text: 'Python基础语法', link: '/pages/python_base/'},
                    {text: 'Flask', link: '/pages/flask/'},
                    {text: 'Pandas', link: '/pages/pandas/'},
                    {text: 'Numpy', link: '/pages/numpy/'},
                    {text: 'TensorFlow', link: '/pages/tensor_flow/'},
                    {text: 'Pytorch', link: '/pages/pytorch/'}
                ]
            },
            {
                text: 'HTTP',
                link: '/pages/http/',
                items: [
                    {text: 'HTTP', link: '/pages/http/'},
                    {text: 'TCP', link: '/pages/tcp/'}
                ]
            },
            {
                text: '数据库',
                link: '/pages/data_base/',
                items: [
                    {text: 'MySQL', link: '/pages/mysql/'},
                    {text: 'MongoDB', link: '/pages/mongodb/'}
                ]
            }
        ]
    },
    {
        text: '前端',
        link: '/web/',
        items: [
            {
                text: 'HTML',
                link: '/pages/html_base/',
                items: [
                    {text: 'HTML', link: '/pages/html_base/'}
                ]
            },
            {
                text: 'CSS',
                link: '/pages/css_base/',
                items: [
                    {text: 'CSS', link: '/pages/css_base/'}
                ]
            },
            {
                text: 'JavaScript', items: [
                    {text: 'JavaScript', link: '/pages/js_base/'}
                ]
            },
            {
                text: 'Vue', items: [
                    {text: 'Vue', link: '/pages/vue_base/'}
                ]
            },
            {
                text: 'React', items: [
                    {text: 'React', link: '/pages/react_base/'}
                ]
            },
            {
                text: '小程序', items: [
                    {text: '小程序', link: '/pages/miniprogram_base/'}
                ]
            },
            {
                text: 'React Native', items: [
                    {text: 'React Native', link: '/pages/react_native_base/'}
                ]
            },
            {
                text: 'Flutter', items: [
                    {text: 'Flutter', link: '/pages/flutter_base/'}
                ]
            },
        ]
    },
    {
        text: '动漫',
        link: '/acg/',
        items: [
            {
                text: '吹响吧！上低音号', items: [
                    {text: '人物介绍', link: '/pages/cxbsdyh_introduce/'},
                    {text: '故事梗概', link: '/pages/cxbsdyh_summarize/'}
                ]
            },
            {
                text: '进击の巨人', items: [
                    {text: '人物介绍', link: '/pages/jjdjr_introduce/'},
                    {text: '故事梗概', link: '/pages/jjdjr_summarize/'}
                ]
            },
            {
                text: 'Clannad', items: [
                    {text: '人物介绍', link: '/pages/clannad_introduce/'},
                    {text: '故事梗概', link: '/pages/clannad_summarize/'}
                ]
            }
        ]
    },
    {
        text: '更多',
        link: '/more/',
        items: [
            {
                text: '日记', items: [
                    {text: '2020-08-16', link: '/pages/diary_20200816/'}
                ]
            },
            {
                text: '旅游', items: [
                    {text: '江西武功山', link: '/pages/travel_wugongshan/'}
                ]
            },
            {
                text: '随笔', items: [
                    {text: '我和一个图书馆管理员的故事', link: '/pages/mystorywithxiuxiu/'}
                ]
            },
            {text: '友情链接', link: '/friends/'},
        ]
    },
    {text: '关于', link: '/about/'},
    {
        text: '收藏',
        link: '/pages/collection_web/',
        items: [
            {text: '网站', link: '/pages/collection_web/'},
            {text: '资源', link: '/pages/collection_source/'},
            {text: 'Vue资源', link: '/pages/collection_vue_source/'},
        ]
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ]
    }
]
