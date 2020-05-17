var login;

function showStartMenu() {
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
			<button id="submit" type="button">${messages.enter}</button>
		</div>
		</form>
		<div id="formBoard">
			<span>${messages.forgotPassword}</span> <a class="remember">? >></a>
		</div>`
	);
}

function showMenu() {

	$("#lk_form form").html(
		'<h1>' + messages.welcome + ', ' + login + '!</h1>' +
		'<button type="button" class="changePass">' + messages.passwordChanging + '</button>' +
		'<button type="button" class="exit">' + messages.exit + '</button></<button>'
	);

	$('#content #right #lk_form form button').css('transform', 'translateX(-32px)').css('width', '333px');

}

$(document).on('click', '#submit', function () {

	grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
		action: 'login'
	}).then(function (token) {
		if (token !== null) {
			$.post(url + '/reCaptcha/validate', {
				response: token
			}).done(function (result) {
				if (result.success && result.score > 0.5) {

					login = $("#inputLoginl3").val();
					var pass = $("#inputPassword3").val();

					if (login === '' || pass === '') {
						$('#lk_form form h1').css("color", "red").html(messages.fieldsCannotEmpty);
						return;
					}

					$('#lk_form form h1').css("color", "white").html(messages.waiting);

					var userLogin = {
						login: login,
						password: pass
					};

					$.post(url + "/accounts/login", userLogin, function (data) {
						switch (data.status) {
							case 'Success':
								$('form').trigger('reset');
								showMenu();
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


$(document).on('click', ".exit", function () {
	login = '';
	showStartMenu();
});


$(document).on('click', ".changePass", function () {
	$("#lk_form form").html(
		'<h1>' + messages.passwordChanging + ' ' + login + '!</h1>' +
		'<div>' +
		'<label><span>' + messages.oldPassword + ':</span><input id="oldPassword" type="password"></label></div>' +
		'<div>' +
		'<label><span>' + messages.newPassword + ':</span><input id="newFirstPassword" type="password"></label></div>' +
		'<div>' +
		'<label><span>' + messages.newPassword + ':</span><input id="newSecondPassword"" type="password"></label></div>' +
		'<button class="back" type="button" onclick="showMenu()"><< ' + messages.back + '</button><button class="submit" type="button">' + messages.change + '</button>'
	);

	$('#content #right #lk_form form h1').css('font-size', '10px').css('margin-top', '-5px');
	// $('#content #right #lk_form form div').css('margin-top', '-1px');
	$('#content #right #lk_form form div span').css('width', '138px');
	$('#content #right #lk_form form div input').css('height', '25px').css('width', '214px');
	$('#content #right #lk_form form button').css('width', '105px').css('transform', 'translateX(-32px)').css('margin-right', '2px').css('height', '20px').css('width', '105px');
	$('#content #right #lk_form form button.back').css('width', '97px')
});


$(document).on('click', ".submit", function () {
	var oldPassword = $("#oldPassword").val();
	var newFirstPassword = $("#newFirstPassword").val();
	var newSecondPassword = $("#newSecondPassword").val();

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


$(".remember").click(function () {
	$("#lk_form form").html(
		'<form>' +
		'<h1>' + messages.passwordChanging + '</h1>' +
		'<div>' +
		'<label><span>' + messages.loginName + ':</span><input id="inputLoginl3" type="text"></label></div>' +
		'<div>' +
		'<label><span>' + messages.email + ':</span><input id="inputEmail3" type="email"></label></div>' +
		'<button class="submit" type="button">' + messages.change + '</button>'
	);

	$("button[type='button']").removeClass().addClass('rem');
	// $('#content #right #lk_form form button').css('width', '134px').css('margin-right', '35px').css('margin-top', '5px');
	$('#content #right #lk_form form button').animate({
		'width': '134px',
		'margin-right': '35px',
		'margin-top': '5px'
	});
})


$(document).on('click', ".rem", function () {
	grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
		action: 'login'
	}).then(function (token) {
		if (token !== null) {
			$.post(url + '/reCaptcha/validate', {
				response: token
			}).done(function (result) {
				if (result.success && result.score > 0.5) {
					var login = $("#inputLoginl3").val();
					var email = $("#inputEmail3").val();

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
							switch (data.message) {
								case 'Success':
									$('form').trigger('reset');
									if (data.status == 'Success')
										$('#lk_form form h1').css("color", "green").html(messages.passwordChanged + '! ' + messages.checkEmail);
									break;

								case 'Not exists':
									$('#lk_form form h1').css("color", "yellow").html(messages.accountNotExists);
									$('form').trigger('reset');
									break;

								case 'Invalid email':
									$('#lk_form form h1').css("color", "yellow").html(messages.incorrectEmail);
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

$("#reg").click(function () {
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
	).fadeTo(3000, 0.6);

	$('#content #right #lk_form form h1').css('font-size', '10px').css('margin-top', '-5px');
	$('#content #right #lk_form form div').css('margin-top', '0px').css('margin-bottom', '2px');
	$('#content #right #lk_form form div input').css('height', '20px');
	$('#content #right #lk_form form div span').css('padding-top', '2px');
	$('#content #right #lk_form form button').css('width', '134px').css('margin-right', '35px').css('height', '18px');
})


$(document).on('click', ".register", function () {
	grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
		action: 'login'
	}).then(function (token) {
		if (token !== null) {
			$.post(url + '/reCaptcha/validate', {
				response: token
			}).done(function (result) {
				if (result.success && result.score > 0.5) {
					var login = $("#inputLoginl3").val();
					var email = $("#inputEmail3").val();
					var pass = $("#inputPassword3").val();
					var passSecond = $("#inputSecondPassword3").val();

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

								case 'Exists':
									$('#lk_form form h1').css("color", "yellow").html(messages.loginExists);
									$('form').trigger('reset');
									break;

								case 'Invalid data':
									$('#lk_form form h1').css("color", "red").html(messages.somthingWrong);
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

function cantEmpty(data) {
	$('div#contact form  p.' + data).html(messages.fieldsCannotEmpty).css('color', 'red');
}

$(document).on('click', 'div#contact form button[type="button"]', function () {
	grecaptcha.execute('6LcW18QUAAAAAO7x430ImUvox3gR3SzhUwJCIr8C', {
		action: 'social'
	}).then(function (token) {
		if (token !== null) {
			$.post(url + '/reCaptcha/validate', {
				response: token
			}).done(function (result) {
				if (result.success && result.score > 0.5) {
					var name = $('div#contact form input.name').val();
					var email = $('div#contact form input.email').val();
					var message = $('div#contact form textarea.message').val();
					var answer = $('div#contact form input.question').val();

					if (name === '' || name == null) {
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

					if (answer === '' || answer == null) {
						cantEmpty('question');
						return;
					} else {
						if (parseInt(answer) == 2 * 2 - 2) {
							var userRegistration = {
								name: name,
								email: email,
								message: message,
								answer: answer
							};

							$.post(url + "/accounts/sendMess", userRegistration,
								function (data) {
									switch (data.message) {
										case 'Success':
											$('form').trigger('reset');
											if (data.isMailSended)
												$('div#contact form').css("color", "green").html(message.messageSended);
											else
												$('div#contact form').css("color", "red").html(message.messageNotSended);
											break;

										case 'Invalid data':
											$('div#contact form').css("color", "red").html(message.somthingWrong);
											$('form').trigger('reset');
											break;
									}
								}
							);
						} else {
							$('div#contact form p.question').html(message.invalidAnswer).css('color', 'red');
							return;
						}
					}
				} else {
					$('div#contact form p.question').html(message.botsAction).css('color', 'red');
					return;
				}
			})
		}
	})
});