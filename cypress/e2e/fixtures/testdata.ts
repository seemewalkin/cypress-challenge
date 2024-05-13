interface UserContactInformation {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    location: string;
    companyName: string;
    subjects: string[]; 
    experience: string; 
}

const userContactInformation: { [key: string]: UserContactInformation } = {
    'user1': {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '36713371666',
        location: 'Berlin',
        companyName: 'Biowank',
        subjects: ['Elektronik', 'Anlagenmechanik SHK'],
        experience: '3-5'
    },
    'user2': {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        phone: '',
        location: 'Hamburg',
        companyName: 'Techcorp',
        subjects: ['Kältetechnik'],
        experience: '6-10'
    },
    'user3': {
        firstName: 'Roy',
        lastName: 'Orbison',
        email: '',
        phone: '36413371666',
        location: '10245',
        companyName: 'Something',
        subjects: ['Andere'],
        experience: 'mehr als 16'
    }
};

const urls = {
    salaryOverview: '/fuer-arbeitgeber',
    salaryCheck: '/mitarbeitersuche',
    appointmentBooking: '/arbeitgeber-anmeldung-erfolgreich'
};

export { userContactInformation, urls }; 