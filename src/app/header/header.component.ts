import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title:string="Header Component";
  imageURL:string="https://tse1.mm.bing.net/th/id/OIP.tla1x5HD0JRb7dzYrO31swHaFO?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
  isDisabled:boolean=false;
  isActive:boolean=false;
  fruitName:string='Apple';


  buttonClick(){
    console.log('Button Clicked')
  }

  keyEnter(event:any){
    // console.log(event.);
    if(event.keyCode==13){
      console.log("Enter Key Pressed");
    }
  }


  keyUpFiltering(){
    console.log("Key Filtering");
  }

  logInput(value:string){
    console.log('Input Value:',value);     //Template Variable Method
  }

  userName:string="";

  isLoggedIn:boolean=false;
  UserName:string='John Doe';

  isAdmin:boolean=false;
  isMember:boolean=false;
  isGuest:boolean=true;

}