import {Component, inject, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {Card} from "primeng/card";
import {DatePipe} from "@angular/common";
import {MedicalRecordModel} from "../medical-record.model";
import {firstValueFrom} from "rxjs";
import {MedicalRecordService} from "../medical-record.service";

@Component({
  selector: 'app-medical-records-view',
  imports: [
    TableModule,
    Card,
    DatePipe
  ],
  templateUrl: './medical-records-view.component.html'
})
export class MedicalRecordsViewComponent implements OnInit {
  records: MedicalRecordModel[] = [];

  private readonly medicalRecordService = inject(MedicalRecordService);

  ngOnInit() {
    this.fetchRecords();
  }

  async fetchRecords() {
    // Mock Data
    this.records = [
      {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
        userId: 'user-123',
        recordData: 'Blood test results: Normal',
        createdAt: new Date('2023-01-01T10:00:00'),
        updatedAt: new Date('2023-01-05T15:00:00'),
      },
      {
        id: '7g8h9i0j-k1l2m3n4o5p6-1a2b3c4d-5e6f',
        userId: 'user-456',
        recordData: 'X-Ray results: Minor fracture detected',
        createdAt: new Date('2023-02-01T11:00:00'),
        updatedAt: null,
      },
      {
        id: '5e6f7g8h-9i0j-k1l2m3n4o5p6-1a2b3c4d',
        userId: 'user-789',
        recordData: 'MRI results: All clear',
        createdAt: new Date('2023-03-01T12:00:00'),
        updatedAt: new Date('2023-03-03T16:30:00'),
      },
    ];

    // TODO: use when backend ready
    // this.records = await firstValueFrom(this.medicalRecordService.getOwnRecords());
  }
}
