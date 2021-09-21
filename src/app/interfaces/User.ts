export interface User {
  _id? : number,
  login : string,
  password : string,
  role? : string;
}
export function compareUsers(U1 : User, U2 : User){
  return (U1.login === U2.login) && (U1.password === U2.password)
}
