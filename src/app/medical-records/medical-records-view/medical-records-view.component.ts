import {Component, inject, OnInit, signal} from '@angular/core';
import {TableModule} from "primeng/table";
import {Card} from "primeng/card";
import {DatePipe} from "@angular/common";
import {MedicalRecordModel} from "../medical-record.model";
import {firstValueFrom} from "rxjs";
import {MedicalRecordService} from "../medical-record.service";
import {DropdownModule} from "primeng/dropdown";
import {IftaLabel} from "primeng/iftalabel";
import {ReactiveFormsModule} from "@angular/forms";
import {PatientService} from "../../patients/patient.service";

@Component({
  selector: 'app-medical-records-view',
  imports: [
    TableModule,
    Card,
    DatePipe,
    DropdownModule,
    IftaLabel,
    ReactiveFormsModule
  ],
  templateUrl: './medical-records-view.component.html'
})
export class MedicalRecordsViewComponent implements OnInit {
  records: MedicalRecordModel[] = [];
  patientsArray = signal([]);

  private readonly medicalRecordService = inject(MedicalRecordService);
  private readonly patientsService = inject(PatientService);

  ngOnInit() {
    this.fetchRecords();
  }

  async fetchRecords() {
    if (this.getRole === 'Patient') {
      this.records = await firstValueFrom(this.medicalRecordService.getOwnRecords());
    } else if (this.getRole === 'Doctor') {
      this.patientsService.getAllPatients()
          .subscribe((patients: any[]) =>
              this.patientsArray.set(patients.map(p => {
                return {label: p.firstName + " " + p.lastName, value: p.id}
              })))
    }
  }

  async loadRecordsByPatientId(patientId) {
    try {
      this.records = await firstValueFrom(this.medicalRecordService.getRecordsByPatientId(patientId));
    } catch (error) {
      this.records = [];
      console.log(error);
    }
  }

  get getRole() {
    return localStorage.getItem('role');
  }
}
