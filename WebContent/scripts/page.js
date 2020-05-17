var url = 'http://localhost:8080';

var serverName = 'LineageII server';

var developerName = 'LaJDev';

var ruMessages = {
    title: 'LaJDev::Бесплатный игровой сервер LineageII',
    slogan: `от ${developerName} - качество, проверенное временем`,
    general: "Главная",
    aboutServer: "О сервере",
    registration: "Регистрация",
    contact: 'Контакты',
    files: "Файлы",
    statistic: "Статистика",
    forum: "Форум",
    fieldsCannotEmpty: 'Поля не должны быть пустыми!',
    waiting: 'Подождите ...',
    loginExists: 'Логин уже существует!',
    accountCreated: 'Аккаунт создан!',
    accountNotExists: 'Аккаунт не существует!',
    incorrectPassword: 'Не верный пароль!',
    incorrerctOldPassword: 'Неверный старый пароль!',
    invalidLogin: 'Неверный логин!',
    passwordsNotMatch: 'Пароли не совпадают!',
    passwordChanged: 'Пароль изменен',
    checkEmail: 'Проверьте почту :)',
    mesageCanOnlyRegisteredUsers: 'Сообщения могут отправлять только зарегистрированые пользователи',
    incorrectEmail: 'Неправильный e-mail :(...',
    somthingWrong: 'Что-то пошло не так(...',
    botsAction: 'Подозрение на бот-активность(...',
    passwordChanging: 'Смена пароля',
    forgotPassword: 'Забыли пароль',
    password: 'Пароль',
    oldPassword: 'Старый пароль',
    newPassword: 'Новый пароль',
    repeatePassword: 'Повторить пароль',
    back: 'Назад',
    change: 'Сменить',
    loginName: 'Логин',
    enter: 'Войти',
    email: 'E-mail',
    send: 'Отправить',
    messageSended: 'Сообщение отправлено!',
    messageNotSended: 'Письмо не отправлено :( ...',
    invalidAnswer: 'Неверный ответ!',
    news: 'НОВОСТИ ПРОЕКТА',
    dataCenter: 'Датацентр',
    publishingIn: 'Опубликовано в',
    readMore: 'Подробнее ...',
    personalCabinet: 'ЛИЧНЫЙ КАБИНЕТ',
    newsCaption: 'Заголовок',
    forumMessages: 'СЛУХИ НА ФОРУМЕ',
    exit: 'Выход',
    welcome: 'Приветствуем',
    license: 'ДАННЫЙ СЕРВЕР ЯВЛЯЕТСЯ ТЕСТОВЫМ ВАРИАНТОМ ИГРЫ LINEAGE II И ПРЕДНАЗНАЧЕН ТОЛЬКО ДЛЯ ОЗНАКОМЛЕНИЯ ИГРОКОВ. ВСЕ ПРАВА ПРИНАДЛЕЖАТ КОМПАНИИ NCSOFT.',
    rates: 'Рейты',
    selectIntoTop: 'Отбор в ТОП',
    selectIntoTopDescription: 'Проводится автоматически. Необходимое условие - получения статуса дворянина. Далеее сортировка происходит от наибольшего количества проведенного времени в игре. Отобранные в "десятку" еженедельно будут получать вознаграждение в виде Адены.',
    common: 'Общее',
    commonDescription: 'Броня, оружие, бижа с "Д" - до "Дино" сэтов, патроны - возможно покупать в комьюнити шопе. Пожелания, предложения, отчет по багам присылайте используя форму разделе "Контакты". Приятного геймплея!:)',
    ourCommunitys: 'Наши сообщества в социальных сетях',
    contactsForm: 'Форма для связи',
    fullName: 'Логин',
    emailForFeedback: 'Е-мейл (для обратной связи)',
    messagesText: 'Текст сообщения',
    accounts: 'Аккаунтов',
    characters: 'Персонажей',
    nobleses: 'Дворян',
    heroes: 'Героев',
    gameMasters: 'Гейм мастеров',
    clans: 'Кланы',
    allys: 'Альянсов',
    top10chars: 'Тор 10 персонажей',
    charName: 'Игровой ник',
    charClass: 'Класс',
    charSex: 'Пол',
    clanName: 'Название клана',
    gameTime: 'Время в игре',
    lvl: 'Ур.',
    leader: 'Лидер',
    reputation: 'Репутация',
    midLvl: 'Ср.ур',
    ally: 'Альянс',
    castles: 'Замки',
    castleName: 'Название замка',
    owner: 'Владелец',
    tax: 'Ставка налога',
    treasure: 'Казна',
    siegeDate: 'Дата осады',
    forts: 'Форты',
    fortName: 'Название форта'
}

