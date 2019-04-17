import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders,} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

// 请求类型
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private inject: Injectable) {
  }

  /**
   *  GET请求处理（一般用于获取数据）
   * @param url 后台接口api 例如：/api/test/6
   */
  public get(url: string): Promise<void | Object> {
    return this.http.get(url, httpOptions).toPromise().catch(errorResp => {
      this.handleError(errorResp);
    });
  }

  // /**
  //  * POST请求处理（一般用于保存数据）
  //  * @param url 后台接口api
  //  * @param data 参数
  //  */
  // public post(url: string, data = {}): Observable<any> {
  //   return this.http.post(`${this.baseUrl}${url}`, data, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }
  //
  // /**
  //  * PUT请求处理（一般用于更新数据）
  //  * @param url 后台接口api 例如：/api/test/6
  //  * @param data 参数
  //  */
  // public put(url: string, data = {}): Observable<any> {
  //   return this.http.put(url, data, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }
  //
  // /**
  //  * DELETE请求处理（一般用于删除数据）
  //  * @param url 后台接口api 例如：/api/test/6
  //  */
  // public delete(url: string): Observable<{}> {
  //   return this.http.delete(url, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }
  //
  // /**
  //  *  提取数据
  //  * @param res 返回结果
  //  */
  // private extractData(res: Response) {
  //   let body = res;
  //   return body || {};
  // }
  //
  /**
   * 错误消息类
   * @param error
   */
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.status === 0) {
      this.router.navigate(['/unauthentication']);
    }
    // throw new Exception
    return throwError('Something bad happened; please try again later.');
  }

}
