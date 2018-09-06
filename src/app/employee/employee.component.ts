import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = [];
  public errorMsg: string;

  constructor(private _employeeService: DataService) { }

  ngOnInit() {
    this._employeeService.getEmployeesData()
        .subscribe(data => this.employees = data,
                    error => this.errorMsg = error
        );
  }

}
