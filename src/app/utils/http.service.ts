import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get(url: string, params: any) {
    this.http.get(url).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error messages -----> : ', error);
    return Promise.reject(error);
  }

  private checkPrams(url: string, params: any): string {
    url = url + '?';
    for (const item in params) {
      if (item != null) {
        url = url.concat(item + '=' + params[item] + '&');
      }
    }
    return url.substring(0, url.length - 1);

  }
}
