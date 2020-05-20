var url = 'http://localhost:8080';
var serverName = 'LineageII server';
var developerName = 'LaJDev';
var lang;
var messages;
var login;
let newsButtonNumber = 1;

function generateMenu() {
    $('nav').html(`
        <ul>
            <li><a href="#" id="main">${messages.general}</a></li>
            <li><a href="#" id="about">${messages.aboutServer}</a></li>
            <li><a id="reg">${messages.registration}</a></li>
            <li><a target="_blank" href="https://drive.google.com/open?id=1a9jqbmIrBIJxJzH0ADN5LaAdtMbB_zKo" id="files">${messages.files}</a></li>
            <li><a href="#" id="stat">${messages.statistic}</a></li>
            <li><a href="#" id="contact">${messages.contact}</a></li>
            <li><a href="./forum/" id="forum">${messages.forum}</a></li>
        </ul>
    `);
}


function generateLogo() {
    $('#logo').html(`
        <h1>${serverName}</h1>
        <p>${messages.slogan}</p>
    `)
}


function showLoginForm() {
    $("#lk_form form").html(
        `<form>
		<h1>${messages.personalCabinet}</h1>
		<div>
			<label><span class="login">${messages.loginName}:</span><input id="inputLoginl3"
					type="text"></label>
		</div>
		<div>
			<label><span class="password">${messages.password}:</span><input id="inputPassword3"
					type="password"></label>
		</div>
		<div>
			<button class="login" type="button">${messages.enter}</button>
		</div>
		</form>
		<div id="formBoard">
			<span>${messages.forgotPassword}</span> <a class="forgot">? >></a>
		</div>`
    );
}


function showCabinetMenu() {
    $("#lk_form form").html(
        '<h1>' + messages.welcome + ', ' + login + '!</h1>' +
        '<button type="button" class="changePass">' + messages.passwordChanging + '</button>' +
        '<button type="button" class="exit">' + messages.exit + '</button></<button>'
    );

    $('#content #right #lk_form form button').css('transform', 'translateX(-32px)').css('width', '333px');
}


function generatePosts() {
    let posts = '';

    for (i = 0; i < 5; i++) {
        posts += `
        <li>
            <h2>Баг на олимпе. Когда будет исправле... // 17:28 •
            Insider</h2>
        </li>`
    }

    return posts;
}


function generateNews() {
    function myFunction(value) {
        let date = new Date(value.date);

        $('#articles').append(`
            <section>
                <figure>
                    <img src="data:image/png;base64,${value.image}">
                    <div>
                        <figcaption>
                            <time datetime="${value.date}"><span>${date.getDate()}</span>/${date.getMonth()}/${date.getFullYear()}</time>
                            <p><span>${messages.publishingIn}</span> ${date.toLocaleTimeString()}</p>
                        </figcaption>
                    </div>
                    <a class="readMore" id="${value.id}" href="#">${messages.readMore}</a>
                </figure>
                <div id="news">                
                    <h2>${value.title}</h2>
                    <p>${value.text.substring(0, 200) + (value.text.length > 200 ? " ..." : "")}</p>
                </div>
            </section>
        `)
    };

    $.get(url + '/news/get/lastThree', function (data) {
        if (data != null) {
            data.forEach(element => { myFunction(element) });
        }
    });
}


function generateNextNews(firstNewsId, ev) {

    $('#articles').html('');
    $('#next_page ul li a').removeClass('npActive');
    $(ev).addClass('npActive');

    function myFunction(value) {
        let date = new Date(value.date);

        $('#articles').append(`
            <section>
                <figure>
                    <img src="data:image/png;base64,${value.image}">
                    <div>
                        <figcaption>
                            <time datetime="${value.date}"><span>${date.getDate()}</span>/${date.getMonth()}/${date.getFullYear()}</time>
                            <p><span>${messages.publishingIn}</span> ${date.toLocaleTimeString()}</p>
                        </figcaption>
                    </div>
                    <a class="readMore" id="${value.id}" href="#">${messages.readMore}</a>
                </figure>
                <div id="news">                
                    <h2>${value.title}</h2>
                    <p>${value.text.substring(0, 200) + (value.text.length > 200 ? " ..." : "")}</p>
                </div>
            </section>
        `)
    };

    $.get(url + '/news/get/nextNews/' + firstNewsId, function (data) {
        if (data != null) {
            data.forEach(element => { myFunction(element) });
        }
    });
}


