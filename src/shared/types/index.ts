export type Role =
  | 'CO'
  | 'LOGO'
  | 'WRITER'
  | 'DEPT_HOD'
  | 'DEPT_PERSONNEL'
  | 'GALLEY_STAFF'
  | 'SHIPS_COMPANY'
  | 'SYSTEM_ADMIN'

export interface User {
  id: string
  name: string
  role: Role
}
