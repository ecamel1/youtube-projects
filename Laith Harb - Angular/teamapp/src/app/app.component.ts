import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errMessage = "";

  // Grabs the input from the add button
  onInput(member: string){
    this.newMemberName = member;
  }

  // Adds the member to the array
  addMember(){
    if(!this.newMemberName){
      this.errMessage = "Name can't be empty";
      return
    }

    this.members.push(this.newMemberName);
    this.errMessage = "";
    this.newMemberName = "";
  }
}
