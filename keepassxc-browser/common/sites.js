'use strict';

// List of sites that need special handling. 'rep' is the replacement URL.
const siteList = [
    {
        url: 'accounts.google.com',
        rep: 'https://accounts.google.com/*'
    },
    {
        url: 'www.paypal.com',
        rep: 'https://www.paypal.com/*'
    },
    {
        url: 'login.live.com',
        rep: 'https://login.live.com/*'
    },
    {
        url: 'amazon.com',
        rep: 'https://www.amazon.com/*'
    },
    {
        url: 'amazon.de',
        rep: 'https://www.amazon.de/*'
    },
    {
        url: 'amazon.co.uk',
        rep: 'https://www.amazon.co.uk/*'
    },
    {
        url: 'signin.aws.amazon.com',
        rep: 'https://signin.aws.amazon.com/*'
    },
    {
        url: 'www.upwork.com/ab/',
        rep: 'https://www.upwork.com/ab/*'
    },
    {
        url: 'home.personalcapital.com',
        rep: 'https://home.personalcapital.com/*'
    }
];

const kpxcSites = {};

// Returns a predefined URL for certain sites to ensure compatibility with Site Preferences
kpxcSites.definedURL = function(url) {
    for (const site of siteList) {
        if (url.includes(site.url)) {
            return site.rep;
        }
    }

    return url;
};

// Adds all common sites with multi-page login to Site Preferences
kpxcSites.addAllCommonSites = function(settings) {
    for (const site of siteList) {
        if (settings['predefinedSites'].some(e => e.url === site.rep)) {
            continue;
        }

        settings['predefinedSites'].push({
            url: site.rep,
            ignore: IGNORE_NOTHING,
            usernameOnly: true
        });
    }
};
