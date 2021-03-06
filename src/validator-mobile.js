var $ = window.jQuery || window.$;

module.exports = function(item) {
	var passed;
	item = $(item)[0];
	item.value = $.trim(item.value.toLowerCase());
	if(!item.value) {
		return true;
	}
	passed = (/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57]|106[0-9]{2})[0-9]{8}$/).test(item.value);
	return passed;
};
