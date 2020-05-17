var url = 'http://localhost:8080';

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
				$('#check').text(data.status).css('color', '#00ff30');

			$('#count').text(data.onlineCounter);
		}
	})
});