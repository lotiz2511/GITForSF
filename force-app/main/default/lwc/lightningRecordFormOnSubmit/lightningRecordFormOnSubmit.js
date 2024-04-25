import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ACCOUNT_OBJET from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

export default class LightningRecordFormOnSubmit extends LightningElement {
    objectapiname= ACCOUNT_OBJET;
    fields = [NAME_FIELD,REVENUE_FIELD,INDUSTRY_FIELD];

    handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Industry = "Food & Beverage";
        this.template.querySelector("lightning-record-form").submit(fields);
    }

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title   : "Cuenta Creada",
            message : "Industria: " + event.detail.fields.Industry,
            variant : "success"
        });
        this.dispatchEvent(toastEvent);
    }
}