var lang;
var messages;
var login;
var loadTimeout = 1000;


function generateMenu() {
    $('nav').html(`
        <ul>
            <li><a href="#" id="home">${messages.general}</a></li>
            <li><a href="#" id="about">${messages.aboutServer}</a></li>
            <li><a href="#" id="reg">${messages.registration}</a></li>
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

    $('#right #lk_form form button').css('transform', 'translateX(-32px)').css('width', '333px');
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


function generateNewsPage(pageId) {
    $('#articles').html('');
    $('#articles').css({ transform: 'translateX(100px)' });


    function myFunction(value) {
        let date = new Date(value.date);

        $('#articles').append(`
                    <section>
                        <figure>
                            <img src="data:image/png;base64,${value.image}">
                            <div>
                            <figcaption>
                            <time datetime="${value.date}"><span>${date.getDate()}</span>/${date.getMonth() + 1}/${date.getFullYear()}</time>
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
                `).css({ transform: 'translateY(0px)' });
    };


    if (pageId == null)
        pageId = 0;

    fetch(url + '/news/get/pages/' + pageId)
        .then(response => response.json())
        .then(data => {
            if (data != null) {
                data.forEach(element => { myFunction(element) });
            }
        });

    setButtonActive('a.nextNewsPage', 'npActive', '#next_page ul li a[id="' + pageId + '"]');
}


function generateNewsPagesButtons(id) {
    $('#next_page ul').append(`
        <li><a class="nextNewsPage" id="${id}" href="#">${id + 1}</a></li>
    `);

    $('#next_page ul li:first-child a').addClass('npActive');
}


function generateLanguageSelectors(checkedUa, checkedRu, checkedEn) {
    return `<ul>
                <li class="${checkedUa}"><a id="ua" href="#">UA</a></li>
                <li class="${checkedRu}"><a id="ru" href="#">RU</a></li>
                <li class="${checkedEn}"><a id="en" href="#">EN</a></li>
            </ul>`;
}


function generateMainContent(posts, languagesSelectors) {
    let playIndex = Math.floor(Math.random() * videosIds.length);

    $('main').html(`
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
                    ${languagesSelectors}
                </section>
            </div>
            <section id="slider">
                <div class="wrap">
                    <iframe autoplay=1 width="430" height="245" src="https://www.youtube.com/embed/${videosIds[playIndex]}?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    `).css({ opacity: 9 });

    fetch(url + '/news/get/pages')
        .then(response => response.json())
        .then(data => {
            if (data != 0) {
                for (let i = 0; i < data; i++) {
                    generateNewsPagesButtons(i);
                }
            }
        });

}


function generateMain(newsPageId) {
    setButtonActive('nav ul li a', 'navActive', 'nav #home');

    switch (lang) {
        case 'ru':
            generateMainContent(generatePosts(), generateLanguageSelectors('', 'checked', ''));
            break;
        case 'ua':
            generateMainContent(generatePosts(), generateLanguageSelectors('checked', '', ''));
            break;
        case 'en':
            generateMainContent(generatePosts(), generateLanguageSelectors('', '', 'checked'));
            break;
    }

    generateNewsPage(newsPageId);
}


function generateBackButton(id) {
    if (id != null) {
        $('#next_page ul').html(`
            <li><a class="newsBack" id="${id}" href="#"><<</a></li>
        `);
    } else {
        $('#next_page ul').html(`
            <li><a class="homeBack" href="#"><<</a></li>
        `);
    }
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


function setButtonActive(elementRemove, className, elementActive) {
    $(elementRemove).removeClass(className);
    $(elementActive).addClass(className);
}


function getRegisteredServerName() {
    fetch(url + '/ls/getServers')
        .then(response => response.json())
        .then(data => {
            if (data != null) {
                data.forEach(element => {
                    $('#serverName').text(element.name);
                });
            }
        });
}


function getServerStatus() {
    fetch(url + '/gs/get/status')
        .then(response => response.json())
        .then(data => {
            if (data != null) {
                if (data.status === 'ON')
                    $('#status').text(data.status).css('color', '#00ff30');
                else
                    $('#status').text(data.status);

                $('#count').text(data.onlineCounter);
            }
        });
}


function initDefaultLanguagesSettings() {
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
};


function generateMainPage(newsPageId) {
    document.title = messages.title;
    generateMenu();
    generateLogo();
    generateMain(newsPageId);
    generateFooter();
}


function cantEmpty(data) {
    $('div.message form  p.' + data).html(messages.fieldsCannotEmpty).css('color', 'red');
}


function initAll() {
    initDefaultLanguagesSettings();
    generateMainPage(0);
}


$(document).ready(function() {
    initAll();
    getRegisteredServerName();
    getServerStatus();
})

$(document).on('click', 'nav #home', function() {
    $('nav').css({ opacity: 0 });
    $('main').css({ opacity: 0 });
    setTimeout(function() {
        $('nav').css({ opacity: 9 });
        generateMainPage();
    }, loadTimeout);
})

$(document).on('click', 'nav #about', function() {
    $('nav').css({ opacity: 0 });
    $('main').css({ opacity: 0 });
    setTimeout(function() {
        $('main').html(`
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
        `).css({ opacity: 9 });

        setButtonActive('nav ul li a', 'navActive', 'nav #about');
        $('nav').css({ opacity: 9 });
        generateBackButton(null);
    }, loadTimeout);
})

$(document).on('click', 'nav #reg', function() {
    $('nav').css({ opacity: 0 });
    $('main').css({ opacity: 0 });
    setTimeout(function() {
        $('nav').css({ opacity: 9 });
        generateMainPage();
        setButtonActive('nav ul li a', 'navActive', 'nav #reg');

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

        $('#lk_form form h1').css('font-size', '10px').css('margin-top', '-5px');
        $('#lk_form form div').css('margin-top', '0px').css('margin-bottom', '2px');
        $('#lk_form form div input').css('height', '20px');
        $('#lk_form form div span').css('padding-top', '2px');
        $('#lk_form form button').css('width', '134px').css('margin-right', '35px').css('height', '18px');
    }, loadTimeout);
})

$(document).on('click', 'nav #stat', function() {
    $('nav').css({ opacity: 0 });
    $('main').css({ opacity: 0 });
    setTimeout(function() {
        $('main').html(
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
        ).css({ opacity: 9 });

        $('nav').css({ opacity: 9 });
        setButtonActive('nav ul li a', 'navActive', 'nav #stat');
        generateBackButton();

        fetch(url + '/clans/count/all')
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    $('#accCount').html(data.count);
                }
            });

        fetch(url + '/characters/count/byType')
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    $('#countAll').html(data.all);
                    $('#countNobless').html(data.nobles);
                    $('#countHeroes').html(data.heroes);
                    $('#countGm').html(data.gms);
                }
            });


        fetch(url + '/clans/get/all')
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    data.forEach(element => {
                        $('#stat #clans table').append(
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


        fetch(url + '/characters/get/top10')
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    data.forEach(element => {
                        $('#stat #top10 table').append(
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


        fetch(url + '/castles/get/all')
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    data.forEach(element => {
                        $('#stat #castles table').append(
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

        fetch(url + '/forts/get/all')
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    data.forEach(element => {
                        $('#stat #forts table').append(
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
    }, loadTimeout);
})

$(document).on('click', 'nav #contact', function() {
    $('nav').css({ opacity: 0 });
    $('main').css({ opacity: 0 });
    setTimeout(function() {
        $('main').html(`
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
                            `).css({ opacity: 9 });

        $('nav').css({ opacity: 9 });
        setButtonActive('nav ul li a', 'navActive', 'nav #contact');
        generateBackButton();
    }, loadTimeout);
})

$(document).on('click', 'a.readMore', function() {
    $('main').css({ opacity: 0 });
    let newsId = $(this).attr('id');
    let pageId = $('.nextNewsPage.npActive').attr('id');

    setTimeout(function() {
        function myFunction(value) {
            let date = new Date(value.date);

            $('main').html(
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

        fetch(url + '/news/get/' + newsId)
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    myFunction(data);
                }
            });

        generateBackButton(pageId);

        $('main').css({ opacity: 9 });
    }, loadTimeout);
})

$(document).on('click', '.newsBack', function() {
    let newsPageId = $(this).attr('id');
    $('main').css({ opacity: 0 });
    $(this).css({ display: 'none' });
    setTimeout(function() {
        generateMainPage(newsPageId);
    }, loadTimeout);
})

$(document).on('click', '.homeBack', function() {
    $('main').css({ opacity: 0 });
    $(this).css({ display: 'none' });
    setTimeout(function() {
        generateMainPage(null);
    }, loadTimeout);
})

$(document).on('click', '.nextNewsPage', function() {
    $('#articles').css({ opacity: 0 });
    let id = $(this).attr('id');
    setTimeout(function() {
        generateNewsPage(id);
        $('#articles').css({ opacity: 9 });
    }, loadTimeout);
});

async function fetchData(method, urlparam, data) {
    return await fetch(urlparam, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

$(document).on('click', 'button.login', function() {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'login'
    }).then(function(token) {
        if (token !== null) {
            fetchData('POST', url + '/reCaptcha/validate', { response: token }).then(response => response.json())
                .then((result) => {
                    if (result.success && result.score > 0.5) {
                        login = $("#inputLoginl3").val();
                        let password = $("#inputPassword3").val();

                        if (login === '' || password === '') {
                            $('#lk_form form h1').css("color", "red").html(messages.fieldsCannotEmpty);
                            return;
                        }

                        $('#lk_form form h1').css("color", "white").html(messages.waiting);

                        let user = {
                            login: login,
                            password: password
                        };

                        fetchData('POST', url + "/accounts/login", user).then(response => response.json())
                            .then((data) => {
                                $('#lk_form form').css({ opacity: 0 });
                                let status = data.status;
                                setTimeout(function() {
                                    switch (status) {
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
                                    $('#lk_form form').css({ opacity: 9 });
                                }, loadTimeout);
                            });
                    } else {
                        $('form').trigger('reset');
                        $('#lk_form form h1').css("color", "red").html(messages.botsAction);
                        return;
                    }
                });
        }
    });
});

$(document).on('click', "button.register", function() {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'login'
    }).then(function(token) {
        if (token !== null) {
            fetchData('POST', url + '/reCaptcha/validate', { response: token }).then(response => response.json())
                .then((result) => {
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

                        var data = {
                            login: login,
                            email: email,
                            password: pass,
                            passwordSecond: passSecond
                        };

                        fetchData('POST', url + '/accounts/create', data).then(response => response.json())
                            .then((result) => {
                                $('#lk_form form').css({ opacity: 0 });
                                setTimeout(function() {
                                    switch (result.status) {
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
                                    $('#lk_form form').css({ opacity: 9 });
                                }, loadTimeout);
                            });
                    } else {
                        $('#lk_form form h1').css("color", "red").html(messages.botsAction);
                        $('form').trigger('reset');
                    }
                })
        }
    });
})

$(document).on('click', "button.restore", function() {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'login'
    }).then(function(token) {
        if (token !== null) {
            fetchData('POST', url + '/reCaptcha/validate', { response: token }).then(response => response.json())
                .then((result) => {
                    if (result.success && result.score > 0.5) {
                        let login = $("#inputLoginl3").val();
                        let email = $("#inputEmail3").val();

                        if (login === '' || email === '') {
                            $('#lk_form form h1').css("color", "red").html(messages.fieldsCannotEmpty);
                            return;
                        }

                        $('#lk_form form h1').css("color", "white").html(messages.waiting);

                        var userData = {
                            login: login,
                            email: email
                        };

                        fetchData('POST', url + '/accounts/restorePass', userData).then(response => response.json())
                            .then((result) => {
                                $('#lk_form form').css({ opacity: 0 });
                                setTimeout(function() {
                                    switch (result.status) {
                                        case 'Success':
                                            $('form').trigger('reset');
                                            if (result.status == 'Success')
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
                                    $('#lk_form form').css({ opacity: 9 });
                                }, loadTimeout);
                            });
                    } else {
                        $('#lk_form form h1').css("color", "red").html(messages.botsAction);
                        $('form').trigger('reset');
                        return;
                    }
                })
        }
    });
});

$(document).on('click', "button.changePass", function() {
    $('#lk_form form').css({ opacity: 0 });
    setTimeout(function() {
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

        $('#right #lk_form form h1').css('font-size', '10px').css('margin-top', '-5px');
        $('#right #lk_form form div span').css('width', '138px');
        $('#right #lk_form form div input').css('height', '25px').css('width', '214px');
        $('#right #lk_form form button').css('width', '105px').css('transform', 'translateX(-32px)').css('margin-right', '2px').css('height', '20px').css('width', '105px');
        $('#right #lk_form form button.back').css('width', '97px');
        $('#lk_form form').css({ opacity: 9 });
    }, loadTimeout);
});

$(document).on('click', "button.changePassword", function() {
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

    fetchData('POST', url + '/accounts/changePass', userRegistration).then(response => response.json())
        .then((result) => {
            $('#lk_form form').css({ opacity: 0 });
            setTimeout(function() {
                switch (result.status) {
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
                $('#lk_form form').css({ opacity: 9 });
            }, loadTimeout);
        });
});

$(document).on('click', "button.exit", function() {
    $('#lk_form form').css({ opacity: 0 });
    setTimeout(function() {
        login = null;
        showLoginForm();
        $('#lk_form form').css({ opacity: 9 });
    }, loadTimeout);
});

$(document).on('click', "a.forgot", function() {
    $('#lk_form form').css({ opacity: 0 });
    setTimeout(function() {
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
        $('#right #lk_form form button').css({
            'width': '134px',
            'margin-right': '35px',
            'margin-top': '5px'
        });
        $('#lk_form form').css({ opacity: 9 });
    }, loadTimeout);
})

$(document).on('click', '#lang a#ua', function() {
    $('nav').css({ opacity: 0 });
    $('#logo').css({ opacity: 0 });
    $('main').css({ opacity: 0 });
    setTimeout(function() {
        lang = 'ua';
        messages = uaMessages;
        $.cookie('language', lang);
        $('nav').css({ opacity: 9 });
        $('#logo').css({ opacity: 9 });
        generateMainPage();
    }, loadTimeout);
})

$(document).on('click', '#lang a#ru', function() {
    $('nav').css({ opacity: 0 });
    $('#logo').css({ opacity: 0 });
    $('main').css({ opacity: 0 });
    setTimeout(function() {
        lang = 'ru';
        messages = ruMessages;
        $.cookie('language', lang);
        $('nav').css({ opacity: 9 });
        $('#logo').css({ opacity: 9 });
        generateMainPage();
    }, loadTimeout);
})

$(document).on('click', '#lang a#en', function() {
    $('nav').css({ opacity: 0 });
    $('#logo').css({ opacity: 0 });
    $('main').css({ opacity: 0 });
    setTimeout(function() {
        lang = 'en';
        messages = enMessages;
        $.cookie('language', lang);
        $('nav').css({ opacity: 9 });
        $('#logo').css({ opacity: 9 });
        generateMainPage();
    }, loadTimeout);
})

$(document).on('click', 'button.sendMessage', function() {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'social'
    }).then(function(token) {
        if (token !== null) {
            fetchData('POST', url + '/reCaptcha/validate', { response: token }).then(response => response.json())
                .then((result) => {
                    if (result.success && result.score > 0.5) {
                        let login = $('div.message form input.name').val();
                        let email = $('div.message form input.email').val();
                        let message = $('div.message form textarea.message').val();

                        if (login === '' || login == null) {
                            cantEmpty('name');
                            return;
                        }

                        if (email === '' || email == null) {
                            cantEmpty('email');
                            return;
                        }

                        if (message === '' || message == null) {
                            cantEmpty('message');
                            return;
                        }

                        let userData = {
                            login: login,
                            email: email,
                            message: message
                        };

                        fetchData('POST', url + "/accounts/sendMess", userData).then(response => response.json())
                            .then((data) => {
                                $('main').css({ opacity: 0 });
                                setTimeout(function() {
                                    switch (data.status) {
                                        case 'Success':
                                            $('main div.message').html(messages.messageSended).css("color", "green");
                                            break;
                                        case 'Invalid login':
                                            $('main div.message').html(messages.invalidLogin).css("color", "orange");
                                            break;
                                        case 'Not found':
                                            $('main div.message').html(messages.accountNotExists).css("color", "red");
                                            break;
                                    }
                                    $('main').css({ opacity: 9 });
                                }, loadTimeout);
                            });
                    } else {
                        $('div.message form p.question').html(message.botsAction).css('color', 'red');
                        return;
                    }
                })
        }
    })
});