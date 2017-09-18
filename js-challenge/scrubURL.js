/* JavaScript Scrub URL
	Contributing Author: Robbie Lee
*/

function scrubURL() {
    var rtn = location.href.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    /* If a queryString exists look for email */
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            /* Look in queryString for an email value */
            if (param === "email") {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    window.history.replaceState("Updated State", "Title", rtn);
}