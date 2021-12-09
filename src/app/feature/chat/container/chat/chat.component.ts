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

  // Message List from mock json
  messageList!: Message[];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Get message list from mock json
    this.chatService.getMessages().subscribe((messages) => {
      let archivedMessages: Message[] = JSON.parse(
        localStorage.getItem('archived-messages') || '{}'
      );
      // Merge with local storage stored messages
      archivedMessages =
        archivedMessages.length > 0
          ? [...archivedMessages, ...messages]
          : messages;

      // Sort message list by date
      this.messageList = archivedMessages.sort((a, b) => a.date - b.date);
    });
  }

  /**
   *
   * @param message message from current user
   *
   * Push new message inside current message list and inside local storage for data persistence
   *
   */
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

  /**
   *
   * @param filter : filter parameter
   *
   * Filter current message list based on filter
   */
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
