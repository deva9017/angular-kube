import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentdetailsService } from 'src/app/OwnerModule/services//paymentdetails.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PaymentDetailsModel } from 'src/app/OwnerModule/models/paymentdetails.model';
import { SessionStorageService } from 'src/app/OwnerModule/services/sessionstorage.service';


@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {


  PaymentdetailsForm;
  OwnerPaymentdetails ;
  paymentdetailsmodel: PaymentDetailsModel[] = [];


  bankInfo= [];
  bankbranchInfo: any;
  // branchIFSC: any;
  bankbranchIfscInfo: any;
  selBankName;
  // paymentdetails: any;


  constructor(
    private router: Router,
    private paymentDetails: PaymentdetailsService,
    private _fb: FormBuilder,
    private sessionstorageservice: SessionStorageService

    ) { }

  ngOnInit(): void {
    
    this.OwnerPaymentdetails = JSON.parse(JSON.stringify(window.sessionStorage.getItem('OwnerPaymentdetails')));
    this.PaymentdetailsForm = this._fb.group({
      accountNumber: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.accountNumber:'', Validators.pattern('[0-9 -()+]+$')),
      accountName: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.accountName:'', Validators.required),
      accountType: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.accountType:'', Validators.required),
      bank: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.bank:'', Validators.required),
      branch: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.branch:'',Validators.required),
      ifsc: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.ifsc:'', Validators.required),
      panNumber: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.panNumber:'', Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$')),
      Tandc: new FormControl(this.OwnerPaymentdetails?this.OwnerPaymentdetails.Tandc:'', Validators.required),


    });

    this.getBankDetails();
  }
  getBankDetails() {
    this.paymentDetails.getBanks().subscribe(data => {
      console.log(data);
      this.bankInfo = data.data;
      console.log(this.bankInfo);
    })
  } 

  back() {
    this.router.navigateByUrl("/payment")
  } 
  getBranches(value) {
    this.selBankName=value
   this.paymentDetails.getBranches(value).subscribe(branch =>{
     console.log(branch.data)
     this.bankbranchInfo=branch.data;
    }) 
     }
   getIFSC(value) {
     console.log(this.selBankName,value)
     this.paymentDetails.getBranchIfsc(this.selBankName,value).subscribe(branch =>{
       console.log(branch.data)
       this.bankbranchIfscInfo=branch.data;
      
     }) 
   
     }


  onclick() {
    this.OwnerPaymentdetails = {
      accountNumber: this.PaymentdetailsForm.get('accountNumber').value,
      accountName: this.PaymentdetailsForm.get('accountName').value,
      accountType: this.PaymentdetailsForm.get('accountType').value,
      bank: this.PaymentdetailsForm.get('bank').value,
      branch: this.PaymentdetailsForm.get('branch').value,
      ifsc: this.PaymentdetailsForm.get('ifsc').value,
      panNumber: this.PaymentdetailsForm.get('panNumber').value,
      Tandc: this.PaymentdetailsForm.get('Tandc').value,



    }
    this.sessionstorageservice.set("OwnerPaymentdetails", this.OwnerPaymentdetails);
    

 

  
  
  this.paymentDetails.addPaymentDetails(this.OwnerPaymentdetails).subscribe(
    (data: PaymentDetailsModel) => {
      console.log(data);
      
      this.sessionstorageservice.set("OwnerPaymentdetails",this.OwnerPaymentdetails);
    },
    (error: any) => console.log(error)
  )
  // this.router.navigateByUrl("/photos");
  console.log("PAYDET22");

   this.router.navigateByUrl("/publishlisting")
  }
}