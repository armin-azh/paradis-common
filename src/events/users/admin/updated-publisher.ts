import {Publisher} from "../../base-publisher";
import {AdminSubjects} from "./subjects";

export class AdminUpdatedPublisher extends Publisher{
    subject:AdminSubjects.Updated = AdminSubjects.Updated;
}