import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { IItemData, Item}      from './framework.component.ts';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class FrameworksService {
    private frameworksGetUrl = '/api/SampleData/GetFrameworks';  // URL to web API
    private frameworksPostUrl = '/api/SampleData/AddFramework';  // URL to web API
    constructor(private http: Http) { }
    getFrameworks(): Observable<IItemData[]> {
        return this.http.get(this.frameworksGetUrl)
            .map((response: Response) => <IItemData[]>response.json())
            .catch(this.handleError);
    }
   addFramework (item: Item): Promise<Response> {
    let body = JSON.stringify(item );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.frameworksPostUrl, body, options)
                   // .map((response: Response) => <Item[]>response.json())
                      .toPromise()
                      .catch(this.handleError);
   }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}