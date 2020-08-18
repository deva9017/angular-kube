import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarService } from 'src/app/UserModule/services/searchbar.service';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-functionhallpage',
  templateUrl: './functionhallpage.component.html',
  styleUrls: ['./functionhallpage.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class FunctionhallpageComponent implements OnInit {
  
  temp;
  data=[];
  searchParam: any;
  filteredData: any[];
  constructor( @Inject(DOCUMENT)
    private searchSvc: SearchbarService,
    private router: Router
    ) { }

  ngOnInit(): void {
  //   this.searchSvc.getAllFunctionHalls()
  //       .subscribe( Response => {
      
  //     this.functionHalls = Response["functionHalls"]
  //       console.log(this.functionHalls)
  // },(error) => { console.log(error);})
  // }
  this.temp = this.router.url.split("/").slice(-1).pop();
  localStorage.getItem("searchItem")
  console.log(this.temp);
  
 this.getFunctionHallData();
}
getFunctionHallData() {
  //  this.functionHall = [];
  //  var me = this
 let searchvalue = localStorage.getItem("searchItem")

    this.searchSvc.findFunctionhallByNameAndCity(searchvalue)
    .subscribe( Response => {
    let resData =Response.data;
    console.log(resData,"res")
      // let res Response;
      console.log(this.temp,"28");
      resData.forEach(element => {
        if(this.temp == element.ownerId){
          console.log(element);
    this.data.push(element)
        }
      });
  // console.log(Response,"response")
  
  },(error) => { console.log(error);})
  }







  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }

  






  moreInfo() {
    console.log("id");
  this.router.navigateByUrl("/paygate")

  }
  
}   