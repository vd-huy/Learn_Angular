import { Router } from '@angular/router';
import { TaskId } from './../../../interfaces/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './../../../services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrl: './updatetask.component.scss'
})
export class UpdatetaskComponent {
  taskFormUpdate : any;
  
  constructor( private taskService : TaskService, private router :Router){

    this.taskFormUpdate = new FormGroup({
      idTask : new FormControl({value: '', disabled: true}),
      nameUser : new FormControl("", [Validators.required]),
      name : new FormControl("",[Validators.required]),
      isDone : new FormControl("",[Validators.required]),
    }) 

    this.taskService.getTaskByID(this.taskService.idUpdate).subscribe((data) =>{
      this.taskFormUpdate.controls.idTask.setValue(data.id);
      this.taskFormUpdate.controls.nameUser.setValue(data.nameUser);
      this.taskFormUpdate.controls.name.setValue(data.name);
      this.taskFormUpdate.controls.isDone.setValue(data.isDone);
    });
  }

  validateField():boolean{

    if (this.taskFormUpdate.get("nameUser").value.trim() === "" || this.taskFormUpdate.get("name").value.trim() === "" ) {
      return false
    }else{
      return true
    }

  }



  onSubmit():void{
    this.taskService.taskByID =  <TaskId>this.taskFormUpdate.value;
    
    if (this.validateField()) {
      this.taskService.updateTaskByID(this.taskService.idUpdate).subscribe(res=>{
        if (res.success) {
          alert("Cập nhật thành công");
          this.router.navigate(["/gettasks"])
  
        }else {
          alert("Cập nhật không thành công")
        }
      })
    }else {
      alert ("Vui lòng nhập đủ thông tin ")
    }
    
  }
}
