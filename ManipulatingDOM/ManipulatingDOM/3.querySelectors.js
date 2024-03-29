﻿(function () {
            'use strict';

            if (!document.querySelector) {
                querySelectorShiv();
            }
            
            var testDiv = document.querySelector("div");
            testDiv.innerHTML = "selected";

            function querySelectorShiv()
            {
                document.querySelector = function querySelector(selector) {
                    switch (selector.charAt(0)) {
                        case "#": return document.getElementById(selector.substring(1));
                        case ".": return document.getElementsByClassName(selector.substring(1))[0];
                        // assume element by tag name
                        default: return document.getElementsByTagName(selector)[0];
                    }
                }

                document.querySelectorAll = function querySelectorAll(selector) {
                    switch (selector.charAt(0)) {
                        case "#": return document.getElementById(selector.substring(1));
                        case ".": return document.getElementsByClassName(selector.substring(1));
                        // assume element by tag name
                        default: return document.getElementsByTagName(selector);
                    }
                };
            }
        })();