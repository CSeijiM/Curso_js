const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: { //propriedade que indica que o server criado pelo webpack estara olhando para os aquivos contidos no contentBase.
        host:'0.0.0.0',
        port:'8080',
        disableHostCheck:true,
        contentBase: path.resolve(__dirname, 'puclic' ), //é o caminho que contem os arquivos publicos da aplicação
    },
    module: {
        rules: [
            {
                test: /\.js$/, //toda vez que precisar de um arquivo js, "\." representa o "." e $ representa que depois do simbolo nada mais pode aparecer.
                exclude: /node_modules/, // se não estiver na pasta node_modules
                use: {
                    loader: 'babel-loader', //Converte usando o babel
                }
            }
        ]
    },
};