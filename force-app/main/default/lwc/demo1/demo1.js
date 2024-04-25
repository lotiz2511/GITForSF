import { LightningElement, api } from 'lwc';

export default class Demo1 extends LightningElement {

    @api recordId;
    visiblevar=false;
    handleClick(event){
        this.visiblevar = !this.visiblevar;
    }
}