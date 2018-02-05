import poToast from '../toast';
$(document).ready(function () {
    $("#error").click(function () {
        poToast.error('抱歉,服务出现异常', 3000)
    });
    $("#primary").click(function () {
        poToast.primary('请填写身份信息', 3000)
    });
    $("#success").click(function () {
        poToast.success('请填写身请填请填写身份信息请填写身份信息请填写身份信息写身份信息请填写身份信息请填写身份信息请填写身份信息份信息请填写身份信息请填写身份信息请填写身份信息')
    });
});