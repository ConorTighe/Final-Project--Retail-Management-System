import { Component, OnInit } from '@angular/core';
import { Message } from "./employee.model";
import { MessageService } from "./employee.service";
import { StoreService } from "./store.service";
import { Store } from "./store.model";

@Component({
  moduleId: module.id,
  selector: 'Employees',
  templateUrl: 'employees.component.html',
  providers: [MessageService,StoreService]
})

export class EmployeesComponent implements OnInit { 

    messages: Message[] = [];
    fname: string;
    empId: Number;
    lname: string;
    num: Number;
    email: string;
    job: string;
    storeN: string;
    stores: Store[] = [];
    
    
    constructor(private messageService: MessageService, private storeService: StoreService) {}
    
    ngOnInit() {
    
    this.storeService.getStores()
       .subscribe(
           stores => {
               this.stores = stores;
               console.log(stores);  
           },
           error => console.error(error)
        );
    }

    onAddMessage() { 
    
        var retVal = confirm("Do you want to continue ?");
            if( retVal == true ){
        const message = new Message(this.fname,this.lname,this.empId,this.num,this.job,this.storeN,this.email);
        console.log(message);
        console.log(this.storeN);
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
        }else{
            alert("Submission canceld");
        }
    }
    
}

