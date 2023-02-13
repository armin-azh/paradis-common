import {Listener} from "../../base-listener";
import {Message} from "node-nats-streaming";
import {VendorSubjects} from "./subjects";
import {GroupName} from "../../group-name";

export class VendorCreatedListener extends Listener{
    subject:VendorSubjects.Created = VendorSubjects.Created;
    queueGroupName = GroupName.Users;

    onMessage(data: any, msg: Message) {
        // TODO: Write business logic

        msg.ack()
    }
}