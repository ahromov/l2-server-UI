var lang;
var messages;
var login;
var loadTimeout = 400;


function generateMenu() {
    $('nav').html(`
        <ul>
            <li><a href="#!home" id="home">${messages.general}</a></li>
            <li><a href="#!about" id="about">${messages.aboutServer}</a></li>
            <li><a href="#!reg" id="reg">${messages.registration}</a></li>
            <li><a target="_blank" href="https://drive.google.com/open?id=1a9jqbmIrBIJxJzH0ADN5LaAdtMbB_zKo" id="files">${messages.files}</a></li>
            <li><a href="#!stat" id="stat">${messages.statistic}</a></li>
            <li><a href="#!cont" id="contact">${messages.contact}</a></li>
            <li><a target="_blank" href="${urlForum}" id="forum">${messages.forum}</a></li>
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
    $("#lk_form").html(`
        <form>
            <h1>${messages.personalCabinet}</h1>
            <div id="formInputs">
                <div><span class="login">${messages.loginName}:</span><input autocomplete="off" id="inputLoginl3" type="text"></div>
                <div><span class="password">${messages.password}:</span><input autocomplete="off" id="inputPassword3" type="password"></div>
            </div>
            <div>
                <button class="login" type="button">${messages.enter}</button>
            </div>
		</form>
		<div id="formBoard">
			<span>${messages.forgotPassword}</span> <a class="forgot">? >></a>
        </div>
    `);
}


function showCabinetMenu() {
    let formSelector = '#lk_form form';

    $(formSelector).html(`
        <h1>${messages.welcome}  ${login}!</h1>
        <button type="button" class="changePass">${messages.passwordChanging}</button>
        <button type="button" class="exit">${messages.exit}</button></<button>
    `);

    $(formSelector + ' button').css('width', '159px');
}


function generatePosts() {
    $('#forum .posts').html('');

    let countLIstItem = 0;

    function myFunction(value) {
        let date = new Date(value.lastPostedDate);

        let topicImageUrl = '';
        if (value.icon !== null) {
            topicImageUrl = `<img src="${urlForum}/images/icons/${value.icon.url}">`;
        }

        $('#forum .posts').append(`
            <li id=${countLIstItem}>
                <h2>${topicImageUrl}<a target="_blank" href="${urlForum}/viewtopic.php?f=${value.forumId}&t=${value.id}">${value.title.substring(0, 25) + (value.title.length > 25 ? " ..." : "")}</a> // ${date.toLocaleDateString()} ${date.toLocaleTimeString()} • ${value.posterName}</h2>
            </li>`).css({ transform: 'translateY(0px)' });

        if (topicImageUrl !== '') {
            $(`#forum .posts li[id="${countLIstItem}"]`).addClass('empty_marker');
        }

        countLIstItem++;
    };

    fetch(url + '/forums/get/topics/last5')
        .then(response => response.json())
        .then(data => {
            if (data != null) {
                data.forEach(element => { myFunction(element) });
            }
        });

}


