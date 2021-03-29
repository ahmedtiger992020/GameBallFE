import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { MaterialModule } from './app-material/MaterialModule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppConfigService } from './shared/service/AppConfigService';
import { API_BASE_URL, BookStoreServiceProxy } from './shared/service/swagger/SwaggerGenerated';
import { ConfirmDialogComponent } from './shared/component/confirm-dialog/confirm-dialog.component';
import { AddBookreviewComponent } from './modules/lookup/BookStore/add-bookreview/add-bookreview.component';

export function getApiBaseUrl(): string {
  return AppConfigService.appConfig.ApiBaseUrl;
}
@NgModule({
  declarations: [
    AppComponent,
    AddBookreviewComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
    }),
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    
  ],

  providers: [ConfirmDialogComponent,
    { provide: API_BASE_URL, useFactory: getApiBaseUrl },

    ToastrService, BookStoreServiceProxy

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }