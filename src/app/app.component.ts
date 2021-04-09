import {
  Component,
  TemplateRef,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { DialogService } from "./dynamic-component/dialog.service";
import { TextBoxComponent } from "./dynamic-component/textbox.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  @Input() showTextbox: any;
  @ViewChild(TemplateRef) tpl: TemplateRef<any>;

  constructor(private dialog: DialogService) {}

  //public showTextbox: boolean = false;

  clicked() {
    debugger;
    this.showTextbox = !this.showTextbox;
  }

  showSignInDialog() {
    this.dialog.dynamicComponent(TextBoxComponent);
  }

  // showSignUpDialog() {
  //   this.dialog.open(SignupComponent, { header: "Sign Up" });
  // }
}
