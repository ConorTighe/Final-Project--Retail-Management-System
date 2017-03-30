import { Component, OnInit } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
  moduleId: module.id,
  selector: 'deta',
  templateUrl: 'details.component.html',
  providers: [MessageService]
})
export class DetailsComponent implements OnInit {
   messages: Message[] = [];
   editemp: string;
   
    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.error(error)
            );
            console.log(this.messages);
    }
    
    onDeleteMessage(id: string) {
       this.messageService
      .deleteServiceWithId("empId", id)
      .subscribe(
          result => console.log(result),
          error => console.error(error)
        );
    }
    
    onUpdateMessage(key: string) {
       this.messageService
      .updateServiceWithId(key, this.editemp)
      .subscribe(
          result => console.log(result),
          error => console.error(error)
        );
    }

}