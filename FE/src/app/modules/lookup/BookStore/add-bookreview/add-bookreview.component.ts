import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AppConfigService } from 'src/app/shared/service/AppConfigService';
import { AddBookReviewInputDto, BookReviewDto, BookStoreServiceProxy, DDLDtoListResultDto } from 'src/app/shared/service/swagger/SwaggerGenerated';

@Component({
  selector: 'app-add-bookreview',
  templateUrl: './add-bookreview.component.html',
  styleUrls: ['./add-bookreview.component.css']
})
export class AddBookreviewComponent implements OnInit {
  bookReviewForm: FormGroup;
  bookList: DDLDtoListResultDto[];
  review: BookReviewDto;

  constructor(private bookService: BookStoreServiceProxy,
    private fb: FormBuilder,
    private spinnerService: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
    , private AppConfigService: AppConfigService
  ) {


  }

  ngOnInit(): void {
    this.loadBooks()
    this.createFormGroup();
  }
  loadBooks() {
    this.bookService.getBookDDL().subscribe(response => {
      this.bookList = response.data;
    })
  }
  createFormGroup() {
    this.bookReviewForm = new FormGroup({
      bookId: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    })
  }

  save(bookReviewFormValues) {

    debugger
    if (this.bookReviewForm.valid) {
      this.spinnerService.show();
      var bookReviewAddInput = new AddBookReviewInputDto()
      bookReviewAddInput.bookId = bookReviewFormValues.bookId;
      bookReviewAddInput.bookReview = []
      var bookComment = new BookReviewDto();
      // bookComment.rating = parseInt(bookReviewFormValues.rating);
      try {
        bookComment.rating = parseInt(bookReviewFormValues.rating) || 0;
        if (bookComment.rating === 0)
        {
          this.toastr.error("value must be number and range from 1 - 5")
          return
        }
        if (bookComment.rating > 5) {
          this.toastr.error("from 1 - 5")
          return
        }
      } catch (error) {

      }

      bookComment.text = bookReviewFormValues.text;
      bookReviewAddInput.bookReview.push(bookComment);
      this.bookService.addReview(bookReviewAddInput)
        .subscribe((data) => {
          this.spinnerService.hide();
          if (data.isSuccess) {
            this.toastr.success('Add Book review Succesfully', '', {
              timeOut: 3000,
            });
            this.bookReviewForm.reset();
            this.router.navigateByUrl('/');
          }
        })
    }
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
