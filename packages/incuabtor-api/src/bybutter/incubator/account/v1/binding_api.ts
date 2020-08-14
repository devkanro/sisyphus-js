import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"
import * as $binding from "./binding"
import * as $auth from "./auth"


/** 获取账户的所有绑定信息的 API 请求 */
export interface IListBindingsRequest {
    /** 需要查询绑定信息的账户资源名 */
    parent?: string
    /** 翻页大小 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
}

export class ListBindingsRequest extends $sisyphus.Message<IListBindingsRequest> implements IListBindingsRequest {
    parent!: string
    pageSize!: number
    pageToken!: string
    get $reflection() {
        return ListBindingsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.ListBindingsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListBindingsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.parent = reader.string()
                    break
                case 2:
                    result.pageSize = reader.int32()
                    break
                case 3:
                    result.pageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListBindingsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListBindingsRequest): ListBindingsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("parent") && properties.parent !== undefined) result.parent = properties.parent
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        return result
    }
}
ListBindingsRequest.prototype.parent = ListBindingsRequest.reflection.fieldsById[1].defaultValue
ListBindingsRequest.prototype.pageSize = ListBindingsRequest.reflection.fieldsById[2].defaultValue
ListBindingsRequest.prototype.pageToken = ListBindingsRequest.reflection.fieldsById[3].defaultValue


/** 获取账户的所有绑定信息的 API 响应 */
export interface IListBindingsResponse {
    /** 账户的绑定信息 */
    bindings?: ($binding.IAccountBinding[] | null)
    /** 下一页翻页信息 */
    nextPageToken?: string
}

export class ListBindingsResponse extends $sisyphus.Message<IListBindingsResponse> implements IListBindingsResponse {
    bindings!: ($binding.IAccountBinding[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListBindingsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.ListBindingsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListBindingsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.bindings) result.bindings = []
                    result.bindings.push($binding.AccountBinding.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListBindingsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListBindingsResponse): ListBindingsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("bindings") && properties.bindings != null) result.bindings = properties.bindings.map(it => $binding.AccountBinding.create(it))
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListBindingsResponse.prototype.bindings = ListBindingsResponse.reflection.fieldsById[1].defaultValue
ListBindingsResponse.prototype.nextPageToken = ListBindingsResponse.reflection.fieldsById[2].defaultValue


/** 修改用户绑定信息的 API 请求 */
export interface IChangeBindingRequest {
    /** 需要修改的绑定 */
    binding?: ($binding.IAccountBinding | null)
    /** 原始手机号的验证信息 */
    mobileAccountCredential?: ($auth.IMobileCredential | null)
    /** 新手机号的验证信息 */
    mobileBindingCredential?: ($auth.IMobileCredential | null)
    /** 更换绑定信息需要的账户凭证，确保账户属于当前用户 */
    AccountCredential?: string
    /** 更换绑定信息需要的绑定目标凭证,确保绑定目标属于当前用户 */
    BindingCredential?: string
}

export class ChangeBindingRequest extends $sisyphus.Message<IChangeBindingRequest> implements IChangeBindingRequest {
    binding!: ($binding.IAccountBinding | null)
    mobileAccountCredential!: ($auth.IMobileCredential | null)
    mobileBindingCredential!: ($auth.IMobileCredential | null)
    AccountCredential?: string

    BindingCredential?: string

    get $reflection() {
        return ChangeBindingRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.ChangeBindingRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ChangeBindingRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.binding = $binding.AccountBinding.decodeDelimited(reader)
                    break
                case 11:
                    result.mobileAccountCredential = $auth.MobileCredential.decodeDelimited(reader)
                    break
                case 21:
                    result.mobileBindingCredential = $auth.MobileCredential.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ChangeBindingRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IChangeBindingRequest): ChangeBindingRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("binding") && properties.binding != null) result.binding = $binding.AccountBinding.create(properties.binding)
        if(properties.hasOwnProperty("mobileAccountCredential") && properties.mobileAccountCredential != null) result.mobileAccountCredential = $auth.MobileCredential.create(properties.mobileAccountCredential)
        if(properties.hasOwnProperty("mobileBindingCredential") && properties.mobileBindingCredential != null) result.mobileBindingCredential = $auth.MobileCredential.create(properties.mobileBindingCredential)
        return result
    }
}
Object.defineProperty(ChangeBindingRequest.prototype, "AccountCredential", $sisyphus.oneOfProperty("mobileAccountCredential"))
Object.defineProperty(ChangeBindingRequest.prototype, "BindingCredential", $sisyphus.oneOfProperty("mobileBindingCredential"))
ChangeBindingRequest.prototype.binding = ChangeBindingRequest.reflection.fieldsById[1].defaultValue
ChangeBindingRequest.prototype.mobileAccountCredential = ChangeBindingRequest.reflection.fieldsById[11].defaultValue
ChangeBindingRequest.prototype.mobileBindingCredential = ChangeBindingRequest.reflection.fieldsById[21].defaultValue


/** 修改用户绑定信息的 API 响应 */
export interface IChangeBindingResponse {
    /** 修改后的用户绑定信息 */
    binding?: ($binding.IAccountBinding | null)
}

export class ChangeBindingResponse extends $sisyphus.Message<IChangeBindingResponse> implements IChangeBindingResponse {
    binding!: ($binding.IAccountBinding | null)
    get $reflection() {
        return ChangeBindingResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.ChangeBindingResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ChangeBindingResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.binding = $binding.AccountBinding.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ChangeBindingResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IChangeBindingResponse): ChangeBindingResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("binding") && properties.binding != null) result.binding = $binding.AccountBinding.create(properties.binding)
        return result
    }
}
ChangeBindingResponse.prototype.binding = ChangeBindingResponse.reflection.fieldsById[1].defaultValue

//Service: .bybutter.incubator.account.v1.BindingApi

export class BindingApi {
}