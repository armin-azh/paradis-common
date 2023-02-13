import {Listener} from "../../base-listener";
import {Message} from "node-nats-streaming";
import {VendorSubjects} from "./subjects";
import {GroupName} from "../../group-name";

export class VendorUpdatedListener extends Listener{
    subject:VendorSubjects.Updated = VendorSubjects.Updated;
    queueGroupName = GroupName.Users;

    onMessage(data: any, msg: Message) {
        // TODO: business logic

        msg.ack();
    }
}