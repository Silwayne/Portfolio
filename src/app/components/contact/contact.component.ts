import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private http = inject(HttpClient);

  constructor(public translation: TranslationService) {}

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  showSuccess = false;
  mailTest = false;

  post = {
    endPoint: 'https://ronny-pollmer.com/send_mail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid) {
    if (!this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.triggerSuccess(ngForm);
          },
          error: (error) => {
            console.error('Mail Error:', error);
          }
        });
    } else {
      this.triggerSuccess(ngForm);
    }
  }
}

  private triggerSuccess(ngForm: NgForm) {
    this.showSuccess = true;
    ngForm.resetForm();
    
    setTimeout(() => {
      this.showSuccess = false;
    }, 5000);
  }
}
