// ==UserScript==
// @name         modsrc-shortcut
// @version      2026-10-21
// @description  Shortcut to modsrc.dev from Modrinth
// @author       SianaBeeblebrox
// @match        https://modrinth.com/mod/*
// @icon         https://modrinth.com/favicon-light-32x32.png
// @grant        none
// ==/UserScript==
(async (name,h1)=>name&&h1&&h1.replaceChildren(Object.assign(document.createElement('a'),{innerText:h1.innerText,href:`https://modsrc.dev/1/${(await(await fetch(`https://api.modrinth.com/v2/project/${name}`)).json()).id}/${(await(await fetch(`https://api.modrinth.com/v2/project/${name}/version?include_changelog=false`)).json())[0].files[0].id}`,title:'modsrc.dev',target:'_blank'})))(window.location.pathname.match(/^\/mod\/([a-zA-Z0-9._-]+)/)?.[1],document.querySelector('.normal-page__header h1'))
