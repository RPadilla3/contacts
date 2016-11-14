(function() {
    'use strict';
    window.contacts = window.contacts || {};
    window.contacts.listContacts = listContacts;

    /**
     * List contacts on page view
     * @param  {Array} contacts contact list
     */
    function listContacts(contacts){
        if(!Array.isArray(contacts)){
            return;

        }

        $('.contacts').html('');
        // $('.contacts li').remove();  // same thing...

        contacts.forEach(function appendContacts(contact){
            $('.contacts')
                .append(
                    '<li>' +
                    contact.name.first + ' ' +
                    contact.name.last + ' ' +
                    contact.phone +
                    '<a href="#details-'+contact.cell+'">More Information</a></li>'
                );
        });

    }

})();
