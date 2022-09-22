const emailReg = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/
const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const emailValidate = (email:string) => emailReg.test(email)
export const phoneValidate = (phone:string) => phoneReg.test(phone)