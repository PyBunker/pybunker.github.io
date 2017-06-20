var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1Kqy-aL0Q-I8rbgdzxTftMIOgT5AYtapG-ohsGKHpj2M/' +
    'edit#gid=1750953081';

$('#host-table').sheetrock({
    url: mySpreadsheet,
    labels: ['Nome', 'E-mail', 'Telegram', 'Evento a Hospedar', 'Qtde. de Vagas', 'Observação'],
    query: "select B,C,D,E,F,G order by A desc",
    fetchSize: 10
});
