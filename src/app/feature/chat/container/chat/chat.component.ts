import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/model/Message.model';
import { getCurrentUser } from 'src/app/shared/utils/utils';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messageList!: Message[];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((messages) => {
      let archivedMessages: Message[] = JSON.parse(
        localStorage.getItem('archived-messages') || '{}'
      );
      archivedMessages =
        archivedMessages.length > 0
          ? [...archivedMessages, ...messages]
          : messages;
      this.messageList = archivedMessages.sort((a, b) => a.date - b.date);
    });
  }

  handleSentMessage(message: Message) {
    this.messageList.push(message);
    let archivedMessages: Message[] = JSON.parse(
      localStorage.getItem('archived-messages') || '{}'
    );
    archivedMessages =
      archivedMessages.length > 0
        ? archivedMessages.concat(message)
        : [message];
    localStorage.setItem('archived-messages', JSON.stringify(archivedMessages));
  }

  handleFilter(filter: string) {
    this.chatService.getMessages().subscribe((messages) => {
      let archivedMessages: Message[] = JSON.parse(
        localStorage.getItem('archived-messages') || '{}'
      );
      archivedMessages =
        archivedMessages.length > 0
          ? [...archivedMessages, ...messages]
          : messages;
      this.messageList = archivedMessages.sort((a, b) => a.date - b.date);
      if (filter.length > 0)
        this.messageList = this.messageList.filter(
          (message) =>
            message.nickname.toUpperCase() !== getCurrentUser().toUpperCase() &&
            (message.name.toUpperCase().includes(filter.toUpperCase()) ||
            message.surname.toUpperCase().includes(filter.toUpperCase()))
        );
    });
  }
}
