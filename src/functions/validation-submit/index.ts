export default function ValidationSubmit(form: any[], data: any): boolean {
    let result = false;
    form.forEach((input) => {
        if (!input.hidden && !input.disabled) {
            if (!data[input.nama]) {
                result = false
            } else if (data[input.nama]) {
                result = true
            }
        }
    });
    return result;
}