import { Role } from './role.enum';
import { User } from './user.model';

export class UserClass implements User {
  id?: string;
  dni?: string;
  email?: string;
  username?: string;
  phone?: string;
  password?: string;
  role?: Role[];
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

  constructor() {
    this.email = '';
    this.username = '';
    this.phone = '';
    this.password = '';
    this.role = [Role.Manager];
    this.dni = '';
    this.isAccountNonExpired = true;
    this.isAccountNonLocked = true;
    this.isCredentialsNonExpired = true;
    this.isEnabled = true;
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.city = '';
    this.country = '';
  }
}
