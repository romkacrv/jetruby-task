(function ($) {

  var jt = {
    glob: {
      num: 16
    },
    elements: {}
  };

  jt.init = function () {
    var _self = this;

    _self.glob.checked = 0;

    _self.elements.page = $('.page');
    _self.elements.body = $('body');

    jt.draw();

    _self.elements.tile.on('click', jt.onClickTile);
    _self.elements.body.on('click', jt.onClickBody);
  };

  jt.draw = function () {
    var _html = '';

    jt.elements.tiles = $('<div class="tiles"></div>');

    jt.elements.page.empty();
    jt.elements.page.prepend(jt.elements.tiles);

    for (var i = 0; i < jt.glob.num; i++) {
      _html += '<div class="tile"></div>';
    }

    jt.elements.tiles.prepend(_html);
    jt.elements.tiles.children('.tile:nth-child(3n)').addClass('active');
    jt.elements.tile = $('.tile');
  };

  jt.onClickTile = function () {
    var $this = $(this);

    if ($this.hasClass('active') && !$this.hasClass('checked')) {
      $this.addClass('checked').removeClass('closed');
      jt.glob.checked = jt.glob.checked + 1;
    }
    else {
      jt.elements.tile.removeClass('checked');
    }
  };

  jt.onClickBody = function (e) {
    var $target = $(e.target);

    if (!$target.is(jt.elements.tile)) {
      jt.init();
    }
  };

  $(document).ready(function () {
    jt.init();
  });

})(jQuery);
