import { Role } from './role.enum';

export interface User {
  id?: string;
  dni?: string;
  email?: string;
  username?: string;
  phone?: string;
  password?: string;
  roles?: Role[];
  jwtToken?: string;
  isAccountNonExpired?: boolean;
  isAccountNonLocked?: boolean;
  isCredentialsNonExpired?: boolean;
  isEnabled?: boolean;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  country?: string;
  firstAccess?: any;
  lastAccess?: any;
}
