import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { AddBookreviewComponent } from './modules/lookup/BookStore/add-bookreview/add-bookreview.component';
import { AddEditBookComponent } from './modules/lookup/BookStore/add-edit-book/add-edit-book.component';
import { ListBookComponent } from './modules/lookup/BookStore/list-book/list-book.component';


const routes: Routes = [
  {
    path: "",
    component: ListBookComponent,
    data: { 
      isTab: true,
    }
  },
  {
    path: "BookDetail",
    component: AddEditBookComponent,
  },
  {
    path: "BookReview",
    component: AddBookreviewComponent,
  },

];

@NgModule({
  declarations: [ListBookComponent,AddEditBookComponent],

  imports: [NgxSpinnerModule,RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule,MatSelectModule,MatSortModule,MatButtonModule, BrowserAnimationsModule, BrowserModule, MatToolbarModule,MatPaginatorModule,MatFormFieldModule,MatTableModule],
  exports: [RouterModule,MatInputModule]
})
export class AppRoutingModule { }