(function() {
    'use strict';
    window.contacts = window.contacts || {};

    // once the document is ready (a.k.a the page is loaded)
    // run this code
    $(document).ready(function() {
        if (window.location.hash === '') {
            window.location.hash = '#contacts';
        }

        // If we did this...
        // $(window).on('hashchange', viewChange());  // we are EXECUTING viewChange here
        // it would be the same as doing this...
        // $(window).on('hashchange', undefined);

        // here, we are REFERENCING which function should
        // execute when the event occurs
        $(window).on('hashchange', viewChange);

        // execute this when the page is ready so that we load
        // the correct data and view to start
        viewChange();
    });


    function viewChange() {
        $('section').hide();

        if (window.location.hash === '#contacts') {
            $('#contacts').show();
            window.contacts.getContacts(15)
                .done(function handleSuccess(contactData){
                    window.contacts.listContacts(contactData.results);
                });
        }

        if (window.location.hash.indexOf('#details') === 0) {
            $('#details').show();
            var id = window.location.hash.substr(9);
            window.contacts.getIndividualContact(id)
            .done(function successHandler(contactData){
                window.contacts.showDetails(contactData.results[0]);
            });

        }
    }

})();
