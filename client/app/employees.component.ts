import { Component } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
  moduleId: module.id,
  selector: 'Employees',
  templateUrl: 'employees.component.html',
  providers: [MessageService]
})

export class EmployeesComponent { 

    messages: Message[] = [];
    fname: string;
    empId: string;
    lname: string;
    num: string;
    job: string;
    
    
    constructor(private messageService: MessageService) {}

    onAddMessage() { 
    
        const message = new Message(this.fname,this.lname,this.empId,this.num,this.job);
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
    }
    
}

