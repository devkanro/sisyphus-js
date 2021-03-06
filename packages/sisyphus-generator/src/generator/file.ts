import {Enum, Field, ReflectionObject, Root, Service, Type} from "protobufjs"
import pathModule from "path"
import {TypeSpec} from "./type";
import {GeneratorSpec} from "./generator";
import {ServiceSpec} from "./service";
import {EnumSpec} from "./enum";
import {writeToFile} from "../utils";
import {CodeBuilder} from "../string";
import {TypescriptFile} from "./typescript";

export class FileSpec extends TypescriptFile implements GeneratorSpec {
    private _elements: ReflectionObject[] = []
    private _root: Root

    constructor(root: Root) {
        super()
        this._root = root
    }

    get parent(): undefined {
        return undefined
    }

    get file(): FileSpec {
        return this
    }

    get filename(): string {
        if (this._elements.length == 0) return ""
        const filename = this._elements[0].filename
        return filename ? filename : ""
    }

    get output(): string {
        const protoFile = this.filename
        if (!protoFile) return ""
        return pathModule.join(pathModule.dirname(protoFile), pathModule.basename(protoFile, pathModule.extname(protoFile)) + '.ts')
    }

    append(...obj: ReflectionObject[]) {
        this._elements.push(...obj)
    }

    importProtobuf(): string {
        return this.importLib("protobufjs", "protobuf")
    }

    importSisyphus(): string {
        return this.importLib("@sisyphus.js/core", "sisyphus")
    }

    importReflection(): string {
        return this.importFile("_reflection.ts", "reflection")
    }

    typename(type: Type | Enum): string {
        const importName = this.importFile(type.filename)
        let typename: string
        if (type instanceof Enum) {
            typename = type.name
        } else {
            typename = `I${type.name}`
        }

        let parent = type.parent
        while (parent instanceof Type) {
            typename = `${parent.name}.${typename}`
            parent = parent.parent
        }

        if (importName.length == 0) {
            return typename
        } else {
            return `$${importName}.${typename}`
        }
    }

    classname(type: Type | Enum): string {
        const importName = this.importFile(type.filename)
        let typename = type.name

        let parent = type.parent
        while (parent instanceof Type) {
            typename = `${parent.name}.${typename}`
            parent = parent.parent
        }

        if (importName.length == 0) {
            return typename
        } else {
            return `$${importName}.${typename}`
        }
    }

    async generate(out: string) {
        if (this.filename == null) {
            return
        }

        let codeBuilder = new CodeBuilder()
        let importBuilder = new CodeBuilder()

        for (let element of this._elements) {
            if (element instanceof Enum) {
                const type = new EnumSpec(this, element)
                type.generate(codeBuilder)
            }
        }
        for (let element of this._elements) {
            if (element instanceof Type) {
                const type = new TypeSpec(this, element)
                type.generate(codeBuilder)
            }
        }
        for (let element of this._elements) {
            if (element instanceof Service) {
                const type = new ServiceSpec(this, element)
                type.generate(codeBuilder)
            }
        }
        for (let element of this._elements) {
            if (element instanceof Field) {
                codeBuilder.appendLn(`export let ${element.name} = $${this.importReflection()}.root.lookup("${element.fullName}")`).ln()
            }
        }

        this.generateImport(importBuilder)

        let result = ""
        if (importBuilder.build().length > 0) {
            result += importBuilder.build()
            result += "\n\n"
        }

        result += codeBuilder.build()
        await writeToFile(out, this.output, result)
    }
}

export class IndexFileSpec extends TypescriptFile {
    readonly filename: string = "index.ts"
}