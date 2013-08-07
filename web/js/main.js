/**
 * Created with IntelliJ IDEA.
 * User: Peter
 * Date: 13-8-6
 * Time: 下午12:20
 * To change this template use File | Settings | File Templates.
 */


(function ($) {
    var __website_prefix__ = '/heroapp/';
    $(function () {
        $('#footer').addClass('clearfix').load(__website_prefix__+'footer.html');
        $('#top-nav').addClass('navbar navbar-inverse navbar-fixed-top').load(__website_prefix__+'topnav.html');
        $('#left-side').load(__website_prefix__+'left-side.html');
    });

})(jQuery);

