import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RegisService } from '../regis.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() public parentDate: string=''; // Add a type (e.g., string) to parentData
  @Output() datapar =new EventEmitter<any>();
  constructor(private regisService:RegisService) {
    this.regis=this.regisService.getRegis();
  }
  regis:string[];
  ngOnInit() {
    // Your initialization logic here
  }
  fireevent()
  {
    this.datapar.emit("Yoo Debanjan")
  }
  employee=[
    {"age":22, "empname":"Debanjan"},
    {"age":32, "empname":"Prashant"},
    {"age":42, "empname":"Deepak"},
  ]
}
