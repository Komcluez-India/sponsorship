const Razorpay = require('razorpay');

exports.index = async (request, response, next) => {

  response.render("main/index", { title: 'Home' });
};

exports.about = async (request, response, next) => {

  response.render("main/about", { title: 'About' });
};

exports.fundraiserStats = async (request, response, next) => {
  // const {fundraiser} = request.params;
  let instance = new Razorpay({
    key_id: 'rzp_test_v3F1EmF1SCqyOV',
    key_secret: 'gfyvE6vYoWPTt5D1LYclYgJ2',
    headers: { 'Content-Type': 'application/json' }
  });

  instance.paymentLink.fetch('pl_J6UczkuWg7Ueio').then((paymentLink) => {
    console.log('done')
    response.send({
      fundraiser: instance,
      paymentLink
    });
  }).catch((err) => console.log(err));

  instance.payments.all('pl_J6UczkuWg7Ueio').then((paymentLink) => {
    console.log('done')
    response.send({
      fundraiser: instance,
      paymentLink
    });
  }).catch((err) => console.log(err));

  // console.log(fundraiser);

}