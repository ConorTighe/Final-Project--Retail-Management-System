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
               console.log("GET from employees");  
           },
           error => console.error(error)
        );
    }

    onAddMessage() { 
        var atSymbol = this.email.includes("@");
        var dotCom = this.email.endsWith(".com");
        
        if(atSymbol == false || dotCom == false){
            alert("Email must contain @ and end with .com");
            return;
        }
    
        var retVal = confirm("Do you want to continue ?");
      
            if( retVal == true ){
                const message = new Message(this.fname,this.lname,this.empId,this.num,this.job,this.storeN,this.email);
                this.messages.push(message);
                this.messageService.saveMessage(message)
                .subscribe(
                    () => console.log('POST from employees'),
                    error => alert(error)
                );
            }else{
                alert("Submission canceld");
            }
        
    }
    
}

