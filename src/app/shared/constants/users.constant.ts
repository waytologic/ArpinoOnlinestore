import { IUser } from '../models';

export const USERS: IUser[] = [
  {
    id: 1,
    firstName: 'Bhuvan',
    lastName: 'Selvan',
    age: 41,
    gender: 'male',
    email: 'bhuvanselvan.d@gmail.com',
    phone: '+91 7904828505',
    username: 'bhuvan',
    password: 'bhuvan@123',
    birthDate: '1981-11-08',
    image: 'https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png',
    bloodGroup: '0-',
    height: 189,
    weight: 65.4,
    eyeColor: 'Green',
    hair: {
      color: 'Black',
      type: 'Strands',
    },
    domain: 'arpino.org',
    ip: '117.29.86.254',
    addresses: [
      {
        address: '11, Ayothi Nagar, Ulaganeri',
        city: 'Madurai',
        coordinates: {
          lat: 38.867033,
          lng: -76.979235,
        },
        postalCode: '625107',
        state: 'TN',
      },
    ],
    macAddress: '13:69:BA:56:A3:74',
    university: 'Capitol University',
    bank: {
      cardExpire: '06/22',
      cardNumber: '50380955204220685',
      cardType: 'maestro',
      currency: 'Peso',
      iban: 'NO17 0695 2754 967',
    },
    company: {
      address: {
        address: '629 Debbie Drive',
        city: 'Nashville',
        coordinates: {
          lat: 36.208114,
          lng: -86.58621199999999,
        },
        postalCode: '37076',
        state: 'TN',
      },
      department: 'Marketing',
      name: "Blanda-O'Keefe",
      title: 'Help Desk Operator',
    },
    ein: '20-9487066',
    ssn: '661-64-2976',
    userAgent:
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
    role: 'admin',
  },
  {
    id: 2,
    firstName: 'demo',
    lastName: 'demo',
    age: 38,
    gender: 'male',
    email: 'demo@arpino.in',
    phone: '+63 739 292 7942',
    username: 'demo',
    password: 'demo@123',
    birthDate: '2002-12-30',
    image: 'https://robohash.org/consequunturautconsequatur.png',
    bloodGroup: 'A-',
    height: 200,
    weight: 105.3,
    eyeColor: 'Gray',
    hair: {
      color: 'Blond',
      type: 'Very curly',
    },
    domain: 'earthlink.net',
    ip: '205.226.160.3',
    addresses: [
      {
        address: '560 Penstock Drive',
        city: 'Grass Valley',
        coordinates: {
          lat: 39.213076,
          lng: -121.077583,
        },
        postalCode: '95945',
        state: 'CA',
      },
    ],
    macAddress: 'F2:88:58:64:F7:76',
    university: 'University of Cagayan Valley',
    bank: {
      cardExpire: '10/23',
      cardNumber: '3586082982526703',
      cardType: 'jcb',
      currency: 'Peso',
      iban: 'AT24 1095 9625 1434 9703',
    },
    company: {
      address: {
        address: '18 Densmore Drive',
        city: 'Essex',
        coordinates: {
          lat: 44.492953,
          lng: -73.101883,
        },
        postalCode: '05452',
        state: 'VT',
      },
      department: 'Marketing',
      name: 'Lindgren LLC',
      title: 'Mechanical Systems Engineer',
    },
    ein: '48-3951994',
    ssn: '633-89-1926',
    userAgent:
      'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
  },
  ...(!!localStorage.getItem('users')
    ? (JSON.parse(localStorage.getItem('users')!) as IUser[])
    : []),
];