function generateNewsPage(pageId) {
    $('#articles').html('');

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
                            <a class="readMore" id="${value.id}" type="button">${messages.readMore}</a>
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
        <li><a class="nextNewsPage" id="${id}" type="button">${id + 1}</a></li>
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


function generateMainContent(languagesSelectors) {
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
                    
                </ul>
            </section>
        </div>
    `);

    showLoginForm();

    elementFadeShow('main');

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
            generateMainContent(generateLanguageSelectors('', 'checked', ''));
            break;
        case 'ua':
            generateMainContent(generateLanguageSelectors('checked', '', ''));
            break;
        case 'en':
            generateMainContent(generateLanguageSelectors('', '', 'checked'));
            break;
    }

    generateNewsPage(newsPageId);
    generatePosts();
}


function generateBackButton(id) {
    let slelector = '#next_page ul';

    if (id != null) {
        $(slelector).html(`
            <li><a class="newsBack" id="${id}" href="#"><<</a></li>
        `);
    } else {
        $(slelector).html(`
            <li><a class="homeBack" href="#"><<</a></li>
        `);
    }
}


function generateFooter() {
    $('footer').html(`
        <section class="left">
            <div id="next_page"><ul></ul></div>
            <h1>© ${new Date().getFullYear()} Lineage2Server.com</h1>
            <p>${messages.license}</p>
        </section>
        <section id="social" class="right">
            <div class="title"><h1>${messages.ourCommunitys}:</h1></div>
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
}


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


function setFormHeaderStatus(status, color) {
    $('#lk_form form h1').html(status).css("color", color);
}


function setFormsInfoMessage(message) {
    $('#lk_form form #formInputs').html(`
        <div class="infoMessage">
            ${message}
        </div>
    `).css('text-align', 'center');
}


function elementFadeHide(elSelector) {
    $(elSelector).css({ opacity: 0 });
}


function elementFadeShow(elSelector) {
    $(elSelector).css({ opacity: 1 });
}


function checkSubmit(e) {
    if (e && e.keyCode == 13) {
        $('form button[type="button"]').focus();
    }
}


function initAll() {
    initDefaultLanguagesSettings();
    generateMainPage();
    getRegisteredServerName();
    getServerStatus();
}


async function send(method, url, data) {
    return await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}


$(document).ready(function () {
    initAll();
})

$(document).on('click', 'nav #home', function () {
    let navSelector = 'nav';
    let mainSelector = 'main';

    elementFadeHide(navSelector);
    elementFadeHide(mainSelector);

    setTimeout(function () {
        elementFadeShow(navSelector);
        generateMainPage();
    }, loadTimeout);
})

$(document).on('click', 'nav #about', function () {
    let navSelector = 'nav';
    let mainSelector = 'main';

    elementFadeHide(navSelector);
    elementFadeHide(mainSelector);

    let ratesTable = '';

    fetch(url + '/gs/get/rates')
        .then(response => response.json()).then(data => {
            if (data != null) {
                $.each(data, function (i, val) {
                    ratesTable += `<tr><th>${i}</th><td>x${val}</td></tr>`;
                });

                setTimeout(function () {
                    $(mainSelector).html(`
                        <div class="top">
                            <div id="stat">
                                <article>
                                    <h1>${messages.rates}</h1>
                                    <section>
                                        <table id="rates">
                                            ${ratesTable}
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
                    `);

                    setButtonActive('nav ul li a', 'navActive', 'nav #about');

                    elementFadeShow(navSelector);
                    elementFadeShow(mainSelector);
                    generateBackButton(null);
                }, loadTimeout);
            }
        });
})

$(document).on('click', 'nav #reg', function () {
    let formSelector = "#lk_form form";
    let navSelector = 'nav';
    let mainSelector = 'main';

    elementFadeHide(navSelector);
    elementFadeHide(mainSelector);

    setTimeout(function () {
        elementFadeShow(navSelector);
        generateMainPage();
        setButtonActive('nav ul li a', 'navActive', 'nav #reg');

        $(formSelector).html(`
            <form> 
            <h1>${messages.registration}</h1><div id="formInputs">
            <div><span>${messages.loginName}:</span><input id="inputLoginl3" type="text"></div>
            <div><span>${messages.email}:</span><input id="inputEmail3" type="email"></div>
            <div><span>${messages.password}:</span><input id="inputPassword3" type="password"></div>
            <div><span>${messages.repeatePassword}:</span><input id="inputSecondPassword3" type="password"></div></div> 
            <button class="register" type="button">${messages.send}</button>
        `);

        $(formSelector + ' h1').css({
            'font-size': '10px',
            'margin-top': '-5px'
        });

        $(formSelector + ' div').css({
            'margin-top': '0px',
            'margin-bottom': '2px'
        });

        $(formSelector + ' div input').css('height', '20px');

        $(formSelector + ' div span').css('padding-top', '2px');

        $(formSelector + ' button').css({
            'width': '134px',
            'margin-right': '35px',
            'height': '18px',
            'margin-top': '0px'
        });
    }, loadTimeout);
})

$(document).on('click', 'nav #stat', function () {
    let navSelector = 'nav';
    let mainSelector = 'main';

    elementFadeHide(navSelector);
    elementFadeHide(mainSelector);
    setTimeout(function () {
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
        </div>
        `);

        elementFadeShow(navSelector);
        elementFadeShow(mainSelector);

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

$(document).on('click', 'nav #contact', function () {
    let navSelector = 'nav';
    let mainSelector = 'main';

    elementFadeHide(navSelector);
    elementFadeHide(mainSelector);
    setTimeout(function () {
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
        `);

        elementFadeShow(navSelector);
        elementFadeShow(mainSelector);
        setButtonActive('nav ul li a', 'navActive', 'nav #contact');
        generateBackButton();
    }, loadTimeout);
})

