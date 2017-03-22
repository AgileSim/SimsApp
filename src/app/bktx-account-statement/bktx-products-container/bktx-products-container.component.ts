import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bktx-products-container',
  templateUrl: './bktx-products-container.component.html',
  styleUrls: ['./bktx-products-container.component.scss']
})
export class BktxProductsContainerComponent {

  @Input() title: String;

}
