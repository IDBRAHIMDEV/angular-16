import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
})
export class MembersListComponent implements OnInit {
  users: User[] = [];
  search: string = '';

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.retreiveAllMembers();
  }

  retreiveAllMembers() {
    this.membersService.membersList().subscribe((res) => {
      this.users = res;
      console.log(res);
    });
  }

  searchUsers() {
    if (this.search) {
      this.membersService
        .serearchMembers(this.search)
        .subscribe((res) => (this.users = res));
    } else {
      this.retreiveAllMembers();
    }
  }
}
