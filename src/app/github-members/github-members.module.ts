import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MembersListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MembersListComponent],
})
export class GithubMembersModule {}
