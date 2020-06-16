// 设置基准路径
const baseUrl='http://172.16.10.21:8080'
// myAxios 函数，params 发请求时传入的参数
export const myAxios = (params)=>{
    // 显示加载提示框
    // wx.showLoading({
    //     title: '加载中',
    // });

    // 函数内部返回 Promise 实例
    return new Promise((resolve,reject)=>{
        wx.request({
            // 解构所有参数
            ...params,
            url: baseUrl + params.url,
            // 成功
            success:result=>{
                resolve(result); 
            },
            // 失败
            fail:error=>{
                reject(error);
            },
            // 完成 - 不管成功还是失败都触发
            complete: ()=>{
                // 隐藏提示框
                wx.hideLoading();
                // 请求完毕，下拉刷新结束
                wx.stopPullDownRefresh();
                // 请求完毕，关闭导航栏小菊花
                wx.hideNavigationBarLoading();
            }
        });

    });
}
