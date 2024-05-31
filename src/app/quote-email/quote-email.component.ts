import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import axios from 'axios';
import { MatSnackBar } from '@angular/material/snack-bar';
import { env } from 'src/environments/environment';


@Component({
  selector: 'app-quote-email',
  templateUrl: './quote-email.component.html',
  styleUrls: ['./quote-email.component.scss']
})
export class QuoteEmailComponent {
  emailData = {
    email: '',
    body: ''
  };
  email: string = '';
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<QuoteEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {}

  onSubmit(form: any) {
    if (form.valid) {
      axios.post(`${env.REST_URL}${env.VERSION}/details/email`, {
        emailId: this.emailData.email,
        body: this.emailData.body
      })
      .then(response => {
        this.snackBar.open(response.data, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
        this.dialogRef.close();
      })
      .catch(error => {
        console.error('There was an error sending the email!', error);
        this.snackBar.open('Failed to send email. Please try again.', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      });
    }
  }

  validateEmail() {
    console.log("reached")
    if (!this.emailRegex.test(this.email)) {
      this.emailError = 'Invalid email format';
    } else {
      this.emailError = null;
    }
  }
}

