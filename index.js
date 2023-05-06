const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// given subscription get 25% and coupon with $10 off
// we want first to create separate variable for sub and coup to get the sum
// then we can add the sum if customer have sub or coup

// function to get the sum

function sumTotal(pricePerRefill, refills, hasSubscription, hasCoupon) {
  let total = pricePerRefill * refills;

  if (hasSubscription) {
    total = total - total * 0.25;
  }

  if (hasCoupon) {
    total = total - 10;
  }

  return `Your grand total is ${total}.`;
}

console.log(
  sumTotal(
    timmy.pricePerRefill,
    timmy.refills,
    timmy.subscription,
    timmy.coupon
  )
);

console.log(
  sumTotal(
    sarah.pricePerRefill,
    sarah.refills,
    sarah.subscription,
    sarah.coupon
  )
);

console.log(
  sumTotal(
    rocky.pricePerRefill,
    rocky.refills,
    rocky.subscription,
    rocky.coupon
  )
);
