import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocationModel } from 'src/app/OwnerModule/models/location.model';
import { DetailsModel } from 'src/app/OwnerModule/models/details.model';
import { PaymentDetailsModel } from 'src/app/OwnerModule/models/paymentdetails.model';
import { PublishListingModel } from 'src/app/OwnerModule/models/publishlisting.model';
import { SecurityModel } from 'src/app/OwnerModule/models/security.model';
import { SessionStorageService } from 'src/app/OwnerModule/services/sessionstorage.service';
import { PublishlistingService } from 'src/app/OwnerModule/services/publishlisting.service';

@Component({
  selector: 'app-publishlisting',
  templateUrl: './publishlisting.component.html',
  styleUrls: ['./publishlisting.component.css']
})
export class PublishlistingComponent implements OnInit {

  @Input() LocationForm;
  @Input() DetailsForm;
  @Input() paymentdetailsForm;


  location:LocationModel[]=[];
  details: DetailsModel[] = [];
  paymentDetails: PaymentDetailsModel[] = [];
  publishListing:PublishListingModel[] = [];
  constructor(private router: Router,
    private sessionstorageservice: SessionStorageService,
    private publishser: PublishlistingService
    ) { }

  ngOnInit(): void {
  }



  onPublish(){
    var data:any={};
    data.ownerId="1";
    data.correlationid="131";
    data.location=sessionStorage.getItem("OwnerLocation");
    data.details=sessionStorage.getItem("OwnerDetails");
    data.paymentDetails=sessionStorage.getItem("OwnerPaymentdetails");
    console.log("from session");




    var myobj:any = {
      "ownerId":1,
      "correlationid":122,
      "location":JSON.parse(sessionStorage.getItem("OwnerLocation")),
      "details":JSON.parse(sessionStorage.getItem("OwnerLocation")),
      "paymentDetails":JSON.parse(sessionStorage.getItem("OwnerPaymentdetails"))

   };

   function escapeSpecialChars(jsonString) {
    return jsonString.replace("\\\"", "\"");
  }




 


   
   console.log("jhhjdf");

    this.publishser.pubList(myobj).subscribe((myobj)=>{

      error: error => console.error('There was an error!', error)
    })

    
  }
  back() {
    this.router.navigateByUrl("/paymentdetails")
  }
  onclick(){

    this.router.navigateByUrl("/header")

    console.log("LOC22");
 

}

}