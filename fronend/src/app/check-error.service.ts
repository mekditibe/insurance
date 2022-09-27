import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckErrorService {

  constructor(private router:Router ) { }

  public checkError(controlName: string, errorName: string,controlForm:any){
    return controlForm.controls[controlName].hasError(errorName);
  }
  
  cancel(where:string){
    this.router.navigate([where]);
  }
}
