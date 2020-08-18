import { LocationModel } from './location.model';
import { DetailsModel } from './details.model';
import { PaymentDetailsModel } from './paymentDetails.model';

export class PublishListingModel {
    
     public LocationModel: LocationModel;
    public DetailsModel: DetailsModel;
    public PaymentDetailsModel: PaymentDetailsModel;





    "ownerId": string;
    "correlationid": string;
    "location":LocationModel;
    "details":DetailsModel;
    "paymentDetails":PaymentDetailsModel;



}