function generateLanguageSelectors(checkedUa, checkedRu, checkedEn) {
    block = `<ul>
                <li class="${checkedUa}"><a id="ua" href="#">UA</a></li>
                <li class="${checkedRu}"><a id="ru" href="#">RU</a></li>
                <li class="${checkedEn}"><a id="en" href="#">EN</a></li>
            </ul>`

    return block;
}


function generateMainContent(articles, posts, languages) {
    $('#content .main').html(`
        <div id="left">
        <article>
            <h1>${messages.news}</h1>
            <div id="articles">

            </div>
        </article>
        </div>
        <div id="right">
            <div>
                <section id="lk_form">
                    <form>
                        <h1>${messages.personalCabinet}</h1>
                        <div>
                            <label><span class="login">${messages.loginName}:</span><input id="inputLoginl3"
                                    type="text"></label>
                        </div>
                        <div>
                            <label><span class="password">${messages.password}:</span><input id="inputPassword3"
                                    type="password"></label>
                        </div>
                        <div>
                            <button class="login" type="button">${messages.enter}</button>
                        </div>
                    </form>
                    <div id="formBoard">
                        <span>${messages.forgotPassword}</span> <a class="forgot">? >></a>
                    </div>
                </section>
                <section id="lang">
                    ${languages}
                </section>
            </div>
            <section id="slider">
                <div class="wrap">
                    <iframe autoplay=1 width="430" height="245" src="https://www.youtube.com/embed/nz7FbTBmZ_M?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section id="forum">
                <div class="caption">
                    <h1>${messages.forumMessages}</h1>
                </div>
                <ul class="posts">
                    ${posts}
                </ul>
            </section>
        </div>
    `)

    $.get(url + '/news/get/newsIds', function (data) {
        if (data != null) {
            data.forEach(element => { generateNewsButtons(element) });
        }
    });
}


function generateMainPage() {
    document.title = messages.title;
    newsButtonNumber = 1;

    generateMenu();
    generateLogo();

    switch (lang) {
        case 'ru':
            generateMainContent(generateNews(), generatePosts(), generateLanguageSelectors('', 'checked', ''));
            break;
        case 'ua':
            generateMainContent(generateNews(), generatePosts(), generateLanguageSelectors('checked', '', ''));
            break;
        case 'en':
            generateMainContent(generateNews(), generatePosts(), generateLanguageSelectors('', '', 'checked'));
            break;
    }

    generateFooter();
}


function generateNewsButtons(id) {
    $('#next_page ul').append(`
        <li><a class="nextNews" id="${id}" href="#">${newsButtonNumber++}</a></li>
    `);

    $('#next_page ul li:first-child a').addClass('npActive');
}


function generateFooter() {
    $('footer').html(`
        <section class="left">
            <div id="next_page">
                <ul>
                    
                </ul>
            </div>
            <h1>© ${new Date().getFullYear()} Lineage2Server.com</h1>
            <p>${messages.license}</p>
            </section>
            <section id="social" class="right">
            <div class="title">
                <h1>${messages.ourCommunitys}:</h1>
            </div>
            <div class="l2logo"></div>
            <div class="social_list">
                <ul>
                    <li>
                        <div>FB</div>
                        <a>facebook.com/<span>${developerName}</span></a>
                    </li>
                    <li>
                        <div>TW</div>
                        <a>twitter.com/<span>${developerName}</span></a>
                    </li>
                </ul>
            </div>
        </section>
    `)
}


$(document).ready(function () {
    if ($.cookie('language') != null)
        lang = $.cookie('language');
    else lang = 'ru';

    switch (lang) {
        case 'ru':
            messages = ruMessages;
            break;
        case 'ua':
            messages = uaMessages;
            break;
        case 'en':
            messages = enMessages;
            break;
    }

    generateMainPage();

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
})

