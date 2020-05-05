export class CommonUtility {
    static isLetter(c: string): boolean {
        return c.toLowerCase() !== c.toUpperCase();
    }

    static isEmpty(str: string | undefined): boolean {
        return !str || str.length === 0 || str === '';
    }

    static getDateYear(date: string): number {
        return new Date(date).getFullYear();
    }
}
