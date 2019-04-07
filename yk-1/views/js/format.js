function format(search){
    search = search.substr(1);
    search = `{"${search.replace(/=/g,'":"').replace(/&/g,'","')}"}`
    return JSON.parse(search);
}

