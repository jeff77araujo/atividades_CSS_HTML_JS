'C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe' // caminho do arquivo MongoDB

db.createColletion({ 'Alunos'}) // criar tabela

db.Alunos.insert({ nome: 'Jeff', idade: 27, cidade: 'São Paulo', turma: 1 })
db.Alunos.insert({ nome: 'Bruna', idade: 34, cidade: 'Bahia', turma: 1 })
db.Alunos.insert({ nome: 'Julio', idade: 27, cidade: 'São Paulo', turma: 1 })
db.Alunos.insert({ nome: 'Aline', idade: 21, cidade: 'Rio de Janeiro', turma: 1 })

db.Alunos.find({}).pretty() // selecionar a tabela - pretty deixa mais bonito o resultado

db.Alunos.findOne({}) // seleciona um unico item da tabela

db.Alunos.delete({})  // Deletar a tabela

db.Alunos.deleteOne({}) // deleta um unico item da tabela

db.Alunos.updateOne({ nome: 'Jeff' }, { $set: { idade: 28 } })  // atualiza a tabela

db.Alunos.findOne({

})

db.Alunos.findOne({ // selecionar as propriedades de um array
    tags: [
        'prato feito'
    ]
})

db.Alunos.findOne({ // selecionar as propriedades de um array
    tags: [
        $all[
        'prato feito'
        'buffet livre'
        ]
    ]
})

db.Alunos.find({ tags: 'São Paulo' , 'Julio'}) // 
db.Alunos.find({ tags: { $in ['São Paulo' , 'Julio']}}) // 