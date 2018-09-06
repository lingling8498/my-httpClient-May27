import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = []
  public errorMsg: string;
  
  constructor(private _employeeService: DataService) { }

  ngOnInit() {
    this._employeeService.getEmployeesData()
        .subscribe(data => this.employees = data,
                    error => this.errorMsg = error
        );
  }

}
