import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Open_SerService } from './Open_Ser.service';

@Component({
  selector: 'app-Openings',
  templateUrl: './Openings.component.html',
  styleUrls: ['./Openings.component.css']
})
export class OpeningsComponent implements OnInit {

  constructor(private router:Router,private service:Open_SerService) { }
  headers=["Employee Role", "Skills", "Work Experience", "Salary", "Apply Now"];
  rows=[
    {
      "Role": "Java Developer",
      "Skills": "Spring",
      "Experience":"2.5 to 4 years",
      "Salary":"3 to 4LPA",
      "Resume":"any"
    },
    {
      "Role": "UI Developer",
      "Skills": "Html, CSS, JavaScript, Json, React.Js",
      "Experience":"3 to 8 years",
      "Salary":"3 to 7LPA",
      "Resume":"any"
    },

    {
      "Role": "Automation Tester",
      "Skills": "Java, Automation Testing, Selenium",
      "Experience":"4 to 9 years",
      "Salary":"3.5 to 8.5LPA",
      "Resume":"any"
    },
  ]

  ngOnInit() {
  }
onApply(value:any){
  this.service.applyRole=value.Role;
    this.router.navigate(['/Register'])

}
}
