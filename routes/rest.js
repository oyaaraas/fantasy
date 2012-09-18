
/*
 * GET rest.
 */

var CountryProvider = require('../countryprovider').CountryProvider;
var countryProvider= new CountryProvider();

exports.all = function(req, res){
    countryProvider.findAll(function(err, data){
        res.header('Content-Range', 0 + '-' + data.length + '/' + data.length);
        res.send(data);
    })
};

exports.inRange = function(req, res){
    countryProvider.findContentInRange(function(err, data){
        // TODO: return data in range
    })
};

exports.update = function(req, res){
    countryProvider.updateById(req.params.id, req.body.country, function(err, data){
        res.send(data);
    });
};