$(document).on('click', 'nav #main', function () {
    generateMainPage();
})

$(document).on('click', 'nav #about', function () {
    $('#content .main').html(`
    <div class="top">
        <div id="stat">
            <article>
                <h1>${messages.rates}</h1>
                <section>
                    <table id="rates">
                        <tr>
                            <th>DropChance:</th>
                            <td>x 3</td>
                        </tr>
                        <tr>
                            <th>SpoilChance:</th>
                            <td>x 3</td>
                        </tr>
                        <tr>
                            <th>RaidDropChance:</th>
                            <td>x 1</td>
                        </tr>
                        <tr>
                            <th>DropAdena:</th>
                            <td>x 7</td>
                        </tr>
                        <tr>
                            <th>RateXp:</th>
                            <td>x 7</td>
                        </tr>
                        <tr>
                            <th>RateSp:</th>
                            <td>x 7</td>
                        </tr>
                        <tr>
                            <th>RatePatyXp:</th>
                            <td>x 2</td>
                        </tr>
                        <tr>
                            <th>RatePatySp:</th>
                            <td>x 2</td>
                        </tr>
                        <tr>
                            <th>RateQuestRewardXP:</th>
                            <td>x 7</td>
                        </tr>
                        <tr>
                            <th>RateQuestRewardSP:</th>
                            <td>x 7</td>
                        </tr>
                        <tr>
                            <th>RateQuestRewardAdena:</th>
                            <td>x 7</td>
                        </tr>
                        <tr>
                            <th>RateQuestDropItem:</th>
                            <td>x 7</td>
                        </tr>
                    </table>
                </section>
            </article>
            <article>
                <h1>${messages.selectIntoTop}:</h1>
                <div class="top">
                    <p>${messages.selectIntoTopDescription}</p>
                </div>
            </article>
            <article>
                <h1>${messages.common}:</h1>
                <div class="top">
                    <p>${messages.commonDescription}</p>
                </div>
            </article>
        </div>
    </div>
    `)
})

$(document).on('click', 'nav #reg', function () {
    generateMainPage();

    $("#lk_form form").html(
        '<form>' +
        '<h1>' + messages.registration + '</h1>' +
        '<div>' +
        '<label><span>' + messages.loginName + ':</span><input id="inputLoginl3" type="text"></label></div>' +
        '<div>' +
        '<label><span>' + messages.email + ':</span><input id="inputEmail3" type="email"></label></div>' +
        '<div>' +
        '<label><span>' + messages.password + ':</span><input id="inputPassword3" type="password"></label></div>' +
        '<div>' +
        '<label><span>' + messages.repeatePassword + ':</span><input id="inputSecondPassword3" type="password"></label></div>' +
        '<button class="register" type="button">' + messages.send + '</button>'
    );

    $('#content #right #lk_form form h1').css('font-size', '10px').css('margin-top', '-5px');
    $('#content #right #lk_form form div').css('margin-top', '0px').css('margin-bottom', '2px');
    $('#content #right #lk_form form div input').css('height', '20px');
    $('#content #right #lk_form form div span').css('padding-top', '2px');
    $('#content #right #lk_form form button').css('width', '134px').css('margin-right', '35px').css('height', '18px');
})

