const fs = require('fs');
const faker = require('faker');
const ObjectsToCsv = require('objects-to-csv');

function generateRandomData(numRecords) {
    const data = [];
    for (let i = 0; i < numRecords; i++) {
        const record = {
            enrollDate: faker.date.past(),
            enrollChannel: faker.random.arrayElement(['Online', 'In-Person', 'Phone']),
            referralCode: faker.random.alphaNumeric(10),
            enrollSource: faker.random.arrayElement(['Website', 'Referral', 'Social Media']),
            enrollIncentive: faker.random.arrayElement(['Discount', 'Freebie', 'Cashback']),
            enrollLocation: faker.random.uuid(), // Assuming ObjectID is stored as UUID
            status: 'Active',
            program: faker.random.uuid(),
            type: faker.random.arrayElement(['Type1', 'Type2', 'Type3']),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            acquisitionDate: faker.date.past(),
            acquisitionChannel: faker.random.arrayElement(['Online', 'In-Person', 'Phone']),
            dob: faker.date.past(),
            gender: faker.random.arrayElement(['Male', 'Female']),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country(),
            email: faker.internet.email(),
            cellPhone: faker.phone.phoneNumber(),
            zipCode: faker.address.zipCode(),
            socialId: faker.random.alphaNumeric(10),
            canPreview: faker.random.boolean(),
            mergePendingFlag: faker.random.boolean(),
            unMergePendingFlag: faker.random.boolean(),
            synchronousMergeFlag: faker.random.boolean(),
            lastActivityDate: faker.date.past(),
            structureVersion: faker.random.number(),
            org: 'YourOrgName', // Set the organization name
            tiers: [], // Assuming it's an array of objects, you can generate similar fake data for these
            badges: [],
            purses: [],
            streaks: [],
            trans: {},
            rewards: [],
            events: [],
            activities: [],
            offers: [],
            segments: [],
            memberSegments: [],
            preferences: [],
            tierHistory: [],
            pendingIds: [],
            memberPreferences: []
        };
        data.push(record);
    }
    return data;
}

// Write data to CSV file
async function writeDataToCSV(data) {
    try {
        const csv = new ObjectsToCsv(data);
        await csv.toDisk('./generated_data.csv');
        console.log('CSV file generated successfully');
    } catch (error) {
        console.error('Error writing data to CSV:', error);
    }
}

// Generate random data and write to CSV
const numRecords = 100; // Number of records to generate
const randomData = generateRandomData(numRecords);
writeDataToCSV(randomData);
