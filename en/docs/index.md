
Shieldon is a Web Application Firewall (WAF) for PHP. Taking less than 10 minutes only, PHP expert developers will understand how to implement Shieldon Firewall on their Web applications. The goal of this library is to make the PHP community more secure and being extremely easy-to-use.

- Website: [https://shieldon.io](https://shieldon.io/)
- GitHub Repository:  [https://github.com/terrylinooo/shieldon](https://github.com/terrylinooo/shieldon)

## Features

- SEO friendly.
- Http-type DDOS mitigation.
- Anti-scraping.
- Online session control.
- Cross-site scripting (XSS) protection.
- Interrupting vulnerability scanning.
- Eradicating brute force attacks.
- IP manager.
- Protecting pages via WWW-Authenticate.
- Detailed statistics and charts.
- Send notifications when specific events occurred. Supported modules:
    - Slack
    - Telegram
    - Line Notify
- Web UI for System firewall - iptables and ip6tables.
- More features will come...

## Installation

Use PHP Composer:

```php
composer require shieldon/shieldon
```

Or, download it and include the Shieldon autoloader.
```php
require 'Shieldon/autoload.php';
```

## Implementing

Here are the guides of integrating with the popular PHP frameworks.

- [Laravel](https://shieldon.io/en/guide/laravel.html)
- [Symfony](https://shieldon.io/en/guide/symfony.html)
- [CodeIgniter](https://shieldon.io/en/guide/codeigniter.html)
- [CakePHP](https://shieldon.io/en/guide/cakephp.html)
- [Yii](https://shieldon.io/en/guide/yii.html)
- [Zend](https://shieldon.io/en/guide/zend.html)
- [Slim](https://shieldon.io/en/guide/slim.html)
- [Fat-Free](https://shieldon.io/en/guide/fatfree.html)
- [Fuel](https://shieldon.io/en/guide/fuel.html)
- [PHPixie](https://shieldon.io/en/guide/phpixie.html)

## Firewall Panel

Shieldon provides a visualization UI called Firewall Panel. By using Shieldon Firewall, you can easily implement it on your Web application.

![Firewall Panel](https://i.imgur.com/MELx6Vl.png)

Click [here](/demo/) to view demo.

- user: `demo`
- password: `demo`

## Screenshots

Only a few screenshots are listed below.

### Firewall Panel

#### Captcha Stats

![Captcha Statistics](https://i.imgur.com/tjc8mW8.png)

#### Online Session Stats

You can see the real-time data here if `Online Session Limit` is enabled.

![](https://i.imgur.com/sfssPyj.png)

#### Rule Table

You can temporarily ban a user here.

![](https://i.imgur.com/5Vg2brX.png)

#### Responsive

Shieldon's Firewall Panel is fully responsive, and you can manage it when you are not in front of your computer, using your mobile phone at any time.

![Responsive Firewall Panel](https://i.imgur.com/fUz9lZD.png)


### Dialog

#### Temporarily Ban a User

When the users or robots are trying to view many your web pages in a short period of time, they will temporarily get banned. Get unbanned by solving a Catpcha.

![](https://i.imgur.com/rlsEwSG.png)

#### Permanently Ban a User

When a user has been permanently banned.

![](https://i.imgur.com/Qy1sADw.png)


#### Online Session Control

When a user has reached the online session limit. You can set the online session limit by using `limitSession` API.

![](https://i.imgur.com/cAOKIY8.png)

## Author

Shieldon library is brought to you by [Terry L.](https://terryl.in) from Taiwan.

## License

MIT
