import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateUserDTO} from "./models/create-user.dto";
import {TokenDTO} from "./models/token.dto";


const BASE_URL = 'http://localhost:5008/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);

  login(username: string, password: string) {
    return this.http.post<TokenDTO>(BASE_URL + 'login', { email: username, password }, { withCredentials: true});
  }

  register(createUserDto: CreateUserDTO) {
    return this.http.post(BASE_URL + 'register', createUserDto);
  }

}
