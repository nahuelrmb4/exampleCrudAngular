import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 userArray: User[] = [
   {id:1,name:"nahuel",lastName:"aramburu",identNumer:40188172}
 ];

 selectedUser: User = new User();

 addOrEdit(user: User){
  if (this.selectedUser.id=== 0){
    this.selectedUser.id=this.userArray.length+1;
    this.userArray.push(this.selectedUser);
  }
  


  
  this.selectedUser= new User
 }

 editUser(user: User){
  this.selectedUser=user;
 }

 deleteUser(user: User){
  if(confirm('¿Confirma que quiere eliminar este usuario?')){
  this.userArray=this.userArray.filter(user => user!= this.selectedUser);
  this.selectedUser= new User
 }
 }



}
