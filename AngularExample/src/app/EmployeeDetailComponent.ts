import{Component,OnInit} from '@angular/core';
import { EmployeeService } from './EmployeeService';
import { IEmployee } from './employee';

@Component({
    selector:'emp-details',
    templateUrl:'./EmployeeDetail.html'
})

export class EmployeeDetailComponent implements OnInit{
    public employees !:IEmployee[];
    constructor(private employeeservice:EmployeeService)
    {

    }
    ngOnInit(){
        this.employeeservice.getEmployees()
        .subscribe(data => this.employees = data)
    }
}