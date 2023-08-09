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

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.retreiveAllMembers();
  }

  retreiveAllMembers() {
    this.membersService.membersList().subscribe((res) => (this.users = res));
  }
}
