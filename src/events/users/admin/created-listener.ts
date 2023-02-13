import {Listener} from "../../base-listener";
import {Message} from "node-nats-streaming";
import {AdminSubjects} from "./subjects";
import {GroupName} from "../../group-name";

export class AdminCreatedListener extends Listener{
    subject:AdminSubjects.Created = AdminSubjects.Created;
    queueGroupName = GroupName.Users;

    onMessage(data: any, msg: Message) {
        // TODO: business logic

        msg.ack();
    }
}