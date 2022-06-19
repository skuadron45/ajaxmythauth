# How to install in Laragon Windows

1. Start All in laragon
1. Create database, example test
1. Open your terminal
1. cd to www folder
1. git clone https://github.com/skuadron45/ajaxmythauth.git
1. cd ajaxmythauth
1. composer update
1. create .env file
1. change baseURL to your virtual host 
(ajaxmythauth.test)
1. Setting your database settings.
1. php spark migrate
1. php spark db:seed UserSeeder
1. Open (ajaxmythauth.test) at your default browser.



