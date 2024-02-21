const findTheNumber=require('./findTheNumber');

it('should return 2 if the array is [4,5,0,6,1,7,3]',()=>{
    expect(findTheNumber([4,5,0,6,1,7,3])).toBe(2);
});