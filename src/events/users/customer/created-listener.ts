import {Message} from "node-nats-streaming";
import {Listener} from "../../base-listener";
import {CustomerSubjects} from "./subjects";
import {GroupName} from "../../group-name";
import {CustomerDType} from "./types";


export class CustomerCreatedListener extends Listener{
    subject:CustomerSubjects.Created = CustomerSubjects.Created;
    queueGroupName = GroupName.Users;

    onMessage(data: CustomerDType, msg: Message) {
        // TODO: business logic

        msg.ack();
    }
}