var form_url = "https://docs.google.com/forms/d/e/1FAIpQLSftMKyyKJ0-p0n1gsHvt5L6Iw3JHvkHtIPBJm4_ispiosZmFg/" +
    "viewform?embedded=true";

var iframe = '<iframe src="'+ form_url + '" width="100%" height="1500" frameborder="0" ' +
    'marginheight="0" marginwidth="0">Carregando…</iframe>';

$(iframe).appendTo("#host-form");
