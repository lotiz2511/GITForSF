import { LightningElement } from 'lwc';
import OBJECT_ACCOUNT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

export default class RecordViewForm extends LightningElement {
    recordid = '0015e00000NaXYpAAN';
    objectapiname=OBJECT_ACCOUNT;
    namefield = NAME_FIELD;
    revenuefield = REVENUE_FIELD;
    industryfield = INDUSTRY_FIELD;
}