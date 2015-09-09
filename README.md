# Phantom Capture

This is a simple program for [PhantomJS](http://phantomjs.org/) that automates capturing screenshots for a website on multiple [devices](#devices) by simulating various viewports and user agents.

## Requirements

[PhantomJS](http://phantomjs.org/) is required and can be easily installed on Mac OS X via HomeBrew.

```shell
$ brew install phantomjs
```

For other operating systems, please see [http://phantomjs.org/download.html](http://phantomjs.org/download.html).

## Usage

```shell
$ phantomjs pc.js [url] [optional location]
```

Capture screenshots for **https://dribbble.com/**:

```shell
$ phantomjs pc.js https://dribbble.com/
```

Capture screenshots for **https://dribbble.com/** in a subdirectory called **./dribble/**

```shell
$ phantomjs pc.js https://dribbble.com/ ./dribble
```

## Blank Screenshots with SSL Sites

You may get blank screenshots for sites with SSL certificate errors. I use the following alias on my system to get around this issue:

```shell
# alias phantomjs to ignore ssl errors
alias phantomjs="phantomjs --ignore-ssl-errors=true"
```

## Devices

The following devices are supported out of the box in the file ``./lib/devices.js`` file. 

You can set the **active** flag to true or false to turn capture on/off for devices in the JSON file. You can also add additional browsers and devices.

- Amazon Kindle Fire HDX
- Apple iPad
- Apple iPhone 4
- Apple iPhone 5
- Apple iPhone 6
- Apple iPhone 6 Plus
- BlackBerry PlayBook
- BlackBerry Z30
- Google Nexus 10
- Google Nexus 4
- Google Nexus 5
- Google Nexus 6
- Google Nexus 7
- LG Optimus L70
- Laptop with HiDPI screen
- Laptop with MDPI screen
- Nokia Lumia 520
- Nokia N9
- Samsung Galaxy Note 3
- Samsung Galaxy Note II
- Samsung Galaxy SIII
- Samsung Galaxy S4

## Contributions

Contributions are always welcome.

## License

Eric J Nesser, 2015. MIT