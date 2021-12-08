import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'src/app/shared/model/Message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get<Message[]>('../../../../assets/mock/db.json');
  }
}
