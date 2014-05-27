/*
    * WNT SiteDown v1.0: https://github.com/webninjataylor/wnt.sitedown
    *
    * GNU General Public License v3
    *
    * Requirements:
    *   jQuery 1.9.0 or greater
    *
    * Instructions:
    *   Call .sitedown(), passing in a new date for when the site should be down.
    *   Date passed currently requires the month to be zero-based.
    *   Example ==> $.fn.sitedown(new Date(2013,4,22));  // The site would be down starting March 22, 2013
*/



(function(){

    // Variables declared here are scoped to this function
    var currentDate = new Date();

    // Set the date to midnight
    currentDate.setHours(0,0,0,0);

    $.fn.sitedown = function(downDate){
        // TODO:  Accept properties ... redirect page (optional), message (optional)
        if(currentDate > downDate){
            console.log('SITE SHOULD BE DOWN.');
        }
    };

}());
