// Importing necessary modules and classes from the Angular core
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Defining a custom directive named "UnlessDirective"
@Directive({
  selector: '[appUnless]'  // Selector for the directive to be used in templates
})
export class UnlessDirective {
  // Using a "set" accessor for the input property named "unless"
  @Input() set appUnless(condition: boolean) {
    // Checking the condition passed as an input
    if (!condition) {
      // Creating an embedded view in the associated view container using the provided template
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // Clearing the content from the associated view container
      this.vcRef.clear();
    }
  }

  // Constructor of the directive, injecting TemplateRef and ViewContainerRef
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
}
