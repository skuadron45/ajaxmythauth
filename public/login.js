$(document).ready(function () {
    $("#btn-login").on("click", function () {
        var formData = new FormData($("#form-login")[0]);

        var jqHr = $.ajax({
            url: LOGIN_URL,
            type: "POST",
            data: formData,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
        });
        jqHr.done(function (data, textStatus, jqXHR) {
            console.log("success:", jqXHR);
            alert(data.messages);
        });
        jqHr.fail(function (jqXHR, textStatus, errorThrown) {
            console.log("fail:", jqXHR);
            alert(jqXHR.responseJSON.messages.error);
        });

    });
    $("#btn-test").on("click", function () {
        var jqHr = $.ajax({
            url: TEST_URL,
            type: "GET",
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
        });
        jqHr.done(function (data, textStatus, jqXHR) {
            console.log("success:", jqXHR);

        });
        jqHr.fail(function (jqXHR, textStatus, errorThrown) {
            console.log("fail:", jqXHR);
            alert(jqXHR.responseJSON.messages.error);
        });
    });
});
