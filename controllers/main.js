exports.home = async (request, response, next) => {
    
    response.render("main/index", { title: 'Home' });
  };
  
  exports.lGwalior = async (request, response, next) => {
    console.log('Hi');
    response.render("fundraisers/school-development-light-gwalior", { title: 'About' });
  };