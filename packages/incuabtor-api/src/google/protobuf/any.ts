import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"
import * as $protobuf from "protobufjs"


/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 * 
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 * 
 * Example 1: Pack and unpack a message in C++.
 * 
 * Foo foo = ...;
 * Any any;
 * any.PackFrom(foo);
 * ...
 * if (any.UnpackTo(&foo)) {
 * ...
 * }
 * 
 * Example 2: Pack and unpack a message in Java.
 * 
 * Foo foo = ...;
 * Any any = Any.pack(foo);
 * ...
 * if (any.is(Foo.class)) {
 * foo = any.unpack(Foo.class);
 * }
 * 
 * Example 3: Pack and unpack a message in Python.
 * 
 * foo = Foo(...)
 * any = Any()
 * any.Pack(foo)
 * ...
 * if any.Is(Foo.DESCRIPTOR):
 * any.Unpack(foo)
 * ...
 * 
 * Example 4: Pack and unpack a message in Go
 * 
 * foo := &pb.Foo{...}
 * any, err := ptypes.MarshalAny(foo)
 * ...
 * foo := &pb.Foo{}
 * if err := ptypes.UnmarshalAny(any, foo); err != nil {
 * ...
 * }
 * 
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 * 
 * 
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 * 
 * package google.profile;
 * message Person {
 * string first_name = 1;
 * string last_name = 2;
 * }
 * 
 * {
 * "@type": "type.googleapis.com/google.profile.Person",
 * "firstName": <string>,
 * "lastName": <string>
 * }
 * 
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 * 
 * {
 * "@type": "type.googleapis.com/google.protobuf.Duration",
 * "value": "1.212s"
 * }
 */
export interface IAny extends $sisyphus.IAny {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     * 
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     * 
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     * value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     * URL, or have them precompiled into a binary to avoid any
     * lookup. Therefore, binary compatibility needs to be preserved
     * on changes to types. (Use versioned type names to manage
     * breaking changes.)
     * 
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     * 
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    typeUrl?: string
    /** Must be a valid serialized protocol buffer of the above specified type. */
    value?: Uint8Array
}

export class Any extends $sisyphus.Message<IAny> implements IAny {
    typeUrl!: string
    value!: Uint8Array
    get $reflection() {
        return Any.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.Any")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Any {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.typeUrl = reader.string()
                    break
                case 2:
                    result.value = reader.bytes()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Any {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IAny): Any {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("typeUrl") && properties.typeUrl !== undefined) result.typeUrl = properties.typeUrl
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
Any.prototype.typeUrl = Any.reflection.fieldsById[1].defaultValue
Any.prototype.value = Any.reflection.fieldsById[2].defaultValue