import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BaseComponent } from 'src/app/modules/dashboard/base/base.component';
import { BookGetAllInputDto, BookGetAllOutputDtoListResultDto, BookStoreServiceProxy } from 'src/app/shared/service/swagger/SwaggerGenerated';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
  animations: [ListBookComponent.Animations]
})

export class ListBookComponent extends BaseComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  public static Animations = trigger('detailExpand', [
    state(
      'collapsed',
      style({ height: '0px', minHeight: '0', visibility: 'collapse' })
    ),
    state('expanded', style({ height: '*', visibility: 'initial' })),
    transition(
      'expanded <=> collapsed',
      animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
    ),
  ]);
  resultsLength = 0;
  dataSource: any;
  displayedColumns: string[] = ['Book', 'symbol'];
  displayedfilter: string[] = ['BookFilters', 'symbolFilters'];

  filterValues = {};
  filterSelectObj = [];
  Filters: boolean = false;
  defualtPageSize: number = 10;
  searchDto: any;
  /// Fillteration List
  bookList: BookGetAllOutputDtoListResultDto[] = [];
  constructor(private router: Router,
    private bookService: BookStoreServiceProxy,

    private spinnerService: NgxSpinnerService) {
      super();
  }
  ngOnInit() {
    this.initializeSearchDto();
  }

  initializeSearchDto() {
    this.searchDto = {
      paging: {
        pageNumber: 1,
        pageSize: 10
      },
      sortingModel: {
        sortingExpression: "",
        sortingDirection: 0
      },
      name: ""
    }
  }
  ngAfterViewInit(): void {
    this.loadData();

  }
  
  loadData() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.prepareSearchObject(this.paginator, this.sort, this.searchDto);
          return this.bookService.getAll(this.searchDto as BookGetAllInputDto);
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.resultsLength = data.totalCount;
          return data.data;
        }),

        catchError(() => {
          this.spinnerService.hide();
          return observableOf([]);
        })
      )
      .subscribe((data) => {
        this.dataSource = data;
        this.dataSource.paginator = this.paginator;
        this.spinnerService.hide();
      });

  }
  navigateToAddEditPage(bookId) {
    this.router.navigate(['/BookDetail'], { queryParams: { id: bookId } });

  }
  navigateToAddPage(){
    this.router.navigate(['/BookDetail']);
  }
  navigateToAddReviewBook(){
    this.router.navigateByUrl('/BookReview');

  }
}
