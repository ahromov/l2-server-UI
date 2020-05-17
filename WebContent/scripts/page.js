var url = 'http://localhost:8080';
var serverName = 'LineageII server';
var developerName = 'LaJDev';
var slogan = `от ${developerName} - катчество, проверенное временем`;

var ruMessages = {
    general: "Главная",
    aboutServer: "О сервере",
    registration: "Регистрация",
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
    passwordsNotMatch: 'Пароли не совпадают!',
    passwordChanged: 'Пароль изменен',
    checkEmail: 'Проверьте почту :)',
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
    welcome: 'Приветствуем'
}

var enMessages = {
    general: 'Home',
    aboutServer: 'About server',
    registration: 'Registration',
    files: 'Files',
    statistic: 'Statistics',
    forum: 'Forum',
    fieldsCannotEmpty: 'Fields must not be empty!',
    waiting: 'Wait ...',
    loginExists: 'Login already exists!',
    accountCreated: 'Account created!',
    accountNotExists: 'Account does not exist!',
    incorrectPassword: 'Invalid password!',
    incorrerctOldPassword: 'Invalid old password!',
    passwordsNotMatch: 'Passwords do not match!',
    passwordChanged: 'Password changed',
    checkEmail: 'Check mail :)',
    incorrectEmail: 'Invalid e-mail: (...',
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
    send: 'send',
    messageSended: 'Message sent!',
    messageNotSended: 'Email not sent :( ...',
    invalidAnswer: 'Invalid answer!',
    news: 'PROJECT NEWS',
    dataCenter: 'Datacenter',
    publishingIn: 'Posted in',
    readMore: 'More ...',
    personalCabinet: 'PERSONAL OFFICE',
    newsCaption: 'Headline',
    forumMessages: 'HEARINGS ON THE FORUM',
    exit: 'Exit',
    welcome: 'Welcome'
}

var uaMessages = {
    general: 'Головна',
    aboutServer: 'Про сервер',
    registration: 'Реєстрація',
    files: 'Файли',
    statistic: 'Статистика',
    forum: 'Форум',
    fieldsCannotEmpty: 'Поля не повинні бути порожніми!',
    waiting: 'Зачекайте ...',
    loginExists: 'Логін вже існує!',
    accountCreated: 'Аккаунт створений!',
    accountNotExists: 'Аккаунт не існує!',
    incorrectPassword: 'Не вірний пароль!',
    incorrerctOldPassword: 'Неправильний старий пароль!',
    passwordsNotMatch: 'Паролі не співпадають!',
    passwordChanged: 'Пароль змінений',
    checkEmail: 'Перевірте пошту :)',
    incorrectEmail: 'Неправильний e-mail: (...',
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
    forumMessages: 'Чутки на форумі',
    exit: 'Вихід',
    welcome: 'Вітаємо'
}

var messages = ruMessages;


changeLanguage(messages);

$(document).on('click', '#lang a#ua', function () {
    messages = uaMessages;
    changeLanguage(messages);
})

$(document).on('click', '#lang a#ru', function () {
    window.location.reload(false);
})

$(document).on('click', '#lang a#en', function () {
    messages = enMessages;
    changeLanguage(messages);
})