$(document).on('click', 'a.readMore', function () {
    let articlesSelector = '#articles';

    elementFadeHide(articlesSelector);

    let newsId = $(this).attr('id');

    setTimeout(function () {
        function myFunction(value) {
            let date = new Date(value.date);

            $(articlesSelector).html(`
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
                        <p>${value.text}</p>
                    </div>
                </section>
            `);

            $(articlesSelector + ' section').css({ background: 'none' });
            $('a.readMore').css({ display: 'none' });
        };

        fetch(url + '/news/get/' + newsId)
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    myFunction(data);
                }
            });

        elementFadeShow(articlesSelector);
    }, loadTimeout);
})

$(document).on('click', '.homeBack', function () {
    let mainSelector = 'main';

    elementFadeHide(mainSelector);

    $(this).css({ display: 'none' });
    setTimeout(function () {
        generateMainPage(null);
    }, loadTimeout);
})

$(document).on('click', '.nextNewsPage', function () {
    $('#articles').css({ opacity: 0 });
    let id = $(this).attr('id');
    setTimeout(function () {
        generateNewsPage(id);
        $('#articles').css({ opacity: 9 });
    }, loadTimeout);
})

$(document).on('click', 'button.login', function () {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'login'
    }).then(function (token) {
        if (token !== null) {
            send('POST', url + '/reCaptcha/validate', { response: token }).then(response => response.json())
                .then((result) => {
                    if (result.success && result.score > 0.5) {
                        let formSelector = '#lk_form form';

                        login = $("#inputLoginl3").val();
                        let password = $("#inputPassword3").val();

                        if (login === '' || password === '') {
                            setFormHeaderStatus(messages.fieldsCannotEmpty, 'red');
                            return;
                        }

                        setFormHeaderStatus(messages.waiting, 'inherit');

                        let userData = {
                            login: login,
                            password: password
                        };

                        send('POST', url + "/accounts/login", userData).then(response => response.json())
                            .then((data) => {
                                elementFadeHide('#lk_form form');

                                let status = data.status;

                                setTimeout(function () {
                                    switch (status) {
                                        case 'Success':
                                            $('form').trigger('reset');
                                            showCabinetMenu();
                                            $(formSelector + 'h1').css("color", "green");
                                            break;
                                        case 'Not exists':
                                            $('form').trigger('reset');
                                            setFormHeaderStatus(messages.accountNotExists, 'orange');
                                            break;
                                        case 'Incorrect password':
                                            $('form').trigger('reset');
                                            setFormHeaderStatus(messages.incorrectPassword, 'red');
                                            break;
                                        default:
                                            $('form').trigger('reset');
                                            setFormHeaderStatus(messages.somthingWrong, 'red');
                                    }

                                    elementFadeShow('#lk_form form');
                                }, loadTimeout);
                            });
                    } else {
                        $('form').trigger('reset');
                        setFormHeaderStatus(messages.botsAction, 'red');
                        return;
                    }
                });
        }
    });
})

