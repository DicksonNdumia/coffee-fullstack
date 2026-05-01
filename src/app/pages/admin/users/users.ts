import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user-service';
import { Spinner } from '../../spinner/spinner';

@Component({
  selector: 'app-users',
  imports: [Spinner],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  userList: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    try {
      this.userService.getUsers().subscribe((res: any) => {
        this.userList = res.data;
        //console.log(this.userList);
      });
    } catch (e) {
      console.log(e);
      alert('Error getting users');
    }
  }
}
