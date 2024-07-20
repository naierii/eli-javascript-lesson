class Database{
  constructor(){
  }

  takeData(){
    const tableName = this.tableName;
    // logic - will take data from the back-end
    console.log('takeData', this.tableName)
  }
  uploadData(){
    const tableName = this.tableName;
    // logic
  }
  deleteTable(){
    const tableName = this.tableName;
    // logic
  }
}

class UserData extends Database{
  constructor(){
    super();
    this.tableName = 'Users';
  }
}

class ApplicationData extends Database{
  constructor(){
    super();
    this.tableName = 'Applications';
  }
}

const userData = new UserData();
const user1 = userData.takeData('Eli'); // {mobileNumber: '0909', firstName: 'Eli'}
const user2 = userData.takeData('Reian'); // {mobileNumber: '0909', firstName: 'Reian'}

const applicationData = new ApplicationData();
const applications1 = applicationData.takeData('Eli'); // [{type: 'autoLoan', etc,...}, {type: 'houseLoan', etc,...}]
const applications2 = applicationData.takeData('Reian'); // [{type: 'autoLoan', etc,...}, {type: 'houseLoan', etc,...}]