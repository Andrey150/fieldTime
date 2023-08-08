import {IUser} from "../../api/users/userApi";

export function zfill(str: string|number, length = 2) {
    let new_str = String(str)
    while (new_str.length < length) new_str = '0' + new_str
    return new_str
}

export function replaceAll(str: string, what: string, to: string) {
    while (str.includes(what)) str = str.replace(what, to)
    return str
}

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatPhone(str: string| number | null): string {
    if (!str) return ''
    let phone = String(str)
    if (phone[0] === '+') phone = phone.slice(1, phone.length)
    phone = replaceAll(phone, ' ', '')
    phone = replaceAll(phone, '(', '')
    phone = replaceAll(phone, ')', '')
    if (phone.length === 11 && +phone) {
        if (phone[0] === '8') phone = '7' + phone.slice(1, phone.length)
    }
    return phone
}

export function isNumber(str: string) {
    // @ts-ignore
    return !isNaN(parseFloat(str)) && !isNaN(str - 0)
}

export function getUserFio(user: IUser): string {
    if (!user) return ''
    return `${user.last_name} ${user.first_name}`
}
