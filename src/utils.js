'use strict';

module.exports.urlParams = (url) =>
{
	const url_obj = url.split('?');
	const params = decodeURI(url_obj[1])
	.split('&')
	.map(param => param.split('='))
	.reduce((values, [ key, value ]) => 
	{
		values[ key ] = value
		return values
	}, 
	{});

	return params;
}