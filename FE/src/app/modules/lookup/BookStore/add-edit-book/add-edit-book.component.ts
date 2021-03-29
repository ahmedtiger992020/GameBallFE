import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AddBookInputDto, BookReviewDto, BookStoreServiceProxy, DDLDtoListResultDto } from 'src/app/shared/service/swagger/SwaggerGenerated';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {
  bookForm: FormGroup;
  bookReview: BookReviewDto[];
  authorList: DDLDtoListResultDto[];
  bookId: number;
  editMode: boolean = false;
  constructor(
    private bookService: BookStoreServiceProxy,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    public toastr: ToastrService,
    private spinnerService: NgxSpinnerService) {
  }
  ngOnInit() {
    this.spinnerService.show();
    this.loadAuthors();
    this.readQueryParams();
    this.createFormGroup();
  }

  readQueryParams() {
    debugger
    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.bookId = params['id'] || 0;
      if (this.bookId) {
        this.editMode = true;
        this.loadData(Number(this.bookId));
      }
      else {
        this.spinnerService.hide();
      }
    });
  }
  createFormGroup() {
    this.bookForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      author: new FormControl(null),
      authorId: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      avgRating: new FormControl(null)
    })
  }

  loadData(bookId: number) {
    if (bookId) {
      this.bookService.getById(bookId)
        .subscribe(res => {
          debugger
          this.bookForm.patchValue(res.data.toJSON());
          this.bookReview = res.data.bookReview
          this.spinnerService.hide();
        });
    }
  }
  loadAuthors() {
    this.bookService.getAuthorDDL().subscribe(response => {
      this.authorList = response.data;
    })
  }
  save(bookFormValue) {
    if (this.bookForm.valid) {
      this.spinnerService.show();
      var bookAddInput = bookFormValue as AddBookInputDto;
      this.bookService.add(bookAddInput)
        .subscribe((data) => {
          this.spinnerService.hide();
          if (data.isSuccess) {
            this.toastr.success('Add book Succesfully', '', {
              timeOut: 3000,
            });
            this.bookForm.reset();
            this.router.navigateByUrl('/');
          }
        })
    }
  }
  public navigateToList() {
    this.router.navigateByUrl('/');
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
