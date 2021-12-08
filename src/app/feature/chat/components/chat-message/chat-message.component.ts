import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/shared/model/Message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {
  @Input() messages!: Message[];
  @Output() sentMessage = new EventEmitter<Message>();

  currentUser: string = 'adelloste';
  chatForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  search() {
    console.log('search!');
  }

  createForm(): void {
    this.chatForm = this.fb.group({
      message: ['', Validators.compose([])],
    });
  }

  send(): void {
    if (this.chatForm.value.message && this.chatForm.value.message !== '') {

      setTimeout(() => this.scrollChatToBottom(), 1);

      // create message
      let msg: Message = {
        id: '1',
        image: '../../../../../assets/images/avatar-2.jpg',
        name: 'Alessandro',
        surname: "Dell'Oste",
        nickname: 'adelloste',
        date: Date.now(),
        message: this.chatForm.value.message,
      };
      // add message
      this.sentMessage.emit(msg);
      // reset form
      this.chatForm.reset();
    }
  }

  scrollChatToBottom() {
    let messageContainer = document.getElementById('message-container');
    let messageContainerCurrentHeight = messageContainer?.scrollHeight;
    messageContainer.scrollTop = messageContainerCurrentHeight;
  }
}
