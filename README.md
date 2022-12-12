# acid-crm
PHP-based CRM app

[![GitHub license](https://img.shields.io/github/license/c0de4un/acid-crm)](https://github.com/c0de4un/acid-crm/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/c0de4un/acid-crm)](https://github.com/c0de4un/acid-crm/stargazers)

## Features
 * Hybrid rendering technique (SPA and SSR)
 * Plagun-system (for backend and frontend)
 * caching techniques combination
 * preloader (opcache)
 * integration with vcs services
 * task-based system for cron
 * admin panel
 * role-system
 * events/hooks

## Run
There is 2 ways to launch solution.
1. Use docker to start containers
```sh
    $docker-compose up --build -d
```
2. Use already configured web-server (`nginx` or `apache`)
1) Download and copy `composer.phar` to `web/html`
2) Install PHP-packages
```sh
    $cd web/html
    $php composer.phar install
```
3) Install JavaScript packages using `npm`
```sh
    $cd web/html
    $npm install
```
