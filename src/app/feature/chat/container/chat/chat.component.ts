import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/model/Message.model';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messageList!: Message[];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe(
      (messages) => {
        let archivedMessages: Message[] = JSON.parse(localStorage.getItem('archived-messages') || '{}' );

        archivedMessages = archivedMessages.length > 0 ? [...messages] : messages;

        // if(archivedMessages.length > 0) {
        //   archivedMessages = [...messages]
        // } else {
        //   archivedMessages = messages
        // }

        this.messageList = archivedMessages.sort((a,b) => a.date - b.date );
      }
    )
  }

  handleSentMessage(message: Message) {
    // add message
    this.messageList.push(message);
    // get stored msgs
    let archivedMessages: Message[] = JSON.parse(localStorage.getItem('archived-messages') || '{}' );

    archivedMessages = archivedMessages.length > 0 ? archivedMessages.concat(message) : [message];

    localStorage.setItem('archived-messages', JSON.stringify(archivedMessages));
  }

}
