/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *   import { contextBridge } from 'electron'
 *
 *   contextBridge.exposeInMainWorld('myAPI', {
 *     doAThing: () => {}
 *   })
 */

import { contextBridge } from 'electron'
import ch from 'child_process'

function callSystem(command) {
    return new TextDecoder().decode(ch.execSync(command))
}

contextBridge.exposeInMainWorld('myApi', {
    pcInfo: () => {
        const systemName = callSystem('uname')
        const systemDescription = callSystem('uname -a')
        return {
            systemName,
            systemDescription
        }
    }
})