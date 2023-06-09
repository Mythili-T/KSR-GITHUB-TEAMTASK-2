import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'Who can donate blood?',
      answer: 'Any healthy adult between the ages of 18 and 65, weighing over 50 kg, and with a hemoglobin level of at least 12.5 g/dL can donate blood.',
      show: false
    },
    {
      question: 'How often can I donate blood?',
      answer: 'For men, the waiting period between donations is at least 12 weeks, and for women, it is at least 16 weeks.',
      show: false
    },
    {
      question: 'Is it safe to donate blood?',
      answer: 'Yes, donating blood is safe. All equipment is sterile and disposable, and a new needle is used for each donor. Donors are also screened for health conditions that may prevent them from donating.',
      show: false
    },
    {
      question: 'How long does it take to donate blood?',
      answer: 'The entire process of blood donation, including registration, medical screening, and recovery, takes about an our.',
      show: false
    },
    {
      question: 'Can I donate blood if I have a tattoo?',
      answer: 'Yes, you can donate blood if you have a tattoo as long as it was done at a licensed tattoo facility and at least 12 months have passed since you got the tattoo.',
      show: false
    },
    {
      question: 'Can I donate blood if I have a cold or flu?',
      answer: 'No, if you have a cold or flu, you should wait until you have fully recovered before donating blood.',
      show: false
    },
    {
      question: 'What happens to my blood after I donate?',
      answer: 'Your blood is tested for infectious diseases, and then separated into components such as red blood cells, plasma, and platelets. These components are then used to help patients who need them.',
      show: false
    },
    {
      question: 'What should I do before donating blood?',
      answer: 'Before donating blood, you should eat a healthy meal, drink plenty of fluids, and get a good night sleep. Avoid alcohol and caffeine for at least 24 hours before donation. Also, make sure to disclose any medical conditions,medications, or recent travel to the blood bank staff.',
      show: false
    }
  ];
}
