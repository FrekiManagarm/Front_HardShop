export default interface User {
    id: number
    firstname: string | null
    lastname: string | null
    email: string
    isAdmin: boolean
    avatar_url: string
}