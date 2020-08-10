import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $any from "../protobuf/any"
import * as $reflection from "../../_reflection"


/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 * 
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface IStatus {
    /** The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code]. */
    code?: number
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
     */
    message?: string
    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: ($any.IAny[] | null)
}

export class Status extends $sisyphus.Message<IStatus> implements IStatus {
    code!: number
    message!: string
    details!: ($any.IAny[] | null)
    get $reflection() {
        return Status.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.rpc.Status")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Status {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.code = reader.int32()
                    break
                case 2:
                    result.message = reader.string()
                    break
                case 3:
                    if (!result.details) result.details = []
                    result.details.push($any.Any.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Status {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IStatus): Status {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "code":
                    result[key] = Number(properties[key])
                    break
                case "message":
                    result[key] = String(properties[key])
                    break
                case "details":
                    result[key] = $any.Any.create(properties[key])
                    break
            }
        }
        return result
    }
}
Status.prototype.code = 0
Status.prototype.message = ""
Status.prototype.details = null