import {zfill} from "./text";

export class EDate extends Date {

    constructor(...options: (string | number | Date)[]) {
        if (typeof options[0] === 'string' && options[0].length < 9) super('2000-01-01T' + options[0])
        else {
            // @ts-ignore
            super(...options);
        }
    }

    copy() {
        return new EDate(
            this.getFullYear(),
            this.getMonth(),
            this.getDate(),
            this.getHours(),
            this.getMinutes(),
            this.getSeconds(),
            this.getMilliseconds()
        )
    }

    isoDate() {
        let month = String(this.getMonth() + 1)
        let day = String(this.getDate())
        return this.getFullYear() + '-' + zfill(month) + '-' + zfill(day)
    }

    isoTime(seconds = true) {
        if (seconds) return zfill(this.getHours()) + ':' + zfill(this.getMinutes()) + ':' + zfill(this.getSeconds())
        return zfill(this.getHours()) + ':' + zfill(this.getMinutes())
    }

    isoDatetime() {
        return this.isoDate() + ' ' + this.isoTime()
    }

    ruDate(full = true) {
        let month = String(this.getMonth() + 1)
        let day = String(this.getDate())
        if (full) return zfill(day) + '.' + zfill(month) + '.' + this.getFullYear()
        return zfill(day) + '.' + zfill(month)
    }

    ruDateTime(full = true) {
        return this.ruDate(full) + ' ' + this.isoTime(full)
    }

    weekDay(short = false) {
        if (short) {
            switch (this.getDay()) {
                case 1:
                    return 'ПН'
                case 2:
                    return 'ВТ'
                case 3:
                    return 'СР'
                case 4:
                    return 'ЧТ'
                case 5:
                    return 'ПТ'
                case 6:
                    return 'СБ'
                case 0:
                    return 'ВС'
            }
        }
        switch (this.getDay()) {
            case 1:
                return 'понедельник'
            case 2:
                return 'вторник'
            case 3:
                return 'среда'
            case 4:
                return 'четверг'
            case 5:
                return 'пятница'
            case 6:
                return 'суббота'
            case 0:
                return 'воскресенье'
        }
    }

    static weekdayNames(short: boolean = false) {
        if (short) return ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
        return ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
    }

    change({days = 0, hours = 0, minutes = 0, seconds = 0}) {
        let delta = days * 86400000 || 0
        delta += hours * 3600000 || 0
        delta += minutes * 60000 || 0
        delta += seconds * 1000 || 0
        this.setTime(this.getTime() + delta)
        return this
    }

    monthName(): string {
        switch (this.getMonth()) {
            case 0:
                return 'январь'
            case 1:
                return 'февраль'
            case 2:
                return 'март'
            case 3:
                return 'апрель'
            case 4:
                return 'май'
            case 5:
                return 'июнь'
            case 6:
                return 'июль'
            case 7:
                return 'август'
            case 8:
                return 'сентябрь'
            case 9:
                return 'октябрь'
            case 10:
                return 'ноябрь'
            case 11:
                return 'декабрь'
            default:
                return 'неизвестный месяц'
        }
    }

    daysInMonth() {
        const date = this.copy()
        date.setDate(33)
        return date.getDate()
    }

    static dateDiff(first: number, second: number) {
        return Math.round((second - first) / (1000 * 60 * 60));
    }
}

// export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const sleep = (milliseconds: number) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

export const dateIn = (date: string, dateFrom: string, dateTo: string | null) => {
    if (!dateTo) return date === dateFrom
    else return  date >= dateFrom && date <= dateTo
}
