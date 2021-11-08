// Manage Cookies
    res.cookie('username', 'Flavio', { domain: '.jahongirhamidov.com', path: '/administrator', sec ure: true }) 
    res.cookie('username', 'Flavio', { expires: new Date(Date.now() + 900000), httpOnly: true })

/* Cookies Parameters 
    * domain - the cookie domain name
    * expires - set the cookie expiration date. If missing, or 0, the cookie is a session cookie
    * httpOnly - set the cookie to be accessible only by the web server. See HttpOnly
    * maxAge - set the expiry time relative to the current time, expressed in milliseconds
    * path - the cookie path. Defaults to /
    * secure - Marks the cookie HTTPS only
    * signed - set the cookie to be signed
    * sameSite - Value of SameSite 
*/

//   * CLEAR COOKIE
    res.clearCookie('username')

