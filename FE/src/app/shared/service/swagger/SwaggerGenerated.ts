/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.10.8.0 (NJsonSchema v10.3.11.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class BookStoreServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    add(body: AddBookInputDto | undefined): Observable<BooleanResultDto> {
        let url_ = this.baseUrl + "/api/BookStore/Add";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAdd(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAdd(<any>response_);
                } catch (e) {
                    return <Observable<BooleanResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<BooleanResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processAdd(response: HttpResponseBase): Observable<BooleanResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BooleanResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BooleanResultDto>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    addReview(body: AddBookReviewInputDto | undefined): Observable<BooleanResultDto> {
        let url_ = this.baseUrl + "/api/BookStore/AddReview";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddReview(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddReview(<any>response_);
                } catch (e) {
                    return <Observable<BooleanResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<BooleanResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processAddReview(response: HttpResponseBase): Observable<BooleanResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BooleanResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BooleanResultDto>(<any>null);
    }

    /**
     * @param request (optional) 
     * @return Success
     */
    getById(request: number | undefined): Observable<BookGetByIdOutputDtoResultDto> {
        let url_ = this.baseUrl + "/api/BookStore/GetById?";
        if (request === null)
            throw new Error("The parameter 'request' cannot be null.");
        else if (request !== undefined)
            url_ += "request=" + encodeURIComponent("" + request) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetById(<any>response_);
                } catch (e) {
                    return <Observable<BookGetByIdOutputDtoResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<BookGetByIdOutputDtoResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetById(response: HttpResponseBase): Observable<BookGetByIdOutputDtoResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BookGetByIdOutputDtoResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BookGetByIdOutputDtoResultDto>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    getAll(body: BookGetAllInputDto | undefined): Observable<BookGetAllOutputDtoListResultDto> {
        let url_ = this.baseUrl + "/api/BookStore/GetAll";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(<any>response_);
                } catch (e) {
                    return <Observable<BookGetAllOutputDtoListResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<BookGetAllOutputDtoListResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<BookGetAllOutputDtoListResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BookGetAllOutputDtoListResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BookGetAllOutputDtoListResultDto>(<any>null);
    }

    /**
     * @return Success
     */
    getAuthorDDL(): Observable<DDLDtoListResultDto> {
        let url_ = this.baseUrl + "/api/BookStore/GetAuthorDDL";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAuthorDDL(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAuthorDDL(<any>response_);
                } catch (e) {
                    return <Observable<DDLDtoListResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<DDLDtoListResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetAuthorDDL(response: HttpResponseBase): Observable<DDLDtoListResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DDLDtoListResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<DDLDtoListResultDto>(<any>null);
    }

    /**
     * @return Success
     */
    getBookDDL(): Observable<DDLDtoListResultDto> {
        let url_ = this.baseUrl + "/api/BookStore/GetBookDDL";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetBookDDL(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetBookDDL(<any>response_);
                } catch (e) {
                    return <Observable<DDLDtoListResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<DDLDtoListResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetBookDDL(response: HttpResponseBase): Observable<DDLDtoListResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DDLDtoListResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<DDLDtoListResultDto>(<any>null);
    }
}

export class AddBookInputDto {
    name?: string | undefined;
    category?: string | undefined;
    price?: string | undefined;
    authorId?: number;
    bookReview?: BookReviewDto[] | undefined;

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.category = _data["category"];
            this.price = _data["price"];
            this.authorId = _data["authorId"];
            if (Array.isArray(_data["bookReview"])) {
                this.bookReview = [] as any;
                for (let item of _data["bookReview"])
                    this.bookReview!.push(BookReviewDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AddBookInputDto {
        data = typeof data === 'object' ? data : {};
        let result = new AddBookInputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["category"] = this.category;
        data["price"] = this.price;
        data["authorId"] = this.authorId;
        if (Array.isArray(this.bookReview)) {
            data["bookReview"] = [];
            for (let item of this.bookReview)
                data["bookReview"].push(item.toJSON());
        }
        return data; 
    }
}

export class AddBookReviewInputDto {
    bookId?: number;
    bookReview?: BookReviewDto[] | undefined;

    init(_data?: any) {
        if (_data) {
            this.bookId = _data["bookId"];
            if (Array.isArray(_data["bookReview"])) {
                this.bookReview = [] as any;
                for (let item of _data["bookReview"])
                    this.bookReview!.push(BookReviewDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AddBookReviewInputDto {
        data = typeof data === 'object' ? data : {};
        let result = new AddBookReviewInputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["bookId"] = this.bookId;
        if (Array.isArray(this.bookReview)) {
            data["bookReview"] = [];
            for (let item of this.bookReview)
                data["bookReview"].push(item.toJSON());
        }
        return data; 
    }
}

export class BookGetAllInputDto {
    paging?: PagingModel;
    sortingModel?: SortingModel;
    name?: string | undefined;

    init(_data?: any) {
        if (_data) {
            this.paging = _data["paging"] ? PagingModel.fromJS(_data["paging"]) : <any>undefined;
            this.sortingModel = _data["sortingModel"] ? SortingModel.fromJS(_data["sortingModel"]) : <any>undefined;
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): BookGetAllInputDto {
        data = typeof data === 'object' ? data : {};
        let result = new BookGetAllInputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["paging"] = this.paging ? this.paging.toJSON() : <any>undefined;
        data["sortingModel"] = this.sortingModel ? this.sortingModel.toJSON() : <any>undefined;
        data["name"] = this.name;
        return data; 
    }
}

export class BookGetAllOutputDto {
    id?: number;
    name?: string | undefined;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): BookGetAllOutputDto {
        data = typeof data === 'object' ? data : {};
        let result = new BookGetAllOutputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data; 
    }
}

export class BookGetAllOutputDtoListResultDto {
    isSuccess?: boolean;
    message?: string | undefined;
    data?: BookGetAllOutputDto[] | undefined;
    totalCount?: number;

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.message = _data["message"];
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(BookGetAllOutputDto.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): BookGetAllOutputDtoListResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new BookGetAllOutputDtoListResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item.toJSON());
        }
        data["totalCount"] = this.totalCount;
        return data; 
    }
}

export class BookGetByIdOutputDto {
    id?: number;
    name?: string | undefined;
    category?: string | undefined;
    price?: string | undefined;
    author?: string | undefined;
    avgRating?: string | undefined;
    bookReview?: BookReviewDto[] | undefined;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.category = _data["category"];
            this.price = _data["price"];
            this.author = _data["author"];
            this.avgRating = _data["avgRating"];
            if (Array.isArray(_data["bookReview"])) {
                this.bookReview = [] as any;
                for (let item of _data["bookReview"])
                    this.bookReview!.push(BookReviewDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): BookGetByIdOutputDto {
        data = typeof data === 'object' ? data : {};
        let result = new BookGetByIdOutputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["category"] = this.category;
        data["price"] = this.price;
        data["author"] = this.author;
        data["avgRating"] = this.avgRating;
        if (Array.isArray(this.bookReview)) {
            data["bookReview"] = [];
            for (let item of this.bookReview)
                data["bookReview"].push(item.toJSON());
        }
        return data; 
    }
}

export class BookGetByIdOutputDtoResultDto {
    isSuccess?: boolean;
    message?: string | undefined;
    data?: BookGetByIdOutputDto;

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.message = _data["message"];
            this.data = _data["data"] ? BookGetByIdOutputDto.fromJS(_data["data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BookGetByIdOutputDtoResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new BookGetByIdOutputDtoResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        data["data"] = this.data ? this.data.toJSON() : <any>undefined;
        return data; 
    }
}

export class BookReviewDto {
    text?: string | undefined;
    rating?: number;

    init(_data?: any) {
        if (_data) {
            this.text = _data["text"];
            this.rating = _data["rating"];
        }
    }

    static fromJS(data: any): BookReviewDto {
        data = typeof data === 'object' ? data : {};
        let result = new BookReviewDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["text"] = this.text;
        data["rating"] = this.rating;
        return data; 
    }
}

export class BooleanResultDto {
    isSuccess?: boolean;
    message?: string | undefined;
    data?: boolean;

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.message = _data["message"];
            this.data = _data["data"];
        }
    }

    static fromJS(data: any): BooleanResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new BooleanResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        data["data"] = this.data;
        return data; 
    }
}

export class DDLDto {
    id?: number;
    name?: string | undefined;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): DDLDto {
        data = typeof data === 'object' ? data : {};
        let result = new DDLDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data; 
    }
}

export class DDLDtoListResultDto {
    isSuccess?: boolean;
    message?: string | undefined;
    data?: DDLDto[] | undefined;
    totalCount?: number;

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.message = _data["message"];
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(DDLDto.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): DDLDtoListResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new DDLDtoListResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item.toJSON());
        }
        data["totalCount"] = this.totalCount;
        return data; 
    }
}

export class PagingModel {
    pageNumber?: number;
    pageSize?: number;

    init(_data?: any) {
        if (_data) {
            this.pageNumber = _data["pageNumber"];
            this.pageSize = _data["pageSize"];
        }
    }

    static fromJS(data: any): PagingModel {
        data = typeof data === 'object' ? data : {};
        let result = new PagingModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["pageNumber"] = this.pageNumber;
        data["pageSize"] = this.pageSize;
        return data; 
    }
}

export enum SortDirection {
    _0 = 0,
    _1 = 1,
}

export class SortingModel {
    sortingExpression?: string | undefined;
    sortingDirection?: SortDirection;

    init(_data?: any) {
        if (_data) {
            this.sortingExpression = _data["sortingExpression"];
            this.sortingDirection = _data["sortingDirection"];
        }
    }

    static fromJS(data: any): SortingModel {
        data = typeof data === 'object' ? data : {};
        let result = new SortingModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sortingExpression"] = this.sortingExpression;
        data["sortingDirection"] = this.sortingDirection;
        return data; 
    }
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}