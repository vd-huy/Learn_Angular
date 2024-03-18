import { Task, TaskId } from './../interfaces/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  idUpdate : string = "";

  taskByID! : TaskId;

  constructor( private http : HttpClient) { }

  public getListTasks () : Observable <any>{
    return this.http.get( environment.apiEndPoint + "	/list")
  }

  public addTask (data : any ) :Observable<any> {
    return this.http.post( environment.apiEndPoint + "/newtask" + `?nameUser=${data.nameUser}&name=${data.name}&isDone=${data.isDone}`, data );
  }

  public deleteTask (id : string) :Observable<any> {
    return this.http.delete(environment.apiEndPoint+ "/delete/" + id)
  }

  public getIdUpdate (id:string){
    this.idUpdate = id
  }

  public getTaskByID (id:string) :Observable<TaskId> {
    return this.http.get<TaskId>(environment.apiEndPoint + "/gettask/" + id)
  }

  public updateTaskByID(id : string) : Observable<any> {
    return this.http.put(environment.apiEndPoint + `/update/${id}?nameUser=${this.taskByID.nameUser}&name=${this.taskByID.name}&isDone=${this.taskByID.isDone}`, this.taskByID)
  }


}
