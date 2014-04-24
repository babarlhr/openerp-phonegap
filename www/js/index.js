function handleOpenURL (url) {
    // TODO
    setTimeout(function () {
        alert(url);
    }, 0);
}

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
            
            var url = "https://" + domain;// + "/web";
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (data) {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        window.localStorage.setItem('openerp-phonegap-domain', domain);
                        window.location.href = url;
                    }
                }
            };
            xhr.open('HEAD', url, true);
            xhr.send();
        };
        receivedElement.setAttribute('style', 'display:block;');
    },
};
