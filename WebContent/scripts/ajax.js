var url = 'http://localhost:8080';

var login;

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
