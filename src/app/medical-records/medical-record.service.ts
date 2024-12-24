import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedicalRecordModel} from "./medical-record.model";


const BASE_URL = 'http://localhost:5008/api/medicalRecord/';

@Injectable({
    providedIn: 'root'
})
export class MedicalRecordService {

    private readonly http = inject(HttpClient);

    getRecordsByPatientId(patientId: number) {
        return this.http.get<MedicalRecordModel[]>(BASE_URL + 'patient/' + patientId, { withCredentials: true });
    }

    getOwnRecords() {
        return this.http.get<MedicalRecordModel[]>(BASE_URL + 'my-records', { withCredentials: true });
    }

}