import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


/** 账户绑定信息 */
export interface IAccountBinding {
    /** 绑定信息的账户资源名称 */
    account?: string
    /** 绑定的手机号 */
    mobile?: (AccountBinding.IMobile | null)
    /** 绑定的帐号码 */
    identification?: (AccountBinding.IIdentification | null)
    Target?: string
}

export class AccountBinding extends $sisyphus.Message<IAccountBinding> implements IAccountBinding {
    account!: string
    mobile!: (AccountBinding.IMobile | null)
    identification!: (AccountBinding.IIdentification | null)
    Target?: string

    get $reflection() {
        return AccountBinding.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): AccountBinding {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.account = reader.string()
                    break
                case 11:
                    result.mobile = AccountBinding.Mobile.decodeDelimited(reader)
                    break
                case 12:
                    result.identification = AccountBinding.Identification.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): AccountBinding {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IAccountBinding): AccountBinding {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("account") && properties.account !== undefined) result.account = properties.account
        if(properties.hasOwnProperty("mobile") && properties.mobile != null) result.mobile = AccountBinding.Mobile.create(properties.mobile)
        if(properties.hasOwnProperty("identification") && properties.identification != null) result.identification = AccountBinding.Identification.create(properties.identification)
        return result
    }
}
Object.defineProperty(AccountBinding.prototype, "Target", $sisyphus.oneOfProperty("mobile", "identification"))
AccountBinding.prototype.account = AccountBinding.reflection.fieldsById[1].defaultValue
AccountBinding.prototype.mobile = AccountBinding.reflection.fieldsById[11].defaultValue
AccountBinding.prototype.identification = AccountBinding.reflection.fieldsById[12].defaultValue

export namespace AccountBinding {

    /** 手机号绑定信息 */
    export interface IMobile {
        /** 区域代号，例如 86 */
        regionCode?: string
        /** 手机号 */
        phoneNumber?: string
    }

    export class Mobile extends $sisyphus.Message<IMobile> implements IMobile {
        regionCode!: string
        phoneNumber!: string
        get $reflection() {
            return Mobile.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding.Mobile")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Mobile {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        result.regionCode = reader.string()
                        break
                    case 2:
                        result.phoneNumber = reader.string()
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Mobile {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: IMobile): Mobile {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            if(properties.hasOwnProperty("regionCode") && properties.regionCode !== undefined) result.regionCode = properties.regionCode
            if(properties.hasOwnProperty("phoneNumber") && properties.phoneNumber !== undefined) result.phoneNumber = properties.phoneNumber
            return result
        }
    }
    Mobile.prototype.regionCode = Mobile.reflection.fieldsById[1].defaultValue
    Mobile.prototype.phoneNumber = Mobile.reflection.fieldsById[2].defaultValue


    /** 帐号码绑定信息 */
    export interface IIdentification {
        /** 帐号码 */
        identification?: string
    }

    export class Identification extends $sisyphus.Message<IIdentification> implements IIdentification {
        identification!: string
        get $reflection() {
            return Identification.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding.Identification")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Identification {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        result.identification = reader.string()
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Identification {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: IIdentification): Identification {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            if(properties.hasOwnProperty("identification") && properties.identification !== undefined) result.identification = properties.identification
            return result
        }
    }
    Identification.prototype.identification = Identification.reflection.fieldsById[1].defaultValue
}