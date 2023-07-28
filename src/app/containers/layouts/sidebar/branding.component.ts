import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img 
          src="./assets/images/detailed-logo.png"
          class="align-middle m-2"
          style="width: 80%; height: 60px"
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() { }
}
