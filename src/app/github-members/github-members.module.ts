import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MembersListComponent, CardComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [MembersListComponent],
})
export class GithubMembersModule {}
