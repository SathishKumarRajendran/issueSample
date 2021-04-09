import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// import { DialogModule } from "@syncfusion/ej2-angular-popups";

import { AppComponent } from "./app.component";
import { TextBoxComponent } from "./dynamic-component/textbox.component";
import { TextBoxModule } from "@syncfusion/ej2-angular-inputs";
// import { ObserversModule } from "@angular/cdk/observers";

import { DialogService } from "./dynamic-component/dialog.service";
// import { GridModule } from "@syncfusion/ej2-angular-grids";
import { TabModule } from "@syncfusion/ej2-angular-navigations";
// import { SplitterModule } from "@syncfusion/ej2-angular-layouts";
// import { MatCardModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    TextBoxModule,
    TabModule,
  ],
  entryComponents: [
    TextBoxComponent
  ],
  bootstrap: [AppComponent],
  providers: [DialogService]
})
export class AppModule {}