$(document).on('click', 'nav #stat', function () {
    $('#content .main').html(
        `<div class="top">
                <div id="stat">
                    <article>
                        <h1>${messages.common}</h1>
                        <section>
                            <table>
                                <tr>
                                    <th>${messages.accounts}:</th>
                                    <th>${messages.characters}:</th>
                                    <th>${messages.nobleses}:</th>
                                    <th>${messages.heroes}:</th>
                                    <th>${messages.gameMasters}:</th>
                                    <th>${messages.clans}:</th>
                                    <th>${messages.allys}:</th>
                                </tr>
                                <tr>
                                    <td id="accCount">0</td>
                                    <td id="countAll">0</td>
                                    <td id="countNobless">0</td>
                                    <td id="countHeroes">0</td>
                                    <td id="countGm">0</td>
                                    <td id="countClans">0</td>
                                    <td>0</td>
                                </tr>
                            </table>
                        </section>
                    </article>
                    <article id="top10">
                        <h1>${messages.top10chars}</h1>
                        <section>
                            <table>
                                <tr>
                                    <th>${messages.charName}:</th>
                                    <th>${messages.charClass}:</th>
                                    <th>${messages.charSex}:</th>
                                    <th>${messages.clanName}:</th>
                                    <th>${messages.gameTime}:</th>
                                    <th>PvP/PK:</th>
                                </tr>
                            </table>
                        </section>
                    </article>
                    <article id="clans">
                        <h1>${messages.clans}</h1>
                        <section>
                            <table>
                                <tr>
                                    <th>${messages.clanName}:</th>
                                    <th>${messages.lvl}</th>
                                    <th>${messages.leader}:</th>
                                    <th>${messages.reputation}:</th>
                                    <th>${messages.midLvl}:</th>
                                    <th>${messages.ally}:</th>
                                </tr>
                            </table>
                        </section>
                    </article>
                    <article id="castles">
                        <h1>${messages.castles}</h1>
                        <section>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>${messages.castleName}:</th>
                                    <th>${messages.owner}:</th>
                                    <th>${messages.tax}:</th>
                                    <th>${messages.treasure}:</th>
                                    <th>${messages.siegeDate}:</th>
                                </tr>
                            </table>
                        </section>
                    </article>
                    <article id="forts">
                        <h1>${messages.forts}</h1>
                        <section>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>${messages.fortName}:</th>
                                    <th>${messages.owner}:</th>
                                    <th>${messages.siegeDate}:</th>
                                </tr>
                            </table>
                        </section>
                    </article>
                </div>
            </div>`
    )

    $.get(url + '/clans/count/all', function (data) {
        if (data != null) {
            $('#accCount').html(data.count);
        }
    });

    $.get(url + '/characters/count/byType', function (data) {
        if (data != null) {
            $('#countAll').html(data.all);
            $('#countNobless').html(data.nobles);
            $('#countHeroes').html(data.heroes);
            $('#countGm').html(data.gms);
        }
    });

    $.get(url + '/clans/get/all', function (data) {
        if (data != null) {
            data.forEach(element => {
                $('#content #stat #clans table').append(
                    '<tr>' +
                    '<td>' + element.name + '</td>' +
                    '<td >' + element.level + '</td>' +
                    '<td >' + element.leader.charName + '</td>' +
                    '<td >' + element.reputation + '</td>' +
                    '<td >' + element.middLevel + '</td>' +
                    '<td >' + element.alyName + '</td>' +
                    '</tr>'
                );
            });
        }
    });

    $.get(url + '/characters/get/top10', function (data) {
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

    $.get(url + '/castles/get/all', function (data) {
        if (data != null) {
            data.forEach(element => {
                $('#content #stat #castles table').append(
                    '<tr>' +
                    '<td><img src="images/castles/' + element.id + '.jpg"</td>' +
                    '<td>' + element.name + '</td>' +
                    '<td >' + (element.clan == null ? element.clan : element.clan.name) + '</td>' +
                    '<td >' + element.taxPercent + '%</td>' +
                    '<td >' + element.treasury + '</td>' +
                    '<td >' + new Date(element.siegeDate).toLocaleDateString() + ' ' + new Date(element.siegeDate).toLocaleTimeString() + '</td>' +
                    '</tr>'
                );
            });
        }
    });

    $.get(url + '/forts/get/all', function (data) {
        if (data != null) {
            data.forEach(element => {
                $('#content #stat #forts table').append(
                    '<tr>' +
                    '<td><img src="images/forts/' + element.id + '.jpg"</td>' +
                    '<td>' + element.name + '</td>' +
                    '<td>' + (element.clan == null ? element.clan : element.clan.name) + '</td>' +
                    '<td>' + element.siegeDate + '</td>' +
                    '</tr>'
                );
            });
        }
    });
})

$(document).on('click', 'nav #contact', function () {
    $('#content .main').html(`
        <div class="top">
            <div id="stat">
                <article>
                    <h1>${messages.contactsForm}</h1>
                    <section>
                        <p>${messages.mesageCanOnlyRegisteredUsers}</p>
                        <div class="message">
                            <form>
                                <label>${messages.fullName}: <input type="text" class="name"><p class="name"></p></label>
                                <label>${messages.emailForFeedback}: <input type="email" class="email"><p class="email"></p></label>
                                <label>${messages.messagesText}: <textarea class="message"></textarea><p class="message"></p></label>
                                <button class="sendMessage" type="button">${messages.send}</button>
                            </form>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    `)
})

$(document).on('click', 'a.readMore', function () {
    function myFunction(value) {
        let date = new Date(value.date);

        $('#content .main').html(
            `<div class="top">
                    <div id="stat">
                        <article>
                            <h1>${value.title}</h1>
                            <section>
                                <table>
                                    <tr>
                                        <td id="accCount"><img src="data:image/png;base64,${value.image}">
                                        ${date.toLocaleDateString()} ${date.toLocaleTimeString()}
                                        </td>
                                        <td id="countAll">
                                            ${value.text}
                                        </td>
                                    </tr>
                                </table>
                            </section>
                        </article>
                    </div>
            </div>`
        );
    };

    $.get(url + '/news/get/' + $(this).attr('id'), function (data) {
        if (data != null) {
            myFunction(data);
        }
    });
})

$(document).on('click', '.nextNews', function () {
    let id = $(this).attr('id');
    generateNextNews(id, this);
})

$(document).on('click', 'button.login', function () {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'login'
    }).then(function (token) {
        if (token !== null) {
            $.post(url + '/reCaptcha/validate', {
                response: token
            }).done(function (result) {
                if (result.success && result.score > 0.5) {

                    login = $("#inputLoginl3").val();
                    let password = $("#inputPassword3").val();

                    if (login === '' || password === '') {
                        $('#lk_form form h1').css("color", "red").html(messages.fieldsCannotEmpty);
                        return;
                    }

                    $('#lk_form form h1').css("color", "white").html(messages.waiting);

                    var userLogin = {
                        login: login,
                        password: password
                    };

                    $.post(url + "/accounts/login", userLogin, function (data) {
                        switch (data.status) {
                            case 'Success':
                                $('form').trigger('reset');
                                showCabinetMenu();
                                $('#lk_form form h1').css("color", "green");
                                break;
                            case 'Not exists':
                                $('form').trigger('reset');
                                $('#lk_form form h1').css("color", "red").html(messages.accountNotExists);
                                break;
                            case 'Incorrect password':
                                $('form').trigger('reset');
                                $('#lk_form form h1').css("color", "red").html(messages.incorrectPassword);
                                break;
                            default:
                                $('form').trigger('reset');
                                $('#lk_form form h1').css("color", "red").html(messages.somthingWrong);
                        }
                    });
                } else {
                    $('form').trigger('reset');
                    $('#lk_form form h1').css("color", "red").html(messages.botsAction);
                    return;
                }
            })
        }
    });
});

