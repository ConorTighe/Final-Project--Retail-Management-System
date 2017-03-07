import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }
    
    getEmployees(){
        return this.http.get('/api/tasks')
            .map(res => res.json());
    }
    
    addEmployee(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
    
    deleteEmployee(id){
        return this.http.delete('/api/task/'+id)
            .map(res => res.json());
    }
}