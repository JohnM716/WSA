import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'front-footer',
  imports: [],
  templateUrl: './front-footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class FrontFooterComponent {
  currentYear = new Date().getFullYear();
}
