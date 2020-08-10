import {Enum, Namespace, Type} from "protobufjs";
import {writeToFile} from "../utils";
import pathModule from "path"
import {snakeCase} from "change-case"
import {generate as gEnum} from "./enum"
import {generate as type} from "./type"

export async function generate(out: string, namespace: Namespace) {
    await generateReflectionTs(out, namespace)
    await generateIndexTs(out, namespace)
    for (let reflection of namespace.nestedArray) {
        switch (true) {
            case reflection instanceof Enum:
                await gEnum(out, <Enum>reflection)
                break
            case reflection instanceof Type:
                await type(out, <Type>reflection)
                break
            case reflection instanceof Namespace:
                await generate(pathModule.join(out, reflection.name), <Namespace>reflection)
                break
        }
    }
}

async function generateReflectionTs(out: string, namespace: Namespace) {
    const file =
        `// Generated by sisyphus web
import {Namespace} from "protobufjs"
import parent from "../_reflection";

export default <Namespace>parent.get("${namespace.name}")\n`
    await writeToFile(out, "_reflection.ts", file)
}

async function generateIndexTs(out: string, namespace: Namespace) {
    let file =
        `// Generated by sisyphus web
import $reflection from "./_reflection"

export {$reflection}\n`
    for (let reflection of namespace.nestedArray) {
        switch (true) {
            case reflection instanceof Enum:
                file += `export * from "./${snakeCase(reflection.name)}"\n`
                break
            case reflection instanceof Type:
                file += `export * from "./${snakeCase(reflection.name)}"\n`
                break
            case reflection instanceof Namespace:
                file += `export * as ${reflection.name} from "./${reflection.name}"\n`
                break
        }
    }
    await writeToFile(out, "index.ts", file)
}