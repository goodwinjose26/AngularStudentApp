import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollno=""
  adno=""
  mob=""
  cname=""
  pname=""
  pno=""
  username=""
  password=""

  addValues =()=>
  {
    let data:any =
    {
      "name":this.name,"rollno":this.rollno,"adno":this.adno,"mob":this.mob,"cname":this.cname,"pname":this.pname,"pno":this.pno,"username":this.username,"password":this.password
    }
    console.log(data)
  }

}
