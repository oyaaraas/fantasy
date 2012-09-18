var countryCounter = 1;

CountryProvider = function(){};
CountryProvider.prototype.dummyData = [];

CountryProvider.prototype.findAll = function(callback) {
  callback( null, this.dummyData )
};

CountryProvider.prototype.findById = function(id, callback) {
  var result = null;
  for(var i =0;i<this.dummyData.length;i++) {
    if( this.dummyData[i]._id == id ) {
      result = this.dummyData[i];
      break;
    }
  }
  callback(null, result);
};

CountryProvider.prototype.updateById = function(id, newCountryName, callback) {
  var result = null;
  for(var i =0;i<this.dummyData.length;i++) {
    if( this.dummyData[i]._id == id ) {
      result = this.dummyData[i];
      break;
    }
  }
  result.country = newCountryName;
  result.updateStatus = "Updated!";
  callback(null, result);
};

CountryProvider.prototype.save = function(countries, callback) {
  var country = null;

  if( typeof(countries.length)=="undefined")
    countries = [countries];

  for( var i =0;i< countries.length;i++ ) {
    country = countries[i];
    country._id = countryCounter++;
    country.created_at = new Date();

    if( country.comments === undefined )
      country.comments = [];

    for(var j =0;j< country.comments.length; j++) {
      country.comments[j].created_at = new Date();
    }
    this.dummyData[this.dummyData.length]= country;
  }
  callback(null, countries);
};

/* Lets bootstrap with dummy data */
new CountryProvider().save([
  {country: 'Norway', updateStatus: '', text: 'This is a country with mountains and fjords', comments:[{author:'Bob', comment:'I love it'}, {author:'Dave', comment:'This is rubbish!'}]},
  {country: 'USA', updateStatus: '', text: 'This country consists of states and people', comments:[{author:'Bree', comment:'I get it'}, {author:'Doyle', comment:'That is true'}]},
  {country: 'Kenya', updateStatus: '', text: 'African country'},
  {country: 'Russia', updateStatus: '', text: 'Moscow is the current capital'},
  {country: 'Canada', updateStatus: '', text: 'Famous for the maple leaf'},
  {country: 'UK', updateStatus: '', text: 'Flag is called Union Jack', comments:[{author:'Bill', comment:'It is called General Union also'}, {author:'Dave', comment:'This is rubbish!'}]}
], function(error, countries){});

exports.CountryProvider = CountryProvider;