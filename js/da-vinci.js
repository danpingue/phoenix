/**
 * @file
 * Da Vinci Custom Code of the javascript behaviour.
 */

(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      function querystring(key) {
        var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
        var r=[], m;
        while ((m=re.exec(document.location.search)) !== null) r.push(m[1]);
        return r;
      }
      function basename(str) {
        var base = new String(str).substring(str.lastIndexOf('/') + 1);
        if(base.lastIndexOf(".") != -1) {
          base = base.substring(0, base.lastIndexOf("."));
        }
        return base;
      }
      function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
        separator = uri.indexOf('?') !== -1 ? "&" : "?";
        var url = window.location.href;
        if (uri.match(re)) {
          url = uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
          url = uri + separator + key + "=" + value;
        }
        return url;
      }
      
    }
  };
})(jQuery);
