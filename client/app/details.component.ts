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
    fname: string;
    lname: string;
    empId: string;
    number: string;
    occu: string;
    
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
    var retVal = confirm("Do you want to continue ?");
            if( retVal == true ){
       this.messageService
      .deleteServiceWithId("empId", id)
      .subscribe(
          result => console.log(result),
          error => console.error(error)
        );
        }else{
            alert("Delete cancled!");
                  return false;
        }
    }
    
    onUpdateMessage(id: string) {
        var retVal = confirm("Do you want to continue ?");
            if( retVal == true ){
        const message = new Message(this.fname,this.lname,id,this.number,this.occu);
        console.log(this.fname);console.log(this.lname);
        console.log(id);console.log(this.occu);
        this.messages.push(message);
        this.messageService.updateServiceWithId(message)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
        }
        else{
                  alert("Edit cancled!");
                  return false;
            }
    }

}