$(document).on('click', "button.register", function () {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'login'
    }).then(function (token) {
        if (token !== null) {
            $.post(url + '/reCaptcha/validate', {
                response: token
            }).done(function (result) {
                if (result.success && result.score > 0.5) {
                    let login = $("#inputLoginl3").val();
                    let email = $("#inputEmail3").val();
                    let pass = $("#inputPassword3").val();
                    let passSecond = $("#inputSecondPassword3").val();

                    if (login === '' || email === '' || pass === '' || passSecond === '') {
                        $('#lk_form form h1').css("color", "red").html(messages.fieldsCannotEmpty);
                        return;
                    }

                    if (!(pass).match(passSecond)) {
                        $('#lk_form form h1').css("color", "red").html(messages.passwordsNotMatch);
                        return;
                    }

                    $('#lk_form form h1').css("color", "white").html(messages.waiting);

                    var userRegistration = {
                        login: login,
                        email: email,
                        password: pass,
                        passwordSecond: passSecond
                    };

                    $.post(url + "/accounts/create", userRegistration,
                        function (data) {
                            switch (data.status) {
                                case 'Success':
                                    $('form').trigger('reset');
                                    $('#lk_form form h1').css("color", "green").html(messages.accountCreated + '! ' + messages.checkEmail);
                                    break;
                                case 'No match':
                                    $('#lk_form form h1').css("color", "orange").html(messages.passwordsNotMatch);
                                    $('form').trigger('reset');
                                    break;
                                case 'Login exists':
                                    $('#lk_form form h1').css("color", "yellow").html(messages.loginExists);
                                    $('form').trigger('reset');
                                    break;
                                case 'Email exists':
                                    $('#lk_form form h1').css("color", "red").html(messages.emailExists);
                                    $('form').trigger('reset');
                                    break;
                                case 'Invalid email':
                                    $('#lk_form form h1').css("color", "red").html(messages.incorrectEmail);
                                    $('form').trigger('reset');
                                    break;
                            }
                        });
                } else {
                    $('#lk_form form h1').css("color", "red").html(messages.botsAction);
                    $('form').trigger('reset');
                }
            })
        }
    });
})

