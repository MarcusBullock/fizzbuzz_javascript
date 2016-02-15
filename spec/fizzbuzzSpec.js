describe ("fizzbuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
    });
  });

  describe('multiples of 5', function() {
    it('fizzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });
  });

  describe('mutliples of both 3 & 5', function() {
    it('fizzes for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz')
    });
  });

});
