import {Publisher} from "../../base-publisher";
import {VendorSubjects} from "./subjects";


export class VendorCreatedPublisher extends Publisher{
    subject:VendorSubjects.Created = VendorSubjects.Created;
}