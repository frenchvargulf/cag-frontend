import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-link',
  templateUrl: './primary-link.component.html',
  styleUrls: ['./primary-link.component.scss']
})
export class PrimaryLinkComponent {
  @Input() href = '';
  @Input() text = '';
}
