import {Publisher} from "../../base-publisher";
import {CustomerSubjects} from "./subjects";

export class CustomerCreatedPublisher extends Publisher{
    subject:CustomerSubjects.Created = CustomerSubjects.Created;
}