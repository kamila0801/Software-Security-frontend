export interface CreateUserDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
}

export enum Role {
    Patient = 'Patient',
    Doctor = 'Doctor',
    Nurse = 'Nurse',
    EmergencyResponder = 'EmergencyResponder'
}