import {Listener} from "../../base-listener";
import {Message} from "node-nats-streaming";
import {VendorSubjects} from "./subjects";
import {GroupName} from "../../group-name";
import {VendorDType} from "./types";

export class VendorCreatedListener extends Listener{
    subject:VendorSubjects.Created = VendorSubjects.Created;
    queueGroupName = GroupName.Users;

    onMessage(data: VendorDType, msg: Message) {
        // TODO: Write business logic

        msg.ack()
    }
}