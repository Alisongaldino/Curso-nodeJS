// /users/ID'
export function buildRoutePath(path) {
    const routeParametesRegex = /:([a-zA-Z]+)/g
    const pathWithParms = path.replaceAll(routeParametesRegex, '(?<$1>[a-z0-9\-_]+)')


    const pathRegex =new RegExp(`^${pathWithParms}(?<query>\\?(.*))?$`)
    
    return pathRegex
}