$(document).on('click', "button.register", function () {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'login'
    }).then(function (token) {
        if (token !== null) {
            send('POST', url + '/reCaptcha/validate', { response: token }).then(response => response.json())
                .then((result) => {
                    if (result.success && result.score > 0.5) {
                        let formSelector = '#lk_form form';

                        let login = $("#inputLoginl3").val();
                        let email = $("#inputEmail3").val();
                        let pass = $("#inputPassword3").val();
                        let passSecond = $("#inputSecondPassword3").val();

                        if (login === '' || email === '' || pass === '' || passSecond === '') {
                            setFormHeaderStatus(messages.fieldsCannotEmpty, 'red');
                            return;
                        }

                        if (!(pass).match(passSecond)) {
                            setFormHeaderStatus(messages.passwordsNotMatch, 'orange');
                            return;
                        }

                        $(formSelector + 'h1').css("color", "white").html(messages.waiting);

                        var userData = {
                            login: login,
                            email: email,
                            password: pass,
                            passwordSecond: passSecond
                        };

                        send('POST', url + '/accounts/create', userData).then(response => response.json())
                            .then((result) => {
                                elementFadeHide('#lk_form form');

                                setTimeout(function () {
                                    switch (result.status) {
                                        case 'Success':
                                            $('form').trigger('reset');
                                            setFormHeaderStatus(messages.accountCreated + '! ' + messages.checkEmail, 'green');
                                            break;
                                        case 'No match':
                                            setFormHeaderStatus(messages.passwordsNotMatch, 'orange');
                                            $('form').trigger('reset');
                                            break;
                                        case 'Login exists':
                                            setFormHeaderStatus(messages.loginExists, 'yellow');
                                            $('form').trigger('reset');
                                            break;
                                        case 'Email exists':
                                            setFormHeaderStatus(messages.emailExists, 'red');
                                            $('form').trigger('reset');
                                            break;
                                        case 'Invalid email':
                                            setFormHeaderStatus(messages.incorrectEmail, 'red');
                                            $('form').trigger('reset');
                                            break;
                                    }

                                    elementFadeShow('#lk_form form');
                                }, loadTimeout);
                            });
                    } else {
                        setFormHeaderStatus(messages.botsAction, 'red');
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
            send('POST', url + '/reCaptcha/validate', { response: token }).then(response => response.json())
                .then((result) => {
                    if (result.success && result.score > 0.5) {
                        let login = $("#inputLoginl3").val();
                        let email = $("#inputEmail3").val();

                        if (login === '' || email === '') {
                            setFormHeaderStatus(messages.fieldsCannotEmpty, "red");
                            return;
                        }

                        setFormHeaderStatus(messages.waiting, 'inherit');

                        var userData = {
                            login: login,
                            email: email
                        };

                        send('POST', url + '/accounts/restorePass', userData).then(response => response.json())
                            .then((result) => {
                                $('#lk_form form').addClass('fadeHidde');

                                setTimeout(function () {
                                    switch (result.status) {
                                        case 'Success':
                                            $('form').trigger('reset');
                                            if (result.status == 'Success') {
                                                setFormHeaderStatus(result.status, "green");
                                                setFormsInfoMessage(messages.passwordChanged + '! ' + messages.checkEmail);
                                            }
                                            break;
                                        case 'Invalid login':
                                            setFormHeaderStatus(messages.invalidLogin, 'yellow');
                                            $('form').trigger('reset');
                                            break;
                                        case 'Not exists':
                                            setFormHeaderStatus(messages.accountNotExists, 'orange');
                                            $('form').trigger('reset');
                                            break;
                                        case 'Invalid data':
                                            setFormHeaderStatus(messages.somthingWrong, 'red');
                                            $('form').trigger('reset');
                                            break;
                                    }

                                    $('#lk_form form').removeClass('fadeHidde');
                                }, loadTimeout);
                            });
                    } else {
                        setFormHeaderStatus(messages.botsAction, 'red');
                        $('form').trigger('reset');
                        return;
                    }
                })
        }
    });
})

$(document).on('click', "button.changePass", function () {
    let formSelector = '#lk_form form';

    elementFadeHide(formSelector);

    setTimeout(function () {
        $(formSelector).html(` 
            <h1>${messages.passwordChanging} ${login}!</h1>
            <div id="formInputs">
                <div><span>${messages.oldPassword}:</span><input id="oldPassword" type="password"></div>
                <div><span>${messages.newPassword}:</span><input id="newFirstPassword" type="password"></div>
                <div><span>${messages.repeatePassword}:</span><input id="newSecondPassword"" type="password"></div>
            </div>
            <button class="back" type="button"><< ${messages.back}</button>
            <button class="changePassword" type="button">${messages.change}</button>
        `);

        $(formSelector + ' h1').css('font-size', '10px').css('margin-top', '-5px');
        $(formSelector + ' div span').css('width', '138px');
        $(formSelector + ' div input').css('height', '25px').css('width', '214px');
        $(formSelector + ' button').css('width', '105px').css('transform', 'translateX(-32px)').css('margin-right', '2px').css('height', '20px').css('width', '105px');
        $(formSelector + ' button.back').css('width', '97px');

        elementFadeShow(formSelector);
    }, loadTimeout);
})

$(document).on('click', "button.changePassword", function () {
    let oldPassword = $("#oldPassword").val();
    let newFirstPassword = $("#newFirstPassword").val();
    let newSecondPassword = $("#newSecondPassword").val();

    let formSelector = '#lk_form form';

    if (login === '' || oldPassword === '' || newFirstPassword === '' || newSecondPassword === '') {
        setFormHeaderStatus(messages.fieldsCannotEmpty, 'red');
        return;
    }

    if (!(newFirstPassword).match(newSecondPassword)) {
        setFormHeaderStatusl(messages.passwordsNotMatch, 'red');
        return;
    }

    setFormHeaderStatus(messages.waiting, 'inherit');

    var userData = {
        login: login,
        oldPassword: oldPassword,
        newFirstPassword: newFirstPassword,
        newSecondPassword: newSecondPassword
    };

    send('POST', url + '/accounts/changePass', userData).then(response => response.json())
        .then((result) => {
            elementFadeHide(formSelector);

            setTimeout(function () {
                switch (result.status) {
                    case 'Success':
                        setFormHeaderStatus(result.status, 'green')
                        setFormsInfoMessage(messages.passwordChanged, 'green');
                        $('form').trigger('reset');
                        break;
                    case 'Invalid pass':
                        setFormHeaderStatus(messages.incorrerctOldPassword, 'orange');
                        $('form').trigger('reset');
                        break;
                    case 'No match':
                        setFormHeaderStatus(messages.passwordsNotMatch, 'orange');
                        $('form').trigger('reset');
                        break;
                    case null:
                        setFormHeaderStatus(messages.somthingWrong, 'red');
                        $('form').trigger('reset');
                        break;
                }

                elementFadeShow(formSelector);
            }, loadTimeout);
        });
})

$(document).on('click', "#lk_form form button.back", function () {
    let formSeletor = '#lk_form form';

    elementFadeHide(formSeletor);

    setTimeout(function () {
        showCabinetMenu();
        elementFadeShow(formSeletor);
    }, loadTimeout);
})

$(document).on('click', "button.exit", function () {
    let formSeletor = '#lk_form form';

    elementFadeHide(formSeletor);

    setTimeout(function () {
        login = null;
        showLoginForm();
        elementFadeShow(formSeletor);
    }, loadTimeout);
})

$(document).on('click', "a.forgot", function () {
    let formSelector = '#lk_form form';

    elementFadeHide(formSelector);

    setTimeout(function () {
        $("#lk_form form").html(`
            <form> 
                <h1>${messages.passwordChanging}</h1>
                <div id="formInputs">
                    <div><span>${messages.loginName}:</span><input id="inputLoginl3" type="text"></div> 
                    <div><span>${messages.email}:</span><input id="inputEmail3" type="email"></div>
                </div> 
            <button class="restore" type="button">${messages.change}</button>
        `);

        $("button[type='button']").removeClass().addClass('restore');
        $(formSelector + 'button').css({
            'width': '134px',
            'margin-right': '35px',
            'margin-top': '5px'
        });

        elementFadeShow(formSelector);
    }, loadTimeout);
})

$(document).on('click', '#lang a#ua', function () {
    let navSelector = 'nav';
    let logoSelector = '#logo';
    let mainSelector = 'main';

    elementFadeHide(navSelector);
    elementFadeHide(logoSelector);
    elementFadeHide(mainSelector);

    setTimeout(function () {
        lang = 'ua';
        messages = uaMessages;
        $.cookie('language', lang);

        elementFadeShow(navSelector);
        elementFadeShow(logoSelector);
        generateMainPage();
    }, loadTimeout);
})

$(document).on('click', '#lang a#ru', function () {
    let navSelector = 'nav';
    let logoSelector = '#logo';
    let mainSelector = 'main';

    elementFadeHide(navSelector);
    elementFadeHide(logoSelector);
    elementFadeHide(mainSelector);

    setTimeout(function () {
        lang = 'ru';
        messages = ruMessages;
        $.cookie('language', lang);

        elementFadeShow(navSelector);
        elementFadeShow(logoSelector);
        generateMainPage();
    }, loadTimeout);
})

$(document).on('click', '#lang a#en', function () {
    let navSelector = 'nav';
    let logoSelector = '#logo';
    let mainSelector = 'main';

    elementFadeHide(navSelector);
    elementFadeHide(logoSelector);
    elementFadeHide(mainSelector);
    setTimeout(function () {
        lang = 'en';
        messages = enMessages;
        $.cookie('language', lang);

        elementFadeShow(navSelector);
        elementFadeShow(logoSelector);
        generateMainPage();
    }, loadTimeout);
})

$(document).on('click', 'button.sendMessage', function () {
    grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
        action: 'social'
    }).then(function (token) {
        if (token !== null) {
            send('POST', url + '/reCaptcha/validate', { response: token }).then(response => response.json())
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

                        send('POST', url + "/accounts/sendMess", userData).then(response => response.json())
                            .then((data) => {
                                $('main').css({ opacity: 0 });
                                setTimeout(function () {
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
                                        case 'Email not found':
                                            $('main div.message').html(messages.incorrectEmail).css("color", "red");
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
})

$(document).on('keypress', 'input[type="password"]', function (e) {
    checkSubmit(e);
})