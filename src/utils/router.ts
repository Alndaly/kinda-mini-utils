export default {
    back() {
        wx.navigateBack()
    },
    push(url: string, params: any) {
        wx.navigateTo({
            url: url,
        })
    }
}