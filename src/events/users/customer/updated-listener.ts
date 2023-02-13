import {Listener} from "../../base-listener";
import {Message} from "node-nats-streaming";
import {CustomerSubjects} from "./subjects";
import {GroupName} from "../../group-name";

export class CustomerUpdatedListener extends Listener{
    subject:CustomerSubjects.Updated = CustomerSubjects.Updated;
    queueGroupName = GroupName.Users;

    onMessage(data: any, msg: Message) {
        // TODO: Business Logic
        msg.ack();
    }

}