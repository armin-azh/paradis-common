import {Message} from "node-nats-streaming";
import {Listener} from "../../base-listener";
import {CustomerSubjects} from "./subjects";
import {GroupName} from "../../group-name";


export class CustomerCreatedListener extends Listener{
    subject:CustomerSubjects.Created = CustomerSubjects.Created;
    queueGroupName = GroupName.Users;

    onMessage(data: any, msg: Message) {
        // TODO: business logic

        msg.ack();
    }
}