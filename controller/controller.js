var mongoose = require('mongoose');
var Tarea = mongoose.model('Tarea');

exports.findAllTarea = function(){
	Tarea.find(function(err,tarea){
		if(err) 
			res.send(500,err.message);
		console.log('GET /Tarea')
		res.status(200).jsonp(tarea);
	});
};

exports.findById =function(req,res){
	Tarea.findById(req,params.id, function(err,tarea){
		if(err) 
			return res.send(500, err.message);

		console.log('GET /tarea/' + req.params.id);
			res.status(200).json(tarea);
	});
};

exports.addTarea = function(req,res){
	console.log('POST');
	console.log(req.body);

	var tarea = new Tarea({
		numero_factura: 	req.body.numero_factura;
		nombre_empresa: 	req.body.nombre_empresa;
		fecha_entrega: 		req.body.fecha_entrega;
		cantidad_facturada: req.body.cantidad_facturada;
		estado: 			req.body.estado;
	});

	tarea.save(function(err,tarea){
		if(err) 
			return res.status(500).send(err.message);
		res.status(200).json(tarea);
	});
};

exports.updateTarea = function(req,res){
	Tarea.findById(req.params.id, function(err,tarea){
		tarea.numero_factura = req.body.numero_factura;
		tarea.nombre_empresa = req.body.nombre_empresa;
		tarea.fecha_entrega  = req.body.fecha_entrega;
		tarea.cantidad_facturada = req.body.cantidad_facturada;
		
		tare.save(function(err){
			if(err)
				return res.status(500).send(err.message);
			res.status(200).json(tarea);
		});
	});
};

exports.deleteTarea = function(req,res){
	Tarea.findById(req.params.id, function(err,tarea){
		tarea.remove(function(err){
			if(err)
				return res.status(500).send(err.message);
			res.status(200).send();
		});
	});
};