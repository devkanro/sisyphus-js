import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 记录事件请求 */
export interface IRecordEventRequest {
    /** 加密的事件 */
    encryptedEvents?: string
}

export class RecordEventRequest extends $sisyphus.Message<IRecordEventRequest> implements IRecordEventRequest {
    encryptedEvents!: string
    get $reflection() {
        return RecordEventRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.event.v1.RecordEventRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): RecordEventRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.encryptedEvents = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): RecordEventRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IRecordEventRequest): RecordEventRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "encryptedEvents":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
RecordEventRequest.prototype.encryptedEvents = ""


/** 记录事件响应 */
export interface IRecordEventResponse {
}

export class RecordEventResponse extends $sisyphus.Message<IRecordEventResponse> implements IRecordEventResponse {
    get $reflection() {
        return RecordEventResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.event.v1.RecordEventResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): RecordEventResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): RecordEventResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IRecordEventResponse): RecordEventResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
            }
        }
        return result
    }
}

//Service: .bybutter.incubator.event.v1.EventApi