// filas: [{paquete, tamano, usado}], porciones, objetivo (% de costo)
function costoPlato(filas, porciones, objetivo) {
  var total = 0;
  for (var i = 0; i < filas.length; i++) {
    var p = Number(filas[i].paquete), t = Number(filas[i].tamano), u = Number(filas[i].usado);
    if (p > 0 && t > 0 && u > 0) total += (p / t) * u;
  }
  var por = Number(porciones), obj = Number(objetivo);
  var porcion = por > 0 ? total / por : 0;
  var precio = obj > 0 && obj < 100 ? porcion / (obj / 100) : 0;
  return { total: total, porcion: porcion, precio: precio, margen: precio - porcion };
}
if (typeof module !== 'undefined') module.exports = { costoPlato: costoPlato };
