CREATE USER 'marvel_universe_user'@'localhost' IDENTIFIED BY 'vcUCIS8377@r';
GRANT ALL PRIVILEGES ON marvel_universe.* TO 'marvel_universe_user'@'localhost';
ALTER USER 'marvel_universe_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'vcUCIS8377@r';