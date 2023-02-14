import {Listener} from "../../base-listener";
import {Message} from "node-nats-streaming";
import {CustomerSubjects} from "./subjects";
import {GroupName} from "../../group-name";
import {CustomerDType} from "./types";

export class CustomerUpdatedListener extends Listener{
    subject:CustomerSubjects.Updated = CustomerSubjects.Updated;
    queueGroupName = GroupName.Users;

    onMessage(data: CustomerDType['data'], msg: Message) {
        // TODO: Business Logic
        msg.ack();
    }

}