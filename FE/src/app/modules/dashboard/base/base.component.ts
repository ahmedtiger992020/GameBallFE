import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export abstract class BaseComponent {
  constructor() {

  }
  prepareSearchObject(paginator: MatPaginator, sort: MatSort, searchDto: any) {
    searchDto.paging.pageNumber = paginator.pageIndex + 1;
    // 
    //if(paginator.pageSize)
        searchDto.paging.pageSize = paginator.pageSize;
    // else
    //     searchDto.paging.pageSize =  Utils.DEFUALT_PAGE_SIZE;
        
    searchDto.sortingModel.sortingExpression = sort.active;

    if (sort.direction === 'desc') {
      searchDto.sortingModel.sortingDirection = 2//desc ;
    } else {
      searchDto.sortingModel.sortingDirection =1//asc ;
    }
  }

}

