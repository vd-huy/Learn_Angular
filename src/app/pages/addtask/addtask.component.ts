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



  onSubmit() : void{
     
     const dataTask : Task = {
       nameUser : this.taskForm.get("nameUser").value,
       name : this.taskForm.get("name").value,
       isDone : this.taskForm.get("isDone").value
      }
     
    this.taskService.addTask(dataTask).subscribe((res) => {
      if (res.success) {
      this.taskForm.reset();
       alert("Thêm thành công")
       } else{
          alert("Vui lòng nhập dữ liệu")
       }
     
    })

     
 
  }
     

}
