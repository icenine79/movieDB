import { Directive, ViewContainerRef, TemplateRef, OnInit, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appNgLoop]'
})
export class NgLoopDirective implements OnChanges {
  /* 
  In Angular a view container is a special type of container where one or more Views can be attached. 
  It’s mainly used when we create programmatically these views by instantiating a component or creating 
  an embedded view, like we’re going to do. */

  @Input('appNgLoopOf') appNgLoopOf: Array<any>
  constructor(private container: ViewContainerRef,
    private template: TemplateRef<any>) { }

    ngOnChanges() {
      this.container.clear();
  
      for (let input of this.appNgLoopOf) {
        this.container.createEmbeddedView(this.template,  {
          $implicit: input,
          index: this.appNgLoopOf.indexOf(input),
         });
      }
    }

}
