import {Publisher} from "../../base-publisher";
import {AdminSubjects} from "./subjects";

export class AdminCreatedPublisher extends Publisher{
    subject:AdminSubjects.Created = AdminSubjects.Created;
}