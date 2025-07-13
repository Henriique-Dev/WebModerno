function jurosSimples(cInicial, taxa, tempoAplic) {
    const montante = cInicial + (cInicial * taxa * tempoAplic)
    console.log(montante)
}

jurosSimples(100, 0.15, 10)

function jurosComposto(cInicial, taxa, tempoAplic) {
    const montante2 = cInicial * Math.pow((1 + taxa), tempoAplic)
    console.log(montante2)
}

jurosComposto(100, 0.15, 10)