$(document).on('click', "button.restore", function () {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'login'
    }).then(function (token) {
        if (token !== null) {
            $.post(url + '/reCaptcha/validate', {
                response: token
            }).done(function (result) {
                if (result.success && result.score > 0.5) {
                    let login = $("#inputLoginl3").val();
                    let email = $("#inputEmail3").val();

                    if (login === '' || email === '') {
                        $('#lk_form form h1').css("color", "red").html(messages.fieldsCannotEmpty);
                        return;
                    }

                    $('#lk_form form h1').css("color", "white").html(messages.waiting);

                    var userRegistration = {
                        login: login,
                        email: email
                    };

                    $.post(url + "/accounts/restorePass", userRegistration,
                        function (data) {
                            switch (data.status) {
                                case 'Success':
                                    $('form').trigger('reset');
                                    if (data.status == 'Success')
                                        $('#lk_form form h1').css("color", "green").html(messages.passwordChanged + '! ' + messages.checkEmail);
                                    break;
                                case 'Invalid login':
                                    $('#lk_form form h1').css("color", "yellow").html(messages.invalidLogin);
                                    $('form').trigger('reset');
                                    break;
                                case 'Not exists':
                                    $('#lk_form form h1').css("color", "yellow").html(messages.accountNotExists);
                                    $('form').trigger('reset');
                                    break;
                                case 'Invalid data':
                                    $('#lk_form form h1').css("color", "red").html(messages.somthingWrong);
                                    $('form').trigger('reset');
                                    break;
                            }
                        }
                    );
                } else {
                    $('#lk_form form h1').css("color", "red").html(messages.botsAction);
                    $('form').trigger('reset');
                    return;
                }
            })
        }
    });
});

$(document).on('click', "button.changePass", function () {
    $("#lk_form form").html(
        '<h1>' + messages.passwordChanging + ' ' + login + '!</h1>' +
        '<div>' +
        '<label><span>' + messages.oldPassword + ':</span><input id="oldPassword" type="password"></label></div>' +
        '<div>' +
        '<label><span>' + messages.newPassword + ':</span><input id="newFirstPassword" type="password"></label></div>' +
        '<div>' +
        '<label><span>' + messages.repeatePassword + ':</span><input id="newSecondPassword"" type="password"></label></div>' +
        '<button class="back" type="button" onclick="showCabinetMenu()"><< ' + messages.back + '</button><button class="changePassword" type="button">' + messages.change + '</button>'
    );

    $('#content #right #lk_form form h1').css('font-size', '10px').css('margin-top', '-5px');
    $('#content #right #lk_form form div span').css('width', '138px');
    $('#content #right #lk_form form div input').css('height', '25px').css('width', '214px');
    $('#content #right #lk_form form button').css('width', '105px').css('transform', 'translateX(-32px)').css('margin-right', '2px').css('height', '20px').css('width', '105px');
    $('#content #right #lk_form form button.back').css('width', '97px')
});

