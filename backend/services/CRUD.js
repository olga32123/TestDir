

function applyFilters(filters, query) {
    if (filters) {
        return query.where(filters);
    }
    return query;
}


module.exports = function (modelName, foreignKey) {
    return {
        findAll: function (req, res, next) {
            res.ormQuery = applyFilters(
                req.filters,
                req.db[modelName].find());
            next();
        },
        getPage: function(req, res, next) {
            var page = req.param('page');
            var limit = req.param('limit') || 10;

            res.ormQuery = applyFilters(
                req.filters,
                req.db[modelName].find({ skip: page * limit, limit: limit }));
            next();
        },
        count: function(req, res, next) {
            res.count = applyFilters(
                req.filters,
                req.db[modelName].count());
            next();
        },
        findOne: function (req, res, next) {
            res.ormQuery = applyFilters(
                req.filters,
                req.db[modelName].findOne(req.param('id')));
            next();
        },
        add: function (req, res, next) {
            console.log(req.body);

            res.ormQuery = req.db[modelName].create(req.body);
            next();
        },
        updateOne: function (req, res, next) {        	
            res.ormQuery = applyFilters(
                req.filters,
                req.db[modelName].update(req.param('id'), req.body));
            next();
        },
        removeOne: function (req, res, next) {
            res.ormQuery = applyFilters(
                req.filters,
                req.db[modelName].destroy(req.param('id')));
            
            next();
        }
    };
};


//TODO: make more complex query
module.exports.foreignKey = function(foreignKey){
	return function (req, res, next) {
        if (foreignKey){
	    	req.filters = req.filters || {};
	    	var value = req.params[foreignKey];

	    	req.filters[foreignKey] = value;
            if (req.body){
                req.body[foreignKey] = value;    
            }
    	}
        //console.log(req.body, req.params, foreignKey)
    	next();
	}
};

module.exports.query = function(names) {
    return function(req, res, next) {
        req.filters = req.filters || {};

        names.forEach(function(name){
            if (req.query[name]) { //TODO: fix 0
                req.filters[name] = req.query[name];    
            }            
        })

        next();
    }
}


module.exports.exec = function (req, res, next) {
	var cb = function(err, result) {
    	if (err) {
            return next(err);
        }
        
        res.result = result;
        next();
    }
    res.ormQuery.exec(cb);
};

//TODO: create generec way for requests
module.exports.execPage = function(req, res, next) {
    var cb = function(results, err){
        if (err) {
            return next(err);
        }
        res.result = {
            items: results[0],
            count: results[1]
        } 

        next();
    }
    Promise.all([res.ormQuery, res.count]).then(cb);
}



module.exports.returnJSON = function (req, res, next) {
    if (res.result == null) {
        return next('Result is not provided');
    }
    res.json(res.result);
};

