import { Component, OnInit } from '@angular/core';
import { Message } from "./employee.model";
import { MessageService } from "./employee.service";
import { StoreService } from "./store.service";
import { Store } from "./store.model";

@Component({
  moduleId: module.id,
  selector: 'deta',
  templateUrl: 'details.component.html',
  providers: [MessageService, StoreService]
})
export class DetailsComponent implements OnInit {
   
    messages: Message[] = [];
    stores: Store[] = [];
    fname: string;
    lname: string;
    empId: Number;
    number: Number;
    occu: string;
    storeN: string;
    email: string;
    
    constructor(private messageService: MessageService, private storeService: StoreService) {}
    
    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.error(error)
            );
            console.log(this.messages);
            
        this.storeService.getStores()
       .subscribe(
           stores => {
               this.stores = stores;
               console.log(stores);  
           },
           error => console.error(error)
        );
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
    
    onUpdateMessage(id: Number) {
        var retVal = confirm("Do you want to continue ?");
            if( retVal == true ){
        const message = new Message(this.fname,this.lname,id,this.number,this.occu,this.storeN,this.email);
        console.log(this.fname);console.log(this.lname);
        console.log(id);console.log(this.occu);console.log(this.storeN);
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