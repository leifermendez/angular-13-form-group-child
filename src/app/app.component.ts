import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public formGroupList = new FormGroup({
    list: new FormArray([]),
    nameParent:new FormControl('')
  });

  ngOnInit(): void {
    
  }

  get getList():Array<any>{
    console.log('here__')
    const ref = (this.formGroupList.get('list') as FormArray)
    return ref.controls
  }

  add():void{
    const newGroup = this.addFormToArray();
    const ref = this.formGroupList.get('list') as FormArray;
    ref.push(newGroup)
  }

  addFormToArray():FormGroup{
    return new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      age:new FormControl(''),
    })
  }
}
