type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatData(data: string, dateStyle: DateStyle = 'medium', locales = 'en') {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle });


    return formatter.format(new Date(data));
}