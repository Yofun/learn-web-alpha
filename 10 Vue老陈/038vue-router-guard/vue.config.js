module.exports = {
    // 相当于webpack-dev-server，对本地服务器进行配置
    devServer: {
        proxy: {
            "/api" :{
                target: 'https://www.baidu.com', // 需要跨域目标url，
                changeOringin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
                wx: true,
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            } 
        }
    }
}