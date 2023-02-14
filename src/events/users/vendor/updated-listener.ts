import {Listener} from "../../base-listener";
import {Message} from "node-nats-streaming";
import {VendorSubjects} from "./subjects";
import {GroupName} from "../../group-name";
import {VendorDType} from "./types";

export class VendorUpdatedListener extends Listener{
    subject:VendorSubjects.Updated = VendorSubjects.Updated;
    queueGroupName = GroupName.Users;

    onMessage(data: VendorDType['data'], msg: Message) {
        // TODO: business logic

        msg.ack();
    }
}