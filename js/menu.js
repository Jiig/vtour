if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

var Menu = function(opts) {
    this.name = opts.name ? opts.name : 'main';
    this.text = opts.text ? opts.text : 'Menu';
    this.icon = opts.icon;
    this.items = opts.items;
    this.target = '';
};

var MenuItem = function(opts) {
    this.text = opts.text;
    this.icon = opts.icon ? opts.icon : '';
    this.target = '';
    this.rel = opts.rel ? opts.rel: '';
    this.items = opts.items ? opts.items : [];
};

function dispMenu(items) {
    var i;
    var inner = "";
    for (i in items) {
        var mi = items[i];
        inner += "<li><a href='"+mi.target+"'><i class='"+mi.icon+"'></i>&nbsp; "+mi.text+"</a>"
        if (mi.items.length > 0) {
            inner += "<ul>" + dispMenu(mi.items) + "</ul>";
        }
        inner += "</li>";
    }
    return inner;
}

function dispMainMenu() {
    var inner = "";
    inner += "<li><a href='"+menu.target+"'><i class='"+menu.icon+"'></i>&nbsp; "+menu.text+"</a>"
    inner += "<ul>" + dispMenu(menu.items) + "</ul>";
    inner += "</li>";
    $("#drilldown-1").html(inner);
}

