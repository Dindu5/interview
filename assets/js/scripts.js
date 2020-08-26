var curday = function (sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
};
console.log(curday('/'));
console.log(curday('-'));
$(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});
$(".toggle-password2").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input2 = $('#password-field2');
    if (input2.attr("type") == "password") {
        input2.attr("type", "text");
    } else {
        input2.attr("type", "password");
    }
});