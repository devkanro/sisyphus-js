import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $duration from "../../../../google/protobuf/duration"


/** 语音识别厂商 */
export enum DictationVendor {
    /** 未指定 */
    DICTATION_VENDOR_UNSPECIFIED = 0,
    /** 阿里 */
    DICTATION_VENDOR_ALI = 1,
    /** 网易 */
    DICTATION_VENDOR_NETEASE = 2,
}

export namespace DictationVendor {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.bread.v1.DictationVendor")
}

/** 语音识别任务状态 */
export enum DictationState {
    /** 未指定 */
    DICTATION_STATE_UNSPECIFIED = 0,
    /** 成功 */
    DICTATION_STATE_SUCCESS = 1,
    /** 队列中 */
    DICTATION_STATE_QUEUING = 2,
    /** 失败 */
    DICTATION_STATE_ERROR = 3,
}

export namespace DictationState {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.bread.v1.DictationState")
}

/** 空的Meta date */
export interface IDictationOperationMetadata {
}

export class DictationOperationMetadata extends $sisyphus.Message<IDictationOperationMetadata> implements IDictationOperationMetadata {
    get $reflection() {
        return DictationOperationMetadata.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationOperationMetadata")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): DictationOperationMetadata {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): DictationOperationMetadata {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IDictationOperationMetadata): DictationOperationMetadata {
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


/** 语音识别任务 */
export interface IDictationTask {
    /** 语音识别任务 users/{user}/dictationTasks/{task} */
    name?: string
    /** 语音识别任务key */
    audioFileKey?: string
    /** 要识别的多媒体文件url */
    audioFileUri?: string
    /** 时长 */
    audioDuration?: ($duration.IDuration | null)
    /** 语音识别的句子相关 */
    sentences?: (IDictationSentence[] | null)
    /** 语音识别任务状态 */
    state?: DictationState
    /** 语音识别任务厂商 */
    vendor?: DictationVendor
}

export class DictationTask extends $sisyphus.Message<IDictationTask> implements IDictationTask {
    name!: string
    audioFileKey!: string
    audioFileUri!: string
    audioDuration!: ($duration.IDuration | null)
    sentences!: (IDictationSentence[] | null)
    state!: DictationState
    vendor!: DictationVendor
    get $reflection() {
        return DictationTask.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationTask")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): DictationTask {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.audioFileKey = reader.string()
                    break
                case 3:
                    result.audioFileUri = reader.string()
                    break
                case 4:
                    result.audioDuration = $duration.Duration.decodeDelimited(reader)
                    break
                case 5:
                    if (!result.sentences) result.sentences = []
                    result.sentences.push(DictationSentence.decodeDelimited(reader))
                    break
                case 6:
                    result.state = reader.uint32()
                    break
                case 7:
                    result.vendor = reader.uint32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): DictationTask {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IDictationTask): DictationTask {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "audioFileKey":
                    result[key] = String(properties[key])
                    break
                case "audioFileUri":
                    result[key] = String(properties[key])
                    break
                case "audioDuration":
                    result[key] = $duration.Duration.create(properties[key])
                    break
                case "sentences":
                    result[key] = DictationSentence.create(properties[key])
                    break
                case "state":
                    result[key] = typeof properties[key] === "number" ? properties[key] : DictationState[properties[key]]
                    break
                case "vendor":
                    result[key] = typeof properties[key] === "number" ? properties[key] : DictationVendor[properties[key]]
                    break
            }
        }
        return result
    }
}
DictationTask.prototype.name = ""
DictationTask.prototype.audioFileKey = ""
DictationTask.prototype.audioFileUri = ""
DictationTask.prototype.audioDuration = null
DictationTask.prototype.sentences = null
DictationTask.prototype.state = DictationState.DICTATION_STATE_UNSPECIFIED
DictationTask.prototype.vendor = DictationVendor.DICTATION_VENDOR_UNSPECIFIED


/** 语音识别出的句子 */
export interface IDictationSentence {
    /** 开始时间 */
    beginOffset?: ($duration.IDuration | null)
    /** 结束时间 */
    endOffset?: ($duration.IDuration | null)
    /** 内容 */
    content?: string
    /** 所有的词 */
    words?: (IDictationWord[] | null)
}

export class DictationSentence extends $sisyphus.Message<IDictationSentence> implements IDictationSentence {
    beginOffset!: ($duration.IDuration | null)
    endOffset!: ($duration.IDuration | null)
    content!: string
    words!: (IDictationWord[] | null)
    get $reflection() {
        return DictationSentence.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationSentence")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): DictationSentence {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.beginOffset = $duration.Duration.decodeDelimited(reader)
                    break
                case 2:
                    result.endOffset = $duration.Duration.decodeDelimited(reader)
                    break
                case 3:
                    result.content = reader.string()
                    break
                case 4:
                    if (!result.words) result.words = []
                    result.words.push(DictationWord.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): DictationSentence {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IDictationSentence): DictationSentence {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "beginOffset":
                    result[key] = $duration.Duration.create(properties[key])
                    break
                case "endOffset":
                    result[key] = $duration.Duration.create(properties[key])
                    break
                case "content":
                    result[key] = String(properties[key])
                    break
                case "words":
                    result[key] = DictationWord.create(properties[key])
                    break
            }
        }
        return result
    }
}
DictationSentence.prototype.beginOffset = null
DictationSentence.prototype.endOffset = null
DictationSentence.prototype.content = ""
DictationSentence.prototype.words = null


/** 语音识别的词 */
export interface IDictationWord {
    /** 开始时间 */
    beginOffset?: ($duration.IDuration | null)
    /** 结束时间 */
    endOffset?: ($duration.IDuration | null)
    /** 内容 */
    content?: string
    /** 类型 */
    type?: DictationWord.Type
}

export class DictationWord extends $sisyphus.Message<IDictationWord> implements IDictationWord {
    beginOffset!: ($duration.IDuration | null)
    endOffset!: ($duration.IDuration | null)
    content!: string
    type!: DictationWord.Type
    get $reflection() {
        return DictationWord.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationWord")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): DictationWord {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.beginOffset = $duration.Duration.decodeDelimited(reader)
                    break
                case 2:
                    result.endOffset = $duration.Duration.decodeDelimited(reader)
                    break
                case 3:
                    result.content = reader.string()
                    break
                case 4:
                    result.type = reader.uint32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): DictationWord {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IDictationWord): DictationWord {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "beginOffset":
                    result[key] = $duration.Duration.create(properties[key])
                    break
                case "endOffset":
                    result[key] = $duration.Duration.create(properties[key])
                    break
                case "content":
                    result[key] = String(properties[key])
                    break
                case "type":
                    result[key] = typeof properties[key] === "number" ? properties[key] : DictationWord.Type[properties[key]]
                    break
            }
        }
        return result
    }
}
DictationWord.prototype.beginOffset = null
DictationWord.prototype.endOffset = null
DictationWord.prototype.content = ""
DictationWord.prototype.type = DictationWord.Type.TYPE_UNSPECIFIED

export namespace DictationWord {

    /** 词的类型 */
    export enum Type {
        /** 未指定 */
        TYPE_UNSPECIFIED = 0,
        /** 词 */
        TYPE_WORD = 1,
        /** 标点符号 */
        TYPE_PUNCTUATION = 2,
    }

    export namespace Type {
        export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.bread.v1.DictationWord.Type")
    }
}