var enMessages = {
    title: 'LaJDev::Free LineageII game server',
    slogan: `from ${developerName} - time-tested quality`,
    general: 'Home',
    aboutServer: 'About server',
    registration: 'Registration',
    files: 'Files',
    statistic: 'Statistics',
    contact: 'Contacts',
    forum: 'Forum',
    fieldsCannotEmpty: 'Fields must not be empty!',
    waiting: 'Wait ...',
    loginExists: 'Login already exists!',
    accountCreated: 'Account created!',
    accountNotExists: 'Account does not exist!',
    incorrectPassword: 'Invalid password!',
    incorrerctOldPassword: 'Invalid old password!',
    invalidLogin: 'Invalid login!',
    passwordsNotMatch: 'Passwords do not match!',
    passwordChanged: 'Password changed',
    checkEmail: 'Check mail :)',
    incorrectEmail: 'Invalid e-mail: (...',
    mesageCanOnlyRegisteredUsers: 'Messages can only be sent by registered users',
    somthingWrong: 'Something went wrong (...',
    botsAction: 'Suspicion of bot activity (...',
    passwordChanging: 'Change password',
    forgotPassword: 'Forgot password',
    password: 'Password',
    oldPassword: 'Old password',
    newPassword: 'New password',
    repeatePassword: 'Repeat password',
    back: 'Back',
    change: 'Change',
    loginName: 'Login',
    enter: 'Login',
    email: 'E-mail',
    send: 'Send',
    messageSended: 'Message sent!',
    messageNotSended: 'Email not sent :( ...',
    invalidAnswer: 'Invalid answer!',
    news: 'PROJECT NEWS',
    dataCenter: 'Datacenter',
    publishingIn: 'Posted in',
    readMore: 'Read more ...',
    personalCabinet: 'PERSONAL OFFICE',
    newsCaption: 'Headline',
    forumMessages: 'HEARINGS ON THE FORUM',
    exit: 'Exit',
    welcome: 'Welcome',
    rates: 'Rates',
    license: 'THIS SERVER IS A TEST OPTION OF THE LINEAGE II GAME AND IS DESIGNED ONLY TO ACQUAINT PLAYERS. ALL RIGHTS OWNED BY NCSOFT. ',
    selectIntoTop: 'Selection in TOP',
    selectIntoTopDescription: 'Held automatically. A necessary condition is to obtain the status of a nobleman. The following sorting occurs from the greatest amount of time spent in the game. Selected in the top ten will receive a weekly reward in the form of Adena. ',
    common: 'General',
    commonDescription: 'Armor, weapons, bijou from "D" - to "Dino" sets, ammunition - it is possible to buy in the community store. Send wishes, suggestions, bug reports using the form to the "Contacts" section. Enjoy the gameplay! :)',
    ourCommunitys: 'Our communities in social networks',
    contactsForm: 'Contact form',
    fullName: 'Login',
    emailForFeedback: 'Email (for feedback)',
    messagesText: 'Message text',
    accounts: 'Accounts',
    characters: 'Characters',
    nobleses: 'Nobles',
    heroes: 'Heroes',
    gameMasters: 'Game Masters',
    clans: 'Clans',
    allys: 'Alliances',
    top10chars: 'Thor 10 characters',
    charName: 'Game nickname',
    charClass: 'Class',
    charSex: 'Gender',
    clanName: 'Clan name',
    gameTime: 'Time in the game',
    lvl: 'Lv.',
    leader: 'Leader',
    reputation: 'Reputation',
    midLvl: 'Wed.ur',
    ally: 'Alliance',
    castles: 'Castles',
    castleName: 'Castle name',
    owner: 'Owner',
    tax: 'tax rate',
    treasure: 'Treasury',
    siegeDate: 'Siege Date',
    forts: 'Forts',
    fortName: 'Fort name'
}

