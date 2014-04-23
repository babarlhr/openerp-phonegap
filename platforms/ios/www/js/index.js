/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var parentElement = document.getElementById('domainform');

        // var listeningElement = parentElement.querySelector('.loading');
        // listeningElement.setAttribute('style', 'display:none;');

        var receivedElement = parentElement.querySelector('.loaded');
        var domainInputField = parentElement.querySelector('#domain');

        var domain = window.localStorage.getItem('openerp-phonegap-domain');
        if (domain) domainInputField.value = domain;

        var domainSubmitButton = parentElement.querySelector('#submit');
        domainSubmitButton.onclick = function () {
            var domain = domainInputField.value;
            window.localStorage.setItem('openerp-phonegap-domain', domain);
            // TODO Check if domain exists etc.
            window.location.href = "https://" + domain + "/web"; 
        };
        receivedElement.setAttribute('style', 'display:block;');
    },
};
