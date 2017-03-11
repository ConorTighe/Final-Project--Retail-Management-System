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

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.error(error)
            );
    }

    onAddMessage() {
        const message = new Message(' It worked!');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
    }
}