import { Task } from './../../../interfaces/task';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.scss'
})
export class AddtaskComponent {

  taskForm : any;
  addTaskValue: string = "";

  constructor( private taskService : TaskService){
    this.taskForm = new FormGroup({
      nameUser : new FormControl('',[Validators.required]),
      name : new FormControl('',[Validators.required]),
      isDone : new FormControl('false',[Validators.required]),
    })
  }

  validateField():boolean{

    if (this.taskForm.get("nameUser").value.trim() === "" || this.taskForm.get("name").value.trim() === "" ) {
      return false
    }else{
      return true
    }

  }



  onSubmit() : void{
     
     const dataTask : Task = {
       nameUser : this.taskForm.get("nameUser").value,
       name : this.taskForm.get("name").value,
       isDone : this.taskForm.get("isDone").value
      }
     
    if (this.validateField()) {
      this.taskService.addTask(dataTask).subscribe((res) => {
        if (res.success) {
        this.taskForm.reset();
         alert("Thêm thành công")
         } else{
            alert("Vui lòng nhập dữ liệu")
         }
       
      })
    }else{
      alert("Vui lòng nhập đủ thông tin");
    }

     
 
  }
     

}
