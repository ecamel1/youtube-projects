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
  numOfTeams: number | "" = "";
  //an array of string arrays
  teams: string[][] = [];

  // Grabs the input from the add button
  onInput(member: string){
    this.newMemberName = member;
  }

  onNumOfTeamsInput(val: string){
    this.numOfTeams = Number(val);

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

  generateTeams(){
    if(!this.numOfTeams || this.numOfTeams <= 0){
      this.errMessage = "Invalid Number of Teams";
      return
    } 
    if(this.members.length < this.numOfTeams){
      this.errMessage = "Not Enough Members";
      return
    } this.errMessage = "";

    //1:24:55
    const allMembers = [...this.members];
    
    while (allMembers.length)
    {
      for(let i = 0; i < this.numOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        //Spice from an starting and ending index and let it to a new array at index 0
        const member = allMembers.splice(randomIndex, 1)[0];

        if(!member) break;

        //if this exist
        if(this.teams[i]){
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }

        
      }
    } //console.log(this.teams);
    this.members = [];
    this.numOfTeams = "";
  }
}
