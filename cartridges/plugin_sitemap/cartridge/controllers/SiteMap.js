'use strict';

var server = require('server');

/**
 * Serves requests for search provider (Google, Yahoo) XML site maps. Reads a
 * given site map and copies it into the request output stream. If this is successful,
 * renders an http_200 template. If it fails, renders the http_404 template.
 * SiteMap Rule:
 * # process sitemaps
 * RewriteRule ^/(sitemap([^/]*))$ /on/demandware.store/%{HTTP_HOST}/-/SiteMap-Google?name=$1 [PT,L]
 */
server.get('Google', function (req, res, next) {
    var fileName = req.querystring.name;
    var siteMapResult = '500';

    if (fileName) {
        var SendGoogleSiteMapResult = new dw.system.Pipelet('SendGoogleSiteMap').execute({ // eslint-disable-line
            FileName: fileName
        });
        if (SendGoogleSiteMapResult.result === PIPELET_ERROR) { // eslint-disable-line
            siteMapResult = '404';
        } else {
            siteMapResult = '200';
        }
    }

    res.render('sitemap/result.isml', { siteMapResult: siteMapResult });
    next();
});

module.exports = server.exports();
