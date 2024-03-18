import { TaskService } from './../../../services/task.service';
import { Component } from '@angular/core';
import { TaskId } from '../../../interfaces/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gettasks',
  templateUrl: './gettasks.component.html',
  styleUrl: './gettasks.component.scss'
})
export class GettasksComponent {
  listOfData : TaskId[] = [];

  isVisible = false;
  isOkLoading = false;
  isDelete : boolean = false;
  myInterval : any;

  constructor(private taskService: TaskService, private router: Router){
     taskService.getListTasks().subscribe((data) =>{this.listOfData= data});
  }

  handleClickDelete(id : string){
    this.showModal();

    this.myInterval = setInterval(()=>{
      if (this.isDelete) {
        this.taskService.deleteTask(id).subscribe((res)=>{
          if (res) {
           alert("Xóa thành công");
           this.taskService.getListTasks().subscribe((data) =>{
            this.listOfData = data;
          })
          }else{
           alert("Xóa không thành công")
          }
          
         }    
       )
      }
      
    },2000)

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.isDelete = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
      clearInterval(this.myInterval);
     
    }, 2000);
  }

  handleCancel(): void {
    this.isVisible = false;
    clearInterval(this.myInterval);
  }

  handleUpdate(id:string):void{
      this.taskService.idUpdate= id;
      this.router.navigate(['/updatetask']);
  }

  

  
}