function changeLanguage(messages) {
    $('nav').html(`
    <ul>
        <li><a href="index.html" id="main">${messages.general}</a></li>
        <li><a href="#" id="about">${messages.aboutServer}</a></li>
        <li><a id="reg">${messages.registration}</a></li>
        <li><a target="_blank" href="https://drive.google.com/open?id=1a9jqbmIrBIJxJzH0ADN5LaAdtMbB_zKo" id="files">${messages.files}</a></li>
        <li><a href="stat.html" id="stat">${messages.statistic}</a></li>
        <li><a href="./forum/" id="forum">${messages.forum}</a></li>
    </ul>
    `);

    $('#serverName').text('None');
    $('#check').text('OFF');
    $('#count').text('0');
    $('#logo h1').text(serverName);
    $('#logo p').text(slogan);
    $('.social_list a span').html(developerName);
    $('#left article h1').html(messages.news);

    $('#content #left #articles').html(generetArticles(messages));

    $('#lk_form h1').html(messages.personalCabinet);
    $('#lk_form .login').html(messages.loginName);
    $('#lk_form .password').html(messages.password);
    $('#lk_form #submit').html(messages.enter);
    $('#formBoard span').html(messages.forgotPassword);
    $('#forum .caption h1').html(messages.forumMessages);

    $('#forum .posts').html(generatePosts(messages));
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

function generatePosts(messages) {
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

$(document).on('click', '#about', function () {
    $('#content .main').html(`
    <div class="top">
        <div id="stat">
            <article>
                <h1>Рейты</h1>
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
                <h1>Отбор в ТОП:</h1>
                <div class="top">
                    <p>Проводится автоматически.</p>
                    <p>Необходимое условие - получения статуса дворянина.<br>
                        Далеее сортировка происходит от наибольшего количества проведенного времени в игре.
                        <br>Отобранные в "десятку" еженедельно будут получать вознаграждение в виде Адены.</p>
                </div>
            </article>
            <article>
                <h1>Общее:</h1>
                <div class="top">
                    <p>Броня, оружие, бижа с "Д" - до "Дино" сэтов, патроны - возможно покупать в комьюнити
                        шопе.</p>
                    <p>Пожелания, предложения, отчет по багам присылайте используя форму разделе <a
                            href="contact.html">Связь</a></p>
                    <p>Приятного геймплея!:)</p>
                </div>
            </article>
        </div>
    </div>
    `)
})


$(document).on('click', '#contact', function () {
    $('#content .main').html(
        `<div class="top">
        <div id="stat">
            <article>
                <h1>Форма для связи</h1>
                <section>
                    <div id="contact">
                        <form>
                            <label>Имя: <input type="text" class="name">
                                <p class="name"></p>
                            </label>
                            <label>Е-мейл (для обратной связи): <input type="email" class="email">
                                <p class="email"></p>
                            </label>
                            <label>Текст сообщения: <textarea class="message"></textarea>
                                <p class="message"></p>
                            </label>
                            <label>Ответ на вопрос (2*2-2=?): <input type="text" class="question">
                                <p class="question"></p>
                            </label>
                            <button type="button">Отправить</button>
                        </form>
                    </div>
                </section>
            </article>
        </div>
        </div>
    `)
})

$(document).on('click', '#stat', function () {
    $('#content .main').html(
        `<div class="top">
				<div id="stat">
					<article>
						<h1>Общая</h1>
						<section>
							<table>
								<tr>
									<th>Аккаунтов:</th>
									<th>Персонажей:</th>
									<th>Дворян:</th>
									<th>Героев:</th>
									<th>Гейм мастеров:</th>
									<th>Кланов:</th>
									<th>Альянсов:</th>
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
						<h1>Тор 10 игроков</h1>
						<section>
							<table>
								<tr>
									<th>Игровой ник:</th>
									<th>Класс:</th>
									<th>Пол:</th>
									<th>Клан:</th>
									<th>Время в игре:</th>
									<th>PvP/PK:</th>
								</tr>
							</table>
						</section>
					</article>
					<article id="clans">
						<h1>Кланы</h1>
						<section>
							<table>
								<tr>
									<th>Название:</th>
									<th>Ур.</th>
									<th>Лидер:</th>
									<th>Репутация:</th>
									<th>Ср.ур:</th>
									<th>Альянс:</th>
								</tr>
							</table>
						</section>
					</article>
					<article id="castles">
						<h1>Замки</h1>
						<section>
							<table>
								<tr>
									<th></th>
									<th>Название:</th>
									<th>Владелец:</th>
									<th>Ставка налога:</th>
									<th>Казна:</th>
									<th>Дата осады:</th>
								</tr>
							</table>
						</section>
					</article>
					<article id="forts">
						<h1>Форты</h1>
						<section>
							<table>
								<tr>
									<th></th>
									<th>Название:</th>
									<th>Владелец:</th>
									<th>Дата осады:</th>
								</tr>
							</table>
						</section>
					</article>
				</div>
            </div>`
    )
})



