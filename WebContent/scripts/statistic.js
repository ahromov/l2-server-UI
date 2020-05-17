var url = 'http://localhost:8080';

$(document).ready(function () {
    $.get(url + '/accCount', function (data) {
        if (data != null) {
            $('#accCount').html(data.count);
        }
    });

    $.get(url + '/countChars', function (data) {
        if (data != null) {
            $('#countAll').html(data.countAll);
            $('#countNobless').html(data.countNobless);
            $('#countHeroes').html(data.countHeroes);
            $('#countGm').html(data.countGm);
            $('#countClans').html(data.countClans);
        }
    });

    $.get(url + '/getClans', function (data) {
        if (data != null) {
            data.forEach(element => {
                $('#content #stat #clans table').append(
                    '<tr>' +
                    '<td>' + element.name + '</td>' +
                    '<td >' + element.level + '</td>' +
                    '<td >' + element.leader + '</td>' +
                    '<td >' + element.reputation + '</td>' +
                    '<td >' + element.middLevel + '</td>' +
                    '<td >' + element.alyName + '</td>' +
                    '</tr>'
                );
            });
        }
    });

    $.get(url + '/getTopTen', function (data) {
        if (data != null) {
            data.forEach(element => {
                $('#content #stat #top10 table').append(
                    `<tr>
					<td>` + element.playerName + `</td>
					<td >` + element.playerClass + `</td>
					<td >` + element.playerGender + `</td>
					<td >` + element.playersClan + `</td>
					<td >` + element.playersOnlineTime + ` ч.</td>
					<td >` + element.playersPvpKills + '/' + element.playersPkKills + `</td>
					</tr>`
                );
            });
        }
    });

    $.get(url + '/getCastles', function (data) {
        if (data != null) {
            data.forEach(element => {
                $('#content #stat #castles table').append(
                    '<tr>' +
                    '<td><img src="images/castles/' + element.id + '.jpg"</td>' +
                    '<td>' + element.name + '</td>' +
                    '<td >' + element.leaderName + '</td>' +
                    '<td >' + element.taxPercent + '%</td>' +
                    '<td >' + element.treasury + '</td>' +
                    '<td >' + element.siegeDate + '</td>' +
                    '</tr>'
                );
            });
        }
    });

    $.get(url + '/getForts', function (data) {
        if (data != null) {
            data.forEach(element => {
                $('#content #stat #forts table').append(
                    '<tr>' +
                    '<td><img src="images/forts/' + element.id + '.jpg"</td>' +
                    '<td>' + element.name + '</td>' +
                    '<td >' + element.owner.name + '</td>' +
                    '<td >' + element.siegeDate + '</td>' +
                    '</tr>'
                );
            });
        }
    });
});