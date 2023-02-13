import {Message} from "node-nats-streaming";
import {Listener} from "../../base-listener";
import {AdminSubjects} from "./subjects";
import {GroupName} from "../../group-name";


export class AdminUpdatedListener extends Listener{
    subject:AdminSubjects.Updated = AdminSubjects.Updated;
    queueGroupName = GroupName.Users;

    onMessage(data: any, msg: Message) {
        // TODO: Business logic
        msg.ack();
    }
}