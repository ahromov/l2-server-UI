$(document).ready(function () {
	$.get(url + '/ls/getServers', function (data) {
		if (data != null) {
			data.forEach(element => {
				$('#serverName').text(element.name);
			});
		}
	})

	$.get(url + '/gs/get/status', function (data) {
		if (data != null) {
			if (data.status === 'ON')
				$('#status').text(data.status).css('color', '#00ff30');
			else
				$('#status').text(data.status);

			$('#count').text(data.onlineCounter);
		}
	})
});