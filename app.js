

$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });



});
$(document).ready(function () {

    $("#start-date").datepicker({
        numberOfMonths: 1,
        onSelect: function (selected) {
            var dt = new Date(selected);
            dt.setDate(dt.getDate() + 1);
            $("#end-date").datepicker("option", "minDate", dt);
        }
    });
    $("#end-date").datepicker({
        numberOfMonths: 1,
        onSelect: function (selected) {
            var dt = new Date(selected);
            dt.setDate(dt.getDate() - 1);
            $("#start-date").datepicker("option", "maxDate", dt);
        }
    });

});
$(function () {
    $('.auto-save').savy('load');
});
$(function () {
    var name = $("input[name='marketing']").val();
    $(".data-table tbody").append("<tr data-name='" + name + "'><td>" + name + "</td><td><button class='btn-edit' type='button'></button></td><td><button class='btn-delete' type='button'></button></td></tr>    ");
    $("input[name='']").val("");
})
$('body').on('click', '.btn-delete', function () {
    $(this).parents('tr').remove();
});
$('body').on('click', '.btn-edit', function () {
    var name = $(this).parents('tr').attr('data-name');

    $(this).parents('tr').find('td:eq(0)').html("<input name='edit_text' class='editing' value='" + name + "'>");
    $(this).hide()
});
$('body').on('click', '.btn-update', function () {
    var name = $(this).parents('tr').find("input[name='edit_text']").val();
    $(this).parents('tr').find('td:eq(0)').text(name);
    $(this).parents('tr').attr('data-name', name);
    $(this).parents('tr').find('.btn-edit').show();

});

$(document).ready(function () {

    $(".nav").click(function () {
        validateForm();
    });
    function validateForm() {
        var marketingName = $('#marketing-name').val();
        var technicalName = $('#technical-name').val();

        if (marketingName.length == 0 || technicalName.length == 0) {
            alert("uzupełnij brakujące pole 'marketing name' lub 'technical name'");
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            $('#user-inputs').addClass('current');

        }
    }

});