var uaMessages = {
    title: 'LaJDev::Безкоштовний ігровий сервер LineageII',
    slogan: `від ${developerName} - якість, перевірена часом`,
    general: 'Головна',
    aboutServer: 'Про сервер',
    registration: 'Реєстрація',
    files: 'Файли',
    statistic: 'Статистика',
    contact: 'Контакти',
    forum: 'Форум',
    fieldsCannotEmpty: 'Поля не повинні бути порожніми!',
    waiting: 'Зачекайте ...',
    loginExists: 'Логін вже існує!',
    accountCreated: 'Аккаунт створений!',
    accountNotExists: 'Аккаунт не існує!',
    incorrectPassword: 'Не вірний пароль!',
    incorrerctOldPassword: 'Неправильний старий пароль!',
    invalidLogin: 'Невірний логін!',
    passwordsNotMatch: 'Паролі не співпадають!',
    passwordChanged: 'Пароль змінений',
    checkEmail: 'Перевірте пошту :)',
    incorrectEmail: 'Неправильний e-mail: (...',
    mesageCanOnlyRegisteredUsers: 'Повідомлення можуть відправляти тільки зареєстровані користувачі',
    somthingWrong: 'Щось пішло не так (...',
    botsAction: 'Підозра на бот-активність (...',
    passwordChanging: 'Зміна паролю',
    forgotPassword: 'Забули пароль',
    password: 'Пароль',
    oldPassword: 'Старий пароль',
    newPassword: 'Новий пароль',
    repeatePassword: 'Повторити пароль',
    back: 'Назад',
    change: 'Змінити',
    loginName: 'Логін',
    enter: 'Увійти',
    email: 'E-mail',
    send: 'Відправити',
    messageSended: 'Повідомлення відправлено!',
    messageNotSended: 'Письмо не відправлено :( ...',
    invalidAnswer: 'Неправильна відповідь!',
    news: 'НОВИНИ ПРОЕКТУ',
    dataCenter: 'Датацентр',
    publishingIn: 'Опубліковано в',
    readMore: 'Детальніше ...',
    personalCabinet: 'ОСОБИСТИЙ КАБІНЕТ',
    newsCaption: 'Заголовок',
    forumMessages: 'ЧУТКИ НА ФОРУМІ',
    exit: 'Вихід',
    welcome: 'Вітаємо',
    license: 'ДАНИЙ СЕРВЕР Є ТЕСТОВИМ ВАРІАНТОМ ГРИ LINEAGE II І ПРИЗНАЧЕНИЙ ТІЛЬКИ ДЛЯ ОЗНАЙОМЛЕННЯ. ВСІ ПРАВА НАЛЕЖАТЬ КОМПАНІЇ NCSOFT.',
    rates: 'Рейти',
    selectIntoTop: 'Відбір в ТОП',
    selectIntoTopDescription: 'Проводиться автоматично. Необхідна умова - отримання статусу дворянина. Дале сортування відбувається від найбільшої кількості проведеного часу в грі. Відібрані в "десятку" щотижня отримуватимуть винагороду у вигляді адени. ',
    common: 'Загальна',
    commonDescription: 'Броня, зброя, біжать з "Д" - до "Діно" сетів, патрони - можливо купувати в ком`юніті шопі. Побажання, пропозиції, звіт по Багам надсилайте використовуючи форму розділі "Контакти". Приємного геймплея! :)',
    ourCommunitys: 'Наші спільноти в соціальних мережах',
    contactsForm: 'Форма для зв`язку',
    fullName: 'Логін',
    emailForFeedback: 'Е-мейл (для зворотного зв`язку) ',
    messagesText: 'Текст повідомлення',
    accounts: 'Акаунтів',
    characters: 'Персонажів',
    nobleses: 'Дворян',
    heroes: 'Героїв',
    gameMasters: 'Гейм майстрів',
    clans: 'Клани',
    allys: 'Альянсів',
    top10chars: 'Тор 10 персонажів',
    charName: 'Ігровий нік',
    charClass: 'Клас',
    charSex: 'Пол',
    clanName: 'Назва клану',
    gameTime: 'Час в грі',
    lvl: 'Рів.',
    leader: 'Лідер',
    reputation: 'Репутація',
    midLvl: 'Ср.рів',
    ally: 'Альянс',
    castles: 'Замки',
    castleName: 'Назва замку',
    owner: 'Власник',
    tax: 'Ставка податку',
    treasure: 'Казна',
    siegeDate: 'Дата облоги',
    forts: 'Форти',
    fortName: 'Назва форту'
}

var lang = 'ru';

var messages = ruMessages;


$(document).ready(function () {
    generateMainPage(messages);
})


