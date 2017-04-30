import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder } from '@angular/forms';
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
    //root form group
    customerForm: FormGroup;
    customer: Customer= new Customer();
    constructor(private fb: FormBuilder){}
    ngOnInit():void{
        //formgroup and form controls
        //form builder
        this.customerForm=this.fb.group({
            firstName:'',
            lastName:'',
            email:'',
            sendCatalog: true
        });
        
     
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }
