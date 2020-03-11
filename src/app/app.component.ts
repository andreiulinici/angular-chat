import { Component } from '@angular/core';
import { IConversation, subscriberType } from './conversation.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular Chat';
    conversation: IConversation[] = [];
    inputUser: string = "default";

    constructor() {
        this.updateConversation(1, "Salut!", "Andrei", subscriberType.sender, new Date().toLocaleTimeString());
        this.updateConversation(1, "Salut, Andrei!", "Vlad", subscriberType.receiver, new Date().toLocaleTimeString());
        this.updateConversation(1, "Mesaj nou", "Andrei", subscriberType.sender, new Date().toLocaleTimeString());
        this.updateConversation(1, "Mesaj nou", "Andrei", subscriberType.sender, new Date().toLocaleTimeString());
        this.updateConversation(1, "Mesaj nou", "Andrei", subscriberType.sender, new Date().toLocaleTimeString());
    }

    public updateConversation(id: number, message: string, name: string, subscriberType: subscriberType, time: string) {
        this.conversation.push(
            {
                id: id,
                message: message,
                name: name,
                subscriberType: subscriberType,
                time: time
            }
        );
    }
}
