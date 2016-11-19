module.exports=function(){
	var faker=require("faker");
	var _=require("lodash");
	return {
		questions:_.times(40000,function(n)
		{
			return {
				id:n,
				question:faker.lorem.sentence(),
				rightoption:faker.lorem.word(),
				wrongoption1:faker.lorem.word(),
				wrongoption2:faker.lorem.word(),
				wrongoption3:faker.lorem.word()

			}
		})
	}

}