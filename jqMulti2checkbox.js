$.fn.multi2checkbox = function (params) {
  params = $.extend({
    'htmlCheckbox': '<div>{$options}</div>',
    'htmlOption': '<label><input type="checkbox" name="{$name}" value="{$value}" {$checked} /> {$text}</label>',
    'htmlOptionGlue': '<br />',
    'selOption' : 'input[type=checkbox]'
  }, params || {});
  return $(this).each(function (i, sel) {
    $sel = $(sel).hide();
    var innerHTML = [];
    params['parentForm'] = params['parentForm'] || $sel.closest('form');
    $('option', $sel).each(function (i, opt) {
      innerHTML.push(
        keyReplace(params['htmlOption'], {
          'name': (sel.name ? sel.name : ''),
          'value': opt.value,
          'text': opt.text,
          'checked': (opt.selected ? 'checked="checked"' : '')
        }, true)
      );
    });
    $sel.replaceWith(
      keyReplace(
        params['htmlCheckbox'], {
          'options': innerHTML.join(params['htmlOptionGlue'])
        }, true
      )
    );
  });
}