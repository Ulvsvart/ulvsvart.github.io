// Aguinaldo CR: suma de salarios (dic anterior a nov) dividida entre 12.
function aguinaldo(salarios) {
  var total = 0, meses = 0;
  for (var i = 0; i < salarios.length; i++) {
    var n = Number(salarios[i]);
    if (isFinite(n) && n > 0) { total += n; meses++; }
  }
  return { total: total, meses: meses, aguinaldo: total / 12 };
}
if (typeof module !== 'undefined') module.exports = { aguinaldo: aguinaldo };
