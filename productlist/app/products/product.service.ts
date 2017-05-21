//this service will provide only product data

//3-import what we need
import {Injectable} from '@angular/core'
import {IProduct} from './product';

///////1-http service import
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
///////6-Exception handling imports
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
//2- Define the metadata with a decorator
@Injectable()
//1- Create Service Class
export class ProductService{
    ///////3-identify location of our server
    private _productUrl='api/products/products.json';
    ///////2-identify Http dependeny in constructor
    constructor(private _http:Http){}
    ///////5-change the reurn type to Observable array
    getProducts(): Observable <IProduct[]> {
        ///////4-call get http method here passing to it defined URL 
        ///////and we use map operator to map http response to our product array
        return this._http.get(this._productUrl).map((response:Response) => <IProduct[]> response.json())
        .do(data => console.log('All: '+JSON.stringify(data)))
        .catch(this.handleError);///////7-use catch opererator to call error handle method
        ///////9-Do operator let us speak with the response data we use json stringify to display data in a nice format
    }
    ///////8-in this method we can log and handle errors any way we want
    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
}
