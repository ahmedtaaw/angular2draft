import {Component,OnInit} from '@angular/core';

import {IProduct} from './product';

import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[];
    errorMessage:string;
    constructor(private _productService: ProductService){

    }

ngOnInit(): void{
    ///////10-because the service now return observables we can not assign the result to our product directly
    ///////rather we subscribe to the returned observable
    ///////when the obeservables emmets  the data  we set our products property to the returned array of products
    ///////11- but things not always go right as we excpect so we will add error handle msg 
    ///////12- <any>error this is a casting operator, we are casting the error returned from the observable to the any datatype
    this._productService.getProducts()
    .subscribe(products => this.products=products,
    error => this.errorMessage = <any>error);
}

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    onRatingClicked(message:string):void{
        this.pageTitle='product list '+message;
    }
}