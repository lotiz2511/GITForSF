public with sharing class ContactoControlador {
    @AuraEnabled(cacheable=true)
    public static List<contact> getContactos(){
        return [
            SELECT FirstName,LastName,Email 
            FROM Contact 
            ORDER BY Name
        ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, FirstName, LastName, Title, Phone, Email FROM Contact LIMIT 10];
    }
}