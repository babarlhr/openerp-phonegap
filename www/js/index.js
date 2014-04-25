function handleOpenURL (url) {
    // TODO
    setTimeout(function () {
        alert(url);
    }, 0);
}

var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        // Events: 'load', 'deviceready', 'offline', and 'online'
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        var parentElement = document.getElementById('domainform');

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
        parentElement.querySelector('.loaded').setAttribute('style', 'display:block;');
    },
};
