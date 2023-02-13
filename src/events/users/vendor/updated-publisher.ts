import {Publisher} from "../../base-publisher";
import {VendorSubjects} from "./subjects";


export class VendorUpdatedPublisher extends Publisher{
    subject:VendorSubjects.Updated = VendorSubjects.Updated;
}