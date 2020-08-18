
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { DetailsModel } from 'src/app/OwnerModule/models/details.model';
import { SessionStorageService } from 'src/app/OwnerModule/services/sessionstorage.service';
import { DetailsService } from 'src/app/OwnerModule/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsForm : FormGroup;

  DetailsForm;
  OwnerDetails ;
  detailsmodel: DetailsModel[] = [];

  // detailsa: Detailsa;

  constructor(
    private router: Router,
    private details:DetailsService,
    private _fb: FormBuilder,
    private sessionstorageservice: SessionStorageService

    ) { }

  ngOnInit(): void {
    this.OwnerDetails = JSON.parse(JSON.stringify(window.localStorage.getItem('OwnerDetails')));
    this.DetailsForm = this._fb.group({

      name: new FormControl(this.OwnerDetails?this.OwnerDetails.name:'', Validators.required),
      functionhalldescription: new FormControl(this.OwnerDetails?this.OwnerDetails.functionhalldescription:'', Validators.required),
      functionhalltype: new FormControl(this.OwnerDetails?this.OwnerDetails.functionhalltype:'', Validators.required),
      foodtype: new FormControl(this.OwnerDetails?this.OwnerDetails.foodtype:'', Validators.required),
      maximumguest: new FormControl(this.OwnerDetails?this.OwnerDetails.maximumguest:'', Validators.required),
      roomtype: new FormControl(this.OwnerDetails?this.OwnerDetails.roomtype:'', Validators.required),

      briderooms: new FormControl(this.OwnerDetails?this.OwnerDetails.briderooms:'', Validators.required),
      zipcode: new FormControl(this.OwnerDetails?this.OwnerDetails.zipcode:'', Validators.required),

  }
    )}
 

back() {
  this.router.navigateByUrl("/location");

}
onclick() {

  this.OwnerDetails = {  

    name: this.DetailsForm.get('name').value,
    functionhalldescription: this.DetailsForm.get('functionhalldescription').value,
    functionhalltype: this.DetailsForm.get('functionhalltype').value,
    foodtype: this.DetailsForm.get('foodtype').value,
    maximumguest: this.DetailsForm.get('maximumguest').value,
    roomtype: this.DetailsForm.get('roomtype').value,
    zipcode: this.DetailsForm.get('zipcode').value,
    briderooms: this.DetailsForm.get('briderooms').value,
    imageUrl : {
      id:"ad.jpg"
    }


    
        
  }
  
  

// }

this.details.addDetails(this.OwnerDetails).subscribe(
  (data: DetailsModel) => {
    console.log(data);
    
    this.sessionstorageservice.set("OwnerDetails", this.OwnerDetails);
  },
  (error: any) => console.log(error)
)
this.router.navigateByUrl("/photos");
console.log("DET22");

}









}


