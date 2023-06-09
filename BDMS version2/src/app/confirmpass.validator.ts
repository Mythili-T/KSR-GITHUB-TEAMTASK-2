import { FormGroup } from '@angular/forms';

export function confirmedValidator(password: string, confirmpassword: string) {
  return (formgroup: FormGroup) => {
    const pass = formgroup.controls[password];
    const cpass = formgroup.controls[confirmpassword];

    if (pass.value!==cpass.value) {
      cpass.setErrors({ confirmedValidator: true });
    } else {
      cpass.setErrors(null);
    }
  };
}
