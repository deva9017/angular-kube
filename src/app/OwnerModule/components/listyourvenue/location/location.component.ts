import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { LocationService } from 'src/app/OwnerModule/services/location.service';
import { SessionStorageService } from 'src/app/OwnerModule/services/sessionstorage.service';
import { LocationModel } from 'src/app/OwnerModule/models/location.model';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 
 
  countryDetails=[];
  locationForm: FormGroup;
value;
  LocationForm;
  OwnerLocation ;
  countryInfo=[];
  stateInfo=[];
  cityInfo=[];
  locationmodel: LocationModel[] = [];

  constructor(
    private router: Router,
    private location: LocationService,
    private _fb: FormBuilder,
    private sessiontorageservice: SessionStorageService,
    ) { }

  ngOnInit() {

    this.OwnerLocation = JSON.parse(JSON.stringify(window.sessionStorage.getItem('OwnerLocation')));
    this.LocationForm = this._fb.group({
      country: new FormControl(this.OwnerLocation?this.OwnerLocation.country:'', ),
      state: new FormControl(this.OwnerLocation?this.OwnerLocation.state:'', ),
      city: new FormControl(this.OwnerLocation?this.OwnerLocation.city:'', ),
      streetAddress: new FormControl(this.OwnerLocation?this.OwnerLocation.streetAddress:'', Validators.required),
      postalCode: new FormControl(this.OwnerLocation?this.OwnerLocation.postalCode:'', Validators.required),
      
    });
    
  }

  getStates(value){
      console.log(value)
      this.location.getStates(value).subscribe(data =>{
        console.log(data.data[0].countryDetails.states);
         this.stateInfo =data.data[0].countryDetails.states;
         console.log(this.stateInfo)
      })
  }
  getCities(value){
    console.log(value)
    this.location.getCity(value).subscribe(cities =>{
      console.log(cities.data[0].countryDetails.states);
      this.cityInfo = cities.data[0].countryDetails.states[0].cities;
      console.log(this.cityInfo);
    })
  }
  back() {
    this.router.navigateByUrl("/dashboard");

  }

  onclick() {
    this.OwnerLocation = {
      country: this.LocationForm.get('country').value,
      state: this.LocationForm.get('state').value,
      city: this.LocationForm.get('city').value,
      streetAddress: this.LocationForm.get('streetAddress').value,
      postalCode: this.LocationForm.get('postalCode').value,

    }
    this.location.addLocation(this.OwnerLocation).subscribe(
      (data:LocationModel) => {
        console.log(data);
      },
  (error: any) => console.log(error)

        )
            this.sessiontorageservice.set("OwnerLocation",this.OwnerLocation);
    this.router.navigateByUrl("/details");
console.log("LOCDATA");

    

  }


}
