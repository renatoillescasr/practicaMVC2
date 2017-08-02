var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var TareaSchema = new Schema({
  numero_factura: {type:String, required:true},
  nombre_empresa: {type:String, required:true},
  fecha_entrega: {type:Date,required:true},
  cantidad_facturada: {type:Number, required:true},
  estado:{
  	type:String,
  	enum:['Pagado','Pendiente','Acumulado']
  }
});

module.exports = mongoose.model("Tarea",TareaSchema);
