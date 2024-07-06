// /users/ID'
export function buildRoutePath(path) {
    const routeParametesRegex = /:([a-zA-Z]+)/g

    console.log(Array.from(path.matchAll(routeParametesRegex)))
}