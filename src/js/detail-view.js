(function() {
    'use strict';
    window.contacts = window.contacts || {};
    window.contacts.showDetails = showDetails;
    /**
     * Show details of current contact
     * @param  {Object} contact information about contact
     */
    function showDetails(contact) {
        if(typeof(contact) !== 'object') {
            return;
        }
        $('#details')
            .html('')
            .append(
                '<p>'+ 'Name: ' + contact.name.first + '</p><p>' +'Date of Birth: '
                + contact.dob + '</p>' + '<p>' + 'Email: ' + contact.email + '</p>'
                + '<p>' + 'gender: ' + contact.gender + '</p>'
            );
    }

})();
