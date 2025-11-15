export interface IReguster {
    email: string
    password: string
    confirmPassword: string
    username: string
    phone: string
}

export interface IUserResponse {
    id: string
    username: string
    phone: string
    password: string
    account_type: number
    email: string
    random_id?: string
}