function generateMenu(messages) {
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


function generetArticles(messages) {
    let article = '';

    for (i = 0; i < 3; i++) {
        article += `
        <section>
            <figure>
                <img src="images/news/14.jpg" alt="${messages.dataCenter}">
                <div>
                    <figcaption>
                        <time datetime="2019-06-30T07:25"><span>30</span>/06/2019</time>
                        <p><span>${messages.publishingIn}</span> 7:25</p>
                    </figcaption>
                </div>
                <a href="">${messages.readMore}</a>
            </figure>
            <div id="news">
                <h2>${messages.newsCaption}</h2>
                <p>Завтра ожидается переезд нашего любимого проекта в новый датацентр в Киеве.
                Теперь пинг для жителей Украины,России и Белоруси будет во много раз меньше...</p>
            </div>
        </section>
    `}

    return article;
}


function generateLanguageSelectors(checkedUa, checkedRu, checkedEn) {
    block = `<ul>
                <li class="${checkedUa}"><a id="ua" href="#">UA</a></li>
                <li class="${checkedRu}"><a id="ru" href="#">RU</a></li>
                <li class="${checkedEn}"><a id="en" href="#">EN</a></li>
            </ul>`

    return block;
}


function generateMainContent(messages, articles, posts, languages) {
    $('#content .main').html(`
        <div id="left">
        <article>
            <h1>${messages.news}</h1>
            <div id="articles">
                ${articles}
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
                            <button id="submit" type="button">${messages.enter}</button>
                        </div>
                    </form>
                    <div id="formBoard">
                        <span>${messages.forgotPassword}</span> <a class="remember">? >></a>
                    </div>
                </section>
                <section id="lang">
                    ${languages}
                </section>
            </div>
            <section id="slider">
                <div class="wrap">
                    <header>
                        <div class="labels">
                            <label for="slide-1"></label> <label for="slide-2"></label> <label
                                for="slide-3"></label>
                        </div>
                    </header>
                    <input id="slide-1" type="radio" name="slides" checked>
                    <section class="slide slide-one">
                        <div>
                            <h1>Бонусы за выявление багов!</h1>
                        </div>
                    </section>
                    <input id="slide-2" type="radio" name="slides">
                    <section class="slide slide-two">
                        <h1>Захватывающие сражения!</h1>
                    </section>
                    <input id="slide-3" type="radio" name="slides">
                    <section class="slide slide-three">
                        <h1>Гм панель - все что нужно всегда под рукой!</h1>
                    </section>
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
}


function generateMainPage(messages) {
    generateMenu(messages);

    switch (lang) {
        case 'ru':
            generateMainContent(messages, generetArticles(messages), generatePosts(messages), generateLanguageSelectors('', 'checked', ''));
            break;
        case 'ua':
            generateMainContent(messages, generetArticles(messages), generatePosts(messages), generateLanguageSelectors('checked', '', ''));
            break;
        case 'en':
            generateMainContent(messages, generetArticles(messages), generatePosts(messages), generateLanguageSelectors('', '', 'checked'));
            break;
    }

    generateFooter(messages);
}


function generateFooter(messages) {
    $('footer').html(`
        <section class="left">
            <div id="next_page">
                <ul>
                    <li><a href="">1</a></li>
                    <li><a href="">→</a></li>
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


function changeLanguage(messages) {
    document.title = messages.title;

    generateMenu(messages);

    $('#logo h1').text(serverName);
    $('#logo p').text(messages.slogan);
    $('.social_list a span').html(developerName);
    $('#left article h1').html(messages.news);

    $('#content #left #articles').html(generetArticles(messages));

    $('footer .left p').html(messages.footersServerDescription);

    $('#lk_form h1').html(messages.personalCabinet);
    $('#lk_form .login').html(messages.loginName);
    $('#lk_form .password').html(messages.password);
    $('#lk_form #submit').html(messages.enter);
    $('#formBoard span').html(messages.forgotPassword);
    $('#forum .caption h1').html(messages.forumMessages);

    $('#forum .posts').html(generatePosts(messages));

    $('#social .title h1').html(messages.ourCommunitys);
}


$(document).on('click', 'nav #main', function () {
    generateMainPage(messages);
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
    generateMainPage(messages);

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
                                <button type="button">${messages.send}</button>
                            </form>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    `)
})

$(document).on('click', '#lang a#ua', function () {
    messages = uaMessages;
    lang = 'ua';
    generateMainPage(messages);
})

$(document).on('click', '#lang a#ru', function () {
    messages = ruMessages;
    lang = 'ru';
    generateMainPage(messages);
})

$(document).on('click', '#lang a#en', function () {
    messages = enMessages;
    lang = 'en';
    generateMainPage(messages);
})

