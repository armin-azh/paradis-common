import {Publisher} from "../../base-publisher";
import {CustomerSubjects} from "./subjects";

export class CustomerUpdatedPublisher extends Publisher{
    subject:CustomerSubjects.Updated = CustomerSubjects.Updated;
}