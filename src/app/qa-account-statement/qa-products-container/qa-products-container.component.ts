import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qa-products-container',
  templateUrl: './qa-products-container.component.html',
  styleUrls: ['./qa-products-container.component.scss']
})
export class QaProductsContainerComponent {

  @Input() title: String;

}
