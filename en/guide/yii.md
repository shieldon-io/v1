# Yii

In this guide, I will give you some idea about how to implement Shieldon Firewall on your Yii application.

![Firewall in Yii Framework](https://shieldon.io/images/home/yii-framework-firewall.png)


## Installation

Use PHP Composer:

```php
composer require shieldon/shieldon
```

## Implementing

### Yii 2

#### 1. Before initializing Kernal

In your `public/index.php`, before this line:

```php
require __DIR__ . '/../vendor/yiisoft/yii2/Yii.php';
```

Add the following code:

```php
/*
|--------------------------------------------------------------------------
| Run The Shieldon Firewall
|--------------------------------------------------------------------------
|
| Shieldon Firewall will watch all HTTP requests coming to your website.
| Running Shieldon Firewall before initializing Yii will avoid possible
| conflicts with Yii's built-in functions.
*/

if (isset($_SERVER['REQUEST_URI'])) {

    // Notice that this directory must be writable.
    $firewallstorage = __DIR__ . '/../runtime/shieldon';

    $firewall = new \Shieldon\Firewall($firewallstorage);
    $firewall->restful();
    $firewall->run();
}
```

#### 2.  Define a Route for Firewall Panel.

Create a controller named `FirewallPanelController`. 

The content would be the code below:

```php
<?php

namespace app\controllers;

use yii\web\Controller;

class FirewallPanelController extends Controller
{
    public function beforeAction($action)
    {
        $this->enableCsrfValidation = false;

        return parent::beforeAction($action);
    }

    /**
     * The entry point of the Firewall Panel.
     *
     * @return string
     */
    public function actionIndex()
    {
        // Get Firewall instance from Shieldon Container.
        $firewall = \Shieldon\Container::get('firewall');

        // Get into the Firewall Panel.
        $controlPanel = new \Shieldon\FirewallPanel($firewall);

        $controlPanel->entry();
        exit;
    }
}

```

Make sure that `enablePrettyUrl` is true in your `config/web.php`

```php
'urlManager' => [
    'enablePrettyUrl' => true,
    'showScriptName' => false,
    'rules' => [
    ],
],
```

That's it.

You can access the Firewall Panel by `/firewall-panel`, to see the page, go to this URL in your browser.

```bash
https://for.example.com/firewall-panel
```

The default login is `shieldon_user` and `password` is `shieldon_pass`. After logging in the Firewall Panel, the first thing you need to do is to change the login and password.

Shieldon Firewall will start watching your website if it get enabled in `Deamon` setting section, make sure you have set up the settings correctly.