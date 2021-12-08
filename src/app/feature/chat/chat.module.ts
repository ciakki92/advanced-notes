import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './container/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadMoreComponent } from './components/read-more/read-more.component';



@NgModule({
  declarations: [
    ChatComponent,
    ChatMessageComponent,
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
