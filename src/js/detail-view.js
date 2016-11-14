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
                '<p>'+contact.name.first+'</p>'
            );
    }

})();
