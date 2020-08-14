import {Method, Service} from "protobufjs"
import {Message} from "./message"

export interface IRpcImpl {
    (desc: Method, message: Message, metadata?: { [k: string]: string }): Promise<Message>
}

export abstract class Client {
    abstract readonly $reflection: Service
    private readonly $impl: IRpcImpl

    protected constructor(impl: IRpcImpl) {
        this.$impl = impl
    }

    async $call(desc: Method, message: Message, metadata?: { [k: string]: string }): Promise<Message> {
        return await this.$impl(desc, message, metadata)
    }
}