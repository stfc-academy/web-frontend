export type Person = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    country: string;
  };

  export const data = [
    {
      comboName: '', // Quick name of the combination
      captain: { 
        officerName: '', // Captain name
        officerRank: '' // ideal rank
      },
      firstOfficer: {
        officerName: '', // first officer name
        officerRank: '' // ideal rank
      },
      secondOfficer: {
        officerName: '', //second officer name
        officerRank: '' // ideal rank
      },
      purpose: '',
      hostileType: [], // General, Eclipse, Armada, Cardassian Armada, etc
      ship: [], // Interceptor, Explorer, Battleship
      tags: [], // any tags that might help this be more searchable
      credit: '' // who should get credit for this? 
    }
  ]
  
  // export const data = [
  //   {
  //     id: '1',
  //     firstName: 'Dylan',
  //     middleName: 'Sprouse',
  //     lastName: 'Murray',
  //     address: '261 Erdman Ford',
  //     city: 'East Daphne',
  //     state: 'Kentucky',
  //     country: 'United States',
  //   },
  //   {
  //     id: '2',
  //     firstName: 'Raquel',
  //     middleName: 'Hakeem',
  //     lastName: 'Kohler',
  //     address: '769 Dominic Grove',
  //     city: 'Vancouver',
  //     state: 'British Columbia',
  //     country: 'Canada',
  //   },
  //   {
  //     id: '3',
  //     firstName: 'Ervin',
  //     middleName: 'Kris',
  //     lastName: 'Reinger',
  //     address: '566 Brakus Inlet',
  //     city: 'South Linda',
  //     state: 'West Virginia',
  //     country: 'United States',
  //   },
  //   {
  //     id: '4',
  //     firstName: 'Brittany',
  //     middleName: 'Kathryn',
  //     lastName: 'McCullough',
  //     address: '722 Emie Stream',
  //     city: 'Lincoln',
  //     state: 'Nebraska',
  //     country: 'United States',
  //   },
  //   {
  //     id: '5',
  //     firstName: 'Branson',
  //     middleName: 'John',
  //     lastName: 'Frami',
  //     address: '32188 Larkin Turnpike',
  //     city: 'Charleston',
  //     state: 'South Carolina',
  //     country: 'United States',
  //   },
  //   {
  //     id: '6',

  //   }
  // ];