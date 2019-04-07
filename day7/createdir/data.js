const data = {
    dirname:'data',
    children:[
    {
        dirname:'aaa',
        children:[
            {
                filename:'a.js',
                children:[`console.log('hello');`,`console.log('1701C');`]
            },
            {
                dirname:'css',
                children:[
                    {
                        filename:'style.css',
                        children:['div{width:100px;height:100px}']
                    },
                    {
                        dirname:'common',
                        children:[{
                            filename:'common.css',
                            children:['*{padding:0;margin:0}']
                        }]
                    }
                ]
            }
        ]
    },
    {
        filename:'a.txt',
        children:['1701C']
    }
]};

exports.data = data;