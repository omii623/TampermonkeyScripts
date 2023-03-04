// ==UserScript==
// @name         onlineFilmek
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       omii623
// @match        https://mozinet.me/*/*
// @match        https://filmvilag.me/get/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var url = document.URL.split('/');

    if(url[2] == "mozinet.me"){
        document.getElementsByClassName("container_12")[0].children[0].remove()
        document.getElementsByClassName("container_12")[0].children[2].remove()
        document.getElementsByClassName("container_12")[0].children[0].remove()
        document.getElementsByClassName("container_12")[0].children[0].style=""
        document.getElementsByClassName("container_12")[0].children[0].align = "center"
        document.getElementsByClassName("container_12")[0].children[0].children[3].children[0].remove()
        document.children[0].children[1].children[1].remove()

        var h = document.createElement("H1");
        var str = document.getElementsByTagName("h1")[0].firstChild.textContent;

        if(url.length == 6){
            str += " "
            str += (url[5])
            str += ". rész"
        }

        var t = document.createTextNode(str);
        h.appendChild(t);
        document.body.parentNode.insertBefore(h, document.body);
        document.getElementsByTagName("h1")[0].align="center"

        document.getElementsByClassName("adslot_2")[0].remove()

    }else
    if(url[2] == "filmvilag.me") {
        document.getElementsByClassName("container_12")[0].children[0].remove()
        document.getElementsByClassName("container_12")[0].children[1].remove()
        document.getElementsByClassName("container_12")[0].children[0].children[0].remove()
        document.getElementsByClassName("container_12")[0].children[2].remove()
        document.getElementsByClassName("container_12")[0].children[1].style=""
        document.getElementsByClassName("container_12")[0].children[1].align = "center"
        document.getElementsByClassName("container_12")[0].children[1].children[3].remove()
    }

})();