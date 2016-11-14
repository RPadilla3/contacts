(function() {
    'use strict';
    window.contacts = window.contacts || {};
    window.contacts.getContacts = getContacts;
    window.contacts.getIndividualContact = getIndividualContact;
    
    /**
     * Grab contacts from API server
     * @param  {Number} foo number of contacts to get from server - defaults to 10
     * @return {Promise}     Promise from Ajax call
     */
    function getContacts(foo){
        if (typeof(foo) !== 'number' || foo < 0 ){
            foo = 10;
        }
        // ?results=10
        return $.ajax({
            url: 'https://randomuser.me/api/',
            method: 'GET',
            dataType: 'json',
            data: {
                results: foo
            }
        })
        .done(function handleSuccess(contacts) {
            console.log(contacts);
        });
    }

    /**
     * Retrieve a contact back by its id
     * @param  {String} id represents the contact that we're getting
     * @return {Promise}    ajax call
     */
    function getIndividualContact (id) {
        if (typeof(id) !== 'string') {
            // make our own promise, force it to fail, and then return it
            var deferredObj = $.Deferred();
            deferredObj.reject('You have to give me an ID!');
            return deferredObj.promise();
        }

        // ?seed=[our ID]
        return $.ajax({
            url: 'https://randomuser.me/api/',
            method: 'GET',
            data: {
                seed: id  // jQuery converts this into ?seed=[the value of the id variable]
            },
            dataType: 'json'
        })
        .done( function handleSuccess(contact){
            console.log(contact);
        });
    }

})();
