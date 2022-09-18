const reg = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/

export const emailValidate = (email:string) => reg.test(email)