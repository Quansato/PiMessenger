import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationRoutingModule } from './conversation-routing.module';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { InfoMessageComponent } from './info-message/info-message.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [UsersComponent, MessagesComponent, InfoMessageComponent, HomeComponent],
  imports: [
    CommonModule,
    ConversationRoutingModule
  ]
})
export class ConversationModule { }
