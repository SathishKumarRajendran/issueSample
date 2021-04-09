import { DOCUMENT } from "@angular/common";
import {
  Injectable,
  Injector,
  Inject,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  TemplateRef,
  ApplicationRef,
  Type,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
// import { MyDialogComponent } from "./dialog.component";
import { TextBoxComponent } from "./textbox.component";

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Injectable()
export class DialogService {
  @Input() showTextbox: any;
  @Output() itemChange = new EventEmitter();
  componentRef;
  dynamicComponentRef;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private cdRef: ApplicationRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  dynamicComponent<T>(content: Content<T>) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      TextBoxComponent
    );
    const ngContent = this.resolveNgContent(content);
    this.dynamicComponentRef = factory.create(this.injector, ngContent);
    this.dynamicComponentRef.hostView.detectChanges();
    const { nativeElement } = this.dynamicComponentRef.location;
    this.document.body.appendChild(nativeElement);
  }

  resolveNgContent<T>(content: Content<T>) {
    if (typeof content === "string") {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      return [viewRef.rootNodes];
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      content
    );
    const componentRef = factory.create(this.injector);
    componentRef.hostView.detectChanges();
    return [[componentRef.location.nativeElement]];
  }

  close() {
    if (this.dynamicComponentRef) {
      this.dynamicComponentRef.hostView.rootNodes[0].remove();
      this.dynamicComponentRef.destroy();
    }
  }
}
