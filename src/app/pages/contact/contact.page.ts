import { Component, OnInit } from "@angular/core";
import { EmailComposer } from "@ionic-native/email-composer/ngx";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"]
})
export class ContactPage implements OnInit {
  name: string;
  email: string;
  first_name: string;
  message: string;
  constructor(private emailComposer: EmailComposer) {}

  //ouverture de l'application de mail, partie native
  onSubmitForm() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
      }
    });

    let email = {
      to: this.email,
      subject: 'Retour de ' + this.name + ' ' + this.first_name,
      body: this.message,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  ngOnInit() {}
}
