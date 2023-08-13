const user = {
    email: 'cc@gmail.com',
    isActive: true
  };

  user.isActive = false;
  console.log(user); // * object
  user = {};
  console.log(user); // ** error 
 
