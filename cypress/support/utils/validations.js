export const validateResponseTime = (response, maxTime = 500) => {
  expect(response.duration).to.be.lessThan(maxTime);
};
