import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/shared/model/Message.model';
import { getCurrentUser, scrollChatToBottom } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit, AfterContentInit {
  @Input() messages!: Message[];
  @Output() sentMessage = new EventEmitter<Message>();
  @Output() filter = new EventEmitter<string>();

  currentUser: string;
  chatForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.currentUser = getCurrentUser();
    this.createForm();
  }

  ngAfterContentInit(): void {
    setTimeout(() => scrollChatToBottom(), 0.5);
  }


  createForm(): void {
    this.chatForm = this.fb.group({
      message: ['', Validators.compose([])],
    });
  }

  send(): void {
    if (this.chatForm.value.message && this.chatForm.value.message !== '') {

      setTimeout(() => scrollChatToBottom(), 1);

      // create message
      let msg: Message = {
        id: '1',
        image: '../../../../../assets/images/avatar-1.png',
        name: 'Gabriele',
        surname: "Zaccaria",
        nickname: 'g.zaccaria',
        date: Date.now(),
        message: this.chatForm.value.message,
      };
      // add message
      this.sentMessage.emit(msg);
      // reset form
      this.chatForm.reset();
    }
  }



  handleInput(filter: any) {
    this.filter.emit(filter.target.value)
  }
}