$(document).on('click', "button.changePassword", function () {
    let oldPassword = $("#oldPassword").val();
    let newFirstPassword = $("#newFirstPassword").val();
    let newSecondPassword = $("#newSecondPassword").val();

    if (login === '' || oldPassword === '' || newFirstPassword === '' || newSecondPassword === '') {
        $('#lk_form form h1').css("color", "red").html(messages.fieldsCannotEmpty);
        return;
    }

    if (!(newFirstPassword).match(newSecondPassword)) {
        $('#lk_form form h1').css("color", "red").html(messages.passwordsNotMatch);
        return;
    }

    $('#lk_form form h1').css("color", "white").html(messages.waiting);

    var userRegistration = {
        login: login,
        oldPassword: oldPassword,
        newFirstPassword: newFirstPassword,
        newSecondPassword: newSecondPassword
    };

    $.post(url + "/accounts/changePass", userRegistration,
        function (data) {
            switch (data.status) {
                case 'Success':
                    $('#lk_form form h1').css("color", "green").html(messages.passwordChanged);
                    $('form').trigger('reset');
                    break;

                case 'Invalid pass':
                    $('#lk_form form h1').css("color", "orange").html(messages.incorrerctOldPassword);
                    $('form').trigger('reset');
                    break;

                case 'No match':
                    $('#lk_form form h1').css("color", "orange").html(messages.passwordsNotMatch);
                    $('form').trigger('reset');
                    break;

                case null:
                    $('#lk_form form h1').css("color", "red").html(messages.somthingWrong);
                    $('form').trigger('reset');
                    break;
            }
        }
    );
});

$(document).on('click', "button.exit", function () {
    login = null;
    showLoginForm();
});

$(document).on('click', "a.forgot", function () {
    $("#lk_form form").html(
        '<form>' +
        '<h1>' + messages.passwordChanging + '</h1>' +
        '<div>' +
        '<label><span>' + messages.loginName + ':</span><input id="inputLoginl3" type="text"></label></div>' +
        '<div>' +
        '<label><span>' + messages.email + ':</span><input id="inputEmail3" type="email"></label></div>' +
        '<button class="restore" type="button">' + messages.change + '</button>'
    );

    $("button[type='button']").removeClass().addClass('restore');
    $('#content #right #lk_form form button').css({
        'width': '134px',
        'margin-right': '35px',
        'margin-top': '5px'
    });
})

$(document).on('click', '#lang a#ua', function () {
    lang = 'ua';
    messages = uaMessages;
    $.cookie('language', lang);
    generateMainPage();
})

$(document).on('click', '#lang a#ru', function () {
    lang = 'ru';
    messages = ruMessages;
    $.cookie('language', lang);
    generateMainPage();
})

$(document).on('click', '#lang a#en', function () {
    lang = 'en';
    messages = enMessages;
    $.cookie('language', lang);
    generateMainPage();
})

$(document).on('click', 'button.sendMessage', function () {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'social'
    }).then(function (token) {
        if (token !== null) {
            $.post(url + '/reCaptcha/validate', {
                response: token
            }).done(function (result) {
                if (result.success && result.score > 0.5) {
                    let login = $('div.message form input.name').val();
                    let email = $('div.message form input.email').val();
                    let message = $('div.message form textarea.message').val();

                    if (login === '' || login == null) {
                        showCantEmptyMessage('name');
                        return;
                    }

                    if (email === '' || email == null) {
                        showCantEmptyMessage('email');
                        return;
                    }

                    if (message === '' || message == null) {
                        showCantEmptyMessage('message');
                        return;
                    }

                    let formData = {
                        login: login,
                        email: email,
                        message: message
                    };

                    $.post(url + "/accounts/sendMess", formData,
                        function (data) {
                            $('#content div.message form').hide();

                            switch (data.status) {
                                case 'Success':
                                    $('#content div.message').html(messages.messageSended).css("color", "green");
                                    break;
                                case 'Invalid login':
                                    $('#content div.message').html(messages.invalidLogin).css("color", "orange");
                                    break;
                                case 'Not found':
                                    $('#content div.message').html(messages.accountNotExists).css("color", "red");
                                    break;
                            }
                        }
                    );
                } else {
                    $('div.message form p.question').html(message.botsAction).css('color', 'red');
                    return;
                }
            })
        }
    })
});

