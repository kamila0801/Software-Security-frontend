export interface MedicalRecordModel {
    id: string;
    userId: string;
    recordData: string;
    createdAt: Date;
    updatedAt?: Date | null;
}