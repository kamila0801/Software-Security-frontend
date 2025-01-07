import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


const BASE_URL = 'http://localhost:5008/api/patients';

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    private readonly http = inject(HttpClient);

    getAllPatients() {
        return this.http.get(BASE_URL + '/all', { withCredentials: true });
    }

}