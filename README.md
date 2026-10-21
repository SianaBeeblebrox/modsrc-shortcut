# Modsrc.dev Shortcut <br> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SianaBeeblebrox/modsrc-shortcut) ![GitHub](https://img.shields.io/github/license/SianaBeeblebrox/modsrc-shortcut?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SianaBeeblebrox/modsrc-shortcut?style=for-the-badge)


Tired of closed source slop on Modrinth? Want to shame someone's code? Get a direct [modsrc.dev](https://modsrc.dev/) link to the latest version. Available as a bookmarklet or userscript!

# Bookmarklet Usage
Make a new bookmark and paste the following code snippet as the url. To use the bookmarklet, click on the bookmark from a `https://modrinth.com/mod/*` page.
```js
javascript:(async name=>name&&window.open(`https://modsrc.dev/1/${(await(await fetch(`https://api.modrinth.com/v2/project/${name}`)).json()).id}/${(await(await fetch(`https://api.modrinth.com/v2/project/${name}/version?include_changelog=false`)).json())[0].files[0].id}`,%27_blank%27))(window.location.pathname.match(/^\/mod\/([a-zA-Z0-9._-]+)/)?.[1])
```
**Notes**
+ Some browsers will automatically strip the `javascript:` prefix when pasting, so you may need to manually type it.
+ Works on mobile!

# Userscript Usage
If you don't already have it, install Greasemonkey/Tampermonkey/Violentmonkey then add [`modsrc-shortcut.user.js`](https://github.com/SianaBeeblebrox/modsrc-shortcut/blob/main/modsrc-shortcut.user.js). To use, simply visit a `https://modrinth.com/mod/*` page and click on the mod title/header.
