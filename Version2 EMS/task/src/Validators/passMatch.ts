import { AbstractControl } from "@angular/forms";

export function passwordMatch(changePassword:string,confirmPassword:string){
 return function(form:AbstractControl){
    const changeValue=form.get(changePassword)?.value
    const confirmValue=form.get(confirmPassword)?.value
    if(changePassword===confirmPassword)
    {
      return null;
    }
    return{passwordMismatchError:true}
  }
}
