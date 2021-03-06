import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthRoutingModule } from './auth-routing.module';
import { IsLoggedInDirective, NotRolesDirective, RolesDirective } from './directives';
import { ZenLoadingComponent } from './zen-loading/zen-loading.component';
import { ZenLoginFormComponent } from './zen-login-form/zen-login-form.component';
import { ZenLoginLinkComponent } from './zen-login-link/zen-login-link.component';
import { ZenLoginPageComponent } from './zen-login-page/zen-login-page.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    AuthRoutingModule,
  ],
  declarations: [
    IsLoggedInDirective,
    NotRolesDirective,
    RolesDirective,
    ZenLoadingComponent,
    ZenLoginFormComponent,
    ZenLoginPageComponent,
    ZenLoginLinkComponent,
  ],
  exports: [
    IsLoggedInDirective,
    NotRolesDirective,
    RolesDirective,
    ZenLoginFormComponent,
    ZenLoginPageComponent,
    ZenLoginLinkComponent,
  ],
})
export class AuthModule {}
