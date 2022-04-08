https://www.youtube.com/watch?v=WHv1YQUg6ow&t=44s
The Modern Angular Crash Course - 2022 by Laith Harb

---CSS
    styles.css applies to all elements in the code
    component.css applies only to elements in that specific component

---Component.ts
    in the export class Commpnent we can store the state of our app

---Typescript
    For arrays you have to declare a type

---Event Binding Syntax 
    (input, change, click)
    to save as var #varName
    EX" <input #addMemberInput type="text" placeholder="Name" (input)="onInput(addMemberInput.value)">

--The two types of Directives in Angular
    Structural - change the html (*ngFor, *ngIf)
        EX: <li *ngFor="let member of members">{{ member }}</li>   <!-- Will iterate member []-->
        The {{}} does the li dynamically (real time)
    Attribute - updates the attributes (aka tags and stuff)
        EX: [value]="newMemberName" [class]="newMemberName"
        Any tag/etc. can be updated!

--Error Handing 1:01
    

