/*import { LightningElement, wire } from 'lwc';
import FNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContactos from '@salesforce/apex/ContactoControlador.getContactos';
const COLUMNS = [
    {label : 'First Name', fieldname:FNAME_FIELD.fieldApiName, type:'text'},
    {label : 'Last Name', fieldname:LNAME_FIELD.fieldApiName, type:'text'},
    {label : 'Email', fieldname:EMAIL_FIELD.fieldApiName, type:'text'}
];
export default class ListaContactosPrueba extends LightningElement {
    columns = COLUMNS;
    @wire(getContactos)
    contacts;
}*/

import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactoControlador.getContactos';

const columns = [
    { label: 'First Name', fieldName: 'FirstName' , type:'text'},
    { label: 'Last Name', fieldName: 'LastName' , type:'text'},
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class ApexDatatableExample extends LightningElement {

    error;
    columns = columns;

     @wire(getContactList)
    contacts;

}