import { Component, OnInit } from '@angular/core';
import { ShoppingList } from './shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {



  shopDetails: ShoppingList[]=[
    new ShoppingList('mens tshirt', '$570','$700','https://www.spiralseven.com/pub/media/catalog/product/g/u/guess-crew-neck-logo-t-shirt-navy.jpg'),
    new ShoppingList('mens phant', '$250','','https://i5.walmartimages.com/asr/adda0cef-7c61-4456-b295-06567c95d50f_1.e3bf9638820ac63999dce722eb5d55c6.jpeg'),
    new ShoppingList('women dress', '$350' ,'','https://i5.walmartimages.com/asr/f021799f-971b-4c81-87cd-3192840b5019.2050ebe0c7a4ae419621c2776afb73f1.jpeg'),
    new ShoppingList('women saree', '$1200','$1300','https://images.bonanzastatic.com/afu/images/dbdb/52dd/6fd1_6103003803/s-l1600.jpg'),
    new ShoppingList('mens shoe', '$120','','https://www.topoutshoes.com/media/catalog/product/cache/1/image/800x/040ec09b1e35df139433887a97daa66f/2/0/2030-brown01.jpg'),
    new ShoppingList('cap', '$20','$30','https://www.gunworld.com.au/assets/full/BM987908F.jpg?20190519113254'),
    new ShoppingList('suit', '$3220','','https://i.pinimg.com/736x/35/8d/54/358d54d1b521314478137190d1361a60.jpg'),
    new ShoppingList('jewels', '$220','$250','https://n4.sdlcdn.com/imgs/g/6/a/I-Jewels-Traditional-Kundan-Pearl-SDL125640492-3-8d31b.jpeg'),
    new ShoppingList('T-shirts', '$220','','https://www.camouflage.ca/images/products/large/UF7848.jpg'),
    new ShoppingList('party wear', '$320','','https://n1.sdlcdn.com/imgs/a/o/v/Globus-Purple-Party-Wear-Shirt-SDL486822897-1-776d9.jpg'),
    new ShoppingList('printen shirt', '$220','','https://i.pinimg.com/736x/b7/62/93/b762933a7f826d5cb9240679cf928cfd.jpg'),
    new ShoppingList('shirt', '$220','','https://qph.fs.quoracdn.net/main-qimg-c6ec1bfea0ed34505e7b94ae779e25b2'),
    new ShoppingList('cap', '$20','','https://www.gunworld.com.au/assets/full/BM987908F.jpg?20190519113254'),
    new ShoppingList(' womenswear', '$20','','https://i5.walmartimages.com/asr/92de899c-e646-4ee8-922e-c8bd3d90cfab_1.78239a078aac4ac0929bb6485a8948d1.jpeg'),
    new ShoppingList('cap', '$20','','https://i5.walmartimages.com/asr/41babaf3-6c2b-4918-a9fd-df9a8b241430_1.f909854050e5005fa2e4898b07129e30.jpeg'),
    new ShoppingList('cap', '$20','','https://www.gunworld.com.au/assets/full/BM987908F.jpg?20190519113254'),
    new ShoppingList('women saree', '','$1200','https://images.bonanzastatic.com/afu/images/dbdb/52dd/6fd1_6103003803/s-l1600.jpg'),
    new ShoppingList('mens tshirt', '$570','','https://www.spiralseven.com/pub/media/catalog/product/g/u/guess-crew-neck-logo-t-shirt-navy.jpg'),
    new ShoppingList('party wear', '$320','','https://n1.sdlcdn.com/imgs/a/o/v/Globus-Purple-Party-Wear-Shirt-SDL486822897-1-776d9.jpg')

  ];


  // shopDetails1: ShoppingList[]=[
   
  // ];
  // shopDetails2: ShoppingList[]=[
    
  // ];
  // shopDetails3: ShoppingList[]=[
    
  // ];
  // shopDetails4: ShoppingList[]=[
    
  // ];
  // shopDetails5: ShoppingList[]=[
   
  // ];
  // shopDetails6: ShoppingList[]=[
    
  // ];
  // shopDetails7: ShoppingList[]=[
  
  // ];
  // shopDetails8: ShoppingList[]=[
   
  // ];
  // totalLength:any;
  //  page=1;
  // data:Array<any>
  // totalRecords:numberpage:number=1





  constructor() {
   

   }

   totalLength:any;
   page:number =1;
 

  ngOnInit(): void {
    // this.totalLength =ShoppingList.length;
    // this.totalLength = ShoppingList.length;
  }




}
