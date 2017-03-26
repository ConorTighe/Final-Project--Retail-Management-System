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

    constructor(private messageService: MessageService) {}

    onAddMessage() {
        const message = new Message('Jim','Smith','EP100','08710101010','Manager');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
    }
    
}

