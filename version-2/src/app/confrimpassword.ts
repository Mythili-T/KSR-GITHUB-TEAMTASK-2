import { FormGroup } from "@angular/forms";

export function confirmPasswordValidate(ps: string,cps: string) {
return(formGroup: FormGroup)=>{
  const password = formGroup.controls[ps];
  const confirmPassword = formGroup.controls[cps];
  if(password.value !=confirmPassword.value){
    confirmPassword.setErrors({confirmPasswordValidate: true});
  }else{
    confirmPassword.setErrors(null);
  }
};
}
