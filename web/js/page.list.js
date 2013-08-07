/**
 * Created with IntelliJ IDEA.
 * User: Peter
 * Date: 13-8-7
 * Time: 下午1:58
 * To change this template use File | Settings | File Templates.
 */
jQuery(function ($) {
//full screen btn
    $('.layout-btns .layout-full').click(function (e) {
        if ($(this).hasClass('active')) {
// reset
            $('#left-side, ul.breadcrumb').show('fast');
            $('#content-block').removeClass('col-lg-12 full-content').addClass('col-lg-10');
        } else {
// full screen
            $('#left-side, ul.breadcrumb').hide('fast', function () {
                $('#content-block').removeClass('col-lg-10').addClass('col-lg-12 full-content');
            });
        }
    });
    $('.layout-btns .layout-normal').click(function (e) {
        $('.results table').removeClass('table-condensed');
    });
    $('.layout-btns .layout-condensed').click(function (e) {
        $('.results table').addClass('table-condensed');
    });
});