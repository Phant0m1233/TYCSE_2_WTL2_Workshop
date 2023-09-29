import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  projectTitle = 'learn Angular js';//interpolotion
  mycolor="blue" //property binding
  status=false; //property binding
  name="angular"
  
  showData(){
    alert("button click");
    
  }
  showData1(){
    this.status=true;
  }
  onSubmit(contactForm:{firstname:any,lastname:any,email:any}){
    console.log(contactForm.firstname)
    console.log(contactForm.lastname)
    console.log(contactForm.email)
  }
  
}



