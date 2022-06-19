# How to install in Laragon Windows

1. Start All in laragon
1. Open your database editor (HeidiSQL)
1. Create new database, example `test`
1. Open your terminal
1. change dir to www folder
1. `git clone https://github.com/skuadron45/ajaxmythauth.git`
1. `cd ajaxmythauth`
1. `composer update`
1. create .env file
1. change baseURL to your virtual host
   (ajaxmythauth.test)
1. Setting your database settings.
1. `php spark migrate`
1. `php spark db:seed UserSeeder`
1. Reload your Apache in Laragon
1. Open (http://ajaxmythauth.test) at your default browser.

1. access http://ajaxmythauth.test/logout for logging out

I already create method for handle login with ajax in App\Controllers\AuthController.php

```
public function attemptLoginAjax()
    {
        $rules = [
            'login'    => 'required',
            'password' => 'required',
        ];
        if ($this->config->validFields === ['email']) {
            $rules['login'] .= '|valid_email';
        }

        if (!$this->validate($rules)) {
            // return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
            $errors = $this->validator->getErrors();
            return $this->failValidationErrors($errors);
        }

        $login    = $this->request->getPost('login');
        $password = $this->request->getPost('password');
        $remember = (bool) $this->request->getPost('remember');

        // Determine credential type
        $type = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        // Try to log them in...
        if (!$this->auth->attempt([$type => $login, 'password' => $password], $remember)) {

            // return redirect()->back()->withInput()->with('error', $this->auth->error() ?? lang('Auth.badAttempt'));
            return $this->fail($this->auth->error());
        }

        // Is the user being forced to reset their password?
        if ($this->auth->user()->force_pass_reset === true) {
            // return redirect()->to(route_to('reset-password') . '?token=' . $this->auth->user()->reset_hash)->withCookies();
            return $this->fail("User need reset password");
        }

        // $redirectURL = session('redirect_url') ?? site_url('/');
        // unset($_SESSION['redirect_url']);

        // return redirect()->to($redirectURL)->withCookies()->with('message', lang('Auth.loginSuccess'));

        /**
         * if you comment this line, cookie will using old session and you are not logged in although successful with login process.
         */
        Services::response()->getCookieStore()->clear();

        $success = [
            'messages' => 'Login Successfull',
        ];
        return $this->respond($success);
    }
```
